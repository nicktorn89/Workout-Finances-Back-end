import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/workouts'),
    WorkoutsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
