export default (() => {
  const setSnackColorScheme = () => {
    const theme = document.querySelector("html").getAttribute("data-theme");
    document.querySelectorAll(".snack-player iframe").forEach((iframe) => {
      const [sourceWithoutColorScheme] = iframe
        .getAttribute("src")
        .split("&theme=");
      iframe.setAttribute("src", `${sourceWithoutColorScheme}&theme=${theme}`);
    });
  };

  const initializeSnack = () => {
    window.ExpoSnack && window.ExpoSnack.initialize();
    setSnackColorScheme();
  };

  new MutationObserver(() => setSnackColorScheme()).observe(
    document.querySelector("html"),
    {
      attributes: true,
      attributeFilter: ["data-theme"],
    }
  );

  return {
    onRouteUpdate() {
      setTimeout(() => {
        initializeSnack();
      }, 0);
    },
  };
})();
