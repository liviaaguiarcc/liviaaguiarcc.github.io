const years = document.querySelectorAll("[data-year]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const doodleShapes = {
  spark: `<svg viewBox="0 0 44 44" aria-hidden="true" focusable="false"><path d="M22 5.8c1.2 7.5 3.8 12.2 11.1 15.3-7.4 1.6-10.6 5.1-12.3 16.9-1.1-8.2-4-13.1-11.2-15.7 7.4-1.9 10.8-5.7 12.4-16.5Z"/><path class="doodle-echo" d="M21.1 7.2c.9 6.8 3.6 11.3 10.1 13.9-6.5 1.7-9.7 5.7-11.1 15.1-1.3-7-4.2-11.3-10-13.5 6.5-2.2 9.7-5.7 11-15.5Z"/></svg>`,
  heart: `<svg viewBox="0 0 38 34" aria-hidden="true" focusable="false"><path d="M19.2 29.3C11.8 23.1 5.1 17.4 6.2 10.7 6.9 6.6 10 4.5 13.2 5.3c2.4.6 4.1 2.4 5.1 4.5 1.4-2.3 3.8-4.3 6.8-4 3.9.4 6.1 3.7 5.5 7.5-.8 5.6-6.3 10.8-11.4 16Z"/><path class="doodle-echo" d="M18.5 28.2C12 22.9 6.5 17.4 7.4 11.2c.5-3.2 3-5 5.8-4.5 2.1.4 3.8 2.2 4.8 4.2 1.6-2.1 3.7-3.6 6.3-3.4 3.1.2 5.1 2.8 4.7 5.7-.7 5.3-5.8 10.1-10.5 15Z"/></svg>`,
  arrow: `<svg viewBox="0 0 104 48" aria-hidden="true" focusable="false"><path d="M7 33c16.6-18.8 42.9-25.1 70.5-12.4 6.1 2.8 10.7 6.5 15.4 11.2"/><path d="M82.8 33.7c4.7.2 8.1-.5 12.6-1.9-2.2-3.8-4.1-7.2-5.5-11.6"/><path class="doodle-echo" d="M8.8 35.1c17.4-17.2 41-23.1 67.7-10.9 5.8 2.6 10.2 5.7 14.6 9.5"/></svg>`,
  underline: `<svg viewBox="0 0 184 24" aria-hidden="true" focusable="false"><path d="M5 13.2c32.7-4.4 65.8-5.1 97.1-3.1 27.5 1.7 51.2.4 76.8-3.1"/><path class="doodle-echo" d="M8.5 18.1c29.6-3.1 62.8-3.8 92.5-1.7 29.8 2.1 51.5-.2 76-2.8"/></svg>`,
  petal: `<svg viewBox="0 0 58 58" aria-hidden="true" focusable="false"><path d="M28.7 49.4c-.8-13.1.3-26.4 4.5-39.8"/><path d="M31.9 22.2c-8.7-2.2-14.8.3-19.2 7.8 8.3 3.6 14.8 1.1 19.2-7.8Z"/><path d="M35.2 17.5c6.7-5.3 12.9-5.7 18.2-1.2-4 6.8-10.4 7.4-18.2 1.2Z"/><path d="M27.6 34.3c-6.2 2.1-9.9 6.5-10.7 13.1 6.7.1 10.7-4.4 10.7-13.1Z"/><path class="doodle-echo" d="M30.4 48.8c-1.3-12.5-.2-25.4 4.2-38.1"/></svg>`,
  nodes: `<svg viewBox="0 0 76 54" aria-hidden="true" focusable="false"><path d="M18.8 27.4c12.8-11.8 25.4-14.7 38.2-8.2"/><path d="M21.1 30.3c12.4 7.4 25.8 8.3 39.7 2.2"/><circle cx="15.8" cy="29.1" r="5.9"/><circle cx="61.4" cy="18.6" r="5.5"/><circle cx="62.8" cy="32.5" r="5.7"/><path class="doodle-echo" d="M18.4 25.1c12.1-10.2 24.8-12.6 38.1-7"/></svg>`,
  bracket: `<svg viewBox="0 0 38 190" aria-hidden="true" focusable="false"><path d="M27.8 7.6c-10.4 11.7-13 27.3-8.1 46.7 2.1 8.3-.1 14.7-7.3 19.5 8.2 4.6 10.7 11.4 7.6 20.4-6.6 19.2-4.1 49.4 8.4 88"/><path class="doodle-echo" d="M29.9 8.9c-9.5 12.6-11.7 27.5-7.2 45.1 2.6 9.9-.4 16.5-7.2 20 7.5 5 9.3 11.7 6.5 20.7-6 19-3.4 48.5 8.5 86.1"/></svg>`,
  book: `<svg viewBox="0 0 68 52" aria-hidden="true" focusable="false"><path d="M6.5 12.4c9.4-3 18.4-2.1 27.2 3.2v28.6c-9.1-5-18.2-6.4-27.2-3.4V12.4Z"/><path d="M33.7 15.6c8.7-5.3 17.8-6.2 27.7-3.2v28.4c-9.4-3-18.6-1.5-27.7 3.4V15.6Z"/><path d="M33.7 16.4c.3 8.7.3 17.7 0 27.1"/><path class="doodle-echo" d="M9 15.1c7.8-1.9 15.3-.9 22.5 2.8"/><path class="doodle-echo" d="M37.1 17.8c7.2-3.8 14.6-4.7 22.2-2.9"/></svg>`
};

