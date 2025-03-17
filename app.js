let gameSeq=[];
let userSeq =[];

let btns = ["red","yellow","green","purple"];

let gameStart = false;
let level = 0;

let h2 = document.querySelector("h2")

let highestScore = localStorage.getItem('highestScore')?parseInt(localStorage.getItem('highestScore')):0;

let highestscoredisplay = document.querySelector("#highest-score");


document.addEventListener("keypress", function(){
    if(gameStart == false){
        console.log("game is started");
        gameStart = true
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){

    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let rndIdx = Math.floor(Math.random() * 4);
    let rndColor = btns[rndIdx];
    let rndbtn = document.querySelector(`.${rndColor}`);
    // console.log(rndIdx);
    // console.log(rndColor);
    // console.log(rndbtn)

    gameSeq.push(rndColor);
    console.log(gameSeq);

    gameFlash(rndbtn);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}

function checkAns(Idx){
    if(userSeq[Idx] === gameSeq[Idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        if(level > highestScore){
            highestScore = level;
            localStorage.getItem("highestScore",highestScore);
            highestscoredisplay.innerText = highestScore;
        }

        reset();
    }
}

function pressbtn(){
     let btn = this;
     userFlash(btn);

   let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",pressbtn);
}

function reset(){
    gameStart = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
};