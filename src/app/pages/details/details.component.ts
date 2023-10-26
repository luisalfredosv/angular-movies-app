import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule],
  providers: [MovieService],
})
export class DetailsComponent implements OnInit {
  public movieId: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('movieId')!;
  }
}
