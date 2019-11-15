export class AgeCalculator {
  constructor(age){
    this.age = age;
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


}




