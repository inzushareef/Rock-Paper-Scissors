function ComputerPlay(){
    const arr = ['Rock','Paper','Scissors'];

    let index = Math.floor(Math.random()*3);
    //console.log(index);
    return arr[index];  
}