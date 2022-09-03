import { Module } from '@nestjs/common';
import { TareasService } from "./tareas.service";
import { TareasController } from "./tareas.controller"
@Module({
    imports:[],
    controllers:[TareasController],
    providers:[TareasService]
})
export class TareasModule {}
