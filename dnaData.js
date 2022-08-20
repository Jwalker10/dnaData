// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

/* Returns a random single stand of DNA containing 15 bases 
and log to console for testing */
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }

  // test logging newStrand to console
  // console.log(newStrand);

  return newStrand;
};

//object factory
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,

    /* selects random number between 0-14 uses number to access base in array 
    and logs to console for testing */
    mutate() {
      const selectBaseIndex = Math.floor(Math.random() * 15);
      const selectedBase = this.dna[selectBaseIndex];
      
      // test logging selected base and index to console
      // console.log(selectedBase + ', ' + selectBaseIndex);

      let i = 0;
       do {
        const dnaBaseArray = ['A', 'T', 'C', 'G'];
        let mutantBase = dnaBaseArray[Math.floor(Math.random() * 4)];

        // test logging mutant base selected to console
        // console.log(mutantBase);

        if (selectedBase !== mutantBase) {
          i++
          this.dna[selectBaseIndex] = mutantBase;
        }
      } while (i < 1);

      return this.DNA;
      // test logging mutated strand to console
      // console.log(this.dna);
    },
    
    compareDNA(pAequor) {
      let dnaSimilarities = 0;

      for (let b = 0, a = 0; b < pAequor.dna.length, a < this.dna.length; b++, a++) {
          if (pAequor.dna[b] === this.dna[a]) {
            dnaSimilarities++;
          }
        };

      let dnaSimilarity = (dnaSimilarities / pAequor.dna.length) * 100;
      let dnaSimilarityPercentage = dnaSimilarity.toFixed(3);

      /* checks inputs and outputs are correct for accurate percentage of similarity result */
      // console.log(dnaSimilarities);
      // console.log(pAequor.dna.length);
      // console.log(dnaSimilarity);

      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${dnaSimilarityPercentage}% DNA in common`);
    },

    /* calculates likely hood of survival by counting C and G bases and working %, if above 60% survival likely returning true : if not false */
    willLikelySurvive() {
      let advBases = 0;

      for (let c = 0; c < this.dna.length; c++) {
        if (this.dna[c] === 'C' || this.dna[c] === 'G') {
          advBases++;
        }
      };

      let survivalPercentage = (advBases / this.dna.length) * 100;
      return survivalPercentage >= 60 ? true : false;
    }
  }
};

/* unblock all test console logs in code as well, 
testing that change is saved to object stored in variable */
// let pAequor1 = pAequorFactory(1, mockUpStrand());
// console.log(pAequor1.dna);
// pAequor1.mutate();
// console.log(pAequor1.dna);

/* unblock all test console logs in code as well,
testing that comaprison and resulting similarity percentage is correct and accurate*/
// let pAequor1 = pAequorFactory(1, mockUpStrand());
// let pAequor2 = pAequorFactory(2, mockUpStrand());
// pAequor2.compareDNA(pAequor1);

/* unblock all test console logs in code as well,
testing that calculation of C/G bases is accurate and correct boolean value is returned showing likely chance of survival*/
// let pAequor3 = pAequorFactory(3, mockUpStrand());
// console.log(pAequor3.willLikelySurvive());


/* constructs array of 30 pAequor objects that are likely to survive and logs to console
and commented out else statement to test true or false mechanism for survival percentage */
const pAequorArray = [];

const pAequorArrayConstructor = () => {
  let trueOrFalse;

  for (let d = 0; d < 30; d++) {
    pAequorArray.push(pAequorFactory(d, mockUpStrand()));
    trueOrFalse = pAequorArray[d].willLikelySurvive();
    if (trueOrFalse === false) {
      pAequorArray.pop();
      d--;
    }/* else {
      console.log(`${trueOrFalse} ${d}`);
    } */
  };
};

pAequorArrayConstructor();

console.log(pAequorArray);