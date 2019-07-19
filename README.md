# Phaser TS starter

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Customizing build](#customizing-build)

## About

Starter that uses Typescript + Webpack 4 to bundle your Phaser 3 game

## Getting Started

After installing dependencies with `yarn install`, it should have run `yarn prepare` as well. If you update Phaser, you should run `yarn prepare` once.

Launch a server to dev:

```sh
yarn dev
```

Bundling for production:

```sh
yarn build
```

You can deploy the `./dist` folder.

### Prerequisites

- Node
- yarn

### Customizing build

In order to only include what we need, we provide a custom phaser build located
at `lib/phaser.custom.js`. If things are not working, you are likely missing one
of the Plugins. I recommend looking at Phaser source code to see what they add
to the `Phaser` object and add the same.

A bit more about it:

- https://github.com/photonstorm/phaser3-custom-build
- https://phaser.io/tutorials/creating-custom-phaser-builds
