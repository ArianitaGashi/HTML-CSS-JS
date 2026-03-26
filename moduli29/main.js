var propgrammingLanguages = ["Javascript", "PHP", "Python"];

console.log(propgrammingLanguages);

var numrat = [1,2,3,4,5,6,7,8,9,10];

console.log(numrat);

console.log(propgrammingLanguages[1]);

// array function

//push add an elemente at the end of the list

propgrammingLanguages.push("Java");

numrat.push(11);

document.write(propgrammingLanguages);

document.write(numrat);

//pop delete the last element

numrat.pop();

console.log(numrat);

//unshift - add an element at the begining of the list

propgrammingLanguages.unshift("C#");

console.log(propgrammingLanguages);

// shift - delete the first element of the list 

propgrammingLanguages.shift();

console.log(propgrammingLanguages);

//splice - cilin pozit, sa elemte, cilen me e shtu

propgrammingLanguages.splice(1, 2, 'Ruby');

console.log(propgrammingLanguages);

//array destructuring

var students = ["Drini", "Rigoni", "Edlira", "Ernes", "Omer"];

var [s1, s2, s3, s4, s5] = students;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);