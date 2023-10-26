import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baseurl',
  standalone: true,
})
export class BaseurlPipe implements PipeTransform {
  transform(value: string | null): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w400/';
    return baseUrl + value;
  }
}
