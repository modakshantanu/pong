
//import big from '../big.png';
import { randomBetween } from '../utils/math';

export class PowerupToken {
	
	constructor(args) {
		this.x = args.x || randomBetween(200,300);
		this.y = args.y || randomBetween(200,300);
		this.delete = false;
	}

	draw(state) {
		var ctx = state.context;
		ctx.fillStyle = "#0a0";
		ctx.fillRect(this.x - 10, this.y-10, 20, 20);
	}

	

}