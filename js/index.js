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

// Bonus 1

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec interdum odio, non mattis neque. Duis vulputate mi ac laoreet elementum. Aenean at accumsan odio. Proin sit amet dignissim ipsum, convallis commodo odio. Nunc non est vehicula, lobortis justo vel, commodo quam. Suspendisse ultricies justo felis, scelerisque scelerisque quam gravida vitae. Etiam sed fringilla nisi. Sed non auctor lectus, id lobortis quam. Etiam eget varius urna. Aenean enim libero, eleifend eu consectetur a, tempus sit amet nibh. Fusce dapibus tristique mi sed ullamcorper. Mauris ut leo in ipsum bibendum fringilla. Pellentesque ut sagittis sapien. Pellentesque placerat mauris accumsan pharetra suscipit. Pellentesque dui ipsum, eleifend sed rutrum a, molestie a arcu. Sed ac augue vestibulum nisi molestie feugiat. Aliquam augue sem, consectetur eget magna sed, egestas ornare sapien. Suspendisse aliquet leo metus, eu finibus dui lacinia eget. Fusce eros nisl, rutrum in malesuada ultrices, pharetra semper tellus. Suspendisse nibh est, placerat nec luctus sit amet, lacinia quis ipsum. Maecenas ac elit accumsan, porta enim sed, vulputate diam. Praesent ultricies nisl sit amet commodo imperdiet. Aliquam neque dolor, feugiat quis dolor at, laoreet condimentum odio. Aliquam erat volutpat. Donec quis rhoncus nisi. In at tincidunt neque. Quisque porttitor, ipsum at vulputate facilisis, orci mi semper est, et suscipit leo mi a sapien. Sed orci urna, euismod sit amet ullamcorper quis, euismod a leo. Curabitur tempor sollicitudin lacus sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam a diam et magna ornare congue. Donec condimentum felis tortor, vel lobortis purus dignissim ut. Nulla in imperdiet mauris, ac rutrum augue. Nulla a turpis vitae elit placerat sagittis eu non diam. Phasellus ultrices tellus et ultrices molestie. Aliquam vehicula elementum nunc, ut sodales lorem luctus sit amet.";

function wordCounter(text) {
  return text.split(' ').length;
}

console.log(wordCounter(loremIpsum));

function etCounter(text) {
  return text.split('et').length;
}

console.log(etCounter(loremIpsum));

