import { AgeCalculator } from './../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly create object for users age', () => {
    var ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.earthYears).toEqual(24);
  });
  test('should correctly convert age to mercury years', () => {
  var ageCalculator = new AgeCalculator(99.8);
  expect(ageCalculator.mercuryAge).toEqual(99.9)
});
});