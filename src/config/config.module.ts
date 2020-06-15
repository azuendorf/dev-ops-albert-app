import { DynamicModule, Global, Module } from '@nestjs/common';

import { FacilityController } from '../facility/facility.controller';
import { FacilityService } from '../facility/facility.service';
import { ConfigService } from './config.service';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(): DynamicModule {
    const configService = new ConfigService();
    const configProviders = [
      {
        provide: 'CONFIG',
        useValue: configService.getConfig()
      },
      {
        provide: ConfigService,
        useValue: configService,
      }
    ];
    return {
      module: ConfigModule,
      providers: configProviders,
      exports: configProviders,
    }
  }
}
