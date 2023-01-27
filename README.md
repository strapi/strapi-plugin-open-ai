# Strapi plugin Open AI completion

The official plugin that allows you to create Open AI completion from a prompt

## Features

- Create completion from multiple [Open AI models](https://beta.openai.com/docs/models)
- Adjust the [temperature](https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature) and [max_tokens](https://beta.openai.com/docs/api-reference/completions/create#completions/create-max_tokens) of the completion

## Installation

To install this plugin, you need to add an NPM dependency to your Strapi application.

```sh
# Using Yarn
yarn add @strapi/plugin-open-ai

# Or using NPM
npm install @strapi/plugin-open-ai
```

## Configuration

`./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  'open-ai': {
    enabled: true,
    config: {
      API_TOKEN: '<your-open-ai-token >',
    },
  },
  // ...
});
```

Then, you'll need to build your admin panel:

```sh
# Using Yarn
yarn build

# Or using NPM
npm run build
```