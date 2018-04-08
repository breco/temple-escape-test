class Bridge {
	constructor(player,item){
		this.player = player;
		this.item = item;
		this.self = this;
		this.config = {
	        x: 250,
	        y: 40,
	        text: 'Convierte una casilla destruida en una casilla con pasos ilimitados hasta el final de tu turno',
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
	    	for(var j = 0; j <= 6; j++){
	    		
	    		if(getBlock(i,j).steps != 0) continue;
		    	target = targets_attack.create(150+78*i,100+78*j,'target-2').setOrigin(0,0);
		    	target.setScale(1.25);
		    	target.pos_x = i;
		    	target.pos_y = j;
		    	this.setTargetInteractive(target);
	    	}
	    	
	    }
  }

  setTargetInteractive(target){
  	target.setInteractive();
    target.on('pointerdown',this.effect.bind(null,target));
  }
  effect(target){

  	console.log("place bridge at: "+target.pos_x+","+target.pos_y);
    let block = getBlock(target.pos_x,target.pos_y);
    let blocked = getBlocked(target.pos_x,target.pos_y);
    console.log(block);
    block.steps = 5;
    blocked.destroy();
    block.setTexture('bridge_block');
    block.setScale(1.1);    
    block.pointData.destroy();
    //let block_new = blocks.create(150+78*target.pos_x,100+78*target.pos_y,'bridge_block').setOrigin(0,0);
    //console.log(block_new);
    //block_new.steps = 6;
    //block_new.pos_x = target.pos_x;
    //block_new.pos_y = target.pos_y;
    //block_new.pointData = block.pointData;
    block.tipo = "bridge";
    //blocks.remove(block);
    //block.destroy();
    targets_attack.children.iterate(function (target){
        target.destroy();
    });
    targets_attack.children.clear();
	removeItem(arrow.currentTurn);
  }
  
  
};
