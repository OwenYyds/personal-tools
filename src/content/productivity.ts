import type { Section } from "./types";

export const productivitySection: Section = {
  title: "效率工具",
  subtitle: "把日常输入、笔记、阅读和处理信息的路径集中起来。",
  items: [
    {
      name: "Raycast",
      description: "强力启动器，可扩展快捷命令和自动化流程。",
      href: "https://www.raycast.com/",
      label: "启动器",
      accent: "from-violet-500 to-indigo-300",
    },
    {
      name: "Notion",
      description: "资料库、任务和项目记录的统一入口。",
      href: "https://www.notion.so/",
      label: "笔记",
      accent: "from-stone-500 to-neutral-300",
    },
    {
      name: "Obsidian",
      description: "适合本地知识管理和双链笔记。",
      href: "https://obsidian.md/",
      label: "笔记",
      accent: "from-slate-500 to-cyan-300",
    },
    {
      name: "DeepL",
      description: "翻译和写作辅助，适合处理多语言内容。",
      href: "https://www.deepl.com/translator",
      label: "翻译",
      accent: "from-sky-500 to-emerald-300",
    },
    {
      name: "Feishu",
      description: "团队协作、文档和会议入口。",
      href: "https://www.feishu.cn/",
      label: "协作",
      accent: "from-blue-400 to-cyan-300",
    },
    {
      name: "腾讯会议",
      description: "会议沟通的常用入口。",
      href: "https://meeting.tencent.com/",
      label: "会议",
      accent: "from-teal-400 to-sky-300",
    },
  ],
};
