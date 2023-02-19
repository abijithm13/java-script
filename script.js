// Data types

const country="India";
console.log(country);

const continent="Asia";
console.log(continent);

let population="89664";
console.log(population);

let island=false;
console.log(typeof island);

let language="language";
console.log(language);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);



// Let , Const and Var

language="tamil";
// const country="India";
// const continent="Asia";
// const island="false";

console.log(language);
console.log(country);
console.log(continent);
console.log(island);


//Basic operators

console.log(population/2);
population++;
console.log(population);
console.log(population>6);
console.log(population<33);

// const description = country +" is in "+ continent + " and its "+ population+ " people speak "+ language;
// console.log(description);


//Coding Challenge #1

//data1

const marksmass = 78;
const marksheight=1.69;
const johnsmass= 92;
const johnsheight=1.76

const marksBMI= marksmass/marksheight **2;
const johnsBMI= johnsmass/johnsheight **2;

const markshigherBMI = marksBMI> johnsBMI;

console.log (marksBMI, johnsBMI, markshigherBMI);

//data2

const marksMass =95;
const marksHeight=1.69;
const johnsMass= 85;
const johnsHeight=1.76;

const marksBmi= marksMass/marksHeight **2;
const johnsBmi= johnsMass/johnsHeight **2;

const marksHigherBmi= marksBmi> johnsBmi;

console.log( marksBmi, johnsBmi, marksHigherBmi);



//Strings and Template Literals

const description = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(description);

//Taking Decisions: if / else Statements

if(population>33){
    console.log(`${country} population is 22 million above average`);
} else{
console.log(`${country} population is ${33- population} million below average`);
}

//Coding Challenge #2

if(marksBMI>johnsBMI){
    console.log(` Marks BMI (${marksBMI .toFixed(2)}) is higher than Johns BMI(${johnsBMI .toFixed(2)}) `)
} else{
    console.log(` Johns BMI (${johnsBMI .toFixed(2)}) is higher than MArks BMI (${marksBMI .toFixed(2)})`)
}


//Type Conversion and Coercion

console.log('9' - '5'); 
console.log('19' - '13' + '17');  
console.log('19' - '13' + 17); 
console.log('123' < 57); 
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Equality Operators: == vs. ===

const numNeighbors = Number (
    prompt('How many neighbor countries does your country have?'),
    );
    
    if (numNeighbors === 1) {
    console.log('Only 1 border!');
    } else if (numNeighbors > 1) {
    console.log('More than 1 border');
    } else {
    console.log('No borders');
    }

    //Logical Operators

if (language === 'tamil' && population < 50 && !isIsland)
{
console.log(`You should live in ${country}`);
} else {
console.log(`${country} does not meet your criteria`);
}


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
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 10) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy');
}