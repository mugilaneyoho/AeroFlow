import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituteEntity } from './entities/institute.entity';
import { BranchEntity } from './entities/branch.entity';
import { CourseEntity } from './entities/course.entity';
import { BatchEntity } from './entities/batch.entity';
import { BranchModule } from './branch/branch.module';
import { CourseModule } from './course/course.module';
import { BatchModule } from './batch/batch.module';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { StudentProfileEntity } from './entities/student.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://patron_2whd_user:UVa7zf8WHQFqsXBQmFcGRbBboFr1ubsh@dpg-d65csker433s73evgaj0-a.singapore-postgres.render.com/patron_2whd',
      ssl: {
        rejectUnauthorized: false,
      },
      // host: process.env.DB_HOST,
      // port: 3306,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASS,
      // database: process.env.DB_NAME,
      entities: [
        InstituteEntity,
        BranchEntity,
        CourseEntity,
        BatchEntity,
        StudentProfileEntity,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CourseEntity, BatchEntity, StudentProfileEntity]),
    ProfileModule,
    BranchModule,
    CourseModule,
    BatchModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
