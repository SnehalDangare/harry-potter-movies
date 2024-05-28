import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { BudgetFormatterPipe } from '../pipes/budget-formatter.pipe';
import { DurationConverterPipe } from '../pipes/duration-converter.pipe';
import { FilterMoviePipe } from '../pipes/filter-movie.pipe';
import { Movie } from '../model/movies';
import { MoviesService } from '../shared-services/movies.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    BudgetFormatterPipe,
    DurationConverterPipe,
    FilterMoviePipe
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[] = [];
  movieTitle: string = '';
  releaseYear: number | undefined;
  erroMessage: string = '';
  constructor(private _moviesService: MoviesService){

  }

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList(){
     this._moviesService.getMoviesList().subscribe((response) => {
      this.moviesList = response;
     },
     (err) => {
      console.log(err);
      this.erroMessage = err.error.error.message || err.message;
    })
  }


}
