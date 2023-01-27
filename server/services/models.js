'use strict';

const fetch = require('node-fetch');

module.exports = ({ strapi }) => {
  const getModels = async () => {
    try {
      const models = await fetch(`https://api.openai.com/v1/models`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${strapi
            .plugin('open-ai')
            .config('API_TOKEN')}`,
        },
      });

      const res = await models.json();
      return res?.data?.map((model) => model.id);
    } catch (error) {
      console.log(error, 'returning default models');
      return strapi
        .store({
          environment: '',
          type: 'plugin',
          name: 'open-ai',
        })
        .get({ key: 'settings' }).models;
    }
  };

  return {
    getModels,
  };
};
