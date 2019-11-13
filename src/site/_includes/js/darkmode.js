/* theme / darkmode support */
(() => {
  const button = document.querySelector(".js-darkmode");
  button.onclick = () => {
    document.body.classList.toggle("theme-dark");
  };
})();
