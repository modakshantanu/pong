
import big from '../big.png';
import { randomBetween } from '../utils/math';

const Type = {
	NONE:0,
	BIG:1,
	SMALL:2,
	BOOMER:3,
}
export class PowerupToken {
	
	constructor(args) {
		this.x = args.x || randomBetween(200,300);
		this.y = args.y || randomBetween(200,300);
		this.delete = false;
	}

	render(state) {
		var ctx = state.context;
		ctx.fillStyle = "#0a0";
		ctx.fillRect(this.x - 10, this.y-10, 20, 20);
	}

	get

}