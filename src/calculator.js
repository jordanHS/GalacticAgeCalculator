export class AgeCalculator {
  constructor(earthAge, earthYears){
    this.earthAge = earthAge;
  }                                         

Earth(earthAge) {
  const earthYearDays = 365; 
  return earthAge * earthYearDays;
  }

Mercury(earthAge) {
  const earthYearDays = 365;
  let mercuryYearDays = earthYearDays * .24
  return ((mercuryYearDays * earthAge) / 21.11).toFixed(1);

  

}



}




