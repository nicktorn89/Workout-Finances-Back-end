import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto, RemoveWorkoutDto, EditWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './interfaces/workouts.interface';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  findAll(): Promise<Workout[]> {
    return this.workoutsService.findAll();
  }

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto) {
    await this.workoutsService.create(createWorkoutDto);

    return this.workoutsService.findAll();
  }

  @Post('/remove')
  async remove(@Body() removeWorkoutDto: RemoveWorkoutDto) {
    await this.workoutsService.remove(removeWorkoutDto);

    return this.workoutsService.findAll();
  }

  @Put()
  async edit(@Body() editWorkoutDto: EditWorkoutDto) {
    await this.workoutsService.edit(editWorkoutDto);

    return this.workoutsService.findAll();
  }
}
