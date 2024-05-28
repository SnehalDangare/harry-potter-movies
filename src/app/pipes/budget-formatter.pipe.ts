import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budgetFormatter',
  standalone: true
})
export class BudgetFormatterPipe implements PipeTransform {

  transform(value: string): string {
    return  '$' + value + ' million'; ;
  }

}
