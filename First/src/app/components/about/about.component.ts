import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";
import { MyBtnComponent } from "../my-btn/my-btn.component";
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-about',
  imports: [AlertComponent, MyBtnComponent, ChildComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild('heading') myTemp !: ElementRef;
  @Input() salary: string = "";
  // data: { id: number, name: string, model: number, description: string, imgSrc: string, isSold: boolean }[] = [
  //   {
  //     id: 1,
  //     name: "Mercedes",
  //     model: 2019,
  //     description: "Mercedes that was made in 2019",
  //     imgSrc: "/images/mercedes.png",
  //     isSold: false
  //   }
  //   ,
  //   {
  //     id: 2,
  //     name: "Porche",
  //     model: 2022,
  //     description: "Porche that was made in 2022",
  //     imgSrc: "/images/porche.png",
  //     isSold: true
  //   },
  //   {
  //     id: 3,
  //     name: "Jetour",
  //     model: 2024,
  //     description: "Jetour that was made in 2024",
  //     imgSrc: "/images/jetour.png",
  //     isSold: false
  //   },

  // ]
  // index: number = 0;

  // selectedObj: { id?: number, name?: string, model?: number, description?: string, imgSrc?: string, isSold?: boolean } = this.data[0]

  // cardDetails(sign: number) {
  //   this.index += sign;
  //   if (this.index < 0) {
  //     this.index = this.data.length - 1;
  //   }
  //   if (this.index > this.data.length - 1) {
  //     this.index = 0;
  //   }
  //   this.selectedObj = {
  //     id: this.data[this.index].id,
  //     name: this.data[this.index].name,
  //     model: this.data[this.index].model,
  //     description: this.data[this.index].description,
  //     imgSrc: this.data[this.index].imgSrc,
  //     isSold: this.data[this.index].isSold
  //   }


  // }

  // username: string = "Ahmad Kahlil Alqudah";
  // dataFromChild: string = '';
  // valueFromTRV !: HTMLHeadingElement;

  // @ViewChild('heading') element !: ElementRef;
  // @ViewChildren('pag1') elements !: QueryList<ElementRef>
  // test(): void {
  //   console.log(this.elements);

  // }

  constructor() {
    console.log(" %cHello Constructor ", 'color:green');
    console.log("my temp in constructor is : ", this.myTemp);
  }
  ngDoCheck(): void {
    console.log('%c Hello ngDoCheck ', 'color:#c29f3f');
    console.log("my temp in ngDoCheck is : ", this.myTemp);
  }
  ngAfterContentInit(): void {
    console.log('%c Hello ngAfterContentInit ', 'color:#ec414f');
    console.log("my temp in ngAfterContentInit is : ", this.myTemp);
  }
  ngAfterContentChecked(): void {
    console.log('%c Hello ngAfterContentChecked ', 'color:#79e91e');
    console.log("my temp in ngAfterContentChecked is : ", this.myTemp);
  }
  ngAfterViewChecked(): void {
    console.log('%c Hello ngAfterViewChecked ', 'color:#667043');
    console.log("my temp in ngAfterViewChecked is : ", this.myTemp);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c Hello ngOnChanges ', 'color:blue');
    console.log("my temp in ngOnChanges is : ", this.myTemp);
  }
  ngOnInit(): void {
    console.log('%c Hello ngOnInit ', 'color:yellow');
    console.log("my temp in ngOnInit is : ", this.myTemp);
  }
  ngAfterViewInit() {
    console.log("%cHello ngAfterViewInit", 'color:pink');
    console.log("my temp in ngAfterViewInit is : ", this.myTemp);
  }
  ngOnDestroy(): void {
    console.log("%cHello ngOnDestroy", 'color:#8d63b4');
    console.log("my temp in ngOnDestroy is : ", this.myTemp);
  }
}
