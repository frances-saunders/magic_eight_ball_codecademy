//This script fulfills the project reqs for "Magic Eight Ball" in Codecademy

let userName = "Frances"; //Value of userName can change

userName ? console.log(`Hello ${userName}!`) : console.log("Hello Guest!");

let userQuestion = "Will a Chevy team win the championship?"; //Value of userQuestion can change

console.log(`${userName} asked - "${userQuestion}"`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) { //switch statements determine what the eightBall will return as strings
  case 0:
    eightBall = "It is certain!"
    break;
  case 1:
   eightBall = "It is decidely so!"
    break;
  case 2:
    eightBall = "Reply hazy, try again ..."
    break;
  case 3:
    eightBall = "Cannot predict now ... try again later"
    break;
  case 4:
    eightBall = "Don't bet on it!"
    break;
  case 5:
    eightBall = "My sources say no, unfortunately."
    break;
  case 6:
    eightBall = "Outlook not so good ... "
    break;
  case 7:
    eightBall = "Signs point to YES!"
    break;
}

console.log(`The Magic Eight Ball says - "${eightBall}"`);
