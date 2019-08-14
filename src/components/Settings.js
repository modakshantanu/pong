import React from 'react';

const dropdown = {
	position: "fixed",
	

	bottom:0,
	right: 0

}

const categoryHeader = {
	background: "#AAAAFF",
	width:"90%",
	margin:"auto",
	marginTop:"2px",
}

const dropdownContent= {
 
  	position: "absolute",
	right:10,bottom:30,

	width:300,
	minHeight:150,
	border:"2px solid blue",
	background: "#8888ff",
	

  	zIndex: "1",
}

const buttonStyle = {
	width:"100px",
	padding:"2px",
	border:"2px solid blue",
	margin:"2px",
	textAlign: "center",
	borderRadius:"2",
	userSelect:"none",
	position: "fixed",
	bottom:0,
	right: 0,
	fontSize : 15


}

const defaultSettings = {
	AI:[false,false,false,false,false,false],
	curveball:false,
	powerups:false,
	accel:false,
	trail:true,
	defFactor:0.2,
	accelFactor:0.04
}

export default class Settings extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			opened:false,
		}

		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.AICheckboxChange = this.AICheckboxChange.bind(this);
		this.curveballChange = this.curveballChange.bind(this);
		this.powerupsChange = this.powerupsChange.bind(this);
		this.accelChange = this.accelChange.bind(this);
		this.trailChange = this.trailChange.bind(this);
	
	}

	toggleDropdown() {
	
		this.setState((state) => ({opened: !state.opened}));
	}

	AICheckboxChange(e) {
		let newSettings = this.props.settings;
		newSettings.AI[e.target.id] = !newSettings.AI[e.target.id];
		this.props.changeHandler(newSettings);
	}


	curveballChange(e) {
		let newSettings = this.props.settings;
		newSettings.curveball = e.target.checked;
		this.props.changeHandler(newSettings);
	}
	powerupsChange(e) {
		let newSettings = this.props.settings;
		newSettings.powerups = e.target.checked;
		this.props.changeHandler(newSettings);
	}
	accelChange(e) {
		let newSettings = this.props.settings;
		newSettings.accel = e.target.checked;
		this.props.changeHandler(newSettings);
	}
	trailChange(e) {
		let newSettings = this.props.settings;
		newSettings.trail = e.target.checked;
		this.props.changeHandler(newSettings);
	}
	defChange(e) {
		let newSettings = this.props.settings;
		newSettings.defFactor = e.target.value;
		this.props.changeHandler(newSettings);
	}
	afChange(e) {
		let newSettings = this.props.settings;
		newSettings.accelFactor = e.target.value;
		this.props.changeHandler(newSettings);
	}
	resetAdv() {
		let newSettings = this.props.settings;
		newSettings.accelFactor = defaultSettings.accelFactor;
		newSettings.defFactor = defaultSettings.defFactor;
		this.props.changeHandler(newSettings);

	}




	render() {


		var AICheckboxArray = [];
		const names = ["Red 1", "Red 2", "Red 3", "Blue 1","Blue 2", "Blue 3"];
		for (let i = 0; i < 6; i++) {
			let e = (
			<div  key = {i} style = {{width:45,display:"flex",flexDirection:"column"}}>
				<div style = {{color:(names[i][0] === 'R'?"red":"blue")}}>{names[i]}</div>
				<input type = "checkbox" id = {i.toString()} checked = {this.props.settings.AI[i]} onChange = {this.AICheckboxChange}></input>
			</div>)

			AICheckboxArray.push(e);
		}

		var curveballCheckbox = <input type = "checkbox" checked = {this.props.settings.curveball} onChange = {this.curveballChange}></input>
		var powerupsCheckbox =  <input type = "checkbox" checked = {this.props.settings.powerups} onChange = {this.powerupsChange}></input>
		var accelCheckbox = <input type = "checkbox" checked = {this.props.settings.accel} onChange = {this.accelChange}></input>
		var trailCheckbox = <input type = "checkbox" checked = {this.props.settings.trail} onChange = {this.trailChange}></input>
		var defSlider  = <input type = "range" value = {this.props.settings.defFactor} min = "0" max = "0.5" step = "0.05" onChange = {this.defChange.bind(this)}></input>
		var afSlider  = <input type = "range" value = {this.props.settings.accelFactor} min = "0" max = "0.2" step = "0.01" onChange = {this.afChange.bind(this)}></input>



		const content = (
			<div style = {dropdownContent}>
				<div style = {categoryHeader}>
					<div>Enable AI </div>
					<div style = {{display:"flex" , flexDirection:"row"}}>
						{AICheckboxArray}
					</div>
					<div style = {{fontSize:"13px"}}>AI Settings are applied when you reset game</div>
					<div>Curveball {curveballCheckbox}</div>
					<div>Powerups {powerupsCheckbox}</div>
					<div>Input Acceleration {accelCheckbox}</div>
				</div>

				<div style = {categoryHeader}>
					<div style = {{fontSize:"16px"}}>Graphics Settings</div>
					<div>Ball Trail {trailCheckbox}</div>
					
				</div>
				<div style = {categoryHeader}>
					<div style = {{fontSize:"16px"}}>Advanced</div>
					<div>Deflection Factor {defSlider}</div>
					<div style = {{fontSize:"13px"}}>Ball's direction change when hit by a moving paddle</div>

					<div>Ball Acceleration{afSlider}</div>
					<div style = {{fontSize:"13px"}}>How much the ball speeds up at every hit</div>
					<button style = {{margin:2}} onClick = {this.resetAdv.bind(this)}>Reset Advanced Settings</button>
					
				</div>
			</div>
		)


		return(
			<div style = {dropdown}>
				{this.state.opened? content:""}
				<button style = {buttonStyle} onClick = {this.toggleDropdown}>Settings {this.state.opened? "↓":"↑"} </button>
				
			</div>
		)
	}
}