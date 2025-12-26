# SKU Image Batch Downloader

🌐 [中文](#中文文档) | [English](#english-documentation) | [Español](#documentación-en-español)

---

## 中文文档

一个强大的网页工具，用于批量下载商品图片并自动按 SKU 分类整理。

### ✨ 功能特点

- 📦 **批量下载**：支持大量图片的批量下载
- 🗂️ **自动分类**：按 SKU 自动创建文件夹并分类存储
- 📊 **多种输入方式**：支持 CSV/Excel 文件上传或直接粘贴数据
- 🔗 **多列 URL 支持**：自动识别 URL、URL1、URL2 等多列图片链接
- 🌐 **多语言支持**：中文、英文、西班牙语三语切换
- ⚡ **实时进度**：显示下载进度和任务状态
- 🔐 **隐私保护**：所有操作在本地浏览器完成，不上传数据到服务器

### 🚀 快速部署到 Cloudflare Workers

#### 前置要求

1. 一个 [Cloudflare](https://cloudflare.com) 账号
2. 安装 [Node.js](https://nodejs.org/) (v16 或更高版本)
3. 安装 [Git](https://git-scm.com/)

#### 步骤 1：克隆仓库

\`\`\`bash
git clone https://github.com/你的用户名/sku-image-downloader.git
cd sku-image-downloader
\`\`\`

#### 步骤 2：安装依赖

\`\`\`bash
npm install
\`\`\`

#### 步骤 3：登录 Cloudflare

\`\`\`bash
npx wrangler login
\`\`\`

这会打开浏览器窗口，要求你授权 Wrangler 访问你的 Cloudflare 账号。

#### 步骤 4：部署到 Cloudflare Workers

\`\`\`bash
npm run deploy
\`\`\`

部署成功后，你会看到类似以下的输出：

\`\`\`
Published sku-image-downloader (0.01 sec)
  https://sku-image-downloader.你的账号.workers.dev
\`\`\`

#### 步骤 5：（可选）绑定自定义域名

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 选择你的 worker：**sku-image-downloader**
4. 点击 **Settings** > **Triggers**
5. 在 **Custom Domains** 部分点击 **Add Custom Domain**
6. 输入你的域名（如：`downloader.yourdomain.com`）
7. 点击 **Add Custom Domain**

或者编辑 \`wrangler.toml\` 文件：

\`\`\`toml
routes = [
  { pattern = "downloader.yourdomain.com/*", zone_name = "yourdomain.com" }
]
\`\`\`

然后重新部署：

\`\`\`bash
npm run deploy
\`\`\`

### 🛠️ 本地开发

启动本地开发服务器：

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:8787 查看应用。

### 📖 使用说明

1. 使用 **Chrome** 或 **Edge** 浏览器访问网站
2. 上传包含 SKU 和图片 URL 的 CSV/Excel 文件，或直接粘贴数据
3. 配置 SKU 列名和 URL 列名
4. 点击"开始下载"并选择保存目录
5. 等待下载完成，查看结果统计

### 📁 项目结构

\`\`\`
sku-image-downloader/
├── src/
│   └── index.js          # Cloudflare Worker 入口文件
├── wrangler.toml         # Wrangler 配置文件
├── package.json          # npm 依赖配置
├── .gitignore           # Git 忽略文件
└── README.md            # 项目说明文档
\`\`\`

### 🌐 浏览器兼容性

本工具使用 **File System Access API**，需要以下浏览器之一：
- Chrome 86+
- Edge 86+
- Opera 72+

### 📝 许可证

MIT License

---

## English Documentation

A powerful web tool for batch downloading product images and automatically organizing them by SKU.

### ✨ Features

- 📦 **Batch Download**: Support for downloading large quantities of images
- 🗂️ **Auto Organization**: Automatically create folders by SKU and organize storage
- 📊 **Multiple Input Methods**: Support CSV/Excel file upload or direct data paste
- 🔗 **Multiple URL Columns**: Auto-detect URL, URL1, URL2, etc.
- 🌐 **Multilingual**: Switch between Chinese, English, and Spanish
- ⚡ **Real-time Progress**: Display download progress and task status
- 🔐 **Privacy Protection**: All operations completed locally in browser, no data uploaded to server

### 🚀 Quick Deploy to Cloudflare Workers

#### Prerequisites

1. A [Cloudflare](https://cloudflare.com) account
2. [Node.js](https://nodejs.org/) installed (v16 or higher)
3. [Git](https://git-scm.com/) installed

#### Step 1: Clone Repository

\`\`\`bash
git clone https://github.com/yourusername/sku-image-downloader.git
cd sku-image-downloader
\`\`\`

#### Step 2: Install Dependencies

\`\`\`bash
npm install
\`\`\`

#### Step 3: Login to Cloudflare

\`\`\`bash
npx wrangler login
\`\`\`

This will open a browser window asking you to authorize Wrangler to access your Cloudflare account.

#### Step 4: Deploy to Cloudflare Workers

\`\`\`bash
npm run deploy
\`\`\`

After successful deployment, you'll see output similar to:

\`\`\`
Published sku-image-downloader (0.01 sec)
  https://sku-image-downloader.youraccount.workers.dev
\`\`\`

#### Step 5: (Optional) Bind Custom Domain

1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages**
3. Select your worker: **sku-image-downloader**
4. Click **Settings** > **Triggers**
5. Click **Add Custom Domain** in the **Custom Domains** section
6. Enter your domain (e.g., \`downloader.yourdomain.com\`)
7. Click **Add Custom Domain**

Or edit the \`wrangler.toml\` file:

\`\`\`toml
routes = [
  { pattern = "downloader.yourdomain.com/*", zone_name = "yourdomain.com" }
]
\`\`\`

Then redeploy:

\`\`\`bash
npm run deploy
\`\`\`

### 🛠️ Local Development

Start local development server:

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:8787 to view the application.

### 📖 Usage Instructions

1. Access the website using **Chrome** or **Edge** browser
2. Upload a CSV/Excel file containing SKU and image URLs, or paste data directly
3. Configure SKU column name and URL column name
4. Click "Start Download" and select save directory
5. Wait for download completion and view result statistics

### 🌐 Browser Compatibility

This tool uses the **File System Access API** and requires one of these browsers:
- Chrome 86+
- Edge 86+
- Opera 72+

### 📝 License

MIT License

---

## Documentación en Español

Una potente herramienta web para descargar imágenes de productos en lotes y organizarlas automáticamente por SKU.

### ✨ Características

- 📦 **Descarga por Lotes**: Soporte para descargar grandes cantidades de imágenes
- 🗂️ **Organización Automática**: Crear carpetas automáticamente por SKU y organizar el almacenamiento
- 📊 **Múltiples Métodos de Entrada**: Soporte para carga de archivos CSV/Excel o pegado directo de datos
- 🔗 **Múltiples Columnas URL**: Detectar automáticamente URL, URL1, URL2, etc.
- 🌐 **Multilingüe**: Cambiar entre chino, inglés y español
- ⚡ **Progreso en Tiempo Real**: Mostrar progreso de descarga y estado de tareas
- 🔐 **Protección de Privacidad**: Todas las operaciones se completan localmente en el navegador, sin subir datos al servidor

### 🚀 Implementación Rápida en Cloudflare Workers

#### Requisitos Previos

1. Una cuenta de [Cloudflare](https://cloudflare.com)
2. [Node.js](https://nodejs.org/) instalado (v16 o superior)
3. [Git](https://git-scm.com/) instalado

#### Paso 1: Clonar Repositorio

\`\`\`bash
git clone https://github.com/tuusuario/sku-image-downloader.git
cd sku-image-downloader
\`\`\`

#### Paso 2: Instalar Dependencias

\`\`\`bash
npm install
\`\`\`

#### Paso 3: Iniciar Sesión en Cloudflare

\`\`\`bash
npx wrangler login
\`\`\`

Esto abrirá una ventana del navegador pidiéndote que autorices a Wrangler para acceder a tu cuenta de Cloudflare.

#### Paso 4: Implementar en Cloudflare Workers

\`\`\`bash
npm run deploy
\`\`\`

Después de una implementación exitosa, verás una salida similar a:

\`\`\`
Published sku-image-downloader (0.01 sec)
  https://sku-image-downloader.tucuenta.workers.dev
\`\`\`

#### Paso 5: (Opcional) Vincular Dominio Personalizado

1. Inicia sesión en [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Ve a **Workers & Pages**
3. Selecciona tu worker: **sku-image-downloader**
4. Haz clic en **Settings** > **Triggers**
5. Haz clic en **Add Custom Domain** en la sección **Custom Domains**
6. Ingresa tu dominio (por ejemplo, \`downloader.tudominio.com\`)
7. Haz clic en **Add Custom Domain**

O edita el archivo \`wrangler.toml\`:

\`\`\`toml
routes = [
  { pattern = "downloader.tudominio.com/*", zone_name = "tudominio.com" }
]
\`\`\`

Luego vuelve a implementar:

\`\`\`bash
npm run deploy
\`\`\`

### 🛠️ Desarrollo Local

Iniciar servidor de desarrollo local:

\`\`\`bash
npm run dev
\`\`\`

Visita http://localhost:8787 para ver la aplicación.

### 📖 Instrucciones de Uso

1. Accede al sitio web usando el navegador **Chrome** o **Edge**
2. Carga un archivo CSV/Excel que contenga SKU y URLs de imágenes, o pega los datos directamente
3. Configura el nombre de la columna SKU y el nombre de la columna URL
4. Haz clic en "Iniciar Descarga" y selecciona el directorio de guardado
5. Espera a que se complete la descarga y consulta las estadísticas de resultados

### 🌐 Compatibilidad del Navegador

Esta herramienta usa la **API de Acceso al Sistema de Archivos** y requiere uno de estos navegadores:
- Chrome 86+
- Edge 86+
- Opera 72+

### 📝 Licencia

MIT License

---

## 🤝 贡献 / Contributing / Contribuir

欢迎提交问题和拉取请求！/ Issues and pull requests are welcome! / ¡Los problemas y las solicitudes de extracción son bienvenidos!

## 📧 联系 / Contact / Contacto

如有问题，请提交 issue。/ For questions, please submit an issue. / Para preguntas, envíe un problema.
