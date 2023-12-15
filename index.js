let userMove = "";
let paperbtn = document.getElementById('paper');
let rockbtn = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let resetbtn = document.getElementById('reset');
// paperbtn.addEventListener('click',function () {
//     console.log("paper selected");
// })
// rockbtn.addEventListener('click',function () {
//     console.log("Rock selected");
// })
// scissor.addEventListener('click',function () {
//     console.log("scissor selected");
// })


// console.log(computerChoice);

function genMove(params) {
    let res = "Loose"
    let btnArr = ['Paper','Rock','Scissor']
    let computerChoice = Math.floor(Math.random()*3);
    if (userMove == btnArr[computerChoice]){
        res = "Win"
        console.log(res);
    }
    else{
        console.log("sorry next time");
    }
    console.log("Your choice: ",userMove, "   Comp: ", btnArr[computerChoice]);
}