const years = document.querySelectorAll("[data-year]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

years.forEach((year) => {
  year.textContent = new Date().getFullYear();
});

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
    const isFlipped = typeof forceState === "boolean" ? forceState : !thesisCard.classList.contains("is-flipped");
    thesisCard.classList.toggle("is-flipped", isFlipped);
    thesisCard.setAttribute("aria-pressed", String(isFlipped));
    thesisCard.setAttribute("aria-label", isFlipped ? "Flip thesis card back to summary" : "Flip thesis card to read abstract");
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
    window.location.href = link.href;
  });
});
