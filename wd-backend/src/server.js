import express from 'express';
import bodyParser from 'body-parser';

export default class Server {
  constructor() {
    this.app = express();

    this.config();
  }

  config = () => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
  }

  static bootstrap = () => new Server();
}
