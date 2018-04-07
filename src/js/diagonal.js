class Diagonal{
	constructor(player,item){
		this.player = player;
		this.item = item;
		this.config = {
	        x: 500,
	        y: 40,
	        text: 'Realiza un movimiento diagonalmente',
	        style: {
	            font: '24px Arial',
	            fill: '#ffffff',
	            align: 'center',
	            backgroundColor: '#000000'
	        }
	    };
	}
	addTargets(){
		destroyTargets(targets);
		let target;
		if(validTarget(this.player.pos_x+1,this.player.pos_y+1,arrow.currentTurn)){
			
			target = targets_attack.create(150+78*(this.player.pos_x+1),100+78*(this.player.pos_y+1),'target-2').setOrigin(0,0);
	    	target.setScale(1.25);
	    	target.pos_x = this.player.pos_x+1;
	    	target.pos_y = this.player.pos_y+1;
	    	this.setTargetInteractive(target);
		}
		if(validTarget(this.player.pos_x+1,this.player.pos_y-1,arrow.currentTurn)){
			
			target = targets_attack.create(150+78*(this.player.pos_x+1),100+78*(this.player.pos_y-1),'target-2').setOrigin(0,0);
	    	target.setScale(1.25);
	    	target.pos_x = this.player.pos_x+1;
	    	target.pos_y = this.player.pos_y-1;
	    	this.setTargetInteractive(target);
		}
		if(validTarget(this.player.pos_x-1,this.player.pos_y+1,arrow.currentTurn)){
			
			target = targets_attack.create(150+78*(this.player.pos_x-1),100+78*(this.player.pos_y+1),'target-2').setOrigin(0,0);
	    	target.setScale(1.25);
	    	target.pos_x = this.player.pos_x-1;
	    	target.pos_y = this.player.pos_y+1;
	    	this.setTargetInteractive(target);
		}
		if(validTarget(this.player.pos_x-1,this.player.pos_y-1,arrow.currentTurn)){
			
			target = targets_attack.create(150+78*(this.player.pos_x-1),100+78*(this.player.pos_y-1),'target-2').setOrigin(0,0);
	    	target.setScale(1.25);
	    	target.pos_x = this.player.pos_x-1;
	    	target.pos_y = this.player.pos_y-1;
	    	this.setTargetInteractive(target);
		}
		console.log("diagonal working");
		console.log("targets_attack.children.getArray().length="+targets_attack.children.getArray().length);
	}
	setTargetInteractive(target){
		target.setInteractive();
		target.on('pointerdown',this.effect.bind(null,target));
	}
	effect(target){
		if(arrow.currentTurn === 'player1'){
            player1.setPosition(150+78*target.pos_x,100+78*target.pos_y);
            reduceBlock(player1.pos_x,player1.pos_y);
            player1.pos_x = target.pos_x;
            player1.pos_y = target.pos_y;
            reduceMovesLeft("player1");
            removeItem("player1");

        }
        else if(arrow.currentTurn === 'player2'){
            player2.setPosition(150+78*target.pos_x,100+78*target.pos_y);
            reduceBlock(player2.pos_x,player2.pos_y);
            player2.pos_x = target.pos_x;
            player2.pos_y = target.pos_y;
            reduceMovesLeft("player2");
            removeItem("player2");
        }
        destroyTargets(targets_attack);
        
	}
}
