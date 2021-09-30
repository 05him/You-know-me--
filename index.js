var readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.bgRed.bold("\t\t\t\tWelcome to MARK ONE "));
var ask = readlineSync.question(chalk.underline("To exit press 'e' to continue press any other key "));
if(ask==="e"){
  console.log(chalk.italic("\nThanks for Visiting."));
}
else{

//asking gender 
var score=0;
console.log("\nPlease select your Gender  ");
console.log(chalk.dim("\nFor Male press m"));
console.log(chalk.dim("For Female  press f"));
console.log(chalk.dim ("For Transgender press t"));
var gender = readlineSync.question("");
if(gender ==="m"){
  gender = "Mr.";
}
else if(gender === "f"){
  gender = "Ms."
}
else if(gender === "t"){
  gender = "Mx."
}
else{
  console.log(chalk.italic("Please enter Correct Value\n"));
  process.exit(0);
}

var name = readlineSync.question("Please Enter Your Name ");
console.log("\nWelcome ",chalk.bold.bgRed(gender+name,"\n"));

//function to check the result
function check(question,answer){
var k = readlineSync.question(chalk.strikethrough.underline(question));
if(k===answer){
  console.log(chalk.italic("You are right"));
  score = score +1;
  console.log(chalk.italic("Your Score is : ",score,"\n"));
}

else{
  console.log(chalk.italic("You are wrong"));
  score =score-1;
  console.log(chalk.italic("Your score is : ",score,"\n"));
}
}

//list of questions 
var list =[ questionOne ={
  question : "Do you Know Himashu? ",
  answer : "yes"
},

 questionTwo={
  question : "In which city he  live? ",
  answer : "lucknow"
},
questionThree ={
  question : "His School Name ",
  answer : "smc"
},
questionThree ={
  question : "His birthday Date ",
  answer : "5"
},
questionFour ={
  question : "fav color ",
  answer : "black"
}
]


// using function 
for (var i =0;i<list.length;i++){
  check(list[i].question,list[i].answer);
}
console.log(chalk.inverse.bold("Your Final Score is  ",score));
 }
var highScore = 4
var scoreOwner = "Alex"
if (score > highScore){
  console.log(chalk.bold.bgRed("\nCongratulations!! \n You have beaten the highscore of ",scoreOwner))
  console.log(chalk.dim("For updating highscore you can send Himanshu the screenshot of your score\n"));
}
