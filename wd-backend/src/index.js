import Server from './server';
import Logger from './logger';
import rest from './rest';

const SERVER_PORT = '9000';

const server = Server.bootstrap();

server.app.use('/server', rest);

server.app.listen(SERVER_PORT, () => {
  Logger.info(`Server started on :${SERVER_PORT}`);
});
