import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  app.use(helmet());
  app.enableCors({
    origin: configService.get<string>("app.allowedOrigins")?.split(",") ?? "*"
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    })
  );

  const port = configService.get<number>("app.port") ?? 4000;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`MiddleOrbit API is running on port ${port}`);
}

bootstrap();

