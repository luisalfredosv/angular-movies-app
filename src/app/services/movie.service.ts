import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_ENDPOINT = 'https://api.themoviedb.org/3';

  constructor(private readonly http: HttpClient) {}

  getNowPlaying() {
    return this.http.get(`${this.API_ENDPOINT}/movie/now_playing`);
  }

  getPopular() {
    return this.http.get(`${this.API_ENDPOINT}/movie/popular`);
  }

  gerTopRelated() {
    return this.http.get(`${this.API_ENDPOINT}/movie/top_rate`);
  }

  getUpcoming() {
    return this.http.get(`${this.API_ENDPOINT}/movie/upcoming`);
  }

  getDetails(movieId: string) {
    return this.http.get(`${this.API_ENDPOINT}/movie/${movieId}`);
  }

  getRecommendations(movieId: string) {
    return this.http.get(
      `${this.API_ENDPOINT}/movie/${movieId}/recommendations`
    );
  }

  getSimilar(movieId: string) {
    return this.http.get(`${this.API_ENDPOINT}/movie/${movieId}/similar`);
  }

  getTrending(time: 'day' | 'week' = 'week') {
    return this.http.get(`${this.API_ENDPOINT}/trending/movie/${time}`);
  }

  getSearch({ term }: { term: string }) {
    const querySearch = `query=${term}&include_adult=true`;
    return this.http.get(`${this.API_ENDPOINT}/search/movie?${querySearch}`);
  }
}
