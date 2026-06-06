import type { Section } from "./types";

export const windowsSection: Section = {
  title: "Windows",
  subtitle: "Windows 设备上的官方授权和常用入口，集中放在一个分区里。",
  items: [
    {
      name: "Windows 官方激活",
      description:
        "仅适用于你已经购买授权的 Windows 设备，可在这里放置产品密钥和官方激活流程。",
      href: "https://support.microsoft.com/windows/activate-windows",
      label: "授权",
      accent: "from-orange-400 to-rose-300",
      commands: [
        {
          label: "安装产品密钥",
          value: "slmgr /ipk YOUR-PRODUCT-KEY",
          note: "替换为你合法购买的产品密钥。",
        },
        {
          label: "联机激活",
          value: "slmgr /ato",
          note: "完成密钥安装后再执行。",
        },
      ],
    },
    {
      name: "Office 官方入口",
      description:
        "适用于 Microsoft 365 或零售版 Office 的官方登录和部署入口。",
      href: "https://www.office.com/",
      label: "授权",
      accent: "from-sky-500 to-cyan-300",
      commands: [
        {
          label: "登录入口",
          value: "start https://www.office.com/",
          note: "在 Windows 终端中打开官方登录页。",
        },
        {
          label: "产品密钥兑换",
          value: "start https://setup.office.com/",
          note: "使用你的 Microsoft 账户完成兑换或安装。",
        },
      ],
    },
  ],
};
