class Bridge {
	constructor(player,item){
		this.player = player;
		this.item = item;
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
	    		console.log(getBlock(i,j));
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
    
  }
  
};
