import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user!: User;
  @Output() select = new EventEmitter();
  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    return '../assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
