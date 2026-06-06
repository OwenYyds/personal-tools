import "./style.css";

type CommandSnippet = {
  label: string;
  value: string;
  note?: string;
};

type Tool = {
  name: string;
  description: string;
  href: string;
  label: string;
  accent: string;
  commands?: CommandSnippet[];
};

type Section = {
  title: string;
  subtitle: string;
  items: Tool[];
};

type FlowStep = {
  id: string;
  title: string;
  subtitle: string;
};

const sections: Section[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const quickLinks: Tool[] = [
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

const catalogTools = sections.flatMap((section) => section.items);
const flowSteps: FlowStep[] = sections.map((section, index) => ({
  id: `flow-step-${index}-${section.title.replace(/\s+/g, "-").toLowerCase()}`,
  title: section.title,
  subtitle: section.subtitle,
}));

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });

let toolCursor = 0;

app.innerHTML = `
  <main class="page-shell">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Personal Tools</p>
        <h1>一页集中管理你的常用安装工具和入口站点</h1>
        <p class="hero-text">
          这是一个静态工具首页，先把新电脑初始化时最常用的软件、站点和服务入口放在一起。
          后续新增工具时，只需要往数据里继续加卡片即可。
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="#catalog">查看工具分类</a>
          <a class="secondary-action" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">打开 App Store</a>
        </div>
      </div>
      <div class="hero-panel">
        <div class="panel-card panel-card-highlight">
          <span class="panel-label">今日快捷入口</span>
          <strong>Browser · Install · Notes · Dev</strong>
          <p>用于新设备快速上手的高频站点合集。</p>
        </div>
        <div class="panel-grid">
          ${quickLinks
            .map(
              (tool) => `
                <a class="mini-card" href="${tool.href}" ${
                tool.href.startsWith("http")
                  ? 'target="_blank" rel="noreferrer"'
                  : ""
              }>
                  <span class="mini-badge">${tool.label}</span>
                  <strong>${tool.name}</strong>
                  <p>${tool.description}</p>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <nav class="flow-navigator" aria-label="页面分区导航">
      <div class="flow-navigator-head">
        <p class="eyebrow">Flow Navigator</p>
        <strong>快速跳到对应分类</strong>
      </div>
      <div class="flow-navigator-track">
        ${flowSteps
          .map(
            (step, index) => `
              <button class="flow-step" type="button" data-flow-index="${index}" data-flow-target="${
              step.id
            }">
                <span class="flow-step-index">0${index + 1}</span>
                <span class="flow-step-title">${step.title}</span>
              </button>
            `
          )
          .join("")}
      </div>
    </nav>

    <section class="detail-panel" id="tool-detail" aria-live="polite">
      <div class="detail-panel-head">
        <div>
          <p class="eyebrow">Tool Detail</p>
          <h2 id="detail-title"></h2>
          <p class="detail-meta" id="detail-meta"></p>
        </div>
        <a class="detail-link" id="detail-link" href="#" target="_blank" rel="noreferrer">打开链接</a>
      </div>
      <p class="detail-description" id="detail-description"></p>
      <div class="command-list" id="detail-commands"></div>
    </section>

    <section class="catalog" id="catalog">
      <div class="section-head">
        <p class="eyebrow">Tool Catalog</p>
        <h2>按类型分组，方便未来继续扩展</h2>
        <p>目前先放入最常见的安装工具和常用站点，后续可以继续加“设计”“影音”“安全”“云服务”等分区。</p>
      </div>

      <div class="sections">
        ${sections
          .map(
            (section, index) => `
              <article class="tool-section" id="${
                flowSteps[index].id
              }" data-flow-section="${index}">
                <header class="tool-section-head">
                  <div>
                    <h3>${section.title}</h3>
                    <p>${section.subtitle}</p>
                  </div>
                </header>
                <div class="tool-grid">
                  ${section.items
                    .map((tool) => {
                      const toolIndex = toolCursor;
                      toolCursor += 1;

                      return `
                        <button class="tool-card tool-card-button" type="button" data-tool-index="${toolIndex}" aria-pressed="false">
                          <span class="tool-accent ${tool.accent}"></span>
                          <div class="tool-card-body">
                            <div class="tool-meta">
                              <span class="tool-label">${tool.label}</span>
                            </div>
                            <h4>${tool.name}</h4>
                            <p>${tool.description}</p>
                            <span class="tool-card-cta">点击查看命令</span>
                          </div>
                        </button>
                      `;
                    })
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <footer class="footer-note">
      <p>这个首页现在是纯前端静态页面，后续可以很容易加入搜索、收藏、拖拽排序和动画过渡。</p>
    </footer>
  </main>
`;

const detailTitle = app.querySelector<HTMLHeadingElement>("#detail-title");
const detailMeta = app.querySelector<HTMLParagraphElement>("#detail-meta");
const detailDescription = app.querySelector<HTMLParagraphElement>(
  "#detail-description"
);
const detailLink = app.querySelector<HTMLAnchorElement>("#detail-link");
const detailCommands = app.querySelector<HTMLDivElement>("#detail-commands");
const flowButtons = Array.from(
  app.querySelectorAll<HTMLButtonElement>("[data-flow-index]")
);
const flowSectionsDom = Array.from(
  app.querySelectorAll<HTMLElement>("[data-flow-section]")
);
const toolButtons = Array.from(
  app.querySelectorAll<HTMLButtonElement>("[data-tool-index]")
);

if (
  !detailTitle ||
  !detailMeta ||
  !detailDescription ||
  !detailLink ||
  !detailCommands
) {
  throw new Error("Tool detail elements not found");
}

const setActiveFlowStep = (stepIndex: number) => {
  flowButtons.forEach((button) => {
    button.dataset.active =
      button.dataset.flowIndex === String(stepIndex) ? "true" : "false";
  });
};

const setActiveTool = (toolIndex: number) => {
  const tool = catalogTools[toolIndex];

  if (!tool) {
    return;
  }

  detailTitle.textContent = tool.name;
  detailMeta.textContent = `分类：${tool.label} · 命令片段可自定义`;
  detailDescription.textContent = tool.description;
  detailLink.href = tool.href;

  detailCommands.innerHTML = tool.commands?.length
    ? tool.commands
        .map(
          (command, commandIndex) => `
            <article class="command-card">
              <div class="command-card-head">
                <div>
                  <span class="command-label">${escapeHtml(
                    command.label
                  )}</span>
                  ${
                    command.note
                      ? `<p class="command-note">${escapeHtml(
                          command.note
                        )}</p>`
                      : ""
                  }
                </div>
                <button class="command-copy" type="button" data-copy-command="${toolIndex}-${commandIndex}" data-command-value="${encodeURIComponent(
            command.value
          )}">复制</button>
              </div>
              <pre><code>${escapeHtml(command.value)}</code></pre>
            </article>
          `
        )
        .join("")
    : `
      <div class="command-empty">
        <strong>这个工具还没有配置命令片段。</strong>
        <p>你可以继续往数据里补充自己的命令行内容，这一块会直接显示在这里。</p>
      </div>
    `;

  toolButtons.forEach((button) => {
    button.dataset.active =
      button.dataset.toolIndex === String(toolIndex) ? "true" : "false";
  });
};

toolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const toolIndex = Number(button.dataset.toolIndex);
    setActiveTool(toolIndex);
  });
});

flowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.flowTarget;
    const target = targetId ? document.getElementById(targetId) : null;

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (flowSectionsDom.length > 0 && "IntersectionObserver" in window) {
  const flowObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (left, right) => right.intersectionRatio - left.intersectionRatio
        )[0];

      if (!visibleEntry) {
        return;
      }

      const activeIndex = Number(
        (visibleEntry.target as HTMLElement).dataset.flowSection
      );

      if (!Number.isNaN(activeIndex)) {
        setActiveFlowStep(activeIndex);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.5, 0.8],
    }
  );

  flowSectionsDom.forEach((section) => flowObserver.observe(section));
  setActiveFlowStep(0);
}

detailCommands.addEventListener("click", async (event) => {
  const target = event.target as HTMLElement | null;
  const button = target?.closest<HTMLButtonElement>("[data-copy-command]");

  if (!button) {
    return;
  }

  const encodedValue = button.dataset.commandValue;

  if (!encodedValue) {
    return;
  }

  try {
    await navigator.clipboard.writeText(decodeURIComponent(encodedValue));
    button.textContent = "已复制";
    window.setTimeout(() => {
      button.textContent = "复制";
    }, 1200);
  } catch {
    button.textContent = "复制失败";
    window.setTimeout(() => {
      button.textContent = "复制";
    }, 1200);
  }
});

setActiveTool(0);
