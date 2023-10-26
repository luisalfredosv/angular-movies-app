import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
  providers: [MovieService],
})
export class HomeComponent implements OnInit {
  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {}
}
