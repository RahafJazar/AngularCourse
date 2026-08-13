import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AboutComponent } from '../about/about.component';
import { AlertComponent } from '../alert/alert.component';
import { MyBtnComponent } from "../my-btn/my-btn.component";

@Component({
  selector: 'app-contact',
  imports: [AlertComponent, MyBtnComponent, AboutComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [DataService]
})
export class ContactComponent implements OnInit {
  // link: string = "https://google.com";
  // imgPath = "/images/Capture1.png";
  // isAdmin: boolean = true;
  // userName: string = 'mohammed same';
  // test(event?: PointerEvent | null) {
  //   console.log(event);
  // }

  // printKey(event: KeyboardEvent) {
  //   console.log("key pressed is:", event.key)
  // }
  // onPressedK() {
  //   console.log("Key 'shift +k' is pressed")
  // }

  // flag: boolean = true;
  // changeImg() {
  //   //toggle
  //   if (this.flag == true) {
  //     this.imgPath = "/images/abedComment.png"
  //   }
  //   else {
  //     this.imgPath = "/images/Capture1.png";
  //   }

  //   this.flag = !this.flag;
  // }
  friendsContact: string[] = [];
  private readonly dataService = inject(DataService);
  readonly title: string = 'ff'
  constructor() {

    this.friendsContact = this.dataService.friends;

  }
  ngOnInit(): void {
    this.dataService.friends.pop();


  }


}

