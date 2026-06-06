import type { Section } from "./types";

export const developmentSection: Section = {
  title: "开发工具",
  subtitle: "如果这台电脑还会用来开发，这里保留常见的安装和站点入口。",
  items: [
    {
      name: "Visual Studio Code",
      description: "轻量主力编辑器，后续可作为工具站核心入口。",
      href: "https://code.visualstudio.com/",
      label: "编辑器",
      accent: "from-cyan-400 to-blue-300",
    },
    {
      name: "GitHub",
      description: "代码托管、项目管理和扩展插件下载。",
      href: "https://github.com/",
      label: "代码托管",
      accent: "from-zinc-500 to-slate-300",
    },
    {
      name: "Docker Desktop",
      description: "本地容器环境和服务编排。",
      href: "https://www.docker.com/products/docker-desktop/",
      label: "容器",
      accent: "from-sky-500 to-cyan-300",
    },
    {
      name: "Node.js",
      description: "前端与脚本生态的基础运行时。",
      href: "https://nodejs.org/",
      label: "运行时",
      accent: "from-emerald-500 to-lime-300",
    },
    {
      name: "Python",
      description: "适合自动化、脚本和数据处理。",
      href: "https://www.python.org/",
      label: "运行时",
      accent: "from-yellow-400 to-amber-300",
    },
    {
      name: "Postman",
      description: "接口调试和 API 管理工具。",
      href: "https://www.postman.com/",
      label: "接口",
      accent: "from-orange-400 to-rose-300",
    },
  ],
};
