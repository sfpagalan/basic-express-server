const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();

app.use(logger);

app.get('/person', validator, (req, res) => {
  const { name } = req.query;
  res.json({ name });
});

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  },
  app,
};
