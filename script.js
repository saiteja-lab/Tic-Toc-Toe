let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rst-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container");
let playerX = true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerX){
            box.innerText = "X";
            box.classList.add('x-color');
            playerX = false;
        }
        else{
            box.innerText = "O";
            box.classList.add('o-color');
            playerX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const resetGame = () => {
    playerX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winpattern){
//        console.log(pattern[0],pattern[1],pattern[2]);
//        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 == pos2 && pos2 == pos3){
//                console.log("winner",pos1);
                showWinner(pos1);
            }
        }    
    }
};
newBtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);