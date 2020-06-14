import { Controller, Get } from '@nestjs/common';

@Controller('facility')
export class FacilityController {
  @Get('')
  async sayHello(): Promise<string> {
    return 'Welcome to the facility service';
  }
}
