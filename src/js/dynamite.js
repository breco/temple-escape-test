class Dynamite {
	constructor(player,item){
		this.player = player;
		this.item = item;
		this.config = {
	        x: 300,
	        y: 40,
	        text: 'Destruye todas las casillas que se encuentren en tu misma fila y columna',
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
	    target = targets_attack.create(150+78*this.player.pos_x,100+78*this.player.pos_y,'target-2').setOrigin(0,0);
    	target.setScale(1.25);
    	target.pos_x = this.player.pos_x;
    	target.pos_y = this.player.pos_y;
    	this.setTargetInteractive(target);
  }

  setTargetInteractive(target){
  	target.setInteractive();
    target.on('pointerdown',this.effect.bind(null,target));
  }
  effect(target){
  	let x = target.pos_x;
  	let y = target.pos_y;
  	
  	for(var i = 0;i < 7; i++){
  		if(i == x - 1 || i == x || i == x + 1) continue;	
  		if (validTarget(i,y,arrow.currentTurn)){
  			reduceBlock(i,y,true);
  		}
		
	}
	for(var i = 0;i < 7; i++){
  		if(i == y - 1 || i == y || i == y + 1) continue;
  		if (validTarget(x,i,arrow.currentTurn)){
  			reduceBlock(x,i,true);
  		}
		
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
