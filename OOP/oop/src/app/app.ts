import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './cors/models/emplyee';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('oop');
  emp1 = new Employee(3, 'alaa', 800);
  emp2 = new Employee(2, 'rahaf', 1500);
  emp3 = new Employee(1, 'Yara', 2000);

}
