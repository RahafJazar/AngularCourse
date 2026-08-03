import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() dataFromParent: string = '';
  username: string = 'mohammed same';
  //custom event => emit data to parent component
  @Output() itemEvent: EventEmitter<string> = new EventEmitter()
  fireEvent(): void {
    this.itemEvent.emit(this.username)
  }
}
