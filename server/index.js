require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const { PORT } = process.env;

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
