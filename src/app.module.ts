import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsController } from './workouts/workouts.controller';

@Module({
  imports: [],
  controllers: [AppController, WorkoutsController],
  providers: [AppService],
})
export class AppModule {}
