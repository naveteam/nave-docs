const isPlayground = (node) => node.lang === "Playground";

const extract = (meta) => Object.fromEntries(new URLSearchParams(meta));

const parse = async (node, parent) => {
  const [{ u }, { default: dedent }] = await Promise.all([
    import("unist-builder"),
    import("dedent"),
  ]);

  const params = extract(node.meta);

  // const dataSnackName = params.name
  //   ? encodeURIComponent(params.name)
  //   : "Playground";
  // const dataSnackDescription = params.description
  //   ? encodeURIComponent(params.description)
  //   : "";
  // const dataSnackCode = encodeURIComponent(node.value);
  // const dataSnackDependencies = encodeURIComponent(params.dependencies || "");
  // const dataSnackPlatform = encodeURIComponent(params.platform || "web");
  // const dataSnackSupportedPlatforms = encodeURIComponent(
  //   params.platforms || "ios,android,web"
  // );
  // const dataSnackTheme = encodeURIComponent(params.theme || "light");
  // const dataSnackPreview = encodeURIComponent(params.preview || true);
  // const dataSnackLoading = encodeURIComponent(params.loading || "lazy");

  // data-snack-name="${dataSnackName}"
  // data-snack-description="${dataSnackDescription}"
  // data-snack-code="${dataSnackCode}"
  // data-snack-dependencies="${dataSnackDependencies}"
  // data-snack-platform="${dataSnackPlatform}"
  // data-snack-supported-platforms="${dataSnackSupportedPlatforms}"
  // data-snack-theme="${dataSnackTheme}"
  // data-snack-preview="${dataSnackPreview}"
  // data-snack-loading="${dataSnackLoading}"
  
  const snack = u("html", {
    value: dedent`
      <div
        class="snack-player"
        data-snack-id="${params.id}"
        style="overflow:hidden;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:805px;width:100%"
      >
      </div>
    `,
  });

  const index = parent[0].children.indexOf(node);
  parent[0].children.splice(index, 1, snack);
};

const Playground = () => async (tree) => {
  const { visitParents } = await import("unist-util-visit-parents");
  const remarks = [];
  visitParents(tree, "code", (node, parent) => {
    if (isPlayground(node)) {
      remarks.push(parse(node, parent));
    }
  });
  await Promise.all(remarks);
};

module.exports = Playground;
