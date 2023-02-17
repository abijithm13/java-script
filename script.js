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
