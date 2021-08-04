export default (() => {
  const setSnackColorScheme = () => {
    const theme = document.querySelector("html").getAttribute("data-theme");
    document.querySelectorAll(".snack-player iframe").forEach((iframe) => {
      const [sourceWithoutColorScheme, currentColorScheme] = iframe
        .getAttribute("src")
        .split("&theme=");

      if (theme !== currentColorScheme) {
        iframe.setAttribute(
          "src",
          `${sourceWithoutColorScheme}&theme=${theme}`
        );
      }
    });
  };

  const initializeSnack = () => {
    setTimeout(() => {
      window.ExpoSnack && window.ExpoSnack.initialize();
      setSnackColorScheme();
    }, 0);
  };

  new MutationObserver(() => setSnackColorScheme()).observe(
    document.querySelector("html"),
    {
      attributes: true,
      attributeFilter: ["data-theme"],
    }
  );

  window.onload = () => {
    initializeSnack();
  };

  return {
    onRouteUpdate() {
      initializeSnack();
    },
  };
})();