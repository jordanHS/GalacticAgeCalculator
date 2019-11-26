import { AgeCalculator } from '../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly test for value the current  date', function () {
    var ageCalculator = new AgeCalculator(25-11-2019, 1-11-1995);
    expect(ageCalculator.currentDate).toEqual(25-11-2019);
  });
  
  test('should correctly test for date of birth', function () {
    var ageCalculator = new AgeCalculator(25-11-2019, 1995-11-1);
    expect(ageCalculator.dateOfBirth).toEqual(1995-11-1);
  });
  test('should correctly calculate users age', function () {
    var ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.userAge()).toEqual(24);
  });
});
