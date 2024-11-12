import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const dbUrl = process.env.DATABASE_URL;

  await app.listen(port);
  console.log(`Server is running on port ${port}`);
  console.log(`Database URL: ${dbUrl}`);
}
bootstrap();
