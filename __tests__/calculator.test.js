import { AgeCalculator } from '../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly test for value the current day' , function () {
    var ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.currentDay).toEqual(24);
  });
  test('should correctly test for value the current month number' , function () {
    var ageCalculator = new AgeCalculator(11);
    expect(ageCalculator.currentMonthNum).toEqual(11);
  });
  test('should correctly test for value the current year' , function () {
    var ageCalculator = new AgeCalculator(2019);
    expect(ageCalculator.currentYear).toEqual(2019);
  });
  // test('should correctly test for day of birth', function () {
  //   var ageCalculator = new AgeCalculator(1);
  //   expect(ageCalculator.birthday).toEqual(1);
  // });
});