
// arreglos para patrones
var buttonColours = ["red", "blue", "green", "yellow"]



var gamePattern = [];
var userClickedPattern = [];

//Variable para iniciar juego//
var started = false;
//variable de niveles//
var level = 0;




//Funcion final para reiniciar//

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}




//Funcion del juego, creo.

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        playSound("wrong");

        $("body").addClass("game-over");


        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200);


        $("#level-title").text("Game Over, Press A to Restar");

        startOver()

    }
}




//Movimiento de la tecla//

$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
            
    }
});


$("h1").click(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

            
    }
});



//funciones con el boton

$(".btn").click(function () {
    // Obtiene el id del botón clickeado
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length -1)

});




// funcion secuencia
function nextSequence() {

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];


    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}


// reproducir sonido al dar click

function playSound(name) {

    var audioColours = new Audio("sounds/" + name + ".mp3");
    audioColours.play();


}



//animacion css

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}










