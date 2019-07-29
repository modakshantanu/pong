import React from 'react';


const mainStyle = {
	height:40,
	width:100,
	margin:"auto",
	padding:0,
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

const rightStyle = {
	marginLeft: "50%",
	height:50,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow:"0px 0px 0px 10px blue inset"
}


export default class Powerups extends React.Component {

	constructor(props) {
		super(props);


	}


	render() {

		return (
			<div>
			<div style = {mainStyle}>Powerups</div>
			<div style = {mainStyle}></div>
			</div>
		)
	}
}

