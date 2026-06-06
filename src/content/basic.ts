import type { Section } from "./types";

export const basicSection: Section = {
  title: "基础必备",
  subtitle: "新电脑第一时间常用的浏览器、系统和安装工具。",
  items: [
    {
      name: "Google Chrome",
      description: "主力浏览器，适合同步账号和扩展插件。",
      href: "https://www.google.com/chrome/",
      label: "浏览器",
      accent: "from-sky-400 to-cyan-300",
    },
    {
      name: "Microsoft Edge",
      description: "备用浏览器，适合工作和兼容性测试。",
      href: "https://www.microsoft.com/edge",
      label: "浏览器",
      accent: "from-blue-500 to-indigo-400",
    },
    {
      name: "Homebrew",
      description: "macOS 下最常见的命令行安装入口。",
      href: "https://brew.sh/",
      label: "系统工具",
      accent: "from-emerald-400 to-lime-300",
      commands: [
        {
          label: "安装脚本",
          value:
            '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
          note: "Homebrew 官方安装命令。",
        },
        {
          label: "升级包索引",
          value: "brew update",
          note: "安装完成后常用的更新命令。",
        },
      ],
    },
    {
      name: "7-Zip",
      description: "通用压缩解压工具，兼容各种归档格式。",
      href: "https://www.7-zip.org/",
      label: "压缩工具",
      accent: "from-amber-400 to-orange-300",
    },
  ],
};
