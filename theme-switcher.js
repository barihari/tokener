(function () {
  const themes = {
    bankrate: "Bankrate",
    "capital-one": "Capital One",
    sage: "Sage Mortgage"
  };
  const storageKey = "tokener-theme";
  const storedTheme = window.localStorage.getItem(storageKey);
  const initialTheme = Object.hasOwn(themes, storedTheme) ? storedTheme : "bankrate";

  document.documentElement.dataset.theme = initialTheme;

  window.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll("[data-theme-option]");
    const select = document.querySelector(".themeSelect");
    const logo = document.querySelector(".brandLogo");

    function setTheme(theme) {
      if (!Object.hasOwn(themes, theme)) return;

      document.documentElement.dataset.theme = theme;
      window.localStorage.setItem(storageKey, theme);
      logo.setAttribute("aria-label", themes[theme]);

      options.forEach(function (option) {
        option.setAttribute("aria-pressed", String(option.dataset.themeOption === theme));
      });

      select.value = theme;
    }

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        setTheme(option.dataset.themeOption);
      });
    });

    select.addEventListener("change", function () {
      setTheme(select.value);
    });

    setTheme(initialTheme);
  });
})();
