import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userName: string = "Reda ";
  userAge: number = 28;
  userSalary: number = 7000;

  test(): string {
    return "anfular course 1 ";
  }

  friends: string[] = [
    "Ahmad", "Ali", "samer", "SAmi"
  ]
}
