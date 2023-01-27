module.exports = {
  // accessible only from admin UI
  type: 'admin',
  routes: [
    {
      method: 'POST',
      path: '/completions',
      handler: 'completions.createCompletion',
      config: { policies: [] },
    },
  ],
};
