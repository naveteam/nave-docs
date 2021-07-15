const isPlayground = (node) => node.lang === "Playground";

const extract = (meta) => Object.fromEntries(new URLSearchParams(meta));

const parse = async (node, parent) => {
  const [{ u }, { default: dedent }] = await Promise.all([
    import("unist-builder"),
    import("dedent"),
  ]);

  const params = extract(node.meta);

  const dataSnackName =
    !!params.name && `data-snack-name="${encodeURIComponent(params.name)}`;
  const uriUseCaseCode = encodeURIComponent(node.value || "");
  const dataSnackCode = !!params.id
    ? `data-snack-id="${params.id}"`
    : `data-snack-code=${uriUseCaseCode}`;
  const dataSnackPlatform = encodeURIComponent(params.platform || "web");
  const dataSnackSupportedPlatforms = encodeURIComponent(
    params.platforms || "ios,android,web"
  );
  const dataSnackLoading = encodeURIComponent(params.loading || "lazy");

  const snack = u("html", {
    value: dedent`
      <div
        ${dataSnackCode}
        ${dataSnackName}
        class="snack-player"
        data-snack-platform="${dataSnackPlatform}"
        data-snack-supported-platforms="${dataSnackSupportedPlatforms}"
        data-snack-loading="${dataSnackLoading}"
        style="overflow:hidden;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:705px;width:100%">
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
