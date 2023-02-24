// Data types

// const country="India";
// console.log(country);

// const continent="Asia";
// console.log(continent);

// let population="89664";
// console.log(population);

// let island=false;
// console.log(typeof island);

// let language="language";
// console.log(language);

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);



// Let , Const and Var

// language="tamil";
// const country="India";
// const continent="Asia";
// const island="false";

// console.log(language);
// console.log(country);
// console.log(continent);
// console.log(island);


//Basic operators

// console.log(population/2);
// population++;
// console.log(population);
// console.log(population>6);
// console.log(population<33);

// const description = country +" is in "+ continent + " and its "+ population+ " people speak "+ language;
// console.log(description);




//Coding Challenge #1

//data1

// const marksmass = 78;
// const marksheight=1.69;
// const johnsmass= 92;
// const johnsheight=1.76

// const marksBMI= marksmass/marksheight **2;
// const johnsBMI= johnsmass/johnsheight **2;

// const markshigherBMI = marksBMI> johnsBMI;

// console.log (marksBMI, johnsBMI, markshigherBMI);



//data2

// const marksMass =95;
// const marksHeight=1.69;
// const johnsMass= 85;
// const johnsHeight=1.76;

// const marksBmi= marksMass/marksHeight **2;
// const johnsBmi= johnsMass/johnsHeight **2;

// const marksHigherBmi= marksBmi> johnsBmi;

// console.log( marksBmi, johnsBmi, marksHigherBmi);





//Strings and Template Literals

// const description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description);

// //Taking Decisions: if / else Statements

// if(population>33){
//     console.log(`${country} population is 22 million above average`);
// } else{
// console.log(`${country} population is ${33- population} million below average`);
// }



//Coding Challenge #2

// if(marksBMI>johnsBMI){
//     console.log(` Marks BMI (${marksBMI .toFixed(2)}) is higher than Johns BMI(${johnsBMI .toFixed(2)}) `)
// } else{
//     console.log(` Johns BMI (${johnsBMI .toFixed(2)}) is higher than MArks BMI (${marksBMI .toFixed(2)})`)
// }




//Type Conversion and Coercion

// console.log('9' - '5'); 
// console.log('19' - '13' + '17');  
// console.log('19' - '13' + 17); 
// console.log('123' < 57); 
// console.log(5 + 6 + '4' + 9 - 4 - 2);



//Equality Operators: == vs. ===

// const numNeighbors = Number (
//     prompt('How many neighbor countries does your country have?'),
//     );
    
//     if (numNeighbors === 1) {
//     console.log('Only 1 border!');
//     } else if (numNeighbors > 1) {
//     console.log('More than 1 border');
//     } else {
//     console.log('No borders');
//     }



    //Logical Operators

// if (language === 'tamil' && population < 50 && !isIsland)
// {
// console.log(`You should live in ${country}`);
// } else {
// console.log(`${country} does not meet your criteria`);
// }




//Coding Challenge #3

// //Data 1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// } else {
//     console.log('No one wins the trophy');
// }


// //Data Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy');
// }


//Data Bonus 2

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 10) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy');
// }




//Switch statement

// switch (language) {
//   case 'chinese':
//   case 'mandarin':
//   console.log('MOST number of native speakers!');
//   break;

//   case 'spanish':
//   console.log('2nd place in number of native speakers');
//   break;

//   case 'english':
//   console.log('3rd place');
//   break;

//   case 'hindi':
//   console.log('Number 4');
//   break;

//   case 'arabic':
//   console.log('5th most spoken language');
//   break;

//   default:console.log('Great language too :D');
//   }


  //The Conditional (Ternary) Operator

  // console.log(`${country}'s population is ${population > 33 ? 'above' :'below'} average`,);




  //Coding Challenge #4

// const bill = 745;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);




//Functions

// function describeCountry(country, population, capitalCity){
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const descIndia = describeCountry('India', '10', 'Delhi');

// const descPakistan = describeCountry('Pakistan', '5', 'Islamabad');

// const descFinland = describeCountry('Finland', '6','Helsinki');

// console.log(descIndia);
// console.log(descPakistan);
// console.log(descFinland);



//Function Declarations vs. Expressions

// function percentageOfWorld1(population){
//   return (population/7900)*100;
// }

// const perIndia1 = percentageOfWorld1(10);
// const perPakistan1 = percentageOfWorld1(5);
// const perFinland1 = percentageOfWorld1(6);

// console.log(perIndia1);
// console.log(perPakistan1);
// console.log(perFinland1);


// function percentageOfWorld2(population){
//   return (population/7900)*100;
// }
// const perchina2 = percentageOfWorld2(1411);
// const perafrica2 = percentageOfWorld2(121);
// const perjapan2 = percentageOfWorld2(252);

