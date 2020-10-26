class Game{
    contructor(){}
    getState(){
        var gamestateRef = database.ref('gameState');
        gamestateRef.on("value", function(data){
            gameState = data.val();
        })}
        
    update(state){
        database.ref('/').update({gameState: state});
    }
    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        text("Game Start", 120, 100);
        Player.getPlayerInfo();

        if (allPlayers!==undefined){
            console.log(allPlayers);
            var display_pos = 130;
            for (var plr in allPlayers){
                display_pos+= 20;
                textSize(15);
                text(allPlayers[plr].name+": "+allPlayers[plr].distance, 20, display_pos);
            }
        }

        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+= 20;
            player.update();
        }
    }
}