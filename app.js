
const { PORT, HOST } = require('./config/server');
const app = require('./server');
app.listen(PORT, HOST, async () => {
    console.log(`Server started at ${HOST}:${PORT} `)
});
