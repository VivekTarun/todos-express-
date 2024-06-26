const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

// Sample route to check the server.
app.get('/ping', (req, res) => {
    return res.json({ message: 'Problem Service is alive' });
})


app.listen(PORT, async () => {
    console.log(`server started at PORT: ${PORT}`);

});