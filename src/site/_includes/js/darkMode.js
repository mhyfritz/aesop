export default () => {
  const className = "theme-dark";
  const targetElement = document.documentElement;
  const storageKey = "darkMode";

  try {
    let isDarkMode = JSON.parse(localStorage.getItem(storageKey));
    if (typeof isDarkMode !== "boolean") {
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    targetElement.classList.toggle(className, isDarkMode);
  } catch {}

  const button = document.querySelector(".js-darkmode");
  button.onclick = () => {
    targetElement.classList.toggle("theme-dark");
    localStorage.setItem(
      storageKey,
      JSON.stringify(targetElement.classList.contains(className))
    );
  };
};
