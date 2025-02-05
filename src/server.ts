import app from './app';
import { Config } from './config';

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      console.log(`server running at port ${Config.PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
