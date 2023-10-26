import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DetailsResponse,
  NowPlayingResponse,
  PopularResponse,
  RecommendationsResponse,
  SearchResponse,
  SimilarResponse,
  TopRatedResponse,
  TrendingResponse,
  UpcomingResponse,
} from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_ENDPOINT = 'https://api.themoviedb.org/3';

  constructor(private readonly http: HttpClient) {}

  getNowPlaying() {
    return this.http.get<NowPlayingResponse>(
      `${this.API_ENDPOINT}/movie/now_playing`
    );
  }

  getPopular() {
    return this.http.get<PopularResponse>(`${this.API_ENDPOINT}/movie/popular`);
  }

  gerTopRated() {
    return this.http.get<TopRatedResponse>(
      `${this.API_ENDPOINT}/discover/movie?include_adult=false`
    );
  }

  getUpcoming() {
    return this.http.get<UpcomingResponse>(
      `${this.API_ENDPOINT}/movie/upcoming`
    );
  }

  getDetails(movieId: string) {
    return this.http.get<DetailsResponse>(
      `${this.API_ENDPOINT}/movie/${movieId}`
    );
  }

  getRecommendations(movieId: string) {
    return this.http.get<RecommendationsResponse>(
      `${this.API_ENDPOINT}/movie/${movieId}/recommendations`
    );
  }

  getSimilar(movieId: string) {
    return this.http.get<SimilarResponse>(
      `${this.API_ENDPOINT}/movie/${movieId}/similar`
    );
  }

  getTrending(time: 'day' | 'week' = 'week') {
    return this.http.get<TrendingResponse>(
      `${this.API_ENDPOINT}/trending/movie/${time}`
    );
  }

  getSearch({ term }: { term: string }) {
    const querySearch = `query=${term}&include_adult=true`;
    return this.http.get<SearchResponse>(
      `${this.API_ENDPOINT}/search/movie?${querySearch}`
    );
  }
}
