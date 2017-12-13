import { MeanArrayPipe } from './mean-array.pipe';

describe('MeanArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new MeanArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
