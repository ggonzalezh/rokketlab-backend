const app = require('./server/express');
const { logger } = require('./config/logger');
const { connectDB } = require('./config/database');
const config = require('./config/config.json');

const port = process.env.PORT || config.express.port;

(async () => {
    connectDB().then(res => {
        logger.info(res);
        app.listen(port, () => logger.info(`Server listening in port: ${port}`));
    }).catch(err => {
        logger.error(err);
    })
})();

module.exports = app;