import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
//import { TasksService } from '../tasks.service';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>()

  //private taskServices = inject(TasksService)

  onCompleteTask(){
    this.complete.emit(this.task.id)
    //this.taskServices.removeTask(this.task.id)
  }
}
