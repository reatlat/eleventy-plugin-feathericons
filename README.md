# eleventy-plugin-feathericons
[![npm](https://img.shields.io/npm/v/eleventy-plugin-feathericons.svg)](https://npmjs.com/package/eleventy-plugin-feathericons)
[![npm](https://img.shields.io/npm/dt/eleventy-plugin-feathericons.svg)](https://npmjs.com/package/eleventy-plugin-feathericons)
[![license](https://img.shields.io/npm/l/eleventy-plugin-feathericons.svg)](https://npmjs.com/package/eleventy-plugin-feathericons)

An Eleventy [shortcode](https://www.11ty.dev/docs/shortcodes/), allows [Feather icons](https://feathericons.com/) to be embedded as inline svg into templates.

## Installation
Install the plugin from [npm](https://www.npmjs.com/package/eleventy-plugin-feathericons):

```
npm install eleventy-plugin-feathericons --save-dev
```


Add it to your [Eleventy Config](https://www.11ty.dev/docs/config/) file:

```js
const eleventyPluginFeathericons = require('eleventy-plugin-feathericons');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPluginFeathericons);
};
```


Advanced usage:

```js
const eleventyPluginFeathericons = require('eleventy-plugin-feathericons');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPluginFeathericons, {
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
    });
};
```


## What does it do?
The plugin turns [11ty shortcodes](https://www.11ty.dev/docs/shortcodes/) like this:

```nunjucks
{% feather "feather" %}
```

into HTML code like this:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
     class="feather feather-feather feather-x">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
    <line x1="16" y1="8" x2="2" y2="22"></line>
    <line x1="17.5" y1="15" x2="9" y2="15"></line>
</svg>
```


## Custom Usage

```nunjucks
{% feather "activity", {
    "stroke": "#ff0000",
    "stroke-width": 3
} %}
```


## Contributing
If you notice an issue, feel free to [open an issue](https://github.com/reatlat/eleventy-plugin-feathericons/issues).

1. Fork this repo
2. Clone `git clone git@github.com:reatlat/eleventy-plugin-feathericons.git`
3. Install dependencies `npm install`
4. Build `npm run build`
5. Serve locally `npm run dev`


## License
The code is available under the [MIT license](LICENSE).


## May the 4th be with you
<img src="https://cdn.sunnypixels.io/imgs/yoda-close-up.jpg" alt="May 4th be with you" width="280">
