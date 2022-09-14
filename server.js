const express = require('express');
const app = express();
const db = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`MongoDB server connected to localhost: ${PORT}`);
})
