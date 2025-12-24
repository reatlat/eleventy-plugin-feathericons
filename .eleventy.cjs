const feather = require('feather-icons');
const { parseHTML } = require('linkedom');

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

    const shortcodeHandler = (iconName, attributesOrClasses = {}) => {
        if (!iconName) {
            throw new Error(
                "[eleventy-plugin-feathericons] the iconName must be specified"
            );
        }

        let attrs = {};
        if (typeof attributesOrClasses === 'string') {
            attrs = { ...globalAttributes, class: `feather ${attributesOrClasses}` };
        } else {
            attrs = { ...globalAttributes, ...attributesOrClasses };
        }

        const svgString = feather.icons[iconName].toSvg(attrs);
        const { document } = parseHTML(svgString);
        const svg = document.querySelector('svg');

        // Remove the icon from the accessibility tree. TY to @FlorianBoe
        svg.setAttribute('aria-hidden', 'true');

        return svg.outerHTML.trim();
    };

    eleventyConfig.addShortcode("feather", shortcodeHandler);
};
