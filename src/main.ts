import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: 'http://count-training.surge.sh',
    credentials: true,
  };

  app.enableCors(corsOptions);
  await app.listen(3003);
}
bootstrap();
