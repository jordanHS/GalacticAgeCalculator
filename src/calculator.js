export class AgeCalculator {
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
}                                         

  Mercury(age) {
  const earthYearDays = 365;
  let mercuryYear = earthYearDays * .24;
  return ((mercuryYear * 24) / 21.11).toFixed(1);
}

  Venus(age) {
    const earthYearDays = 365;
    let venusYear = earthYearDays * .62;
    return ((venusYear * 24)/ 139.26).toFixed();
  }

  Mars() {
    const earthYearDays = 365;
    let marsYear = earthYearDays * 1.88;
    return ((marsYear * 24) / 1296.76).toFixed(1);
  }    

  Jupiter() {
    const earthYearDays = 365;
    let jupiterYear = earthYearDays * 11.86;
    return((jupiterYear * 24) / 51432.48).toFixed(2);
  }

}




