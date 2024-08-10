import { NgFor } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
//import {Tasks} from './dummy-tasks'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getSelectedUserTasks(this.id);
  }

  completedTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancel() {
    this.isAddingTask = false;
  }
  onAddNewTask(taskData: NewTaskData) {
    this.taskService.addTask(taskData, this.id);
    this.isAddingTask = false;
  }
}
