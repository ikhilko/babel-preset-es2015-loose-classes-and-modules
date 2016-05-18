# babel-preset-es2015-loose

Babel preset that uses [modify-babel-preset] to modify [babel-preset-es2015]
and enable [loose mode] for classes and modules

## Install

Install both this preset, and the core 'babel-preset-es2015' that it modifies:

```sh
$ npm install --save-dev babel-preset-es2015-loose-classes-and-modules babel-preset-es2015
```

Why do you need to install both? The idea is that `babel-preset-es2015-loose-classes-and-modules`
will always be up to date because it will always use the version of
`babel-preset-2015` that you have installed. If you don't want to update to
the latest Babel release - you don't have to. Just pin `babel-preset-2015` to
the version you need.

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-loose-classes-and-modules"]
}
```

### Via CLI

```sh
$ babel script.js --presets loose-classes-and-modules
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-loose-classes-and-modules"]
})
```

[babel-preset-es2015]: https://www.npmjs.com/package/babel-preset-es2015
[loose mode]: http://www.2ality.com/2015/12/babel6-loose-mode.html
[modify-babel-preset]: https://github.com/developit/modify-babel-preset
