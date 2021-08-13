import { Controller, Get, Post, Body, Put, HttpException, HttpStatus, Req } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto, RemoveWorkoutDto, EditWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './interfaces/workouts.interface';
import { Request } from 'express';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) { }

  @Get()
  async findWorkouts(@Req() req: Request): Promise<Workout[]> {
    try {
      const { periodDate } = req.query;

      console.log('periodDate in query', periodDate);

      const foundedWorkouts = await this.workoutsService.findWorkouts(periodDate);

      return foundedWorkouts;
    } catch (error) {
      console.error('Error while finding workouts', error);

      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto) {
    try {
      await this.workoutsService.create(createWorkoutDto);

      const updatedWorkouts = await this.workoutsService.findWorkouts(createWorkoutDto.periodDate);

      return updatedWorkouts;
    } catch (error) {
      console.error('Error while creating workout', error);

      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/remove')
  async remove(@Body() removeWorkoutDto: RemoveWorkoutDto) {
    try {
      await this.workoutsService.remove(removeWorkoutDto);

      const updatedWorkouts = await this.workoutsService.findWorkouts(removeWorkoutDto.periodDate);

      return updatedWorkouts;
    } catch (error) {
      console.error('Error while removing workout', error);

      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put()
  async edit(@Body() editWorkoutDto: EditWorkoutDto) {
    try {
      await this.workoutsService.edit(editWorkoutDto);

      const updatedWorkouts = await this.workoutsService.findWorkouts(editWorkoutDto.periodDate);

      return updatedWorkouts;
    } catch (error) {
      console.error('Error while editing workout', error);

      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
