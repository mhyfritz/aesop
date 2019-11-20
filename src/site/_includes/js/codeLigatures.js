export default () => {
  const className = "code-ligatures";
  const targetElement = document.documentElement;
  const storageKey = "codeLigatures";

  try {
    let useLigatures = JSON.parse(localStorage.getItem(storageKey));
    if (typeof useLigatures !== "boolean") {
      useLigatures = true;
    }
    targetElement.classList.toggle(className, useLigatures);
  } catch {}

  Array.from(document.querySelectorAll("pre[class*=language-]")).forEach(
    codeSection => {
      const button = document.createElement("button");
      button.textContent = "Toggle ligatures";
      const container = document.createElement("div");
      container.classList.add("code-toolbar");
      container.appendChild(button);
      codeSection.prepend(container);

      button.onclick = () => {
        targetElement.classList.toggle(className);
        localStorage.setItem(
          storageKey,
          JSON.stringify(targetElement.classList.contains(className))
        );
      };
    }
  );
};
