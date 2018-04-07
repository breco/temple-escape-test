
var blocks;
var player;
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload (){
    

    this.load.image('ground', '../src/images/ancient_ruins/ground_0.png');
    
}

function create (){
    //this.add.image(400, 300, 'ground').setOrigin(0, 0);
    blocks = this.add.group();
    var steps = 0;
    var block;
    for (var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            steps = Math.floor((Math.random() * 6) + 1);
            block = blocks.create(150+78*i,100+78*j,'ground').setOrigin(0,0);
            block.steps = steps;
        }
        
    }
    blocks.children.iterate(function (block) {
        console.log(block.steps);
    });

}
function update (){
    console.log("holi");
}