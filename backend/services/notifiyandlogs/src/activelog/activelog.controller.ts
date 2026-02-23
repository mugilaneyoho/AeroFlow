import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('activelog')
export class ActivelogController {
  @MessagePattern('activelog.created')
  handelActivelogCreate(@Payload() message: any) {
    console.log('recived:', message);
    return 'message processed';
  }
}
