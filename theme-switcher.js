(function () {
  const themeNames = {
    bankrate: "Bankrate",
    "capital-one": "Capital One",
    sage: "Sage Mortgage",
    vanguard: "Vanguard"
  };
  const storageKey = "tokener-theme";
  const savedTheme = window.localStorage.getItem(storageKey);
  const initialTheme = Object.hasOwn(themeNames, savedTheme) ? savedTheme : "bankrate";

  // Apply the saved theme before the page paints so the default brand never flashes.
  document.documentElement.dataset.theme = initialTheme;

  window.addEventListener("DOMContentLoaded", function () {
    const themeButtons = document.querySelectorAll("[data-theme-option]");
    const themeSelect = document.querySelector(".themeSelect");
    const logo = document.querySelector(".brandLogo");

    function applyTheme(theme) {
      if (!Object.hasOwn(themeNames, theme)) return;

      document.documentElement.dataset.theme = theme;
      window.localStorage.setItem(storageKey, theme);
      logo.setAttribute("aria-label", themeNames[theme]);

      themeButtons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.themeOption === theme));
      });

      themeSelect.value = theme;
    }

    themeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyTheme(button.dataset.themeOption);
      });
    });

    themeSelect.addEventListener("change", function () {
      applyTheme(themeSelect.value);
    });

    applyTheme(initialTheme);
  });
})();
