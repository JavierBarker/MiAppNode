const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./databases/database');

const User = require('./models/user.model');
const userRoutes = require('./routes/user.routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', userRoutes);

sequelize
  .sync()
  .then((connect) => {
    //console.log(connect);
    app.listen(process.env.PORT || 3000, () => {
      console.log('server in port: 3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
