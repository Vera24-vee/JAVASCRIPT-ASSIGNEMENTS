/*no.1
let now = new Date();
let year = now.getFullYear();
console.log(year);
let month = now.getMonth();
console.log(month);
let date = now.get Date();
console.log(date);
let day = now.getDay();
console.log(day);
let hours = now.getHours();
console.log(hours);
let minutes = now.getMinutes();
console.log(minutes);
let secondsSinceEpoch = Math.floor(now.getTime() / 1000);
console.log(secondsSinceEpoch);
*/

/*no.2
// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for user input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*Calculate the Area of a Triangle

// Ask the user for the base of the triangle
rl.question("Enter base: ", (base) => {
  // Ask the user for the height of the triangle
  rl.question("Enter height: ", (height) => {
    // Convert the input strings to numbers
    base = parseFloat(base);
    height = parseFloat(height);

    // Calculate the area of the triangle
    let area = 0.5 * base * height;

    // Display the result
    console.log(`The area of the triangle is ${area}`);

    // Close the readline interface
    rl.close();
  });
}); 


//  Calculate the Perimeter of a Triangle

// Ask the user for the length of side a
rl.question("Enter side a: ", (a) => {
  // Ask the user for the length of side b
  rl.question("Enter side b: ", (b) => {
    // Ask the user for the length of side c
    rl.question("Enter side c: ", (c) => {
      // Convert the input strings to numbers
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);

      // Calculate the perimeter of the triangle
      let perimeter = a + b + c;

      // Display the result
      console.log(`The perimeter of the triangle is ${perimeter}`);

      // Close the readline interface
      rl.close();
    });
  });
});  */

 


/*no.3
 a. Rectangle Area and Perimeter
const readline = require('readline'); // Import the readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter length: ", (length) => {
  rl.question("Enter width: ", (width) => {
    // Convert input strings to numbers
    length = parseFloat(length);
    width = parseFloat(width);
    // Calculate area and perimeter
    const area = length * width;
    const perimeter = 2 * (length + width);
    // Display the results
    console.log(`Area: ${area}`);
    console.log(`Perimeter: ${perimeter}`);
    rl.close();
  });
});

// b. Circle Area and Circumference
const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl2.question("Enter radius: ", (radius) => {
  radius = parseFloat(radius);
  const pi = 3.14;
  const area = pi * radius * radius;
  const circumference = 2 * pi * radius;
  console.log(`Area: ${area}`);
  console.log(`Circumference: ${circumference}`);
  rl2.close();
});

// c. Slope, X-intercept, and Y-intercept
const slope = 2; // Slope is the coefficient of x
const yIntercept = -2; // Y-intercept is the constant term
const xIntercept = 1; // X-intercept is found by setting y = 0
console.log(`Slope: ${slope}`);
console.log(`X-intercept: ${xIntercept}`);
console.log(`Y-intercept: ${yIntercept}`);

// d. Slope Between Two Points
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const slopeD = (y2 - y1) / (x2 - x1);
console.log(`Slope: ${slopeD}`);

// e. Compare Slopes
const slopeC = 2; 
const slopeE = (10 - 2) / (6 - 2); 
if (slopeC === slopeE) {
  console.log("The slopes are equal.");
} else {
  console.log("The slopes are different.");
}

// f. Calculate Y for Different X
function calculateY(x) {
  return x * x + 6 * x + 9;
}
console.log(`y for x = -3: ${calculateY(-3)}`);
console.log(`y for x = 0: ${calculateY(0)}`);
console.log(`y for x = 1: ${calculateY(1)}`);  

//no.3 to appear in browser
// a: Area of a Triangle

// Get user input for base and height
let base = parseFloat(prompt("Enter base: "));
let height = parseFloat(prompt("Enter height: "));

// Calculate the area
let area = 0.5 * base * height;

// Print the result
alert(`The area of the triangle is ${area.toFixed(2)}`);

// b: Perimeter of a Triangle

// Get user input for sides a, b, and c
let sideA = parseFloat(prompt("Enter side a: "));
let sideB = parseFloat(prompt("Enter side b: "));
let sideC = parseFloat(prompt("Enter side c: "));

// Calculate the perimeter
let perimeter = sideA + sideB + sideC;

// Print the result
alert(`The perimeter of the triangle is ${perimeter.toFixed(2)}`);

 


  //no.4
  // a: Calculate Weekly Earnings
let hours = prompt("Enter hours:");
let ratePerHour = prompt("Enter rate per hour:");
let earnings = parseFloat(hours) * parseFloat(ratePerHour);
alert("Your weekly earning is $" + earnings.toFixed(2));

// b: Check Name Length
let name = prompt("Enter your name:");
if (name.length > 7) {
  alert("Your name is long.");
} else {
  alert("Your name is short.");
}

// c: Compare First and Last Name Length
let firstName = 'Doctors';
let lastName = 'Strange';
if (firstName.length > lastName.length) {
  alert(`Your first name, ${firstName} is longer than your family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
  alert(`Your family name, ${lastName} is longer than your first name, ${firstName}.`);
} else {
  alert("Your first name and family name have the same length.");
}
  */

/*no.5
// Get the current year
const currentYear = new Date().getFullYear();

// Prompt the user for their birth year
const birthYear = parseInt(prompt("Enter your birth year: "));

// Calculate the user's age
const age = currentYear - birthYear;

// Check if the user is 18 or older
if (age >= 18) {
  console.log(`You are ${age} years old. You are old enough to drive.`);
} else {
  // Calculate the number of years until the user is 18
  const yearsUntil18 = 18 - age;
  console.log(`You are ${age} years old. You will be allowed to drive after ${yearsUntil18} years.`);
// }   

//no.6
/* Part 1: Calculate Seconds Lived
const years = parseInt(prompt("Enter number of years you have lived:"));
const seconds = years * 365.25 * 24 * 60 * 60;
console.log(`You have lived approximately ${seconds.toFixed(0)} seconds.`);   

// Part 2: Human-Readable Time Formats
const now = new Date();

// Format 1: YYYY-MM-DD HH:mm
const format1 = now.toISOString().slice(0, 16).replace('T', ' ');
console.log("YYYY-MM-DD HH:mm:", format1);

// Format 2: DD-MM-YYYY HH:mm
const format2 = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log("DD-MM-YYYY HH:mm:", format2);

// Format 3: DD/MM/YYYY HH:mm
const format3 = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
console.log("DD/MM/YYYY HH:mm:", format3);  */


//no.7
// Format a date as YYYY-MM-DD HH:mm
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Example usage
const now = new Date();
const formattedDate = formatDate(now);
console.log(formattedDate);

const specificDate = new Date(2020, 0, 2, 7, 5);
const formattedSpecificDate = formatDate(specificDate);
console.log(formattedSpecificDate);


