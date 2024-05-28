import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared-services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../model/movies';
import { BudgetFormatterPipe } from '../pipes/budget-formatter.pipe';
import { DurationConverterPipe } from '../pipes/duration-converter.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    BudgetFormatterPipe,
    DurationConverterPipe,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie_id: string = '';
  movie: MovieDetails = {
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  };
  erroMessage: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _moviesService: MoviesService) {

  }
  ngOnInit(): void {
    this._route.params.subscribe((movie_id) => {
      this.movie_id = movie_id['movieId'];
      this.getMovieById();
    });
  }

  getMovieById() {
    this._moviesService.getMovieById(this.movie_id).subscribe((response) => {
      this.movie = response;
    },
      (err) => {
        this.erroMessage = err.error.error.message || err.message;
      })
  }

  backToHome():void{
    this._router.navigate(['/movies']);
  }

}
