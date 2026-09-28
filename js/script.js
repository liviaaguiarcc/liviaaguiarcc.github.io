const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const year = document.querySelector("#year");
const educationTabs = Array.from(document.querySelectorAll(".education-tab"));

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
    educationTabs.forEach((tab) => {
      const panelId = tab.getAttribute("aria-controls");
      const panel = panelId ? document.querySelector(`#${panelId}`) : null;
      const isSelected = tab === selectedTab;

      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");

      if (panel) {
        panel.hidden = !isSelected;
      }
    });
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
