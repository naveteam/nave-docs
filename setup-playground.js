export default (() => {
  const setSnackColorScheme = () => {
    const theme = document.querySelector("html").getAttribute("data-theme");
    document.querySelectorAll(".snack-player").forEach((playground) => {
      playground.setAttribute("data-snack-theme", theme);
      window.ExpoSnack && window.ExpoSnack.remove(playground);
      window.ExpoSnack && window.ExpoSnack.append(playground);
    });
  };

  const initializeSnack = () => {
    setSnackColorScheme();
    window.ExpoSnack && window.ExpoSnack.initialize();
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
