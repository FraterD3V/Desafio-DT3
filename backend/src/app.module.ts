import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadeiraController } from './cadeira/cadeira.controller';
import { CadeiraService } from './cadeira/cadeira.service';
import { CadeiraModule } from './cadeira/cadeira.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadeira } from './cadeira/cadeira.entity';

@Module({
  imports: [CadeiraModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'DT3',
      entities: [Cadeira],
      synchronize: true,
    })],
  controllers: [AppController, CadeiraController],
  providers: [AppService, CadeiraService],
})
export class AppModule {}
