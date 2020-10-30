# Front-End 'Noob' Starter

Use of this starter template assumes that you have a 'complete dev environment' setup - a terminal, Node, VS Code, at least. If not, you may want to [start here.](https://www.notion.so/codefinity/Setting-up-a-Local-Dev-Environment-for-JS-02a4e9f4a30043d3a8e7d109be3448f4)

---

## What's Included

- [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
- [![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript). I have adjusted this slightly as per [this `commit`](https://github.com/manavm1990/node-starter/commit/ff1ed419d3ed411683b404b1cc6e221c859b0d33). More may be forthcoming as _feedback and [PRs](https://github.com/swic-cis-177/mt-project-studentloganbutler/pulls) trickle in._
- [Stylelint](https://stylelint.io/) for CSS linting. I am including the 'standard [configuration](https://stylelint.io/user-guide/configure)' with some additional rules to keep things alphabetical, indented with `2` spaces, etc.
- [`husky`](https://www.npmjs.com/package/husky) will check over code quality with the linters b4 there is a successful `commit`.
- [`webpack`](https://www.npmjs.com/package/webpack) to allow the use of modern [EcmaScript Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- Various VS Code 'settings' and 'extensions.' Look in the bottom right when you open this up in VS Code to install them.
- For 'nice' fonts, I recommend using [Victor Mono](https://rubjo.github.io/victor-mono/).
- [Kite 🪁](https://www.kite.com/javascript/) is also included. I personally recommend it, but it's certainly not compulsory to set this up.
- Probably some other stuff I'm 4getting about for now 🤷🏽‍♂️

## How To Use

Run `npm i` to get all the things installed.

`npm run serve` will 🔥 up an instance of [`browser-sync`](https://browsersync.io/). You just write your front-end code and watch things update on your 'local web server.' 🦄

Meanwhile, you will get alerted whenever there is something 'bad' in your code based on the aforementioned 👆🏽 linting. 🦄

## 🎶

- For fonts, I set ['Victor Mono'](https://rubjo.github.io/victor-mono/) by default. You might also install: ['Inconsolata'](https://fonts.google.com/specimen/Inconsolata) or ['Source Code Pro'](https://fonts.google.com/specimen/Source+Code+Pro) - or completely change that in [.vscode/settings.json](/.vscode/settings.json), _if you know what you are doing! ⚠️_
- As you get more comfortable, of course you can modify all the things as you C fit.
- One of the included VS Code Extensions allows us to easily alphabetize some parts of our code; for instance, CSS 💄 rules. Just highlight the appropriate block of rules and press 'F9.' See more deets [here.](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)

### Questions/Issues

Reach me on [Twitter](https://twitter.com/GoCodeFinity) for ❓s or discussion.

If it's an actual issue... [open 1.](https://github.com/manavm1990/node-starter/issues)
