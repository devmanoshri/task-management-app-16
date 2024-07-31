import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return '../assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id)
  }
}
