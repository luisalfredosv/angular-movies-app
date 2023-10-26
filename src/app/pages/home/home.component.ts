import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';
import { Observable, map, of } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, MovieCardComponent],
  providers: [MovieService],
})
export class HomeComponent implements OnInit {
  constructor(private readonly movieService: MovieService) {}

  nowPlaying$: Observable<Movie[]> = of([]);
  popular$: Observable<Movie[]> = of([]);
  topRated$: Observable<Movie[]> = of([]);
  upcoming$: Observable<Movie[]> = of([]);

  ngOnInit(): void {
    this.nowPlaying();
    this.popular();
    this.topRated();
    this.upcoming();
  }

  private nowPlaying() {
    this.nowPlaying$ = this.movieService
      .getNowPlaying()
      .pipe(map((data) => data.results.splice(0, 5)));
  }
  private popular() {
    this.popular$ = this.movieService
      .getPopular()
      .pipe(map((data) => data.results.splice(15)));
  }
  private topRated() {
    this.topRated$ = this.movieService
      .gerTopRated()
      .pipe(map((data) => data.results.splice(20)));
  }
  private upcoming() {
    this.upcoming$ = this.movieService
      .getUpcoming()
      .pipe(map((data) => data.results.splice(20, 28)));
  }

  private filterMovies(
    movies: Movie[],
    movieId: string,
    limit: number
  ): Observable<Movie[]> {
    const filteredMovies = movies.filter((movie) => movie.id === +movieId);
    return of(filteredMovies.slice(0, limit));
  }
}
