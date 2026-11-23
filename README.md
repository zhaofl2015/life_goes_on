# 东西放哪 / Whereabout：隐私条款与使用说明

两个静态页面，各自内置中英文：

- `privacy.html`：隐私条款，正文来自应用现有的中英文隐私协议。
- `terms.html`：应用现有的中英文使用说明与条款。

右上角点击「中文 / English」切换。语言优先级为 URL 的 `?lang=zh` / `?lang=en`、上次选择、浏览器语言。在页面间跳转时保留语言。浏览器禁止本地存储时，URL 切换仍然可用。禁用 JavaScript 时展示两种语言全文。

网页仅在浏览器本地保存语言偏好，不加入统计、广告或第三方脚本。字体和样式都是随附文件；不需要构建或安装依赖。

## 发布到 GitHub Pages

把本目录的全部文件上传到 GitHub Pages 所发布的目录，保留 `assets`、`_shared` 和 `.nojekyll`。仅上传 HTML 会导致字体、样式与切换脚本缺失。

若使用一个单独的网站仓库，可将这些文件直接放在仓库根目录，然后在 GitHub 的 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，选择目标分支及 **/(root)**，保存。

假设站点是 `https://用户名.github.io/仓库名/`：

- 中文隐私条款：`https://用户名.github.io/仓库名/privacy.html?lang=zh`
- 英文隐私条款：`https://用户名.github.io/仓库名/privacy.html?lang=en`
- 中文使用说明：`https://用户名.github.io/仓库名/terms.html?lang=zh`
- 英文使用说明：`https://用户名.github.io/仓库名/terms.html?lang=en`

若保留当前 `fangnale/site` 目录结构并从整个仓库根目录发布，页面地址相应为 `…/fangnale/site/privacy.html` 和 `…/fangnale/site/terms.html`。资源与页面跳转使用相对路径，支持这两种方式。

本目录只有两个页面，访问站点时使用上述具体页面地址；未设置单独首页。

## 后续维护

网页条款整理自 `App/FangNale/PrivacyStatement.swift`，保留原条款更新日期；网页整理日期为 2026 年 11 月 22 日。应用内条款变更后，需要同步更新两个 HTML 文件中的中英文正文。联系邮箱为应用中的 `whereabout.feedback@gmail.com`。
