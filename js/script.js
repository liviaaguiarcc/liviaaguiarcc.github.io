const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const year = document.querySelector("#year");
const educationTabs = Array.from(document.querySelectorAll(".education-tab"));
const educationWindow = document.querySelector(".education-window");
const educationTabMeta = document.querySelector(".tab-meta");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (educationTabs.length > 0) {
  const activateEducationTab = (selectedTab) => {
    const selectedPanelId = selectedTab.getAttribute("aria-controls");
    const selectedPanel = selectedPanelId ? document.querySelector(`#${selectedPanelId}`) : null;
    const activePanel = document.querySelector(".education-panel.is-active");
    const tabIndex = selectedTab.dataset.tabIndex || "01";

    if (!selectedPanel || selectedPanel === activePanel) {
      return;
    }

    educationTabs.forEach((tab) => {
      const isSelected = tab === selectedTab;

      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");
    });

    if (educationWindow) {
      educationWindow.dataset.activeTab = tabIndex;
    }

    if (educationTabMeta) {
      educationTabMeta.textContent = `Selected / ${tabIndex}`;
    }

    const showSelectedPanel = () => {
      document.querySelectorAll(".education-panel").forEach((panel) => {
        panel.hidden = panel !== selectedPanel;
        panel.classList.toggle("is-active", panel === selectedPanel);
        panel.classList.remove("is-switching");
      });

      if (!reduceMotion) {
        selectedPanel.classList.add("is-switching");
        window.requestAnimationFrame(() => {
          selectedPanel.classList.remove("is-switching");
        });
      }
    };

    if (reduceMotion || !activePanel) {
      showSelectedPanel();
      return;
    }

    activePanel.classList.add("is-switching");
    window.setTimeout(showSelectedPanel, 160);
  };

  educationTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateEducationTab(tab));

    tab.addEventListener("keydown", (event) => {
      const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;

      if (direction === 0) {
        return;
      }

      event.preventDefault();
      const nextIndex = (index + direction + educationTabs.length) % educationTabs.length;
      educationTabs[nextIndex].focus();
      activateEducationTab(educationTabs[nextIndex]);
    });
  });

  activateEducationTab(educationTabs.find((tab) => tab.classList.contains("is-active")) || educationTabs[0]);
}
