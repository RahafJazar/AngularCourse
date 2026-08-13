import { Component, ElementRef, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";
import { MyBtnComponent } from "../my-btn/my-btn.component";
import { ChildComponent } from '../child/child.component';
import { ModelComponent } from "../model/model.component";

@Component({
  selector: 'app-about',
  imports: [AlertComponent, MyBtnComponent, ChildComponent, ModelComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

  @ViewChild(ModelComponent) modeldata !: ModelComponent
  data: { id: number, name: string, model: number, description: string, imgSrc: string, isSold: boolean }[] = [
    {
      id: 1,
      name: "Mercedes",
      model: 2019,
      description: "Mercedes that was made in 2019",
      imgSrc: "/images/mercedes.png",
      isSold: false
    }
    ,
    {
      id: 2,
      name: "Porche",
      model: 2022,
      description: "Porche that was made in 2022",
      imgSrc: "/images/porche.png",
      isSold: true
    },
    {
      id: 3,
      name: "Jetour",
      model: 2024,
      description: "Jetour that was made in 2024",
      imgSrc: "/images/jetour.png",
      isSold: false
    },

  ]
  index: number = 0;

  selectedObj: { id?: number, name?: string, model?: number, description?: string, imgSrc?: string, isSold?: boolean } = this.data[0]

  cardDetails(sign: number) {
    this.index += sign;
    if (this.index < 0) {
      this.index = this.data.length - 1;
    }
    if (this.index > this.data.length - 1) {
      this.index = 0;
    }
    this.selectedObj = {
      id: this.data[this.index].id,
      name: this.data[this.index].name,
      model: this.data[this.index].model,
      description: this.data[this.index].description,
      imgSrc: this.data[this.index].imgSrc,
      isSold: this.data[this.index].isSold
    }


  }

  username: string = "Ahmad Kahlil Alqudah";
  dataFromChild: string = '';
  valueFromTRV !: HTMLHeadingElement;

  @ViewChild('heading') element !: ElementRef;
  @ViewChildren('pag1') elements !: QueryList<ElementRef>
  test(): void {
    console.log(this.elements);

  }
}
