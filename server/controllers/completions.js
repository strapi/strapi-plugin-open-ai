'use strict';

module.exports = ({ strapi }) => {
  const completionService = strapi.plugins['open-ai'].services.completions;

  const createCompletion = async (ctx) => {
    const { model, messages, temperature, maxTokens } = ctx.request.body;

    if (model && messages && temperature && maxTokens) {
      try {
        return completionService.createCompletion({
          model,
          messages,
          temperature,
          maxTokens,
        });
      } catch (err) {
        console.log(err);
        ctx.throw(500, err);
      }
    }
    return ctx.throw(400, 'Either the messages, temperature, model or maxToken parameter is missing');
  };

  return {
    createCompletion,
  };
};
