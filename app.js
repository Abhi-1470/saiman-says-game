let gameseq =[];
let userseq=[];
let btns = ["red" ,"yellow","green","purple"];
let level = 0;
let start = false;
let highscore = 0;

let h3 = document.querySelector("h3");
let btn = document.querySelector(".btn");


document.addEventListener("keypress",function() {
    if (start == false) {
        console.log("game start");
        start = true;
    

        levelup();
        
    }
});

function gameflash(btn) {
    
    btn.classList.add("flash");

    setTimeout(function(params) {
        btn.classList.remove("flash");
    },250)
    
};

function userflash(btn) {
    
    btn.classList.add("userflash");

    setTimeout(function(params) {
        btn.classList.remove("userflash");
    },250)
    
};

function levelup() {

    level++;
    userseq=[];
    h3.innerText = `Level ${level}`;
     
     let inx = Math.floor(Math.random()*3);
     let randomcolor = btns[inx];
     let randombtns = document.querySelector(`.${randomcolor}`);

     gameseq.push(randomcolor);
     console.log(gameseq);
    //rendom btns
    gameflash(randombtns);
    
};
function checkans(index) {
    
   if (userseq[index]===gameseq[index]) {
        if (userseq.length==gameseq.length) {
            setTimeout(levelup,1000);
        }
   } else { 
        if (level < highscore) {
            h3.innerHTML = `OOPS ! Game over , Your score was <b>${level}</b><br> Press any key to Restart <br> Game HIGH SCORE is : ${highscore} `;

        } else {
            highscore=level;
            h3.innerHTML = `WOW ! it's HIGH SCORE : ${highscore}<br> Press any key to Restart`;
            
        }
   
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor ="white";
    },150);
    reset();
   }
}
function btnpress() {
    let btn = this;
    console.log(this);

    let usercolor =this.id;
    userseq.push(usercolor);
    console.log(userseq);
    userflash(btn);

    checkans(userseq.length-1);
};

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
  btn.addEventListener("click",btnpress);
};

function reset() {
    start =false;
    gameseq=[];
    userseq=[];
    level=0;
    
}
