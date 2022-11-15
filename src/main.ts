import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~/app.module';
import { setupSwagger } from '~/utils/setupSwagger';
import helmet from 'helmet';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('server.port');
  const logger = new Logger('Main');

  app.enableCors({});
  app.useGlobalPipes(new ValidationPipe({}));
  app.use(helmet());

  setupSwagger(app);
  await app.listen(port);
  logger.verbose(`Listening On Port ${port}`);
};
bootstrap();
