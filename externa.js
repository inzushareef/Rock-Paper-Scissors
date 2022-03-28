function Captalize(str){
    str = str.toLowerCase();
    const str1 = str.slice(1);
    return str.charAt(0).toUpperCase()+ str1;

}

function ComputerPlay(){
    const arr = ['Rock','Paper','Scissors'];

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
    }
    else {
        //console.log("YOU WIN !!" + PlayerSelection +" beats "+ ComputerSelection );
        result = ("YOU WIN !!" + PlayerSelection +" beats "+ ComputerSelection);
    }
    return result;
}

function game(number){
    for (let i=0 ; i<number; i++){
        let PlayerSelection = prompt("Please Choose your choice from (Rock,Paper,Scissors) :");

        alert((playRound(ComputerPlay(),PlayerSelection)));
    }
}
let number = prompt("Please enter how many rounds of game is this : ");

game(number);