// console.log(perchina2);
// console.log(perafrica2);
// console.log(perjapan2);



//Arrow Functions

// const percentageOfWorld3 = population => (population/7900) *100;

// const perFrance3 = percentageOfWorld3(1555);
// const perLondon3 = percentageOfWorld3(1225);
// const perUSA3 = percentageOfWorld3(2525);

// console.log(perFrance3);
// console.log(perLondon3);
// console.log(perUSA3);

//Functions Calling Other Functions


// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million
//   people, which is about ${percentage}% of the world.`;
//   console.log(description);
//   };
//   describePopulation('India', 10);
//   describePopulation('USA', 2525);

  //Coding Challenge #5

//Data 1

// const calcAverage =(score1, score2, score3) => (score1, score2, score3) / 3;

// const DolphinsScore = (44,23,71);
// const KoalasScore =(65,54,49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins!");
//   }
// };

// const avgDolphins = calcAverage(DolphinsScore);
// const avgKoalas = calcAverage(KoalasScore);

// checkWinner(avgDolphins, avgKoalas);

//Data 2

// const calcAverage =(score1, score2, score3) => (score1, score2, score3) / 3;

// const DolphinsScore2 = (85, 54, 41);
// const KoalasScore2 = (23, 34, 27);
 
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins!");
//   }
// };

// const avgDolphins = calcAverage(DolphinsScore2);
// const avgKoalas = calcAverage(KoalasScore2);

// checkWinner(avgDolphins, avgKoalas);



  //Introduction to Arrays

  // const populations = [100, 141, 3312, 83];
  // console.log(populations.length === 4);
  // const percentages = [
  // percentageOfWorld1(populations[0]),
  // percentageOfWorld1(populations[1]),
  // percentageOfWorld1(populations[2]),
  // percentageOfWorld1(populations[3])
  // ];
  // console.log(percentages);




//Basic Array Operations (Methods)

// const neighbours = ['India', 'China', 'Srilanka'];
// neighbours.push('China');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('Germany')) {
// console.log('Probably not a central Asian country');
// }
// neighbours[neighbours.indexOf('Germany')] = 'Republic of Germany';
// console.log(neighbours);



  
  // code challenge 6


//   function calcTip(bill){
//     if (bill >=50 &&  bill <=300){
//     return bill * 0.15;
// } else {
//   return bill  * 0.2;
// }
//   }

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log('bills:',bills);
// console.log('tips:',tips);

// const totals =[];

// totals.push(bills [0]+ tips[0]);
// totals.push(bills[1]+ tips[1]);
// totals.push(bills[2]+ tips[2]);

// console.log('totals:',totals);


//Introduction to Objects

// const myCountry = {
//   country: 'India',
//   capital: 'Delhi',
//   language: 'Hindi',
//   population: 10,
//   neighbours: ['China', 'Srilanka', 'Pakistan']
//   };


  //DOT VS Bracket Notation

  // console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

  // myCountry.population += 2;
  // myCountry['population'] -= 2;


  //Object Methods

  // const myCountry2 = {
  //   country: 'India',
  //   capital: 'Delhi',
  //   language: 'Hindi',
  //   population: 10,
  //   neighbours: ['China', 'Srilanka', 'Pakistan'],
  //   describe: function() {
  //     console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  //   },
  //   checkIsland: function() {
  //     this.isIsland = (this.neighbours.length === 0) ? true : false;
  //   }
  // };

  // myCountry2.describe();
  // myCountry2.checkIsland();
  // console.log(myCountry2.isIsland);


  //Coding Challenge #7

//   const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//       this.bmi = this.mass / (this.height ** 2);
//       return this.bmi;
//     }
//   };

//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//       this.bmi = this.mass / (this.height ** 2);
//       return this.bmi;
//     }
//   };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//   console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
// }


// //Iterations: The For Loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }



//Looping Arrays, Breaking and Continuing

// const populations = [100, 141, 3312, 83];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   const percentage = percentageOfWorld1(populations[i]);
//   percentages2.push(percentage);
// }

// console.log(percentages2);

//Looping Backwards and Loops in Loops

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   const neighbours = listOfNeighbours[i];
//   for (let j = 0; j < neighbours.length; j++) {
//     const neighbour = neighbours[j];
//     console.log(`Neighbour: ${neighbour}`);
//   }
// }


//The while Loop

const populations = [100, 141, 3312, 83];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [];
let i = 0;
while (i < populations.length) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages.push(percentage);
  i++;
}

console.log(percentages);


//Coding Challenge #8

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const total = bills[i] + tip;
  totals.push(total);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const avg = calcAverage(totals);
console.log(avg);