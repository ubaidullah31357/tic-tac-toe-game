let boxes = document.querySelectorAll (".box");
let resetBtn = document.querySelector ("#reset-btn");
let newGameBtn = document.querySelector ("#new-btn");
let msgContainer = document.querySelector (".msg-container");
let msg = document.querySelector ("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes ();
    msgContainer.classList.add ("hide");
    count = 0;
}


let count = 0;
boxes.forEach ((box) => {
    box.addEventListener ("click", () => {
        count++;
    });
});

boxes.forEach((box) => {
    box.addEventListener ("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#11ceb5";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#b0413e";
            turnO = true;
        }
        box.disabled = true;

        checkWinner ();
        checkDraw ();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove ("hide");
    disableBoxes ();
}

const checkWinner = () => {
    for (pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText; 
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner (pos1Val);
                }
            }
    }
}
const checkDraw = () => {
    if (count === 9) {
            msg.innerText = "Oh! The Game is Drawn";
            msgContainer.classList.remove ("hide");
            count = 0;
    }
}


newGameBtn.addEventListener ("click", resetGame);
resetBtn.addEventListener ("click", resetGame);