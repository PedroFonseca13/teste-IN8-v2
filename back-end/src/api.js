const express = require('express');
const UserRouter = require('./routes/user.router');
const cors = require('cors');

// ...

const app = express();
app.use(express.json());
app.use(cors());

app.use('/registration', UserRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
