
export class AgeCalculator {
  constructor(currentDate, dateOfBirth) {
    this.currentDate = currentDate;
    this.dateOfBirth = dateOfBirth;
  }          

 userAge(currentDate, dateOfBirth) {
  let dateInts = currentDate.split("-")
  let currentYear = dateInts.shift();
  let birthDateInts = dateOfBirth.split("-");
  let birthYear = birthDateInts.shift();
   let age = currentYear - birthYear;
    return age;
  }


//   Mercury(age) {
//   const earthAge = userAge();
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
