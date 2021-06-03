import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadeiraController } from './cadeira.controller';
import { Cadeira } from './cadeira.entity';
import { CadeiraService } from './cadeira.service';

@Module({
    imports: [TypeOrmModule.forFeature([Cadeira])],
    exports: [TypeOrmModule]
})
export class CadeiraModule {}
