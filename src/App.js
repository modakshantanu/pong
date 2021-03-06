import React, {Component} from 'react';
import InputManager from './InputManager'; // InputManager is a class handling all keyboard inputs
import './App.css';
import Paddle from './gameObjects/Paddle';
import Ball from './gameObjects/Ball';
import { Scoreboard } from './components/Scoreboard';
import { Wall } from './gameObjects/Wall';
import { Goal } from './gameObjects/Goal';
import intersects from 'intersects';
import { rotateVector } from './utils/2d';
import { randomBetween } from './utils/math';
import { Bot } from './gameObjects/Bot';
import Settings from './components/Settings';
import { Particle } from './gameObjects/Particle';
import {PowerupToken} from './gameObjects/PowerupToken'
import {PlayerCard} from './gameObjects/PlayerCard'
import {updateRate, ballInitSpeed} from './utils/constants';

const backgroundStyling = { 

	backgroundColor : "	#fff"

}

const GameState = {
	PAUSED:0,
	RUNNING:1,
	GOAL_SCORED:2
}


const Teams = {
	RED:0,
	BLUE:1,
}

var animationFrameId;
var goalText;
var goalTextStyle;
var tickTock = false;
// The main component that contains the canvas, and other buttons if needed
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			input: new InputManager(), // Instantiate new InputManager
			context: null, // the canvas context,
			gameState: GameState.RUNNING,
			redScore:0,
			blueScore:0,
			gameMode:1, // Number of players on each side,
			settings: {
				AI:[false,false,false,false,false,false],
				AIdiff:2,
				curveball:false,
				powerups:false,
				accel:false,
				trail:true,
				defFactor:0.2,
				accelFactor:0.04,

			},

		}

		this.draw = this.draw.bind(this);
		this.reset1v1 = this.reset1v1.bind(this);
		this.reset2v2 = this.reset2v2.bind(this);
		this.reset3v3 = this.reset3v3.bind(this);
		this.resetPositions = this.resetPositions.bind(this);
		this.updatePaddles = this.updatePaddles.bind(this);
		this.changeSettings = this.changeSettings.bind(this);
		this.initBots = this.initBots.bind(this);
		this.createParticle = this.createParticle.bind(this);
		this.update = this.update.bind(this);
		
		
	}

	componentDidMount() {
		this.state.input.bindKeys();
		
		const context = this.refs.canvas.getContext('2d'); // This is to get context
		this.powerupTimer = 100000;
		this.setState({context:context});		
		this.reset1v1();
		animationFrameId = requestAnimationFrame(this.draw); 
		setInterval(this.update, 1000/updateRate);
		


	}

	bluePowerupHandler(type) {
		var targets = [];
		if (type === 2) {
			targets = [0,1,2];
		} else targets = [3,4,5];	
		for (let t in targets) {
			let tgt = this.paddles[t];
			switch(type) {
				case 1: tgt.bigPowerup(); break;
				case 2: tgt.smallPowerup(); break;
				case 3: tgt.boomerPowerup(); break;
				default: 
			}
		}
	}

	redPowerupHandler(type) {
		var targets = [];
		if (type === 2) {
			targets = [3,4,5];
		} else targets = [0,1,2];	
		for (let t in targets) {
			let tgt = this.paddles[t];
			switch(type) {
				case 1: tgt.bigPowerup(); break;
				case 2: tgt.smallPowerup(); break;
				case 3: tgt.boomerPowerup(); break;
				default: 
			}
		}
	}

	initBots() {
		this.bots = [];
		// A new array of all the goals, as well as walls
		// Both goals and walls are treated as walls by bots
		let goalWalls = this.goals.map(goal => new Wall({x1:goal.x1,y1:goal.y1,x2:goal.x2,y2:goal.y2})).concat(this.walls); 

	
		for (let i = 0; i < 6; i++) {
			if (this.state.settings.AI[i]) {
				let modifiedWalls = [...goalWalls]; // Create a new array with all walls except that player's goal
				modifiedWalls.splice(i,1);
				this.bots.push(new Bot({walls:modifiedWalls,curve:this.state.settings.curveball,difficulty:this.state.settings.AIdiff}));
				
			} else {
				this.bots.push(null); // Dummy to make the array index match other indices (0-5)
			}
		}
	
	}

	reset1v1() {
		this.setState({redScore:0,blueScore:0,gameState:GameState.RUNNING,gameMode:1});
		this.particles = []; this.powerups = []; 
		if (this.state.settings.powerups) {
			this.powerupTimer = randomBetween (200,300);
		}
		this.walls = [
			new Wall({x1:0,y1:100,x2:500,y2:100}),
			new Wall({x1:0,y1:399,x2:500,y2:399}),
		];
		this.goals = [
			new Goal({x1:0,y1:100,x2:0,y2:400,color:"red",teamId:Teams.RED}),
			new Goal({x1:-100,y1:-100,x2:-100,y2:-100}), //
			new Goal({x1:-100,y1:-100,x2:-100,y2:-100}), //
			new Goal({x1:499,y1:100,x2:499,y2:400,color:"blue",teamId:Teams.BLUE}),
			new Goal({x1:-100,y1:-100,x2:-100,y2:-100}), // These 4 are dummy goals to make the mapping consistent
			new Goal({x1:-100,y1:-100,x2:-100,y2:-100}), //
		];

		this.paddles = [
			new Paddle({x1:10, y1:100, x2:10, y2:400,color:"red"}),
			new Paddle({x1:-100,y1:-100,x2:-100,y2:-100,hidden:true}), // 
			new Paddle({x1:-100,y1:-100,x2:-100,y2:-100,hidden:true}), // These 4 paddles are dummy paddles, so the mapping from player -> paddle index
			new Paddle({x1:490,y1:400,x2:490,y2:100,color:"blue"}),
			new Paddle({x1:-100,y1:-100,x2:-100,y2:-100,hidden:true}), // is consistent
			new Paddle({x1:-100,y1:-100,x2:-100,y2:-100,hidden:true}), //
		]
		this.playerCards = [
			new PlayerCard({playerName:"Red 1", color:"red", x:25, y:50,left:"1", right:"2",AI:this.state.settings.AI[0]}),
			new PlayerCard({playerName:"Blue 1",color:"blue", x:475,y:50,left:'-',right:"=",AI:this.state.settings.AI[3]})
		]
		
		this.ball = new Ball({x:250, y: 250,});
		this.initBots();
		
		this.resetPositions();

	
	}

	reset2v2() {
		this.particles = []; this.powerups = [];
		if (this.state.settings.powerups) {
			this.powerupTimer = randomBetween (200,300);
		}
		this.setState({redScore:0,blueScore:0,gameState:GameState.RUNNING,gameMode:2});
		this.walls = [];
		this.goals = [
			new Goal({x1:0,y1:250,x2:250,y2:0,color:"red",teamId:Teams.RED}),
			new Goal({x1:250,y1:0,x2:500,y2:250,color:"red",teamId:Teams.RED}),
			new Goal({x1:-100,y1:-100,x2:-100,y2:-100}), 
			new Goal({x1:250,y1:500,x2:500,y2:250,color:"blue",teamId:Teams.BLUE}),
			new Goal({x1:0,y1:250,x2:250,y2:500,color:"blue",teamId:Teams.BLUE}),
			new Goal({x1:-100,y1:-100,x2:-100,y2:-100}), 
		];
		this.paddles = [
			new Paddle({x1:10,y1:250,x2:250,y2:10,color:"red"}),
			new Paddle({x1:250,y1:10,x2:490,y2:250,color:"red"}),
			new Paddle({x1:-100,y1:-100,x2:-100,y2:-100,hidden:true}),
			new Paddle({x1:250,y1:490,x2:490,y2:250,color:"blue"}),
			new Paddle({x1:10,y1:250,x2:250,y2:490,color:"blue"}),
			new Paddle({x1:-100,y1:-100,x2:-100,y2:-100,hidden:true}),
		]
		this.playerCards = [
			new PlayerCard({playerName:"Red 1", color:"red",AI:this.state.settings.AI[0],left:"1",right:"2",x:50,y:100}),
			new PlayerCard({playerName:"Red 2", color:"red",AI:this.state.settings.AI[1],left:"S",right:"D",x:450,y:100}	),
			
			new PlayerCard({playerName:"Blue 1", color:"blue",AI:this.state.settings.AI[3],left:"-",right:"=",x:50,y:400}),
			new PlayerCard({playerName:"Blue 2", color:"blue",AI:this.state.settings.AI[4],left:"L",right:";",x:450,y:400}),
			
		]
		this.ball = new Ball({x:250, y: 250});
		this.initBots();
		this.resetPositions();
		
	}

	reset3v3() {
		this.particles = []; this.powerups = [];
		if (this.state.settings.powerups) {
			this.powerupTimer = randomBetween (200,300);
		}
		this.setState({redScore:0,blueScore:0,gameState:GameState.RUNNING,gameMode:3});
		this.walls = [];
		// Generate the hexagonal coordinates programatically since its easier than hardcoding
		this.goals = [];
		for (let i = 0; i < 6; i++) {
			let g1 = rotateVector({x:-250,y:0},i*Math.PI/3);
			let g2 = rotateVector({x:-250,y:0},(i+1)*Math.PI/3);
			let color = i < 3? "red":"blue";
			let teamId = color === "red"? Teams.RED: Teams.BLUE;
			this.goals.push(new Goal({x1:g1.x + 250, y1:g1.y + 250, x2:g2.x + 250, y2:g2.y + 250, color:color, teamId:teamId}));
		}
		this.paddles = [];
		for (let i = 0; i < 3; i++) {
			let v1 = rotateVector({x:-240,y:0},i*Math.PI/3);
			let v2 = rotateVector({x:-240,y:0},(i+1)*Math.PI/3);
			
			
			this.paddles.push(new Paddle({x1: v1.x + 250,y1:v1.y + 250, x2:v2.x + 250, y2:v2.y + 250, color:"red"}));
		}
		for (let i = 0; i < 3; i++) {
			let {x1,y1,x2,y2} = this.paddles[2-i];
			this.paddles.push(new Paddle({x1:x1, y1: 500-y1, x2:x2, y2:500-y2,color:"blue"}))
		}
		this.playerCards = [
			new PlayerCard({playerName:"Red 1", color:"red",AI:this.state.settings.AI[0],left:"1",right:"2",x:25,y:100}),
			new PlayerCard({playerName:"Red 2", color:"red",AI:this.state.settings.AI[1],left:"S",right:"D",x:250,y:17}	),
			new PlayerCard({playerName:"Red 3", color:"red",AI:this.state.settings.AI[2],left:"V",right:"B",x:475,y:100}),
			new PlayerCard({playerName:"Blue 1", color:"blue",AI:this.state.settings.AI[3],left:"-",right:"=",x:25,y:400}),
			new PlayerCard({playerName:"Blue 2", color:"blue",AI:this.state.settings.AI[4],left:"L",right:";",x:250,y:483}),
			new PlayerCard({playerName:"Blue 3", color:"blue",AI:this.state.settings.AI[5],left:"N",right:"M",x:475,y:400}),
		]
		this.ball = new Ball({x:250, y: 250});
		this.initBots();
		this.resetPositions();
	}

	resetPositions() {
		this.powerups = [];
		this.particles = [];
		let randomAngle = this.state.gameMode === 1? randomBetween(-Math.PI/4,Math.PI/4): randomBetween(0,2*Math.PI);
		let initialBallVelocity = rotateVector({x:ballInitSpeed,y:0},randomAngle);

		// Make the ball go either right or left with 50:50 chance
		if (this.state.gameMode === 1 &&  Math.random() < 0.5) { 
			initialBallVelocity.x *= -1;
			initialBallVelocity.y *= -1;
		}
		this.ball = new Ball({x: 250, y: 250,dx: initialBallVelocity.x, dy: initialBallVelocity.y});
		this.paddles.forEach(paddle => {
			paddle.position = 50;
			paddle.resetPowerup();
		})
		this.bots.forEach(b => {
			if (b) // To bypass the null elements in bots array
				b.reset();
		})
	}

	updatePaddles() {

		let keys = this.state.input.pressedKeys;
		let b = this.bots;

		this.paddles[0].update(this.state, b[0]? b[0].output:keys.red1); 
		this.paddles[1].update(this.state, b[1]? b[1].output:keys.red2);
		this.paddles[2].update(this.state, b[2]? b[2].output:keys.red3); 
		this.paddles[3].update(this.state, b[3]? b[3].output:keys.blue1);
		this.paddles[4].update(this.state, b[4]? b[4].output:keys.blue2); 
		this.paddles[5].update(this.state, b[5]? b[5].output:keys.blue3);
		
		
	}

	createParticle(args) {
		if (this.state.settings.trail)
			this.particles.push(new Particle(args));
	}

	update() {
		tickTock = !tickTock;
		//var start = Date.now();
		if (this.state.gameState === GameState.GOAL_SCORED || this.state.gameState === GameState.PAUSED) {
			//setTimeout(this.update,1000/60);
			return;
		}
		if(tickTock) {
			while (this.particles[0] && this.particles[0].delete) {
				this.particles.shift();
			}
	
			this.particles.forEach(particle => particle.update())
			this.createParticle({x:this.ball.x, y:this.ball.y, color:this.ball.color})

		}
		
		this.paddles.forEach(paddle => {
			// The below statement is to convert an array of objects {x,y} to array of numbers  
			let hitbox = paddle.getHitbox();
			let hitboxArr = [];
			hitbox.forEach(e => {
				hitboxArr.push(e.x);
				hitboxArr.push(e.y);
			})

			// Now hitboxArr contains the points in correct format [x1,y1,x2,y2...]
			if (intersects.circlePolygon(this.ball.x, this.ball.y,this.ball.radius,hitboxArr)) {
				let newVelocity = paddle.getReflection(this.ball,this.state);
				this.ball.dx = newVelocity.x;
				this.ball.dy = newVelocity.y;
				this.ball.x += this.ball.dx; this.ball.y += this.ball.dy;
				this.createParticle((({x,y}) => ({x,y}))(this.ball))
				this.ball.color = paddle.color;
				if (paddle.powerup === 3) {
					this.ball.boomerMode = true;
				} else this.ball.boomerMode = false;
			}
			
		})

		// Collision between ball and walls
		this.walls.forEach(wall => {
			if (intersects.circleLine(this.ball.x, this.ball.y, this.ball.radius, wall.x1, wall.y1, wall.x2, wall.y2)) {
				let newVelocity = wall.getReflection(this.ball);
				this.ball.dx = newVelocity.x;
				this.ball.dy = newVelocity.y;
				
			}
			
		})

		// Collision between ball and powerup 
		this.powerups.forEach((p,i) => {
			if (intersects.boxCircle(p.x-10,p.y-10,20,20,this.ball.x, this.ball.y, this.ball.radius)) {
				if(this.ball.color === "red") {
					this.redPowerupHandler(Math.floor(randomBetween(1.0000001,3.99999999)));
				}
				else if(this.ball.color === "blue") {
					this.bluePowerupHandler(Math.floor(randomBetween(1.0000001,3.99999999)));

				}
				
				this.powerups.splice(i,1);
			}
		})

		//
		this.bots.forEach((bot,index) => {
			if (bot) {
				bot.calculateOutput(this.ball, this.paddles[index]);
			}
		});

		this.ball.update(this.state);
	
		this.updatePaddles();

		//console.log(this.particles.length)
		var ctx = this.state.context;
		// Collision between ball and goals
		this.goals.forEach(goal => {
			if (intersects.circleLine(this.ball.x, this.ball.y, this.ball.radius, goal.x1, goal.y1, goal.x2, goal.y2)) {
				// Update the score
				this.draw(0,true);
				let teamText;
				if (goal.teamId === Teams.RED) {
					this.setState(state => ({blueScore: state.blueScore + 1}));
					teamText = "Blue team";
					ctx.fillStyle = "blue";
				} else {
					this.setState(state => ({redScore: state.redScore + 1}));
					teamText = "Red team";
					ctx.fillStyle = "red";
				}

				goalTextStyle = "30px Courier New";
				goalText = teamText+ " has scored!";
				
				
				this.setState({gameState: GameState.GOAL_SCORED});
				
				setTimeout(() => {
					this.resetPositions();

					this.setState({gameState: GameState.RUNNING});

				},1500);

			}
		});

	}

	draw(timeStamp , singleFrame = false) {
	
		var start = Date.now();
		const ctx = this.state.context;
		if (this.state.gameState === GameState.PAUSED) {
			ctx.font = "30px Courier New";
			ctx.fillStyle = "black";
			ctx.fillText("PAUSED", 200,250);
			if (singleFrame === false)animationFrameId = requestAnimationFrame(this.draw);
			return;
		}
		if (this.state.gameState === GameState.GOAL_SCORED) {
			ctx.font = "30px Courier New";
			ctx.fillStyle = goalTextStyle;
			ctx.fillText(goalText,80,250);
			if (singleFrame === false) animationFrameId = requestAnimationFrame(this.draw);
			return;
		}



		ctx.save();
		ctx.fillStyle = "#FFF";
		ctx.translate(0.5,0.5);
		ctx.fillRect(0,0,500,500); // Erase the previous contents with this

		// var clear = Date.now();
		// if (clear-start > 1) console.log("Clear ",clear-start);


		this.walls.forEach(wall => wall.draw(this.state));
		this.goals.forEach(goal => 	goal.draw(this.state));
		this.playerCards.forEach(card => card.draw(this.state));
		this.powerups.forEach(p => p.draw(this.state));
		this.particles.forEach(p => p.draw(this.state));

		// var stat = Date.now();
		// if(stat-clear > 1) console.log("Static ",stat-clear)
	
		this.paddles.forEach(p => p.draw(this.state));
		this.ball.draw(this.state);
		
		// var moving = Date.now();
		// if (moving-stat > 1)
		// 	console.log("Paddle and ball ",moving-stat);
		if (this.state.settings.powerups) {
			if (this.powerupTimer > 0) this.powerupTimer--;
			else {
				this.powerupTimer = randomBetween(200,300);
				if (this.powerups.length < 3) this.powerups.push(new PowerupToken({}));
			}
		}


		ctx.restore();
		if (singleFrame === false) animationFrameId = requestAnimationFrame(this.draw);
		
		// var timeTaken = Date.now() - start;
		// if (timeTaken > 5) {
		// 	console.log("Total ",timeTaken);
		// }

	
	}

	componentWillUnmount() {
		this.state.input.unbindKeys();
	}

	changeSettings(newSettings) {
		this.setState({settings:newSettings});
	}
	render() {
		return (
			<div style = {backgroundStyling}>

			<div >
				<h1>Pong++</h1>
				
				<canvas ref = "canvas" width = "501" height = "501"/>
				<Scoreboard redScore = {this.state.redScore} blueScore = {this.state.blueScore}/>

				<center>
					<button id = "1v1" onClick = {this.reset1v1}>Reset 1v1</button> 
					<button id = "2v2" onClick = {this.reset2v2}>Reset 2v2</button>
					<button id = "3v3" onClick = {this.reset3v3}>Reset 3v3</button>
					
					<button onClick = {this.resetPositions}>Reset Rally</button>
				<button onClick = {() => {
					this.setState((state) => {
						if (state.gameState !== 2)
						return {gameState: 1 - state.gameState}
					})
				}}>{this.state.gameState===0? "Play" : "Pause"}</button>
				<div>Multiplayer link <a href = "http://172.104.176.106:4000">here</a></div>
				</center>
				<Settings settings = {this.state.settings} changeHandler = {this.changeSettings}/>

			
			</div>
			</div>
		)
	}

	
}



export default App;
