import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { slideIndex, plusSlides, currentSlide, showSlides } from '../../../assets/ts/carousel';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

}

export let slideIndex: number = 1;

showSlides(slideIndex);

setInterval(() => {
  showSlides(slideIndex += 1);
}, 4000);

export function plusSlides(n: number): void {
  showSlides(slideIndex += n);
}

export function currentSlide(n: number): void {
  showSlides(slideIndex = n);
}

export function showSlides(n: number): void {
  const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("carousel");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i: number = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    slide.style.display = "none";
  }
  (slides[slideIndex - 1] as HTMLElement).style.display = "block";
}





