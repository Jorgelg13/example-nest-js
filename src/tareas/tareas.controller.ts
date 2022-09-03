import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { Request, Response } from 'express';
import { TareasService } from './tareas.service'; 
import { Tareas } from './interfaces/task';
@Controller('tareas')
export class TareasController {
  constructor(private tareasService: TareasService){}

  @Get()
  getTareas(): Tareas[] {
    return this.tareasService.getTareas();
  }

  @Get(':id')
  getTarea(@Param('id') id) {
    return this.tareasService.getTarea(Number(id));
  }

 @Post()
 createTask(@Body() task: CreateTaskDto): string{
    console.log(task.title);
    return 'creando tareas';
 }

 @Put(":id")
 updateTask(@Body() tarea:CreateTaskDto, @Param("id") id): string{
    console.log(id);
    console.log(tarea);
    return "actualizando tareas";
 }

 @Delete(':id')
 deleteTaks(@Param('id') id ):string{
    console.log(id);
    return "borrando tareas";
 }
}
