import { AgeCalculator } from '../src/calculator';

describe('AgeCalculator', () => {

  test('should correctly create object for users age', () => {
    var ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.age).toEqual(24);
});
  test('should correctly convert age into mercury years', function () {
    var ageCalculator = new AgeCalculator(99.6);
    expect(ageCalculator.Mercury()).toEqual((99.6).toFixed(1));
});
  test('should correctly convert age into venus years', function (){
    var ageCalculator = new AgeCalculator(39);
    expect(ageCalculator.Venus()).toEqual((39).toFixed());
  });

});