
export class Particle {
	constructor(args) {
		this.x = args.x;
		this.y = args.y;
		this.lifetime = 50;
		this.delete = false;
		this.color = args.color;
	}

	render(state) {
		var ctx = state.context;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.lifetime/20, 0 , Math.PI*2);
		ctx.fill();
		ctx.closePath();

		this.lifetime--;
		if (this.lifetime <= 0) {
			this.delete = true;
		}
	}

	
}