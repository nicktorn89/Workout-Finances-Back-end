import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as moment from 'moment';

import { Workout } from './interfaces/workouts.interface';
import { CreateWorkoutDto, RemoveWorkoutDto, EditWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(@InjectModel('Workout') private readonly workoutModel: Model<Workout>) { }

  async create(workout: CreateWorkoutDto): Promise<Workout> {
    const createdWorkout = new this.workoutModel(workout);
    return await createdWorkout.save();
  }

  async edit(workout: EditWorkoutDto) {
    await this.workoutModel.findOneAndUpdate({ _id: workout._id }, workout).exec();
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

  async findWorkouts(date: string): Promise<Workout[]> {
    if (!date || typeof date !== 'string') {
      throw new Error('date is not defined or not string');
    }

    const currentDate = new Date(date);
    const currentMoment = moment(currentDate);

    const startOfRangeMoment = currentDate.getDate() > 15
      ? currentMoment.date(16).hour(0).minute(0).second(0).millisecond(0)
      : currentMoment.startOf('month').hour(0).minute(0).second(0).millisecond(0);

    const startOfRange = startOfRangeMoment.toDate();

    const endOfRangeMoment = currentDate.getDate() > 15
      ? currentMoment.endOf('month').hour(23).minute(59).second(59).millisecond(999)
      : currentMoment.date(15).hour(23).minute(59).second(59).millisecond(999);

    const endOfRange = endOfRangeMoment.toDate();

    return await this.workoutModel.find({ date: { $gte: startOfRange, $lte: endOfRange } }).exec();
  }
}
