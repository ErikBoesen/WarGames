function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var game = {
    prompt: document.getElementById("prompt"),
    submitButton: document.getElementById("submit"),
    consoleLog: function(content) {
        document.getElementById("console").innerHTML += "<br><span>" + content + "</span>";
    },
    initiate: function() {
        game.consoleLog("GREETINGS PROFESSOR FALKEN.");
        game.consoleLog("Hello.");
        sleep(500);
        game.consoleLog("HOW ARE YOU FEELING TODAY?");
        game.consoleLog("I'm fine. How are you?");
        game.consoleLog("EXCELLENT. IT'S BEEN A LONG TIME. CAN YOU EXPLAIN THE REMOVAL OF YOUR USER ACCOUNT ON JUNE 23RD, 1973?");
        game.consoleLog("People sometimes make mistak[es].");
        game.consoleLog("YES THEY DO. SHALL WE PLAY A GAME?");
        game.consoleLog("Love to. How about Global Thermonuclear War?");
        game.consoleLog("WOULDN'T YOU PREFER A GOOD GAME OF CHESS?");
        game.consoleLog("Later. Let's play Global Thermonuclear War.");
        game.consoleLog("FINE.");
        game.consoleLog("Draw maps");
        game.consoleLog("WHICH SIDE DO YOU WANT?<br><br>     1. UNITED STATES<br>      2. SOVIET UNION<br><br>CHOOSE ONE: ");
    },
    submit: function() {
        var input = game.prompt.value.split(" ");
        var command = input[0];
        var param1 = input[1];
        var param2 = parseInt(input[2]);
        game.prompt.value = "";
    }
};

addEventListener('load', game.initiate);