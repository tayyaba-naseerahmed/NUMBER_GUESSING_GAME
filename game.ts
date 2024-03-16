import inquirer from "inquirer";

type ansType = {
    userGuess: number
}

const systemGeneratedNo = Math.floor(
    Math.random()* 100);

const answer: ansType = await inquirer.prompt([
    {
      type: "number",
      name: "userGuess",
      message: "write your guess:"
}])

const {userGuess} = answer;
if (userGuess === systemGeneratedNo){
    console.log(userGuess,"userGuess", systemGeneratedNo , 'SYs')
    console.log("Yeahh Your Answer Is Correct \n YOU WIN !")
} else{
    console.log("Please try again GOOD LUCK next time!")
}