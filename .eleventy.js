const feather = require('feather-icons');

module.exports = (eleventyConfig, attributes = {}) => {

    const defaultAttributes = {
        "class": "feather feather-x",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": 24,
        "height": 24,
        "viewBox": "0 0 24 24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
    }

    const globalAttributes = { ...defaultAttributes, ...attributes };

    eleventyConfig.addShortcode("feather", (iconName, attributes = {}) => {
        if (!iconName) {
            throw new Error(
                "[eleventy-plugin-feathericons] the iconName must be specified"
            );
        }

        attributes = { ...globalAttributes, ...attributes };

        return feather.icons[iconName].toSvg(attributes)
    });
};
