const express = require('express');
const { loginRouter, categoryRouter } = require('./routers');
const { userRouter } = require('./routers');

// ...

const app = express();
app.use(express.json());
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
