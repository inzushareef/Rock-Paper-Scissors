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
    if (ComputerSelection == PlayerSelection){
        console.log("Both the selections are same. Please Try again!");

    }
    else if((ComputerSelection == "Rock" && PlayerSelection == "Scissors") || (ComputerSelection == "Paper" && PlayerSelection == "Rock") || (ComputerSelection == "Scissors" && PlayerSelection == "Paper")){
        console.log("You loose " + ComputerSelection +" beats "+ PlayerSelection);
    
    }
    else {
        console.log("YOU WIN !!" + PlayerSelection +" beats "+ ComputerSelection );
    }
}

