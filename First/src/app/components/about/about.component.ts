import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
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
}
