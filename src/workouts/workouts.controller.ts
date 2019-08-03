import { Controller, Get, Post, Body } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './interfaces/workouts.interface';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto) {
    // return 'this actions create workout';
    await this.workoutsService.create(createWorkoutDto);
  }

  @Get()
  findAll(): Promise<Workout[]> {
    return this.workoutsService.findAll();
  }
}
