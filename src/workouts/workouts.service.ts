import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Workout } from './interfaces/workouts.interface';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(@InjectModel('Workout') private readonly workoutModel: Model<Workout>) {}

  async create(workout: CreateWorkoutDto): Promise<Workout> {
    const createdWorkout = new this.workoutModel(workout);
    return await createdWorkout.save();
  }

  async findAll(): Promise<Workout[]> {
    return await this.workoutModel.find().exec();
  }
}
