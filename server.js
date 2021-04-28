const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/upload', require('./routes/api/upload'));
// app.use('/admin', require('./routes/api/admin'));
// app.use('/account', require('./routes/api/account'));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
