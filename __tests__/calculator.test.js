import { AgeCalculator } from '../src/calculator';

describe('AgeCalculator', () => {
  
  test('should retrieve the current day', function () {
    var ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.currentDay).toEqual(24);
});
  // test('should correctly test for value of users date of birth' , function () {
  //   var ageCalculator = new AgeCalculator(11, 1, 1995);
  //   expect(ageCalculator.dateOfBirth).toEqual(11, 1, 1995);
  // });
//   test('should correctly convert age into mercury years', function () {
//     var ageCalculator = new AgeCalculator(99.6);
//     expect(ageCalculator.Mercury()).toEqual("99.6");
// });
//   test('should correctly convert age into venus years', function () {
//     var ageCalculator = new AgeCalculator(39);
//     expect(ageCalculator.Venus()).toEqual("39");
//   });
//   test('should correctly convert age into mars years', function () {
//     var ageCalculator = new AgeCalculator(12.7);
//     expect(ageCalculator.Mars()).toEqual("12.7");
//   });
//   test('should correctly convert age into jupiter years', function () {
//     var ageCalculator = new AgeCalculator(2.02);
//     expect(ageCalculator.Jupiter()).toEqual("2.02");
//   });
  // test('should determine how many years the user has left on earth', function () {
  //   var ageCalculator = new AgeCalculator(54.69);
  //   expect(ageCalculator.LifeExpectancy()).toEqual("54.69");
  // });

});