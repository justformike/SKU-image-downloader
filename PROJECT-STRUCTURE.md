# 项目文件结构说明

## 📁 完整文件列表

\`\`\`
sku-image-downloader/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions 自动部署配置
├── src/
│   └── index.js                 # Cloudflare Worker 入口文件（包含完整HTML）
├── .gitignore                   # Git 忽略文件配置
├── index.html                   # 独立 HTML 文件（可直接使用）
├── package.json                 # npm 依赖配置
├── wrangler.toml               # Cloudflare Wrangler 配置
├── README.md                    # 项目说明文档（中英西三语）
└── DEPLOYMENT.md               # 详细部署指南
\`\`\`

## 📄 文件说明

### 核心文件

#### \`src/index.js\`
- Cloudflare Worker 的 JavaScript 入口文件
- 包含完整的 HTML 内容
- 处理 HTTP 请求并返回页面

#### \`index.html\`
- 独立的 HTML 文件
- 可以直接在本地浏览器打开使用
- 也可以部署到任何静态网站托管服务

#### \`wrangler.toml\`
- Wrangler CLI 的配置文件
- 定义 Worker 名称、路由等信息
- 可配置自定义域名

#### \`package.json\`
- 项目依赖和脚本配置
- 定义了 \`dev\` 和 \`deploy\` 命令

### 配置文件

#### \`.gitignore\`
- 定义 Git 应该忽略的文件
- 包含 node_modules、构建产物等

#### \`.github/workflows/deploy.yml\`
- GitHub Actions 工作流配置
- 实现自动部署到 Cloudflare Workers
- 每次推送到 main 分支时触发

### 文档文件

#### \`README.md\`
- 项目主要说明文档
- 包含中文、英文、西班牙语三种语言
- 包含功能介绍、部署步骤、使用说明

#### \`DEPLOYMENT.md\`
- 详细的部署指南
- 三种部署方式的完整步骤
- 常见问题解答

## 🚀 使用方式

### 方式 1：命令行部署到 Cloudflare Workers

\`\`\`bash
# 1. 克隆或创建项目
git init
git add .
git commit -m "Initial commit"

# 2. 安装依赖
npm install

# 3. 登录 Cloudflare
npx wrangler login

# 4. 部署
npm run deploy
\`\`\`

### 方式 2：GitHub + Cloudflare Workers 自动部署

1. 将项目推送到 GitHub
2. 配置 GitHub Secrets（CLOUDFLARE_API_TOKEN 和 CLOUDFLARE_ACCOUNT_ID）
3. 推送到 main 分支，自动触发部署

### 方式 3：直接使用 HTML 文件

直接在浏览器中打开 \`index.html\` 即可使用，无需部署。

## 🔑 所需的密钥/凭证

如果使用 Cloudflare Workers 部署，需要：

1. **Cloudflare API Token**
   - 在 Cloudflare Dashboard 创建
   - 权限：Account > Cloudflare Workers > Edit

2. **Cloudflare Account ID**
   - 在 Cloudflare Dashboard 查看
   - 位于任意域名或 Workers 页面右侧

## 📝 后续步骤

1. ✅ 将所有文件复制到你的 GitHub 仓库
2. ✅ 根据 DEPLOYMENT.md 选择部署方式
3. ✅ 配置必要的密钥（如果使用 GitHub Actions）
4. ✅ 推送代码并开始使用

## 💡 提示

- 所有文件都已经配置好，可以直接使用
- \`src/index.js\` 文件较大，因为包含了完整的 HTML 内容
- 如果只想本地使用，直接打开 \`index.html\` 即可
- 如果需要修改 HTML，修改后需要重新将内容嵌入到 \`src/index.js\`

## 🔄 更新 HTML 内容

如果修改了 \`index.html\`，需要同步更新 \`src/index.js\`：

1. 打开 \`src/index.js\`
2. 找到 \`const htmlContent = \`...\`;\` 部分
3. 将新的 HTML 内容替换进去
4. 重新部署：\`npm run deploy\`

祝使用愉快！🎉
