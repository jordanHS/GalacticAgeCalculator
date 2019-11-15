export class AgeCalculator {
  constructor(age){
    this.age = age;
  }                                         
Mercury(age) {
  const earthYearDays = 365;
  let mercuryYear = earthYearDays * .24
  return ((mercuryYear* age) / 21.11).toFixed(1);

  

}



}




