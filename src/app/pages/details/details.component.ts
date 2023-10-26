import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { DetailsResponse } from 'src/app/interfaces/movie.interface';
import { BaseurlPipe } from 'src/app/pipes/baseurl.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule, BaseurlPipe],
  providers: [MovieService],
})
export class DetailsComponent implements OnInit {
  public movieId: string = '';
  details$: Observable<DetailsResponse> = of();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('movieId')!;
    this.getDetails(this.movieId);
  }

  private getDetails(moveId: string) {
    this.details$ = this.movieService
      .getDetails(moveId)
      .pipe(map((data) => data));
  }
}
