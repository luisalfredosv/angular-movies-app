import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/app/interfaces/movie.interface';
import { BaseurlPipe } from 'src/app/pipes/baseurl.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  imports: [CommonModule, BaseurlPipe, RouterLink],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
