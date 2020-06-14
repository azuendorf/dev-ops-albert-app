import { Module } from '@nestjs/common';
import { FacilityModule } from './facility/facility.module';

@Module({
  imports: [FacilityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
