const pino = require('pino');

exports.logger = pino({
  prettyPrint: {
    translateTime: 'dd/mm HH:MM:ss',
    colorize: true,
    ignore: 'pid,hostname',
  }
});
