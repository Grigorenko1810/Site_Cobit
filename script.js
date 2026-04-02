(() => {
  const storageKey = "cobit-theme";
  const root = document.body;
  const toggle = document.querySelector("[data-theme-toggle]");

  const applyTheme = (theme) => {
    const nextTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", nextTheme);
    if (toggle) {
      const isDark = nextTheme === "dark";
      toggle.setAttribute("aria-checked", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Переключить на светлую тему" : "Переключить на тёмную тему");
    }
  };

  const savedTheme = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(storageKey, nextTheme);
    });
  }
})();
