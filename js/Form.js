class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
    }
    
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(200, 50);
        this.input.position(200, 150);
        this.button.position(200, 450);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(200, 250);
        })
    }
}