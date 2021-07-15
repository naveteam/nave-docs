module.exports = {
  mySidebar: {
    Início: [{ id: "home", label: "nave", type: "doc" }],
    "Back-end": [
      {
        Guias: ["back-end/guides/boilerplates"],
      },
    ],
    "Front-end": [
      {
        Guias: ["front-end/guides/boilerplates"],
      },
      {
        "Casos de uso": [
          {
            Hooks: ["front-end/use-cases/hooks/use-device"],
          },
          {
            Helpers: ["front-end/use-cases/helpers/formatCurrency"],
          },
        ],
      },
    ],
    Mobile: ["mobile/mobile"],
  },
};
