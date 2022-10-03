const express = require('express');
const UserRouter = require('./routes/user.router');
const RegistrationRouter = require('./routes/registration.router');
const cors = require('cors');

// ...

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', UserRouter);
app.use('/registration', RegistrationRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
