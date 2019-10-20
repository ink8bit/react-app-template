# React starter

It's React setup that I use every day.

## Setup

```sh
nvm use && npm i
```

## Development

1. Run the following command:

```sh
npm run dev
```

2. Open `localhost:3000` in your favorite browser

## Build for production

```sh
npm run build
```

## Run production version

```sh
npm start
```

And open `localhost:5000` in your favorite browser.

## Compatible browsers

[browserl.ist](https://browserl.ist/?q=%3E0.3%25%2C+not+ie+10%2C+not+ie+11%2C+not+op_mini+all)

### Debug browsers versions

```sh
npx browserslist
```

## Built with

- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
- [React](https://reactjs.org/)
- [Reach router](https://reach.tech/router)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [classnames](https://github.com/JedWatson/classnames)
- [stylelint](https://github.com/stylelint/stylelint)

## Features

- Lazy-loading images using [IntersectionObserver](https://developers.google.com/web/updates/2016/04/intersectionobserver)
- [React Portals](https://reactjs.org/docs/portals.html) for modal window
- [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
