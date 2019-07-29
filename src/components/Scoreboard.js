import React from 'react';
import {Button} from 'react-bootstrap';
import Key from './Instructions.js';

const dropDown = {
	position: "fixed",
	bottom:0,
	left: 0
}

const dropDownContent= {
 
position: "absolute",
  left:10,bottom:50,

  width:300,
  minHeight:150,
  border:"2px solid blue",
  background: "	#00FF00",
	zIndex: "1",
}




const buttonStyle = {
	width:"100px",
	padding:"2px",
	border:"2px solid blue",
	margin:"2px",
	textAlign: "center",
	fontSize : 15,
	borderRadius:"2",
	userSelect:"none",
	position: "",
	

}




const mainStyle = {
	height:50,
	width:100,
	margin:"auto",
	padding:10,
	float : "center"
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

const leftNumberStyle = {
	margin : 0,
	height: 20,
	float: "left",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

}

const rightStyle = {
	marginLeft: "50%",
	height:50,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow:"0px 0px 0px 10px blue inset"
}



const rightNumberStyle = {
	margin : 10,
	height:20,
	display: "flex",
	alignItems: "center",
	justifyContent: "right",
	// boxShadow:"0px 0px 0px 10px blue inset",
	float : "center"
}

const pauseButton = {
	margin:"auto",
	height:"30px",
	width:"30px",

}

// const instructions = { 
// 	margin : "auto",
// 	height:40,
// 	width: 400,
// 	padding:40,
// 	alignItems: "left",
// 	justifyContent: "left",
// 	float: "left",

// }



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

			<div style = { dropDownContent}>
			
			<h2 align = "centre">CONTROLS INFO</h2>
					
					<div align = "left">
					<span style = { {display : "inline-block" , float : " centre" , margin : 10}}>
					<div >
						 RED 1 
					</div>
						<span style = {leftNumberStyle}>
						<Key  content = "1"/>   
						</span>

						<span style = {rightNumberStyle}>
						<Key  content = "2"/>
						</span>
					</span>

					
					<span style = { {display : "inline-block" , float : " centre", margin : 10}}>
					<div >
						 RED 2 
					</div>
						<span style = {leftNumberStyle}>
						<Key  content = "S"/>   
						</span>

						<span style = {rightNumberStyle}>
						<Key  content = "D"/>
						</span>
					</span>


					<span style = { {display : "inline-block" , float : " centre" , margin  : 10}}>
					<div >
						 RED 3 
					</div>
						<span style = {leftNumberStyle}>
						<Key  content = "V"/>   
						</span>

						<span style = {rightNumberStyle}>
						<Key  content = "B"/>
						</span>
					</span>



					<span style = { {display : "inline-block" , float : " centre", margin : 10}}>
					<div >
						 BLUE 3 
					</div>
						<span style = {leftNumberStyle}>
						<Key  content = "N"/>   
						</span>

						<span style = {rightNumberStyle}>
						<Key  content = "M"/>
						</span>
					</span>

					<span style = { {display : "inline-block" , float : " centre", margin : 10}}>
					<div >
						 BLUE 2  
					</div>
						<span style = {leftNumberStyle}>
						<Key  content = "L"/>   
						</span>

						<span style = {rightNumberStyle}>
						<Key  content = ";"/>
						</span>
					</span>


					<span style = { {display : "inline-block" , float : " centre", margin : 10}}>
					<div >
						 BLUE 1  
					</div>
						<span style = {leftNumberStyle}>
						<Key  style = { {boxShadow:"0px 0px 0px 10px red inset"}} content = "-"/>   
						</span>

						<span style = {rightNumberStyle}>
						<Key  content = "="/>
						</span>
					</span>
					</div>
			 </div>
			
			 );

		return (
			<div>
				<div style = {mainStyle}>
					<div id = "red" style = {leftStyle}>{this.props.redScore}</div>
					<div id = "blue" style = {rightStyle}>{this.props.blueScore}</div>
				</div>
			

				<div style = {dropDown} >
				{this.state.display? userInfo:""}	
				<div>
					<Button style = {buttonStyle} variant = "primary" onClick = {this.handleOnClick}>
						Instructions
					</Button>
				</div>
				</div>
			</div>
		);
	}
}