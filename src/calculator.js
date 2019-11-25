export class AgeCalculator {
  constructor(currentDay, currentMonth, currentYear) {
    this.currentDay = currentDay;
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
  }          

 userAge(DOB) {
  let currentDate = new Date();
  let dateOfBirth = new Date(DOB);
  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  let months = currentDate.getMonth() - dateOfBirth.getMonth();
  if (months < 0 || (months === 0 && currentDate.getDate() < dateOfBirth.getDate())) {
    age = age - 1;
  }
  return age
 }
  

  Mercury(age) {
  const earthAge = userAge();
  let mercuryYear = .24;
  return (age / mercuryYear).toFixed(1);
}

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
