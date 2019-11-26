
export class AgeCalculator {
  constructor(currentYear, birthYear) {
    this.currentYear = currentYear;
    this.birthYear = birthYear;
  }          

 userAge() {
   const age = this.currentYear - this.birthYear
    return age;
  }

  userLifeExpectancy() {
    const avExpectancy = 78.69;
    const age = this.currentYear - this.birthYear;
   return avExpectancy - age;
  }


//   Mercury(age) {
//   const earthAge = age;
//   let mercuryYear = .24;
//   return (age / mercuryYear).toFixed(1);
// }

//   Venus() {
//     const earthYearDays = 365;
//     let venusYear = earthYearDays * .62;
//     return ((venusYear * 24)/ 139.26).toFixed();
//   }

//   Mars() {
//     const earthYearDays = 365;
//     let marsYear = earthYearDays * 1.88;
//     return ((marsYear * 24) / 1296.76).toFixed(1);
//   }    

//   Jupiter() {
//     const earthYearDays = 365;
//     let jupiterYear = earthYearDays * 11.86;
//     return((jupiterYear * 24) / 51432.48).toFixed(2);
//   }



}
