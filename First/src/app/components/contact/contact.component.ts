import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  link: string = "https://google.com";
  imgPath = "/images/Capture1.png";
  isAdmin: boolean = true;
  userName: string = 'mohammed same';
  test(event?: PointerEvent | null) {
    console.log(event);
  }

  printKey(event: KeyboardEvent) {
    console.log("key pressed is:", event.key)
  }
  onPressedK() {
    console.log("Key 'shift +k' is pressed")
  }

  flag: boolean = true;
  changeImg() {
    //toggle
    if (this.flag == true) {
      this.imgPath = "/images/abedComment.png"
    }
    else {
      this.imgPath = "/images/Capture1.png";
    }

    this.flag = !this.flag;
  }
}
