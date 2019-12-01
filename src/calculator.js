
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
    let lifeExpectancy = 78.69;
    const age = this.currentYear - this.birthYear;
    if (age < lifeExpectancy) {
    return lifeExpectancy - age; 
  } else {
    return age - lifeExpectancy;
  }
}

  MercuryYears() {
  const age = this.currentYear - this.birthYear;
  const mercuryAge = age / .24;
  return mercuryAge;
  }

  MercuryExpectancy() {
    const age = this.currentYear - this.birthYear;
    const mercuryAge = age / .24;
    let lifeExpectancy = 327.88;
    if (lifeExpectancy > mercuryAge) {
    return lifeExpectancy - mercuryAge;
  } else {
    return mercuryAge - lifeExpectancy;
  }
}
  
  VenusYears() {
    const age = this.currentYear - this.birthYear;
    const venusAge = age / .62;
    return venusAge.toFixed(2);
    }

    VenusExpectancy() {
      const age = this.currentYear - this.birthYear;
      const venusAge = age / .62;
      let lifeExpectancy = 126.92;
      if (lifeExpectancy > venusAge) {
        return lifeExpectancy - venusAge.toFixed(1);
      } else {
        return venusAge.toFixed(2) - lifeExpectancy;
      }
    }

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
