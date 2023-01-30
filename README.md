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
      API_TOKEN: '<your-open-ai-token>',
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

## How it works

You can create AI completions in the content-manager view, when creating or updating an entry. It is mandatory to have a working Open AI API token in your `./config/plugins.js` for the plugin to work. 

You have two tabs when you open the plugin modal:

- Prompt: This is where you can write your prompt and generate the completion. Once generated, you will be able to either clear the completion textarea or to copy it in your clipboard. Copying the completion in your clipboard will automatically close the modal.

- Settings: You can play with some completion API configuration such as selecting your favorite model, having a certain temperature and max_tokens for your completions. It is possible to save your settings!

*Note that the plugin will automatically put the temperature value between 0 and 1 and the max_tokens value between 0 and 4096*

The plugin has a static list of Open AI models downloaded on late January 2023 (`src/server/services/settings.js`). It is however possible to download actual models in the settings tab. The select input will automatically be updated with the new models.

Default settings are the following:

- model: ''
- temperature: 1
- max_tokens: 16
- models: [...]

Please find the Open AI doc for each one of them:

- [Models](https://beta.openai.com/docs/models)
- [Temperature](https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature)
- [max_tokens](https://beta.openai.com/docs/api-reference/completions/create#completions/create-max_tokens)

Enjoy!