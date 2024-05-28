import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movies';

@Pipe({
  name: 'filterMovie',
  standalone: true
})
export class FilterMoviePipe implements PipeTransform {

  transform(
    value: Movie[],
    title: string,
    releaseYear: number | undefined
  ): Movie[] {
    //if filters are empty
    if (
      (title == '' || title == undefined || !title) &&
      (!releaseYear || releaseYear === undefined || releaseYear === null)
    ) {
      return value;
    }

    const tempValue = [...value];
    let filteredValue: Movie[] = [];

    //Both Title and Release_year present
    if (title && releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return (
          val.title.toLowerCase().includes(title.toLowerCase()) &&
          val.release_date.includes(String(releaseYear))
        );
      });
      return filteredValue;
    }

    if (title) {
      filteredValue = tempValue.filter((val) => {
        return val.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    if (releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return val.release_date.includes(String(releaseYear));
      });
    }
    return filteredValue;
  }

}
