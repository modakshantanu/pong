
import big from '../big.png';

const Type = {
	NONE:0,
	BIG:1,
	SMALL:2,
	BOOMER:3,
}
export class Powerupp {
	
	constructor(args) {
		this.x = args.x || 250;
		this.y = args.y || 250;
		this.type = args.type || Type.BIG;
		this.delete = false;
	}

	render(state) {
		var ctx = state.context;
		ctx.save();
		ctx.drawImage(,10,10);
		ctx.restore();


	}

}