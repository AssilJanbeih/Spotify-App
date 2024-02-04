import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popularity-stars',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './popularity-stars.component.html',
  styleUrl: './popularity-stars.component.scss'
})
export class PopularityStarsComponent {
  @Input() popularity: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  totalValue: number = 0;

  ngOnInit() {
    this.fillStar();
  }

  fillStar() {
    if (this.popularity) {
      //Populairty is based on 100 (as per documentation)
      //So the 5 star should adapt the following equation: 
      //Popularity*5/100
      this.totalValue = Math.floor((this.popularity*5)/100);
    }

  }
}
