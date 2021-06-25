export default (() => {
  const initSnackPlayers = () => {
    window.ExpoSnack && window.ExpoSnack.initialize();
  }

  return {
    onRouteUpdate() {
      setTimeout(() => {
        initSnackPlayers()
      }, 0);
    },
  };
})();
