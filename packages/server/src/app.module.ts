// nest config
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './config';
import { PrismaModule } from './prisma/prisma.module';

// providers
import { APP_PIPE } from '@nestjs/core';

// main modules
import { EventsModule } from './modules/events/events.module';
import { RoomsModule } from './modules/rooms/rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfig],
    }),
    PrismaModule,
    // main modules
    EventsModule,
    RoomsModule,
  ],

  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
