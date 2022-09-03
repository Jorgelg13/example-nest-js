import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasController } from './tareas/tareas.controller';
import { TareasService } from './tareas/tareas.service';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TareasModule,
    MongooseModule.forRoot('mongodb+srv://jorgelaj:<admin123>@cluster0.jcmqn5m.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController, TareasController],
  providers: [AppService, TareasService, TareasService],
})
export class AppModule {}
