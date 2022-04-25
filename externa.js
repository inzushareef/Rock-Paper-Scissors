
let Playerscore = 0;
let Computerscore = 0;


function Captalize(str){
    str = str.toLowerCase();
    const str1 = str.slice(1);
    return str.charAt(0).toUpperCase()+ str1;

}

function ComputerPlay(){
    const arr = ['Rock','Paper','Scissors'];

    //generates Random number between 0 , 1, 2
    let index = Math.floor(Math.random()*3);
    //console.log(index);
    return arr[index];  
}

function playRound(ComputerSelection,PlayerSelection){
    PlayerSelection = Captalize(PlayerSelection);
    let result;
    if (ComputerSelection == PlayerSelection){
        //console.log("Both the selections are same. Please Try again!");
        result = ("Both the selections are same. Please Try again!");

    }
    else if((ComputerSelection == "Rock" && PlayerSelection == "Scissors") || (ComputerSelection == "Paper" && PlayerSelection == "Rock") || (ComputerSelection == "Scissors" && PlayerSelection == "Paper")){
        //console.log("You loose " + ComputerSelection +" beats "+ PlayerSelection);
        result = ("You loose " + ComputerSelection +" beats "+ PlayerSelection);
        Computerscore++;
    }
    else {
        //console.log("YOU WIN !!" + PlayerSelection +" beats "+ ComputerSelection );
        result = ("YOU WIN !! " + PlayerSelection +" beats "+ ComputerSelection);
        Playerscore++;
    }
    return result;
}
//Logic the plays the round five time. Best of the given number of round wins.
// function game(number){
//     for (let i = 0; i < number; i++){
//         let PlayerSelection = prompt("Please Choose your choice from (Rock,Paper,Scissors) :");

//         alert((playRound(ComputerPlay(),PlayerSelection)) + " Socre as of round " + (i+1) + " are Computer: "+ 
//         Computerscore + " and "+ "Player: "+ Playerscore);
//     }
// }


// let number = prompt("Please enter how many rounds of game do you wish to play : ");
// //console.log(number)
// game(number);

// if (Playerscore > Computerscore){
//     alert("Well You think Computers are Smart ? Nah We make then smart. Congragulations You WIN the Game. You ROCK!");
// }
// else if (Playerscore < Computerscore){
//     alert(" Computers aren't meant to be humiliated by human. Well played! Better luck Next time! ");
// }
// else{
//     alert("You didn't let a computer beat you. Probably that's your Achievement. Try Playing the game !!");
// }


// const btn = document.querySelector('#Rock');
// //console.log(btn.id);
// btn.addEventListener('click', function (e){
//         console.log(e);
//      });
//btn.onclick = () => alert("Hey using JavaScript");

// const btn = document.querySelector('#Rock');
// console.log(btn);
// btn.addEventListener('click', function (e){
//     console.log(e);
// });

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',() => {
        console.log(button.id);
        const result = playRound(ComputerPlay(),button.id);
        alert(result);

    });
});