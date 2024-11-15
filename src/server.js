const express = require('express');
const { connectDB } = require('./config/db');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
