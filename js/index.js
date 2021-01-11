// Iteration 1: Names and Input
var hacker1 = "Anna";
console.log(`The driver's name is `+ hacker1);
var hacker2 = "Aleksandra";
console.log(`The navigator's name is `+ hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
 } else if (hacker2.length > hacker1.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
 } else {
   console.log(`Wow, you both have equally long names, ${hacker1.length+hacker2.length} characters!.`);
 }

// Iteration 3: Loops

for (value of hacker1) {
    console.log(value.toUpperCase());
  }

  function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

reverseString(hacker2); // I didn't know how to do it without a function...

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }



