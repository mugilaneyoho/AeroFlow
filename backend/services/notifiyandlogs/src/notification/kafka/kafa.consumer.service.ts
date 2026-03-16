import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

@Controller()
export class kafkaconsumerservice{
    
   @EventPattern('class_started')
   handleClassStarted(@Payload() message: any
  ) {
    const data = message.value
    console.log('Class Starting In 5 Minutes!');
    console.log(data);
  }
}