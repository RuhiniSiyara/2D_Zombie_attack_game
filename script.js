function start(event){

        if (event.key == "Enter" && walkWorker == 0) {
        
            timeRemain();
            Walk();
            Run();
            runSound.play();
        }

        if (event.key == " " ) {

            if (attackWorker == 0 && runworker == 0 && isRun == true) {
                attack();
                attackSound.play();
            }
        }
}
var knight = document.getElementById("knight");
var runImage = 1;
var runworker = 0;
var knightML = 80;
var isRun = false;
var runSound = new Audio("run.mp3");
runSound.loop = true;

idleAnimationNumber =0;
idleImageNumber = 0;

function idleAnimation() {

    idleImageNumber=idleImageNumber + 1;
    
    if (idleImageNumber == 11) {
        idleImageNumber = 1;
    }
knight.src = "Idle(" +idleImageNumber+ ").png";

}

function idleAnimationStart(){
    idleAnimationNumber=setInterval(idleAnimation, 200);

}
function Run(){
    
    isRun = true;

    runworker = setInterval(() => {
        runImage++;

        if (runImage == 11) {
            runImage = 1;
        }
        if( knightML < 1150){
            knightML = knightML +10;

            document.getElementById("knight").style.marginLeft = knightML + "px";
        }

        if (knightML == 1150){
            clearInterval(runworker);
            runworker = 0;
            runSound.pause();
            attackSound.play();
            attack();
            attackSound.play();
        }

        document.getElementById("knight").src = "Run"+runImage+".png";

    }, 100);

}


var walkImage = 1;
var walkWorker = 0;

function Walk(){
    walkWorker = setInterval(() => {
        walkImage++;

        if (walkImage == 11) {
            walkImage = 1;
        }

        document.getElementById("zombie").src = "Walk"+walkImage+".png";

    }, 150);
}

var time = 50;

function timeRemain(){

    timeWorker = setInterval(() => {

        time--;

        if (time == 0) {
            clearInterval(timeWorker);
            alert(" Zombie Attacked !!! Restart the game!");
            window.location.reload();
        }

        document.getElementById("time").innerHTML = "Your Remaining Time: " + time;

    }, 500);
}

var attackImage =1;
var attackWorker =0;
var attackCount = 0;
var attackSound = new Audio("attack.mp3");

function attack(){
    attackWorker = setInterval(() => {

        attackImage++;

        if (attackImage == 11) {
            attackImage = 1;
            clearInterval(attackWorker);
            attackWorker = 0;
        }

        document.getElementById("knight").src = "Attack"+attackImage+".png";

    }, 100);
    

    if(attackCount == 5){
        alert("You killed the Zombie! You win!");
        window.location.reload();
    }

    attackCount++;
}