module.exports = {
  mySidebar: [
    { type: "doc", label: "Início", id: "home" },
    {
      type: "category",
      label: "Back-end",
      items: [
        {
          type: "category",
          label: "Guias",
          items: [
            {
              id: "back-end/guides/boilerplates",
              label: "Boilerplates",
              type: "doc",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Front-end",
      items: [
        {
          type: "category",
          label: "Guias",
          items: [
            {
              id: "front-end/guides/boilerplates",
              label: "Boilerplates",
              type: "doc",
            },
          ],
        },
      ],
    },
  ],
};
