import { IsEnum } from 'class-validator';
import { roles } from 'src/entities/role.entity';

export class CreateAdminDto {
  email: string;
  password: string;
  @IsEnum(roles)
  role: roles;
}
