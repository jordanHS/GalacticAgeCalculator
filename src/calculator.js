
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
      return venusAge.toFixed(1) - lifeExpectancy;
      }
    }

  MarsYears() {
    const age = this.currentYear - this.birthYear;
    const marsAge = age / 1.88;
    return marsAge.toFixed(2);
    }    

  MarsExpectancy() {
    const age = this.currentYear - this.birthYear;
    const marsAge = age / 1.88;
    let lifeExpectancy = 41.86;
    if (lifeExpectancy > marsAge) {
      return lifeExpectancy - marsAge.toFixed(2);
    } else {
      return marsAge.toFixed(2) - lifeExpectancy;
    }
  }
    
  JupiterYears() {
    const age = this.currentYear - this.birthYear;
    const jupiterAge = age / 11.86;
    return jupiterAge.toFixed(2);
  }

  JupiterExpectancy() {
    const age = this.currentYear - this.birthYear;
    const jupiterAge = age / 11.86;
    let lifeExpectancy = 6.63;
    if (lifeExpectancy > jupiterAge) {
      return lifeExpectancy - jupiterAge.toFixed(1);
    } else {
      return jupiterAge.toFixed(1) - lifeExpectancy;
    }
  }

}
