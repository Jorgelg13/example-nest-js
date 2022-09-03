import { Injectable } from '@nestjs/common';
import { Tareas } from './interfaces/task';
@Injectable()
export class TareasService {
  tareas: Tareas[] = [
    {
      id: 1,
      title: 'titulo',
      descripcion: 'test',
      done: true,
    },
    {
      id: 2,
      title: 'titulo 2',
      descripcion: 'test',
      done: true,
    },
    {
      id: 3,
      title: 'titulo 3',
      descripcion: 'test',
      done: true,
    },
  ];

  getTareas(): Tareas[] {
    return this.tareas;
  }

  getTarea(id): Tareas {
    return this.tareas.find((x) => x.id === id);
  }
}
