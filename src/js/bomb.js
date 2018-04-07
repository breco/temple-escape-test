class Bomb {
	constructor(player,item){
		this.player = player;
		this.item = item;
		this.config = {
	        x: 500,
	        y: 40,
	        text: 'Destruye una casilla',
	        style: {
	            font: '24px Arial',
	            fill: '#ffffff',
	            align: 'center',
	            backgroundColor: '#000000'
	        }
	    };
	}
  	addTargets(){
  		
	    let target;
	    destroyTargets(targets);
	    for(var i = 0; i <= 6; i++){
	    	if(this.player.pos_x == i) continue;
	    	if(!validTarget(i,this.player.pos_y,arrow.currentTurn)) continue;
	    	target = targets_attack.create(150+78*i,100+78*this.player.pos_y,'target-2').setOrigin(0,0);
	    	target.setScale(1.25);
	    	target.pos_x = i;
	    	target.pos_y = this.player.pos_y;
	    	this.setTargetInteractive(target);
	    }
	    for(var i = 0; i <= 6; i++){
	    	if(this.player.pos_y == i) continue;
	    	if(!validTarget(this.player.pos_x,i,arrow.currentTurn)) continue;
	    	target = targets_attack.create(150+78*this.player.pos_x,100+78*i,'target-2').setOrigin(0,0);
	    	target.setScale(1.25);
	    	target.pos_x = this.player.pos_x;
	    	target.pos_y = i;
	    	this.setTargetInteractive(target);
	    }
  }

  setTargetInteractive(target){
  	target.setInteractive();
    target.on('pointerdown',this.effect.bind(null,target));
  }
  effect(target){

  	for(var i = 0;i < 6; i++){
		reduceBlock(target.pos_x,target.pos_y,true);  
	}    
  	targets_attack.children.iterate(function (target){
        target.destroy();
    });
    targets_attack.children.clear();
    if(arrow.currentTurn == 'player1'){
    	removeItem('player1');
    }
    else if(arrow.currentTurn == 'player2'){
    	removeItem('player2');
    }
    
  }
  
};
