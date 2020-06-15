import { Module } from '@nestjs/common';
import { FacilityModule } from './facility/facility.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FacilityModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
