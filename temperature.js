//Ask user to enter a metric that they want to convert.
let metricToConvert = prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin`);

//Makes the user input an uppercase.
const metricToConvertUpper = metricToConvert.toUpperCase()

//This is the main if statement.
//Checks if the user input is a valid metric.
if (metricToConvertUpper === "C" || metricToConvertUpper === "F" || metricToConvertUpper === "K") {

//If user input is a valid then it will ask user to enter a number they'd like to convert.
  let tempNum = Number(prompt("Please enter the number you would like to convert: "));

//These variables define all the possible conversion calculations.
const cToF = (tempNum * 9) / 5 + 32;
const cToK = tempNum + 273.15;
const fToC = ((tempNum - 32) * 5) / 9;
const fToK = ((tempNum + 459.67) * 5) / 9;
const kToC = tempNum - 273.15;
const kToF = (tempNum * 9) / 5 - 459.67;

//First nested If statment.
//If the number that the user entered is equal to a number then it will ask the user to choose a metric they want to convert to.
  if (!isNaN(tempNum)) {
      let convertToMetric = prompt(`To which metric would you like to convert the temperature?
C - Celsius
F - Fahrenheit
K - Kelvin`);

//Makes the user input an uppercase.
const convertToMetricUpper = convertToMetric.toUpperCase();

//Second nested if statement.
//This checks if the user input is valid.
    if (convertToMetricUpper === "C" || convertToMetricUpper === "F" || convertToMetricUpper === "K") {

    //Third nested if statement.
      //If the user input is valid, this if statement will initialise and will do the conversion calculations based on what the user chose in the previous prompts.
        if ((metricToConvertUpper === "C" ) && (convertToMetricUpper === "F" )) {
        console.log(tempNum + "\xB0C is " + cToF + "\xB0F.");                       //<--- Using this if statment as an example, it will calculate Celsius into Fahrenheit.
      } 
      
      else if ((metricToConvertUpper === "C") && (convertToMetricUpper === "K" )) {
        console.log(tempNum + "\xB0C is " + cToK + "K.");
      } 
      
      else if ((metricToConvertUpper === "F") && (convertToMetricUpper === "C")) {
        console.log(tempNum + "\xB0F is " + fToC + "\xB0C.");
      } 
      
      else if ((metricToConvertUpper === "F" ) && (convertToMetricUpper === "K" )) {
        console.log(tempNum + "\xB0F is " + fToK + "K.");
      } 
      
      else if ((metricToConvertUpper === "K" ) && (convertToMetricUpper === "C" )) {
        console.log(tempNum + "K is " + kToC + "\xB0C.");
      } 
      
      else if ((metricToConvertUpper === "K" ) && (convertToMetricUpper === "F")) {
        console.log(tempNum + "K is " + kToF + "\xB0F.");
      } 
//Third nested if statement's else statement.      
//If the user chooses the same metric they chose in the first prompt then it will print out what is below.    
      else {                                                                                                                   
        console.log(`You tried to convert into the same temperature metric.
Please try again.`);
      }
    } 

//Second nested if statement's else statement.    
//If the user entered an invalid metric then it will print out what is below.  
    else {
       console.log(`This is not a valid temperature metric.
Please enter either C, F or K.`);
    }
  } 

//First nested if statement's else statement.
//If the user didn't enter a number (for example, if they entered "g") then it will print out what is below.
  else {
    console.log("This is not a valid number.");
  }
} 

//Main if statement's else statement.
//If the user did not enter a valid input in the first prompt then it will print out what is below.
else {
  console.log(`This is not a valid temperature metric.
Please enter either C, F or K.`);
}

/*I used this resource to get the correct formatting for Celsius and Fahrenheit (°C and °F): 
w3resource. 2020. JavaScript basic: Convert temperatures to and from celsius, fahrenheit - w3resource. [online] Available at: <https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-11.php> [Accessed 12 November 2021].

I used these resources to find out if I can place an if statement inside of another if statement and how it would look:
GeeksforGeeks. 2021. if-else Statement in JavaScript - GeeksforGeeks. [online] Available at: <https://www.geeksforgeeks.org/if-else-statement-in-javascript/> [Accessed 12 November 2021].
Watt, Q., 2021. Javascript beginner tutorial 17 - nesting if statements. [online] Youtube.com. Available at: <https://www.youtube.com/watch?v=D8-VEJAhhag> [Accessed 12 November 2021].*/

