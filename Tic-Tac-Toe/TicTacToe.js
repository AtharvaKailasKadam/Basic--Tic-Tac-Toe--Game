let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-btn");
let MsgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;// Player 'x' and Player 'O'

// We will Store all the Possible Winning Patterns in the Multi-dimensional Arrays.

const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked..");
        if (turnO)
        {
            box.innerText = "O"
            turnO = false;
        }
        else
        {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        CheckWinner();
    })
})

const DisableButton = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const EnableButton = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        MsgContainer.classList.add("hide");
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations..! Winner is ${Winner}`;
    MsgContainer.classList.remove("hide");
    DisableButton();
}

const CheckWinner = () => {
    for (let pattern of WinPatterns)
    {
        let Posi1Val = boxes[pattern[0]].innerText;
        let Posi2Val = boxes[pattern[1]].innerText;
        let Posi3Val = boxes[pattern[2]].innerText;

        if(Posi1Val != "" && Posi2Val != "" && Posi3Val != "")
        {
            if(Posi1Val === Posi2Val && Posi2Val === Posi3Val)
            {
                console.log("Winner...!");
                console.log("The Winner is..:- ", Posi1Val);
                showWinner(Posi1Val);
            }
        }
    }
}

const ResetGame = () => {
    turnO = true;
    EnableButton();

}

newGameBtn.addEventListener("click", ResetGame);
resetBtn.addEventListener("click", ResetGame);