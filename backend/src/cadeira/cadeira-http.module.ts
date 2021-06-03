import { Module } from '@nestjs/common';
import { CadeiraController } from './cadeira.controller';
import { CadeiraModule } from './cadeira.module';
import { CadeiraService } from './cadeira.service';

@Module({
  imports: [CadeiraModule],
  providers: [CadeiraService],
  controllers: [CadeiraController]
})
export class CadeiraHttpModule {}
