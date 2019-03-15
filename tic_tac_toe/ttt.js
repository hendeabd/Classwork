   var turn = 1;
    var play = true;
    var p1score = 0;
    var p2score= 0;
    var tiescore = 0;

    $("td").click(function(){

        if($(this).text() === '' && play === true){
            if(turn%2 === 1){
                $(this).text("X")
            }
            else
                $(this).text("O");
            turn++; 
        }

        if(checkwin() === "X"){
            $("#output").text("PLAYER 1 WINS!!! Press RESET to play again.");
            play = false;
            p1score++;
            $("output").append("PLAYER 1: " + p1score + "wins. PLAYER2: " +p2score + "wins. Ties: " +tiescore);
        }
        else if(checkwin() === "O"){
            $("#output").text("PLAYER 2 WINS!!! Press RESET to play again.");
            play = false;
            p2score++;
            $("output").append("PLAYER 1: " + p1score + "wins. PLAYER2: " +p2score + "wins. Ties: " +tiescore);
        }
        else if(checkwin() === -1 && turn === 10){
            $("#output").text("CAT'S GAME. Press RESET to play again.");
            play = false;  
            p1score++;
            $("output").append("PLAYER 1: " + p1score + "wins. PLAYER2: " +p2score + "wins. Ties: " +tiescore);

        }
    })

$("button").click(function(){

        turn=1;
        play = true;
        reset();

    })

});

var checkwin = function(){

    var space=[];

    for(var i = 0; i < 9; i++){
        space.push($("#space" + i).text());
    }

    if((space[0]===space[3]) && (space[3]==space[6])){return space [6];}
    else if((space[1]===space[4]) && (space[4]==space[7])){return space [7];}
    else if((space[2]===space[5]) && (space[5]==space[8])){return space [8];}

    else if((space[0]===space[1]) && (space[1]==space[2])){return space [2];}
    else if((space[3]===space[4]) && (space[4]==space[5])){return space [5];}
    else if((space[6]===space[7]) && (space[7]==space[8])){return space [8];}

    else if((space[0]===space[4]) && (space[4]==space[8])){return space [8];}
    else if((space[2]===space[4]) && (space[4]==space[6])){return space [6];}
    
    else {return -1}

}

var reset = function(){

    for(var i = 0; i < 9; i++){
        $("#space" + i).text("");
    }

    $('#output').text('')
    
}
