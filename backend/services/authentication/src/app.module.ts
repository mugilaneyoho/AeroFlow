import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { StudentEntity } from './entities/student.entity';
import { TelecallingModule } from './telecalling/telecalling.module';
import { StaffModule } from './staff/staff.module';
import { AdminsModule } from './admins/admins.module';
import { TelecallingEntity } from './entities/telecalling.entity';
import { StaffEntity } from './entities/staff.entity';
import { rolesEntity } from './entities/role.entity';
import { AdminEntity } from './entities/admins.entity';
import { RolesModule } from './roles/roles.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://patron_727o_user:vNL871u0UdD5lEwe01ZqngnTCDgO7NtE@dpg-d6bvqg7tn9qs73c7qcqg-a.singapore-postgres.render.com/patron_727o',
      ssl: {
        rejectUnauthorized: false,
      },
      // host: process.env.DB_HOST,
      // port: 3306,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASS,
      // database: process.env.DB_NAME,
      entities: [
        StudentEntity,
        TelecallingEntity,
        StaffEntity,
        rolesEntity,
        AdminEntity,
      ],
      synchronize: true,
    }),
    ClientsModule.register([
      {
        name: 'mailservice',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'mailservice',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'mailservice-consumer',
          },
        },
      },
    ]),
    StudentsModule,
    TelecallingModule,
    StaffModule,
    AdminsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
