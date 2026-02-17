import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntiry } from './entities/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://patron_2whd_user:UVa7zf8WHQFqsXBQmFcGRbBboFr1ubsh@dpg-d65csker433s73evgaj0-a.singapore-postgres.render.com/patron_2whd',
      ssl: {
        rejectUnauthorized: false,
      },
      // host: process.env.DB_HOST,
      // port: 3306,
      // username: process.env.DB_USER,
      // database: process.env.DB_NAME,
      // password: process.env.DB_PASS,
      entities: [PaymentEntiry],
      synchronize: true,
      maxQueryExecutionTime: 20,
    }),
    TypeOrmModule.forFeature([PaymentEntiry]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
