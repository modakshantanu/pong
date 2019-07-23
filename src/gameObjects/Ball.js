import { rotateVector } from "../utils/2d";

class Ball {
	constructor(args) {
        this.x = args.x; 
        this.y = args.y;
        this.dx = args.dx;
        this.dy = args.dy; // changes the direction of movement  1 means up and -1 means down &  left or right 
        this.radius = 10;
        this.delete = false; // Whether the ball should be deleted in the next frame
        this.r = 0;
        this.dr = 0;
        this.color = "#000";


    }

    render(state){ 

        this.x += this.dx;
        this.y += this.dy;
        this.r += this.dr;

        if (state.settings.curveball) {
            ({x: this.dx, y:this.dy} = rotateVector({x:this.dx, y:this.dy}, this.dr/10));
        }

        var ctx = state.context;
        ctx.save();
        ctx.translate(this.x + 0.5,this.y + 0.5);
        ctx.rotate(this.r);

        if (this.color === 'red') ctx.fillStyle = "#800";
        else if (this.color === 'blue') ctx.fillStyle = "#008";
        else ctx.fillStyle = "#888";
       
        ctx.beginPath();
        ctx.arc(0,0,this.radius,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();

        if (state.settings.curveball) 
        {
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-10,0);
            ctx.lineTo(10,0);
            ctx.stroke();
            ctx.closePath();
            
        }
        ctx.restore();

        
    }
}

export default Ball;