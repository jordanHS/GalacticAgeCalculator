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
  test('should convert users age into mercury years', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.MercuryYears()).toEqual(100);
  }); 
  test('should determine the user life expectancy on mercury', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.MercuryExpectancy()).toEqual(227.88);
  });
  test('should convert the users age into venus years', function() {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.VenusYears()).toEqual("38.71");
  });
  test('should determine the users life expectancy on venus', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.VenusExpectancy()).toEqual(88.22);
  });
  test('should convert the users age into mars years', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.MarsYears()).toEqual("12.77");
  });
  test('should determine the users life expectancy on mars', function() {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.MarsExpectancy()).toEqual(29.09);
  });
  test('should convert the user age into jupiter years', function () {
    var ageCalculator = new AgeCalculator(2019, 1995);
    expect(ageCalculator.JupiterYears()).toEqual("2.02");
  });
});

