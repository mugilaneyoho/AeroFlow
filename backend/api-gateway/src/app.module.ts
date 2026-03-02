import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { APP_GUARD } from '@nestjs/core';
import { AuthGard } from './auth.guard';
import { join } from 'path';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: 'auth-key',
      signOptions: { expiresIn: '30d' },
    }),
    ClientsModule.register([
      {
        name: 'roles',
        transport: Transport.GRPC,
        options: {
          package: 'roles',
          protoPath: join(__dirname, './proto/role.proto'),
          url: `0.0.0.0:3001`,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGard,
    },
  ],
})
export class AppModule {}
