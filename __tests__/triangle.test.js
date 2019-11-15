import { AgeCalculator } from './../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly create object for users age', () => {
    var ageCalculator = new AgeCalculator(24);
    excpect(ageCalculator.earthYears).toEqual(24);
  });

});