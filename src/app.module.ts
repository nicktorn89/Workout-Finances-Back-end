import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsController } from './workouts/workouts.controller';
import { WorkoutsService } from './workouts/workouts.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, WorkoutsController],
  providers: [AppService, WorkoutsService, CatsService],
})
export class AppModule {}
