import type { Tool } from "./types";

export const quickLinks: Tool[] = [
  {
    name: "App Store",
    description: "macOS 官方应用下载中心。",
    href: "https://www.apple.com/app-store/",
    label: "官方",
    accent: "from-slate-500 to-zinc-300",
  },
  {
    name: "Download Portal",
    description: "未来可替换成你的个人下载/分发入口。",
    href: "#catalog",
    label: "入口",
    accent: "from-indigo-500 to-violet-300",
  },
  {
    name: "Bookmark Hub",
    description: "预留给更多常用站点分类。",
    href: "#catalog",
    label: "扩展",
    accent: "from-emerald-500 to-cyan-300",
  },
];
