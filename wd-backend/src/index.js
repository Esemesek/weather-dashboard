import Server from './server';
import Logger from './logger';
import weatherRouter from './rest/weather';
import cityRouter from './rest/city';

const SERVER_PORT = '9000';

const server = Server.bootstrap();

server.app.use('/server/weather', weatherRouter);
server.app.use('/server/city', cityRouter);

server.app.listen(SERVER_PORT, () => {
  Logger.info(`Server started on :${SERVER_PORT}`);
});
