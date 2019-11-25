import { AgeCalculator } from '../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly test for value the current day' , function () {
    var ageCalculator = new AgeCalculator(1);
    expect(ageCalculator.currentDay).toEqual(1);
  });

});