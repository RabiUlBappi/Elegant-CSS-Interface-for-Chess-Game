$(document).ready(function(){
    var black=["bP","bR","bN","bB","bK","bQ"],
        white=["wP","wR","wN","wB","wK","wQ"],
        Knite_xCo_ord=[-2,-2,-1,-1,1,1,2,2],
        Knite_yCo_ord=[-1,1,-2,2,-2,2,-1,1],
        btncls=[   
            ["a1","a2","a3","a4","a5","a6","a7","a8"],
            ["b1","b2","b3","b4","b5","b6","b7","b8"],
            ["c1","c2","c3","c4","c5","c6","c7","c8"],
            ["d1","d2","d3","d4","d5","d6","d7","d8"],
            ["e1","e2","e3","e4","e5","e6","e7","e8"],
            ["f1","f2","f3","f4","f5","f6","f7","f8"],
            ["g1","g2","g3","g4","g5","g6","g7","g8"],
            ["h1","h2","h3","h4","h5","h6","h7","h8"]
        ];  // board=$("#board td button").toArray();

    function set_board(){
        // Initial black pieces position.
        $('<img>').find('#g1,#g2,#g3,#g4,#g5,#g6,#g7,#g8').appendTo("#board button").addClass("bP").src="img/bP.png";
        $("#board button").find('#h1,#h8').append('<img>').addClass("bR").src="img/bR.png";
        $("#board button").find('#h2,#h7').append('<img>').addClass("bN").src="img/bN.png";
        $("#board button").find('#h3,#h6').append('<img>').addClass("bB").src="img/bB.png";
        $("#board button").find('#h5').append('<img>').addClass("bK").src="img/bK.png";
        $("#board button").find('#h4').append('<img>').addClass("bQ").src="img/bQ.png";

        // Initial white pieces position.
        $("#board button").find('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').append('<img>').addClass("wP").src="img/wP.png";
        $("#board button").find('#a1,#a8').append('<img>').addClass("wR").src="img/wR.png";
        $("#board button").find('#a2,#a7').append('<img>').addClass("wN").src="img/wN.png";
        $("#board button").find('#a3,#a6').append('<img>').addClass("wB").src="img/wB.png";
        $("#board button").find('#a5').append('<img>').addClass("wK").src="img/wK.png";
        $("#board button").find('#a4').append('<img>').addClass("wQ").src="img/wQ.png";

    });
    function Pawn(x,y,turn,who){
        if(who=="wP"){
            // for(var i=0;i<8;i++){
            //     for(var j=0;j<8;j++){
                     $("#board tr td button").css("color","red");
            //     }
            // }
        }
     }
    function Knight(x,y,turn,who){
        for(var i=0;i<8;i++){
            xx=x+Knite_xCo_ord[i];
            yy=y+Knite_yCo_ord[i];
            console.log(xx,yy);

            if(moves[i][0]>=0&&moves[i][1]>=0&&moves[i][0]<8&&moves[i][1]<8){
                $(btncls[moves[i][0]][moves[i][1]]).css({background: red})
            }
        }
    }
    function Rook(x,y,turn,who){
        for(var i=0;i<8;i++){
            btncls[i][y];
            btncls[x][i];
        }
    } 
    function Bishop(x,y,turn,who){}
    function Queen(x,y,turn,who){}
    function King(x,y,turn,who){}
    function process(x,y,turn,who){
        for(var k=0;k<6;k++){
            if(who==black[k]) {$("#board h1").text("Black's Turn !");break;}
            else if(who==white[k]) {$("#board h1").text("White's Turn !");break}
        }
        if(who=="wP"||who=="bP"){
            Pawn(x, y,turn,who);
        }
        else if(who=="wK"||who=="bK"){
            Knight(x, y,turn,who);
        }
        else if(who=="wR"||who=="bR"){
            Rook(x, y,turn,who);
        }
        else if(who=="wB"||who=="bB"){
            Bishop(x, y,turn,who);
        }
        else if(who=="wQ"||who=="bQ"){
            Queen(x, y,turn,who);
        }
        else if(who=="wK"||who=="bK"){
            King(x, y,turn,who);
        }
    }
    $("#board td button").click(function(){
        var b=0;
        var select=$(this).attr("id");
        for(var i=0;i<8;i++){
           for(var j=0;j<8;j++){
                if(btncls[i][j]==select)
                {
                    var x=i;
                    var y=j;
                    var who=$(this).find("img").attr("class");
                    process(i,j,who);
                    break;
                }
            }
        }
        
    })   
});