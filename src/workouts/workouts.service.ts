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

    console.log('date in findWorkouts', date);

    const currentDate = new Date(date);
    console.log('currentDate before moment', currentDate, new Date(date), date, typeof date);

    const currentMoment = moment(currentDate);

    console.log('currentDate', currentDate);

    const startOfRange = currentDate.getDate() >= 15
      ? currentMoment.date(15).toDate()
      : currentMoment.startOf('month').toDate();

    console.log('startOfRange', startOfRange);

    const endOfRange = currentDate.getDate() >= 15
      ? currentMoment.endOf('month').toDate()
      : currentMoment.date(15).toDate();

    console.log('endOfRange', endOfRange);

    return await this.workoutModel.find({ date: { $gte: startOfRange, $lte: endOfRange } }).exec();
  }
}
