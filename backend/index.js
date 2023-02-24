require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const startServer = async (port) => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.DB_URL);

    app.listen(port, () =>
      console.log('App is running on port ' + port + '...')
    );
  } catch (err) {
    console.log(err);
  }
};

startServer(PORT);
