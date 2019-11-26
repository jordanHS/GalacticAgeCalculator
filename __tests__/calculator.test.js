import { AgeCalculator } from '../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly test for value of current year' , function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.currentYear).toEqual(2019);
  });
  
  test('should correctly test for birth year', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.birthYear).toEqual(1995);
  });
  test('should correctly calculate users age', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.userAge()).toEqual(24);
  });
  test('should determine how many years left the user has', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.userLifeExpectancy()).toEqual(54.69);
  });
  // test('should determine if the user has lived past the life expectancy', function  () {
  //   var ageCalculator = new AgeCalculator(true);
  //   expect(age > 78.69).toBe(true);
  // });
  // test('should convert users age into mercury years', function () {
  //   var ageCalculator = new AgeCalculator()
  // }); 
});

