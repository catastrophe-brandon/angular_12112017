import { SumArrayPipe } from './sum-array.pipe';

describe('SumArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new SumArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('calculates the sum', () => {
    const pipe = new SumArrayPipe();
    expect(pipe.transform([1, 2, 3 ])).toEqual(6);
  });
});
