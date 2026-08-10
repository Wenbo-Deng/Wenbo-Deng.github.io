# 个人求职作品集网站 · Personal Portfolio

基于纯 HTML/CSS/JS 的静态作品集网站，面向硬件/半导体/嵌入式岗位求职。

## 🚀 快速开始

直接双击 `index.html` 即可在浏览器中预览。

## 🌐 部署到 GitHub Pages（免费 · 5分钟）

### 方法一：作为用户主页（推荐）

1. 登录 [GitHub](https://github.com)，点击右上角 **+** → **New repository**
2. 仓库名填写：**`<你的用户名>.github.io`**（例如 `wenbodeng.github.io`）
   - 选择 **Public**
   - 点击 **Create repository**
3. 在本地打开命令行，进入 `personal-website` 文件夹：

```bash
cd personal-website
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
git push -u origin main
```

4. 等待 1-2 分钟，访问 `https://<你的用户名>.github.io` 即上线 🎉

### 方法二：作为项目页面

新建普通仓库（如 `portfolio`），部署完成后访问：
`https://<你的用户名>.github.io/portfolio/`

## 📝 发布前需要修改的内容

| 文件 | 修改项 |
|------|--------|
| `contact.html` | 邮箱、GitHub 链接 |
| `index.html` | 如有需要调整技能标签 |
| `assets/` | 放入你的简历 PDF（`resume.pdf`） |

## 📁 网站结构

```
personal-website/
├── index.html              # 首页（终端风自我介绍 + 项目精选）
├── projects.html           # 项目总览
├── project-fpga.html       # 项目① FPGA 峰值检测器（VHDL + UART + Artix-7）
├── project-monitor.html    # 项目② STM32 电能监测仪
├── project-robot.html      # 项目③ FreeRTOS 避障机器人
├── project-etf.html        # 项目④ ETF 量化分析工具
├── project-3dprint.html    # 项目⑤ ECG 外壳 3D 打印（Three.js 可交互爆炸视图）
├── project-ecg.html        # 项目⑥ ECG 活动监测（生物电信号 + AI + 电源 + PCB 设计）
├── resume.html             # 简历（时间线 + 技能图谱）
├── blog.html               # 博客列表
├── blog-ina226-monitor.html  # 博客① INA226 电能监测仪
├── blog-i2c-debugging.html   # 博客② I2C 调试记录
├── blog-smps-to-pcb.html     # 博客③ 仿真到 PCB
├── contact.html            # 联系方式 + CV 下载
├── css/style.css           # 全局样式（深色科技风）
├── js/main.js              # 交互脚本
└── assets/                 # 图片 / 简历 PDF
```

## 🎨 技术栈

- 纯 HTML5 + CSS3 + JavaScript（零依赖）
- 深色科技风设计（GitHub Dark 风格 + 青绿强调色）
- 响应式布局，手机端可正常浏览
- Intersection Observer 滚动渐入动画
- 无构建工具，单击即用

## ✨ 后续可选优化

- 绑定自定义域名（在仓库 Settings → Pages 中添加）
- 添加 Google Analytics 统计访问量
- 扩展博客内容（复制现有博客 HTML 模板即可）
- 添加中英双语切换按钮

---

© 2026 Deng Wenbo · Built with ❤️ and hardware engineering spirit