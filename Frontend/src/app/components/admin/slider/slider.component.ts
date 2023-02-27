import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slides =[
    {url: '../../../../assets/images/bluewoman.jpeg', title:'Books'},
    {url: '../../../../assets/images/Becoming.jpg', title:'Orders'},
    {url: '../../../../assets/images/child reading.jpg', title:'Customers'}

  ]
  currentIndex:number =0;
  getCurrentSlide(){
    return `url('${this.slides[this.currentIndex].url}')`;
  }
  goToNext():void{
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;

  }
  goToPrevious(){
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length-1:this.currentIndex-1;
    this.currentIndex = newIndex;

  }
  goToSlide(slideIndex:number):void{
    this.currentIndex = slideIndex;
  }


}
