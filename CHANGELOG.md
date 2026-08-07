# 更新日志

这里记录本工具的重要代码和部署变更，方便后续维护、排查和回滚。

## 2026-08-07

### 修复

- 修复外站图片服务器不允许浏览器跨域读取时，下载任务全部报 `Failed to fetch` 的问题。
- 新增同源 Cloudflare Worker 代理接口 `/proxy?url=...`，让浏览器通过 Worker 下载图片，不再直接 `fetch` 第三方图片 URL。
- 同步更新静态副本 `index.html` 的下载路径，避免保留旧的直接跨域下载逻辑。

### 新增

- 新增 Worker 代理行为的 Node 测试。
- 新增 `npm test` 测试脚本。

### 验证

- `npm.cmd test` 已通过。
- 已部署 Worker 版本：`f8ac738a-652f-4ccc-8b8a-861c5b603db2`。
- 已用 VEVOR 图片 URL 验证线上代理返回 `200 OK`、`Content-Type: image/jpeg` 和 `Access-Control-Allow-Origin: *`。
