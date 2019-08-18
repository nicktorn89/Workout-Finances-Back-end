import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Workout } from './interfaces/workouts.interface';
import { CreateWorkoutDto, RemoveWorkoutDto, EditWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(@InjectModel('Workout') private readonly workoutModel: Model<Workout>) {}

  async create(workout: CreateWorkoutDto): Promise<Workout> {
    const createdWorkout = new this.workoutModel(workout);
    return await createdWorkout.save();
  }

  async edit(workout: EditWorkoutDto) {
    await this.workoutModel.findOneAndUpdate({ _id: workout._id}, workout).exec();
  }

  async remove({ idArray }: RemoveWorkoutDto) {
    if (idArray.length === 0) {
      return;
    }

    if (idArray.length > 1) {
      await this.workoutModel.deleteMany({ _id: idArray }).exec();
    } else {
      await this.workoutModel.deleteOne({ _id: idArray[0] }).exec();
    }
  }

  async findAll(): Promise<Workout[]> {
    return await this.workoutModel.find().exec();
  }
}
