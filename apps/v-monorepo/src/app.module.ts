import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import DomainModule from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [DomainModule, ApplicationModule, InfrastructureModule],
  providers: [ConfigService],
})
export class AppModule {}
