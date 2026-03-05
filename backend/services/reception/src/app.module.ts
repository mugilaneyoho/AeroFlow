import { Module } from '@nestjs/common';
import { VisitorsModule } from './visitors/visitors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingsModule } from './meetings/meetings.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    url: 'postgresql://patron_2whd_user:UVa7zf8WHQFqsXBQmFcGRbBboFr1ubsh@dpg-d65csker433s73evgaj0-a.singapore-postgres.render.com/patron_2whd',
    autoLoadEntities: true,
    synchronize: true,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }),
    VisitorsModule,
    MeetingsModule,
  ],
})
export class AppModule { }