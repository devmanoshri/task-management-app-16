import { DUMMY_USERS } from './dummy-users';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-management-app-16';
  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
