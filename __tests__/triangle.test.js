import { AgeCalculator } from './../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly create object for users age', () => {
    var ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.earthAge).toEqual(24);
});
  test('should correctly convert age into days', () => {
  var ageCalculator = new AgeCalculator(8760);
  expect(ageCalculator.earthAge).toEqual(8760)
});



});