import { AgeCalculator } from './../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly create object for users age', () => {
    var ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.earthYears).toEqual(24);
  });

});