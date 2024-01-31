exports.onCreatePage = function(page) {
    if (page.internal.relative.includes("wiki/")) {
        page.attributes.layout = "wikis";
        page.attributes.title = page.attributes.slug.replace("wikis/", "").replace("-", " ");
    }

    if (page.attributes.layout === undefined) {
        page.attributes.layout = "default";
    }
}
