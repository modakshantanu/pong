
import { distance2d } from '../utils/2d';
import {checkIntersection} from 'line-intersect';

export class Bot {
	constructor(args) {
		this.walls = args.walls; // All other paddle ranges are treated as walls
		this.output = {left:0,right:0};
		
		
		this.debug = args.debug; 
		this.curve = args.curve;
		this.difficulty = args.difficulty || 3;

		if (this.difficulty === 3) this.lookAhead = 10;
		else this.lookAhead = 2;

		
		
	}

	reset() {
		this.output = {left:0,right:0};
	}

	calculateOutput(ball,paddle) {
		if (this.difficulty >= 2) this.highDifficultyCalc(ball,paddle);
		else this.lowDifficultyCalc(ball,paddle);
	}

	lowDifficultyCalc(ball,paddle) {
		let current = {x:paddle.paddleCenterX, y:paddle.paddleCenterY};
		let dRight = {
			x: current.x+(paddle.x2 - paddle.x1)/100,
			y: current.y+(paddle.y2 - paddle.y1)/100
		}
		if (distance2d(dRight.x, dRight.y, ball.x,ball.y) < 
		distance2d(current.x,current.y, ball.x,ball.y)) {
			this.output = {left:0, right:1};
		} else {
			this.output = {left:1,right:0};
		}
	}

	highDifficultyCalc(ball, paddle) {

		// Waittimer is used to prevent unnecessary calculations when the ball is moving 
		// Calculation of the ball's trajectory is only done
		// once after every impact off another paddle
		//console.log(this.waitTimer);
		
		
	
		let piw = paddle.getInnerWall();
		
		// Temporary object to simulate the ball
		let b = {
			x:ball.x,
			y:ball.y,
			dx:ball.dx,
			dy:ball.dy
		};

		let bouncesLeft = this.lookAhead;
		while (bouncesLeft > 0) {
			let bouncedFlag = false;

			// b1 is ball's position after 1000 ticks
			// b2 is the current ball position
			// We need to specity b1 like this becuase line-intersection requires 2 line-segments 
			let b1 = {x : b.x + 1000*b.dx, y: b.y + 1000*b.dy};
			let b2 = {x : b.x , y: b.y};


			

			for (let i = 0; i < this.walls.length; i++) {
				let wall = this.walls[i];
	
				let intersection = checkIntersection(wall.x1,wall.y1,wall.x2,wall.y2,b1.x,b1.y,b2.x,b2.y);

				if (intersection.type === "intersecting") { // That means the ball will hit wall
					b.x = intersection.point.x;	b.y = intersection.point.y;
					b.x -= b.dx; b.y -= b.dy; // getReflection assumes that the ball is just about to intersect the wall
					let nextVelocity = wall.getReflection(b);
					b.x += b.dx; b.y += b.dy;
					b.dx = nextVelocity.x; b.dy = nextVelocity.y;
					b.x += b.dx; b.y += b.dy;
					
					
					bouncesLeft--;
					bouncedFlag = true;
				
					break;
				} 
			}

			if (bouncedFlag) continue;
			
			// Now check intersection with the paddle


			
			let intersection = checkIntersection(piw.x1,piw.y1,piw.x2,piw.y2, b1.x, b1.y, b2.x, b2.y);
			if (intersection.type === 'intersecting') {
				// Intersection with the paddle has been found
				// Now we need to output either left, right, or no move at all
				let current = {x:paddle.paddleCenterX, y:paddle.paddleCenterY};
				// Update waitTimer if this is the first bounce
	
				

				// If the paddle is close enough, do nothing
				if (distance2d(current.x, current.y, intersection.point.x, intersection.point.y) < 8) {
					this.output = {left:0,right:0};
				
					return;
				}
				// position after moving right one tick
				let dRight = {
					x: current.x+(paddle.x2 - paddle.x1)/100,
					y: current.y+(paddle.y2 - paddle.y1)/100
				}

				if (distance2d(dRight.x, dRight.y, intersection.point.x,intersection.point.y) < 
				distance2d(current.x,current.y, intersection.point.x, intersection.point.y)) {
					// Right is the way to go
					this.output = {left:0, right:1};
				
				} else {
					// Go left
					this.output = {left:1,right:0};
				
				}
				return;
			}
			bouncesLeft--;
		}
		
	}
}