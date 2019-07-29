import React from 'react';
import big from '../big.png';
import small from '../small.png';
import boomer from '../boomer.png';
import none from '../none.png';

const Powerup = {
	NONE:0,
	BIG:1,
	SMALL:2,
	BOOMER:3,
}

const mainStyle = {
	height:40,
	width:80,
	margin:"auto",
	padding:0,
	float : "center"
}

const leftStyle = {
	width: "50%",
	height: 40,
	float: "left",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow:"0px 0px 0px 5px #844 inset",
	

}

const rightStyle = {
	marginLeft: "50%",
	height:40,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow:"0px 0px 0px 5px #448 inset"
}


export default class Powerups extends React.Component {

	constructor(props) {
		super(props);


	}


	render() {
		var redImg, blueImg;
		
		switch(this.props.red) {
			case Powerup.NONE:
				redImg = none; break;
			case Powerup.BIG:
				redImg = big; break;
			case Powerup.SMALL:
				redImg = small; break;
			case Powerup.BOOMER:
				redImg = boomer; break;
			default:
					redImg = none; break;
		}
		console.log(redImg);
		switch(this.props.blue) {
			case Powerup.NONE:
				blueImg = none; break;
			case Powerup.BIG:
					blueImg = big; break;
			case Powerup.SMALL:
					blueImg = small; break;
			case Powerup.BOOMER:
					blueImg = boomer; break;
			default:
					blueImg = {big}; break;
		}
	
		return (
			<div>
			<center><div style = {{margin:"auto",float:"center"}}>Powerups</div></center>
			<div style = {mainStyle}>
				<div style = {leftStyle}> <img src = {redImg} alt = ""/></div>
				<div style = {rightStyle}><img src = {blueImg} alt = ""/></div>
			</div>
			</div>
		)
	}
}

