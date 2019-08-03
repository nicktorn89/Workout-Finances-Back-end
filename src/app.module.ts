import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/workouts'),
    WorkoutsModule
  ],
})
export class AppModule {}
