# ✅ Cloudflare Workers 部署检查清单

## 📦 文件准备

- [x] `src/index.js` - Worker 入口文件
- [x] `wrangler.toml` - Wrangler 配置
- [x] `package.json` - npm 配置
- [x] `.gitignore` - Git 忽略配置
- [x] `.github/workflows/deploy.yml` - GitHub Actions 配置
- [x] `index.html` - 独立 HTML 文件
- [x] `README.md` - 项目说明
- [x] `DEPLOYMENT.md` - 部署指南
- [x] `PROJECT-STRUCTURE.md` - 文件结构说明

## 🎯 部署前检查

### 本地环境
- [ ] 已安装 Node.js (v16+)
- [ ] 已安装 Git
- [ ] 已安装 npm

### Cloudflare 账号
- [ ] 已注册 Cloudflare 账号
- [ ] 已获取 API Token（如使用 GitHub Actions）
- [ ] 已获取 Account ID（如使用 GitHub Actions）

### GitHub 仓库（可选）
- [ ] 已创建 GitHub 仓库
- [ ] 已配置 CLOUDFLARE_API_TOKEN Secret
- [ ] 已配置 CLOUDFLARE_ACCOUNT_ID Secret

## 🚀 部署步骤

### 方法 1：命令行部署

1. [ ] 克隆/下载项目到本地
   \`\`\`bash
   git clone https://github.com/你的用户名/sku-image-downloader.git
   cd sku-image-downloader
   \`\`\`

2. [ ] 安装依赖
   \`\`\`bash
   npm install
   \`\`\`

3. [ ] 登录 Cloudflare
   \`\`\`bash
   npx wrangler login
   \`\`\`

4. [ ] 部署到 Workers
   \`\`\`bash
   npm run deploy
   \`\`\`

5. [ ] 访问生成的 URL 测试
   - URL 格式: `https://sku-image-downloader.你的账号.workers.dev`

### 方法 2：GitHub Actions 自动部署

1. [ ] Fork 或上传项目到 GitHub

2. [ ] 获取 Cloudflare API Token
   - 访问: https://dash.cloudflare.com/profile/api-tokens
   - 创建 Token，权限：Account > Workers > Edit

3. [ ] 获取 Account ID
   - 在 Cloudflare Dashboard 任意页面右侧查看

4. [ ] 配置 GitHub Secrets
   - 进入仓库 Settings > Secrets > Actions
   - 添加 `CLOUDFLARE_API_TOKEN`
   - 添加 `CLOUDFLARE_ACCOUNT_ID`

5. [ ] 推送代码触发部署
   \`\`\`bash
   git add .
   git commit -m "Deploy"
   git push origin main
   \`\`\`

6. [ ] 查看 Actions 标签页确认部署状态

## 🌐 自定义域名配置（可选）

### 通过 Dashboard

1. [ ] 登录 Cloudflare Dashboard
2. [ ] 进入 Workers & Pages
3. [ ] 选择你的 Worker
4. [ ] Settings > Triggers > Custom Domains
5. [ ] 添加你的域名

### 通过配置文件

1. [ ] 编辑 `wrangler.toml`
   \`\`\`toml
   routes = [
     { pattern = "your-domain.com/*", zone_name = "your-domain.com" }
   ]
   \`\`\`

2. [ ] 重新部署
   \`\`\`bash
   npm run deploy
   \`\`\`

## 🧪 测试

- [ ] 访问部署的 URL
- [ ] 测试文件上传功能
- [ ] 测试文本粘贴功能
- [ ] 测试语言切换功能
- [ ] 测试下载功能（需要 Chrome/Edge）
- [ ] 验证多列 URL 识别
- [ ] 检查进度显示
- [ ] 测试暂停/继续功能
- [ ] 测试错误处理

## 📱 浏览器兼容性测试

- [ ] Chrome 浏览器测试
- [ ] Edge 浏览器测试
- [ ] 移动端响应式测试

## 🔍 问题排查

### 部署失败
- [ ] 检查 API Token 权限
- [ ] 检查 Account ID 是否正确
- [ ] 查看错误日志

### 访问 404
- [ ] 检查 Worker 名称配置
- [ ] 确认部署成功
- [ ] 等待几分钟后重试

### 功能异常
- [ ] 确认使用 Chrome/Edge 浏览器
- [ ] 检查浏览器控制台错误
- [ ] 清除缓存重试

## ✨ 部署成功后

- [ ] 分享 URL 给团队
- [ ] 添加到书签
- [ ] 准备用户文档
- [ ] 收集用户反馈

## 📚 有用的链接

- Cloudflare Dashboard: https://dash.cloudflare.com/
- Wrangler 文档: https://developers.cloudflare.com/workers/wrangler/
- Workers 文档: https://developers.cloudflare.com/workers/
- GitHub Actions: https://github.com/features/actions

---

## 💡 提示

1. 首次部署推荐使用命令行方式，更直观
2. GitHub Actions 适合持续部署场景
3. 保管好 API Token，不要泄露
4. 定期更新依赖包保持安全
5. 遇到问题查看官方文档或提交 Issue

---

祝部署顺利！🎉
