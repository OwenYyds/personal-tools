import "./style.css";

import { quickLinks, sections } from "./content";

type FlowStep = {
  id: string;
  title: string;
  subtitle: string;
};

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

    <div class="tool-popup" id="tool-popup" aria-hidden="true">
      <div class="tool-popup-backdrop" data-popup-close></div>
      <section class="tool-popup-dialog" role="dialog" aria-modal="true" aria-labelledby="tool-popup-title">
        <div class="tool-popup-head">
          <div>
            <p class="eyebrow">Tool Popup</p>
            <h2 id="tool-popup-title"></h2>
            <p class="tool-popup-meta" id="tool-popup-meta"></p>
          </div>
          <button class="tool-popup-close" type="button" data-popup-close aria-label="关闭弹窗">×</button>
        </div>
        <p class="tool-popup-description" id="tool-popup-description"></p>
        <div class="tool-popup-actions">
          <a class="tool-popup-link" id="tool-popup-link" href="#" target="_blank" rel="noreferrer">转到官方网站</a>
        </div>
        <div class="tool-popup-body">
          <div class="tool-popup-body-head">
            <strong>命令代码块</strong>
          </div>
          <div class="tool-popup-command-list" id="tool-popup-command-list"></div>
        </div>
      </section>
    </div>
  </main>
`;

const popup = app.querySelector<HTMLDivElement>("#tool-popup");
const popupTitle = app.querySelector<HTMLHeadingElement>("#tool-popup-title");
const popupMeta = app.querySelector<HTMLParagraphElement>("#tool-popup-meta");
const popupDescription = app.querySelector<HTMLParagraphElement>(
  "#tool-popup-description"
);
const popupLink = app.querySelector<HTMLAnchorElement>("#tool-popup-link");
const popupCommandList = app.querySelector<HTMLDivElement>(
  "#tool-popup-command-list"
);
const popupCloseButtons = Array.from(
  app.querySelectorAll<HTMLButtonElement>("[data-popup-close]")
);
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
  !popup ||
  !popupTitle ||
  !popupMeta ||
  !popupDescription ||
  !popupLink ||
  !popupCommandList
) {
  throw new Error("Tool popup elements not found");
}

const setActiveFlowStep = (stepIndex: number) => {
  flowButtons.forEach((button) => {
    button.dataset.active =
      button.dataset.flowIndex === String(stepIndex) ? "true" : "false";
  });
};

const closePopup = () => {
  popup.dataset.open = "false";
  popup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
};

const openPopup = (toolIndex: number) => {
  const tool = catalogTools[toolIndex];

  if (!tool) {
    return;
  }

  popupTitle.textContent = tool.name;
  popupMeta.textContent = `分类：${tool.label} · 命令独立成块，随时可复制`;
  popupDescription.textContent = tool.description;
  popupLink.href = tool.href;

  popupCommandList.innerHTML = tool.commands?.length
    ? tool.commands
        .map(
          (command, commandIndex) => `
            <article class="tool-popup-command-card">
              <div class="tool-popup-command-head">
                <div>
                  <strong>${escapeHtml(command.label)}</strong>
                  ${command.note ? `<p>${escapeHtml(command.note)}</p>` : ""}
                </div>
                <button class="tool-popup-command-copy" type="button" data-copy-command="${toolIndex}-${commandIndex}" data-command-value="${escapeHtml(
            command.value
          )}">复制</button>
              </div>
              <pre class="tool-popup-command-code"><code>${escapeHtml(
                command.value
              )}</code></pre>
            </article>
          `
        )
        .join("")
    : `
      <div class="tool-popup-empty">
        <strong>这个工具还没有配置命令。</strong>
        <p>你可以先转到官方网站，或者后续在数据文件里补充一条可复制命令。</p>
      </div>
    `;

  popup.dataset.open = "true";
  popup.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

toolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const toolIndex = Number(button.dataset.toolIndex);
    openPopup(toolIndex);
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

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", closePopup);
});

popup.addEventListener("click", (event) => {
  const target = event.target as HTMLElement | null;

  if (target?.dataset.popupClose !== undefined) {
    closePopup();
  }
});

popupCommandList.addEventListener("click", async (event) => {
  const target = event.target as HTMLElement | null;
  const button = target?.closest<HTMLButtonElement>("[data-copy-command]");

  if (!button) {
    return;
  }

  const commandValue = button.dataset.commandValue;

  if (!commandValue) {
    return;
  }

  try {
    await navigator.clipboard.writeText(commandValue);
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

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popup.dataset.open === "true") {
    closePopup();
  }
});

popup.dataset.open = "false";