const addPencilDoodle = (selector, type, className) => {
  const target = document.querySelector(selector);
  if (!target || !doodleShapes[type] || Array.from(target.children).some((child) => child.classList.contains(className))) return;
  target.classList.add("doodle-host");
  const doodle = document.createElement("span");
  doodle.className = `pencil-doodle ${className}`;
  doodle.setAttribute("aria-hidden", "true");
  doodle.setAttribute("focusable", "false");
  doodle.style.pointerEvents = "none";
  doodle.innerHTML = doodleShapes[type];
  target.appendChild(doodle);
};

const doodlePlacements = {
  home: [
    [".identity-map", "spark", "doodle-home-spark-a"],
    [".identity-map", "spark", "doodle-home-spark-b"],
    [".identity-map", "petal", "doodle-home-petal"]
  ],
  about: [
    [".about-statement", "underline", "doodle-about-underline"],
    [".future-group:last-of-type", "heart", "doodle-about-heart"]
  ],
  projects: [
    [".project-card.featured", "spark", "doodle-project-star"],
    [".project-card.featured .text-button", "arrow", "doodle-project-arrow"],
    ["[data-project='hanparal']", "nodes", "doodle-hanparal-nodes"]
  ],
  education: [
    ["#education-formal", "book", "doodle-education-book"],
    ["#education-programs", "nodes", "doodle-education-nodes"],
    ["#education-certifications", "spark", "doodle-education-spark"]
  ],
  research: [
    [".thesis-feature", "bracket", "doodle-research-bracket"],
    [".research-next", "nodes", "doodle-kopt-nodes"]
  ],
  contact: [
    [".contact-copy", "spark", "doodle-contact-spark"]
  ]
};

const applyDoodles = () => {
  const placements = doodlePlacements[document.body.dataset.page] || [];
  placements.forEach(([selector, type, className]) => addPencilDoodle(selector, type, className));
};

years.forEach((year) => {
  year.textContent = new Date().getFullYear();
});

applyDoodles();
window.addEventListener("i18n:change", applyDoodles);

if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));

const localizeInternalUrl = (href) => {
  if (!window.I18N) return href;
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return href;
  url.searchParams.set("lang", window.I18N.lang);
  return url.href;
};

const activateTab = (selectedTab) => {
  const tabList = selectedTab.closest('[role="tablist"]');
  const relatedTabs = tabList ? Array.from(tabList.querySelectorAll('[role="tab"]')) : [];
  const selectedPanelId = selectedTab.getAttribute("aria-controls");
  const selectedPanel = selectedPanelId ? document.querySelector(`#${selectedPanelId}`) : null;
  const currentPanel = selectedPanel?.parentElement?.querySelector(".tab-panel.is-active");

  if (!selectedPanel || selectedPanel === currentPanel) return;

  relatedTabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
    tab.setAttribute("tabindex", isSelected ? "0" : "-1");
  });

  const showPanel = () => {
    selectedPanel.parentElement.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.hidden = panel !== selectedPanel;
      panel.classList.toggle("is-active", panel === selectedPanel);
      panel.classList.remove("is-switching");
    });

    if (!reduceMotion) {
      selectedPanel.classList.add("is-switching");
      window.requestAnimationFrame(() => selectedPanel.classList.remove("is-switching"));
    }
  };

  if (reduceMotion || !currentPanel) {
    showPanel();
    return;
  }

  currentPanel.classList.add("is-switching");
  window.setTimeout(showPanel, 150);
};

tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    const tabs = Array.from(tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]'));
    const currentIndex = tabs.indexOf(tab);
    const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    const nextTab = tabs[(currentIndex + direction + tabs.length) % tabs.length];
    nextTab.focus();
    activateTab(nextTab);
  });
});

const thesisCard = document.querySelector(".thesis-card");

if (thesisCard) {
  const flipThesisCard = (forceState) => {
    const t = window.I18N?.ui?.research;
    const isFlipped = typeof forceState === "boolean" ? forceState : !thesisCard.classList.contains("is-flipped");
    thesisCard.classList.toggle("is-flipped", isFlipped);
    thesisCard.setAttribute("aria-pressed", String(isFlipped));
    thesisCard.setAttribute("aria-label", isFlipped ? t?.flipB || "Flip thesis card back to summary" : t?.flipA || "Flip thesis card to read abstract");
    thesisCard.querySelector(".thesis-front")?.setAttribute("aria-hidden", String(isFlipped));
    thesisCard.querySelector(".thesis-back")?.setAttribute("aria-hidden", String(!isFlipped));
  };

  thesisCard.addEventListener("click", () => flipThesisCard());
  thesisCard.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      flipThesisCard(false);
    }
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || reduceMotion || !document.startViewTransition) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin || link.target) return;
  event.preventDefault();
  document.startViewTransition(() => {
    window.location.href = localizeInternalUrl(link.href);
  });
});
