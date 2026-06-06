import type { Section } from "./types";

export const macosSection: Section = {
  title: "macOS",
  subtitle: "macOS 上最常用的安装、清理和窗口管理工具。",
  items: [
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
      name: "AppCleaner",
      description: "卸载应用时清理残留文件。",
      href: "https://freemacsoft.net/appcleaner/",
      label: "系统工具",
      accent: "from-zinc-400 to-stone-300",
      commands: [
        {
          label: "启动应用",
          value: "open -a AppCleaner",
          note: "从终端直接打开 AppCleaner。",
        },
      ],
    },
    {
      name: "Rectangle",
      description: "窗口管理工具，快速整理桌面布局。",
      href: "https://rectangleapp.com/",
      label: "窗口管理",
      accent: "from-violet-400 to-fuchsia-300",
      commands: [
        {
          label: "启动应用",
          value: "open -a Rectangle",
          note: "从终端直接打开 Rectangle。",
        },
      ],
    },
  ],
};
