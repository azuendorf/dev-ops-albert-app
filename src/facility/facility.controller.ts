import { Controller, Get, Inject } from '@nestjs/common';
import { Config } from '../config/config.interface';

@Controller('facility')
export class FacilityController {
  @Get('')
  async sayHello(): Promise<string> {
    return 'Welcome to the facility service';
  }
}
