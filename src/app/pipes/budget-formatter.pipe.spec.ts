import { BudgetFormatterPipe } from './budget-formatter.pipe';

describe('BudgetFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new BudgetFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
