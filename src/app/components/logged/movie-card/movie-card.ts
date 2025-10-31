import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [NgIf],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';
  @Input() ageRating: string = '';
  @Input() approvalRating: number = 0;
  @Input() providerLogoUrl: string = '';
  @Input() isTop10: boolean = false;

  
}
