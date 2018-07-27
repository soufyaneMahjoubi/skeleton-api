const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

const app = express();
const server = require('http').Server(app);

const logger = require('./service/logger');
const errorMiddleware = require('./middleware/error');


const env = process.env.API_ENV || 'dev';

if (env === 'dev') {
    dotenv.config();
}

const envConfig = require(`./config/env/${env}`); //eslint-disable-line

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
const router = require('./route/');
app.use(router);

server.listen(envConfig.port, () => {
    logger.info(`API[env=${env}] is running on ${envConfig.port} ...`);
});

const gracefulExit = () => {
    logger.info('API is shutdown !!!');
    process.exit(0);
};

/**
 * Events
 */
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

process.on('uncaughtException', (err) => {
    // handle the error safely
    logger.error({ err });
    process.exit(1);
});

app.use(errorMiddleware);

module.exports = app;
