
const path = require('path');

const constructorMethod = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/index.html'));
  });

  app.use('*', (req, res) => {
    res.sendFile(path.resolve('static/404.html'));
    res.status(404);
  });
};

module.exports = constructorMethod;