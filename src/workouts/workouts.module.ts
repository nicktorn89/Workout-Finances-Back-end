import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WorkoutsController } from './workouts.controller';
import { WorkoutsService } from './workouts.service';
import { WorkoutSchema } from './schemas/workouts.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Workout', schema: WorkoutSchema }])],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}