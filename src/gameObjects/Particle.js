
export class Particle {
	constructor(args) {
		this.x = args.x;
		this.y = args.y;
		this.lifetime = 50;
		this.delete = false;
		this.color = args.color;
	}

	draw(state) {
		this.lifetime--;
		if (this.lifetime <= 0) {
			this.delete = true;
			this.lifetime = 0;
		}
		var ctx = state.context;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.lifetime/20, 0 , Math.PI*2);
		ctx.fill();
		ctx.closePath();

		
	}

	update() {
		// This should actually be in render, so ball trail has a fixed size
		// this.lifetime--;
		// if (this.lifetime <= 0) {
		// 	this.delete = true;
		// }
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