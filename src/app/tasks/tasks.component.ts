import { NgFor } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { Component, Input } from '@angular/core';
//import {Tasks} from './dummy-tasks'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master in Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  completedTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
