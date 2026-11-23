(() => {
  "use strict";
  const key = "whereabout.website.language";
  const getLanguage = () => {
    const explicit = new URLSearchParams(location.search).get("lang");
    if (explicit === "zh" || explicit === "en") return explicit;
    try {
      const saved = localStorage.getItem(key);
      if (saved === "zh" || saved === "en") return saved;
    } catch (_) { /* Storage may be unavailable in private browsers. */ }
    return (navigator.language || "zh").toLowerCase().startsWith("zh") ? "zh" : "en";
  };
  const lang = getLanguage();
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.querySelectorAll("[data-language]").forEach(element => {
    element.hidden = element.dataset.language !== lang;
  });
  document.querySelectorAll("[data-switch-language]").forEach(link => {
    const target = new URL(location.href);
    target.searchParams.set("lang", link.dataset.switchLanguage);
    // Section anchors have matching ids in both languages.
    if (target.hash) {
      target.hash = target.hash.replace(/^#(zh|en)-/, `#${link.dataset.switchLanguage}-`);
    }
    link.href = target.href;
    link.setAttribute("aria-current", String(link.dataset.switchLanguage === lang));
  });
  document.querySelectorAll("[data-page-link]").forEach(link => {
    const target = new URL(link.getAttribute("href"), location.href);
    target.searchParams.set("lang", lang);
    link.href = target.href;
  });
  const content = document.querySelector(`[data-document][data-language="${lang}"]`);
  if (content) {
    document.title = content.dataset.title;
    document.querySelector('meta[name="description"]').content = content.dataset.description;
  }
  try { localStorage.setItem(key, lang); } catch (_) {}
  // Anchor scrolling happens before hidden content becomes visible on some browsers.
  if (location.hash) {
    const anchor = document.getElementById(location.hash.slice(1));
    if (anchor && !anchor.closest("[hidden]")) anchor.scrollIntoView();
  }
})();
