import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      logger.info(`server running at port ${Config.PORT}`, {
        port: Config.PORT,
      });
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

startServer();
