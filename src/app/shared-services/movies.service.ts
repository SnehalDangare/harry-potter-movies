import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Movie, MovieDetails } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpclient : HttpClient) { }

  getMoviesList(): Observable<Movie[]> {
    return this._httpclient
    .get<Movie[]>('/movies')
    .pipe(catchError((error) => this.errorHandler(error)));
  }

  getMovieById(movieId: string): Observable<MovieDetails> {
    return this._httpclient
      .get<MovieDetails>('/movies/' + movieId)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  errorHandler(error: Error) {
    return throwError(error);
  }

}
