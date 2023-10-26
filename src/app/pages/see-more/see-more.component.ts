import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-more',
  standalone: true,
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css'],
  imports: [CommonModule],
  providers: [MovieService],
})
export class SeeMoreComponent implements OnInit {
  public sectionName: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.sectionName = this.route.snapshot.paramMap.get('sectionName')!;
  }
}
