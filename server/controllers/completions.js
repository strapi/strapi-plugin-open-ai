'use strict';

module.exports = ({ strapi }) => {
  const completionService = strapi.plugins['open-ai'].services.completions;

  const createCompletion = async (ctx) => {
    const { model, prompt, temperature, maxTokens } = ctx.request.body;

    if (model && prompt && temperature && maxTokens) {
      try {
        return completionService.createCompletion({
          model,
          prompt,
          temperature,
          maxTokens,
        });
      } catch (err) {
        console.log(err);
        ctx.throw(500, err);
      }
    }
    return ctx.throw(400, 'Either the prompt, temperature, model or maxToken parameter is missing');
  };

  return {
    createCompletion,
  };
};
