// npm install winston

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ 
          filename: 'error.log', 
          maxsize: 5242880, //5MB
          maxFiles: 5,
          level: 'error',
        }),
      new winston.transports.File({ 
            filename: 'warn.log', 
            maxsize: 5242880, //5MB
            maxFiles: 5,
            level: 'warn',
        }),
      new winston.transports.File({ 
          filename: 'otros-logs.log', 
          maxsize: 5242880, //5MB
          maxFiles: 5,
        }),
    ],
  });
logger.info({mensaje:'Hola info', codigo: 200, data:{nombre:"Adrian", apellido: "Eguez"}});
logger.error('Hola error');
logger.warn('Hola warn');
