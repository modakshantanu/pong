import React from 'react';
import {Button} from 'react-bootstrap';

const controls = {
	height:0,
	width:400,
	margin:"auto",
	padding:20,
	alignItems: "left",
	justifyContent: "left",
	float: "left"
}

const userInfo = (

<div className = {controls}><h2 align = "left">CONTROLS INFO</h2>
		<div align = "left">
			<p> RED 1  : 1  --> LEFT / UP  &&  2   --> RIGHT / DOWN  </p> 
			<p> RED 2  : S  --> LEFT  &&  D --> RIGHT </p>
			<p> RED 3  : V  --> LEFT  &&  B --> RIGHT  </p> 
			<p> BLUE 3 : N  --> LEFT  &&  M   --> RIGHT </p>
			<p> BLUE 2 : L --> LEFT  &&  ';' --> RIGHT  </p> 
			<p> BLUE 1 : -  --> LEFT  &&  =   --> DOWN  </p>
		</div>
 </div>

 );




const mainStyle = {
	height:50,
	width:100,
	margin:"auto",
	padding:10,
	
}

const leftStyle = {
	width: "50%",
	height: 50,
	float: "left",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow:"0px 0px 0px 10px red inset",
	

}

const rightStyle = {
	marginLeft: "50%",
	height:50,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow:"0px 0px 0px 10px blue inset"
}

const pauseButton = {
	margin:"auto",
	height:"30px",
	width:"30px",

}



export class Scoreboard extends React.Component {

	state = { display : false}

	handleOnClick = () => { 
		this.setState((state) => ({display: !state.display}));
		// return (
		// 	<div>
		// 	{userInfo}
		// 	</div>
		// );
	}


	render() {

		const userInfo = (

			<div className = {controls}><h2 align = "left">CONTROLS INFO</h2>
					<div align = "left">
						<p> RED 1  : 1  --> LEFT / UP  &&  2   --> RIGHT / DOWN  </p> 
						<p> RED 2  : S  --> LEFT  &&  D --> RIGHT </p>
						<p> RED 3  : V  --> LEFT  &&  B --> RIGHT  </p> 
						<p> BLUE 3 : N  --> LEFT  &&  M   --> RIGHT </p>
						<p> BLUE 2 : L --> LEFT  &&  ';' --> RIGHT  </p> 
						<p> BLUE 1 : -  --> LEFT  &&  =   --> DOWN  </p>
					</div>
			 </div>
			
			 );

		return (
			<div>
				<div style = {mainStyle}>
					<div id = "red" style = {leftStyle}>{this.props.redScore}</div>
					<div id = "blue" style = {rightStyle}>{this.props.blueScore}</div>
				</div>
				<div style = {pauseButton}></div>	

				<div>
				{this.state.display? userInfo:""}	
				<div>
					<Button variant = "primary" onClick = {this.handleOnClick}>
						Instructions
					</Button>
				</div>
				</div>
			</div>
		);
	}
}