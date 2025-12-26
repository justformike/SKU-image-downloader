# 快速部署指南 / Quick Deployment Guide

## 🚀 方法一：使用命令行部署（推荐）

### 1. 准备工作

确保你已经安装：
- Node.js (v16+)
- Git

### 2. 克隆项目

\`\`\`bash
git clone https://github.com/你的用户名/sku-image-downloader.git
cd sku-image-downloader
\`\`\`

### 3. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 4. 登录 Cloudflare

\`\`\`bash
npx wrangler login
\`\`\`

浏览器会打开授权页面，点击"允许"。

### 5. 部署

\`\`\`bash
npm run deploy
\`\`\`

✅ 完成！你会得到一个 URL：`https://sku-image-downloader.你的账号.workers.dev`

---

## 🤖 方法二：使用 GitHub Actions 自动部署

### 1. Fork 本项目到你的 GitHub 账号

### 2. 获取 Cloudflare API Token

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击右上角头像 > **My Profile**
3. 左侧菜单选择 **API Tokens**
4. 点击 **Create Token**
5. 选择 **Edit Cloudflare Workers** 模板
6. 设置权限：
   - Account > Cloudflare Workers > Edit
7. 点击 **Continue to summary** > **Create Token**
8. 复制生成的 Token（只显示一次！）

### 3. 获取 Account ID

1. 在 Cloudflare Dashboard 首页
2. 选择任意域名或 Workers
3. 在右侧可以看到 **Account ID**
4. 复制这个 ID

### 4. 配置 GitHub Secrets

1. 在你的 GitHub 仓库页面
2. 点击 **Settings** > **Secrets and variables** > **Actions**
3. 点击 **New repository secret**
4. 添加两个 secrets：

   - Name: \`CLOUDFLARE_API_TOKEN\`
     Value: [粘贴你的 API Token]
   
   - Name: \`CLOUDFLARE_ACCOUNT_ID\`
     Value: [粘贴你的 Account ID]

### 5. 触发部署

推送代码到 main 分支：

\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

或在 GitHub 网页上进入 **Actions** 标签页，手动触发 workflow。

✅ GitHub Actions 会自动部署到 Cloudflare Workers！

---

## 🌐 方法三：绑定自定义域名

### 通过 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 选择 **sku-image-downloader**
4. 点击 **Settings** > **Triggers**
5. 在 **Custom Domains** 区域点击 **Add Custom Domain**
6. 输入域名（如：`downloader.yourdomain.com`）
7. 点击 **Add Custom Domain**

Cloudflare 会自动创建 DNS 记录。

### 通过配置文件

编辑 \`wrangler.toml\`：

\`\`\`toml
routes = [
  { pattern = "downloader.yourdomain.com/*", zone_name = "yourdomain.com" }
]
\`\`\`

重新部署：

\`\`\`bash
npm run deploy
\`\`\`

---

## 🧪 本地测试

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:8787

---

## 🔧 常见问题

### Q: 部署后访问出现 404？
A: 确保你的 worker 名称在 wrangler.toml 中正确配置。

### Q: 如何更新已部署的应用？
A: 修改代码后，再次运行 \`npm run deploy\` 即可。

### Q: GitHub Actions 部署失败？
A: 检查：
1. Secrets 是否正确配置
2. API Token 权限是否正确
3. 查看 Actions 标签页的错误日志

### Q: 自定义域名无法访问？
A: 
1. 确保域名在 Cloudflare 托管
2. 等待 DNS 传播（可能需要几分钟）
3. 检查 SSL/TLS 设置为"Full"模式

---

## 📚 更多资源

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions 文档](https://docs.github.com/actions)

---

需要帮助？请在 GitHub 提交 Issue！
