(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,i){},153:function(e,t,i){},175:function(e,t,i){"use strict";i.r(t);i(93);var a=i(0),s=i.n(a),n=i(90),r=i.n(n),l=(i(152),i(34)),o=i(2),h=i(1),c=i(10),d=i(8),u=i(3),p=i(9),y={187:"=",186:";",189:"-"},x=function(){function e(){Object(o.a)(this,e),this.pressedKeys={},this.pressedKeys.red1={right:0,left:0},this.pressedKeys.red2={right:0,left:0},this.pressedKeys.red3={right:0,left:0},this.pressedKeys.blue1={right:0,left:0},this.pressedKeys.blue2={right:0,left:0},this.pressedKeys.blue3={right:0,left:0}}return Object(h.a)(e,[{key:"bindKeys",value:function(){window.addEventListener("keyup",this.handleKeys.bind(this,!1)),window.addEventListener("keydown",this.handleKeys.bind(this,!0))}},{key:"unbindKeys",value:function(){window.removeEventListener("keyup",this.handleKeys),window.removeEventListener("keydown",this.handleKeys)}}]),Object(h.a)(e,[{key:"handleKeys",value:function(e,t){var i=this.pressedKeys;switch("Unidentified"==t.key?y[t.keyCode]:t.key){case"1":i.red1.left=e;break;case"2":i.red1.right=e;break;case"s":case"S":i.red2.left=e;break;case"d":case"D":i.red2.right=e;break;case"v":case"V":i.red3.left=e;break;case"b":case"B":i.red3.right=e;break;case"n":case"N":i.blue3.left=e;break;case"m":case"M":i.blue3.right=e;break;case"l":case"L":i.blue2.left=e;break;case";":i.blue2.right=e;break;case"-":i.blue1.left=e;break;case"=":i.blue1.right=e}this.pressedKeys=i}}]),e}(),g=(i(153),i(18));function b(e,t,i,a){return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-a,2))}function f(e,t){var i=e.x,a=e.y;return{x:Math.cos(t)*i-Math.sin(t)*a,y:Math.sin(t)*i+Math.cos(t)*a}}function m(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var i=t.x*e.x+t.y*e.y,a=e;return a.x-=2*i*t.x,a.y-=2*i*t.y,a}function v(e,t){var i=e.x,a=e.y,s=t.x,n=t.y;return Math.atan(i*n-a*s,i*s+a*n)}var w=i(14),A=i.n(w);function k(e,t){return e+Math.random()*(t-e)}var E,C,S=function(){function e(t){Object(o.a)(this,e),this.x1=t.x1||0,this.y1=t.y1||0,this.x2=t.x2||0,this.y2=t.y2||0,this.hidden=t.hidden,this.color=t.color||"#000",this.depth=t.depth||10,this.width=t.width||50,this.position=50,this.paddleCenterX=(this.x1+this.x2)/2,this.paddleCenterY=(this.y1+this.y2)/2,this.slidinglength=b(this.x1,this.y1,this.x2,this.y2),this.y1===this.y2?this.tiltAngle=90*Math.PI/180:this.tiltAngle=-Math.atan((this.x2-this.x1)/(this.y2-this.y1)),this.minPosition=this.width/this.slidinglength*100/2,this.maxPosition=100*(1-this.width/this.slidinglength/2),this.powerup=0,this.powerupTimer=0,this.inputTicks=0}return Object(h.a)(e,[{key:"resetPowerup",value:function(){this.powerup=0,this.width=50,this.powerupTimer=0,this.minPosition=this.width/this.slidinglength*100/2,this.maxPosition=100*(1-this.width/this.slidinglength/2)}},{key:"bigPowerup",value:function(){this.width=100,this.powerupTimer=600,this.powerup=1,this.minPosition=this.width/this.slidinglength*100/2,this.maxPosition=100*(1-this.width/this.slidinglength/2)}},{key:"smallPowerup",value:function(){this.width=25,this.powerupTimer=600,this.powerup=2,this.minPosition=this.width/this.slidinglength*100/2,this.maxPosition=100*(1-this.width/this.slidinglength/2)}},{key:"boomerPowerup",value:function(){this.powerupTimer=400,this.powerup=3}},{key:"getReflection",value:function(e,t){for(var i,a=this.getHitbox(),s=0;s<4&&(i=[a[s].x,a[s].y,a[(s+1)%4].x,a[(s+1)%4].y],!A.a.circleLine.apply(A.a,[e.x,e.y,e.radius].concat(Object(l.a)(i))));s++);var n=f({x:i[2]-i[0],y:i[3]-i[1]},Math.PI/2),r={x:(i[2]+i[0])/2,y:(i[3]+i[1])/2},o=Object(g.a)({},r);o.x+=1e-4*n.x,o.y+=1e-4*n.y,b(this.paddleCenterX,this.paddleCenterY,r.x,r.y)>b(this.paddleCenterX,this.paddleCenterY,o.x,o.y)&&(n.x*=-1,n.y*=-1);var h=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2));n.x/=h,n.y/=h;var c=m({x:e.dx,y:e.dy},n,1);c.x+=(e.x-this.paddleCenterX)*t.settings.accelFactor*.5,c.y+=(e.y-this.paddleCenterY)*t.settings.accelFactor*.5;var d={x:this.paddleCenterX-this.previousCenterX,y:this.paddleCenterY-this.previousCenterY};if(0===d.x&&0===d.y)return c;if(c=f(c,v(c,d)*t.settings.defFactor),t.settings.curveBall){var u=v(d,{x:e.dx,y:e.dy});e.dr+=u/20+k(-.1,.1)}return c}},{key:"update",value:function(e,t){if(!this.hidden){t.left||t.right?this.inputTicks++:this.inputTicks=1,this.powerupTimer>0&&this.powerupTimer--,this.powerupTimer<=0&&0!==this.powerup&&this.resetPowerup();var i=.5;e.settings.accel&&this.inputTicks<5&&(i=.1),t.right&&(this.position+=i),t.left&&(this.position-=i),this.position>this.maxPosition&&(this.position=this.maxPosition),this.position<this.minPosition&&(this.position=this.minPosition),this.previousCenterX=this.paddleCenterX,this.previousCenterY=this.paddleCenterY,this.paddleCenterX=this.x1*(1-this.position/100)+this.x2*this.position/100,this.paddleCenterY=this.y1*(1-this.position/100)+this.y2*this.position/100}}},{key:"draw",value:function(e){if(!this.hidden){var t=e.context;t.save(),t.translate(.5,.5),t.strokeStyle="#000000",t.fillStyle="#888888",3===this.powerup&&(t.fillStyle="#fe0"),t.translate(this.paddleCenterX,this.paddleCenterY),t.rotate(this.tiltAngle),t.fillRect(-this.depth/2,-this.width/2,this.depth,this.width),t.restore()}}},{key:"getHitbox",value:function(){var e=this,t=this.width/2,i=this.depth/2;return[{x:i,y:t},{x:i,y:-t},{x:-i,y:-t},{x:-i,y:t}].map(function(t){var i=f(t,e.tiltAngle),a=i.x,s=i.y;return{x:a+e.paddleCenterX,y:s+e.paddleCenterY}})}},{key:"getInnerWall",value:function(){var e=f({x:this.depth/2,y:0},this.tiltAngle);return b(this.x1,this.y1,250,250)<b(this.x1+e.x,this.y1+e.y,250,250)&&(e.x*=-1,e.y*=-1),{x1:this.x1+e.x,y1:this.y1+e.y,x2:this.x2+e.x,y2:this.y2+e.y}}}]),e}(),I=function(){function e(t){Object(o.a)(this,e),this.x=t.x,this.y=t.y,this.dx=t.dx,this.dy=t.dy,this.radius=10,this.delete=!1,this.r=0,this.dr=0,this.color="#000",this.boomerMode=!1,this.prevX=t.x,this.prevY=t.y,this.lastUpdateTime=Date.now()}return Object(h.a)(e,[{key:"draw",value:function(e){var t,i,a,s=Date.now()-this.lastUpdateTime,n=(t={x:this.prevX,y:this.prevY},i={x:this.x,y:this.y},a=s/(1e3/120),a+=1,{x:t.x*(1-a)+i.x*a,y:t.y*(1-a)+i.y*a}),r=n.x,l=n.y,o=e.context;o.save(),o.translate(r+.5,l+.5),o.rotate(this.r),"red"===this.color?o.fillStyle="#800":"blue"===this.color?o.fillStyle="#008":o.fillStyle="#888",o.beginPath(),o.arc(0,0,this.radius,this.radius,0,2*Math.PI),o.fill(),o.closePath(),e.settings.curveball&&(o.strokeStyle="#fff",o.lineWidth=2,o.beginPath(),o.moveTo(-10,0),o.lineTo(10,0),o.stroke(),o.closePath()),o.restore()}},{key:"update",value:function(e){if(this.prevX=this.x,this.prevY=this.y,this.x+=this.dx,this.y+=this.dy,this.r+=this.dr,this.boomerMode&&(this.x+=.5*this.dx,this.y+=.5*this.dy),Math.sqrt(Math.pow(this.dx,2)+Math.pow(this.dy,2))<1&&(this.dx*=1.2,this.dy*=1.2),e.settings.curveball){var t=f({x:this.dx,y:this.dy},this.dr/10);this.dx=t.x,this.dy=t.y}Date.now()-this.lastUpdateTime<0&&console.log(Date.now()-this.lastUpdateTime),this.lastUpdateTime=Date.now()}}]),e}(),O=i(177),P={display:"inline-block",alignItems:"center",justifyContent:"center",textAlign:"center",padding:0,border:"0.1em solid black",width:20},j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:Object(g.a)({},P,{background:this.props.color,color:"white"})},this.props.content)}}]),t}(s.a.Component),R={position:"fixed",bottom:0,left:0},N={position:"absolute",left:10,bottom:50,width:300,minHeight:150,border:"2px solid blue",background:"\t#00FF00",zIndex:"1"},U={width:"100px",padding:"2px",border:"2px solid blue",margin:"2px",textAlign:"center",fontSize:15,borderRadius:"2",userSelect:"none",position:""},T={height:50,width:100,margin:"auto",padding:10,float:"center"},B={width:"50%",height:50,float:"left",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 11px red inset"},M={margin:0,height:20,float:"left",display:"flex",alignItems:"center",justifyContent:"center"},F={marginLeft:"50%",height:50,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 11px blue inset"},D={margin:10,height:20,display:"flex",alignItems:"center",justifyContent:"right",float:"center"},K=function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(i=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={display:!1},i.handleOnClick=function(){i.setState(function(e){return{display:!e.display}})},i}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=s.a.createElement("div",{style:N},s.a.createElement("h2",{align:"centre"},"\tControls "),s.a.createElement("div",{align:"left"},s.a.createElement("span",{style:{display:"inline-block",float:" centre",margin:10}},s.a.createElement("div",null,"Red 1"),s.a.createElement("span",{style:M},s.a.createElement(j,{content:"1",color:"red"})),s.a.createElement("span",{style:D},s.a.createElement(j,{content:"2",color:"red"}))),s.a.createElement("span",{style:{display:"inline-block",float:" centre",margin:10}},s.a.createElement("div",null,"Red 2"),s.a.createElement("span",{style:M},s.a.createElement(j,{content:"S",color:"red"})),s.a.createElement("span",{style:D},s.a.createElement(j,{content:"D",color:"red"}))),s.a.createElement("span",{style:{display:"inline-block",float:" centre",margin:10}},s.a.createElement("div",null,"Red 3"),s.a.createElement("span",{style:M},s.a.createElement(j,{content:"V",color:"red"})),s.a.createElement("span",{style:D},s.a.createElement(j,{content:"B",color:"red"}))),s.a.createElement("span",{style:{display:"inline-block",float:" centre",margin:10}}),s.a.createElement("span",{style:{display:"inline-block",float:" centre",margin:10}},s.a.createElement("div",null,"Blue 1"),s.a.createElement("span",{style:M},s.a.createElement(j,{color:"blue",content:"-"})),s.a.createElement("span",{style:D},s.a.createElement(j,{content:"=",color:"blue"}))),s.a.createElement("span",{style:{display:"inline-block",float:" centre",margin:10}},s.a.createElement("div",null,"Blue 2"),s.a.createElement("span",{style:M},s.a.createElement(j,{content:"L",color:"blue"})),s.a.createElement("span",{style:D},s.a.createElement(j,{content:";",color:"blue"}))),s.a.createElement("span",{style:{display:"inline-block",float:" centre",margin:10}},s.a.createElement("div",null,"Blue 3"),s.a.createElement("span",{style:M},s.a.createElement(j,{content:"N",color:"blue"})),s.a.createElement("span",{style:D},s.a.createElement(j,{content:"M",color:"blue"})))),s.a.createElement("div",null,"To play, select your desired settings, and press one of the reset buttons to choose the number of players. Controls are shown above."),s.a.createElement("hr",null),s.a.createElement("div",null,"When playing with powerups, hit the ball over a green square to collect a powerup. NEW: It will be activated upon contact"),s.a.createElement("hr",null),s.a.createElement("div",null));return s.a.createElement("div",null,s.a.createElement("div",{style:T},s.a.createElement("div",{id:"red",style:B},this.props.redScore),s.a.createElement("div",{id:"blue",style:F},this.props.blueScore)),s.a.createElement("div",{style:R},this.state.display?e:"",s.a.createElement("div",null,s.a.createElement(O.a,{style:U,variant:"primary",onClick:this.handleOnClick},"Instructions"))))}}]),t}(s.a.Component),H=function(){function e(t){Object(o.a)(this,e),this.x1=t.x1,this.y1=t.y1,this.x2=t.x2,this.y2=t.y2}return Object(h.a)(e,[{key:"getReflection",value:function(e){var t=f({x:this.x2-this.x1,y:this.y2-this.y1},Math.PI/2),i={x:(this.x1+this.x2)/2,y:(this.y1+this.y2)/2},a=Object(g.a)({},i);a.x+=.001*t.x,a.y+=.001*t.y,b(e.x,e.y,i.x,i.y)<b(e.x,e.y,a.x,a.y)&&(t.x*=-1,t.y*=-1);var s=Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2));return t.x/=s,t.y/=s,m({x:e.dx,y:e.dy},t,1)}},{key:"draw",value:function(e){var t=e.context;t.save(),t.strokeStyle="#000",t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.stroke(),t.restore()}}]),e}(),Y=function(){function e(t){Object(o.a)(this,e),this.x1=t.x1,this.y1=t.y1,this.x2=t.x2,this.y2=t.y2,this.color=t.color||"red",this.teamId=t.teamId||0}return Object(h.a)(e,[{key:"draw",value:function(e){var t=e.context;t.save(),t.strokeStyle=this.color,t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.stroke(),t.restore()}},{key:"render",value:function(e){var t=e.context;t.save(),t.strokeStyle=this.color,t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.stroke(),t.restore()}}]),e}(),L=i(61),V=function(){function e(t){Object(o.a)(this,e),this.walls=t.walls,this.output={left:0,right:0},this.lookAhead=10,this.debug=t.debug,this.curve=t.curve}return Object(h.a)(e,[{key:"reset",value:function(){this.output={left:0,right:0}}},{key:"calculateOutput",value:function(e,t){for(var i=t.getInnerWall(),a={x:e.x,y:e.y,dx:e.dx,dy:e.dy},s=this.lookAhead;s>0;){for(var n=!1,r={x:a.x+1e3*a.dx,y:a.y+1e3*a.dy},l={x:a.x,y:a.y},o=0;o<this.walls.length;o++){var h=this.walls[o],c=Object(L.a)(h.x1,h.y1,h.x2,h.y2,r.x,r.y,l.x,l.y);if("intersecting"===c.type){a.x=c.point.x,a.y=c.point.y,a.x-=a.dx,a.y-=a.dy;var d=h.getReflection(a);a.x+=a.dx,a.y+=a.dy,a.dx=d.x,a.dy=d.y,a.x+=a.dx,a.y+=a.dy,s--,n=!0;break}}if(!n){var u=Object(L.a)(i.x1,i.y1,i.x2,i.y2,r.x,r.y,l.x,l.y);if("intersecting"===u.type){var p={x:t.paddleCenterX,y:t.paddleCenterY};if(b(p.x,p.y,u.point.x,u.point.y)<8)return void(this.output={left:0,right:0});var y={x:p.x+(t.x2-t.x1)/100,y:p.y+(t.y2-t.y1)/100};return void(b(y.x,y.y,u.point.x,u.point.y)<b(p.x,p.y,u.point.x,u.point.y)?this.output={left:0,right:1}:this.output={left:1,right:0})}s--}}}}]),e}(),Q={position:"fixed",bottom:0,right:0},J={background:"#AAAAFF",width:"90%",margin:"auto",marginTop:"2px"},X={position:"absolute",right:10,bottom:30,width:300,minHeight:150,border:"2px solid blue",background:"#8888ff",zIndex:"1"},G={width:"100px",padding:"2px",border:"2px solid blue",margin:"2px",textAlign:"center",borderRadius:"2",userSelect:"none",position:"fixed",bottom:0,right:0,fontSize:15},W=.2,z=.04,q=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={opened:!1},i.toggleDropdown=i.toggleDropdown.bind(Object(u.a)(i)),i.AICheckboxChange=i.AICheckboxChange.bind(Object(u.a)(i)),i.curveballChange=i.curveballChange.bind(Object(u.a)(i)),i.powerupsChange=i.powerupsChange.bind(Object(u.a)(i)),i.accelChange=i.accelChange.bind(Object(u.a)(i)),i.trailChange=i.trailChange.bind(Object(u.a)(i)),i}return Object(p.a)(t,e),Object(h.a)(t,[{key:"toggleDropdown",value:function(){this.setState(function(e){return{opened:!e.opened}})}},{key:"AICheckboxChange",value:function(e){var t=this.props.settings;t.AI[e.target.id]=!t.AI[e.target.id],this.props.changeHandler(t)}},{key:"curveballChange",value:function(e){var t=this.props.settings;t.curveball=e.target.checked,this.props.changeHandler(t)}},{key:"powerupsChange",value:function(e){var t=this.props.settings;t.powerups=e.target.checked,this.props.changeHandler(t)}},{key:"accelChange",value:function(e){var t=this.props.settings;t.accel=e.target.checked,this.props.changeHandler(t)}},{key:"trailChange",value:function(e){var t=this.props.settings;t.trail=e.target.checked,this.props.changeHandler(t)}},{key:"defChange",value:function(e){var t=this.props.settings;t.defFactor=e.target.value,this.props.changeHandler(t)}},{key:"afChange",value:function(e){var t=this.props.settings;t.accelFactor=e.target.value,this.props.changeHandler(t)}},{key:"resetAdv",value:function(){var e=this.props.settings;e.accelFactor=z,e.defFactor=W,this.props.changeHandler(e)}},{key:"render",value:function(){for(var e=[],t=["Red 1","Red 2","Red 3","Blue 1","Blue 2","Blue 3"],i=0;i<6;i++){var a=s.a.createElement("div",{key:i,style:{width:45,display:"flex",flexDirection:"column"}},s.a.createElement("div",{style:{color:"R"===t[i][0]?"red":"blue"}},t[i]),s.a.createElement("input",{type:"checkbox",id:i.toString(),checked:this.props.settings.AI[i],onChange:this.AICheckboxChange}));e.push(a)}var n=s.a.createElement("input",{type:"checkbox",checked:this.props.settings.curveball,onChange:this.curveballChange}),r=s.a.createElement("input",{type:"checkbox",checked:this.props.settings.powerups,onChange:this.powerupsChange}),l=s.a.createElement("input",{type:"checkbox",checked:this.props.settings.accel,onChange:this.accelChange}),o=s.a.createElement("input",{type:"checkbox",checked:this.props.settings.trail,onChange:this.trailChange}),h=s.a.createElement("input",{type:"range",value:this.props.settings.defFactor,min:"0",max:"0.5",step:"0.05",onChange:this.defChange.bind(this)}),c=s.a.createElement("input",{type:"range",value:this.props.settings.accelFactor,min:"0",max:"0.2",step:"0.01",onChange:this.afChange.bind(this)}),d=s.a.createElement("div",{style:X},s.a.createElement("div",{style:J},s.a.createElement("div",null,"Enable AI "),s.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e),s.a.createElement("div",{style:{fontSize:"13px"}},"AI Settings are applied when you reset game"),s.a.createElement("div",null,"Curveball ",n),s.a.createElement("div",null,"Powerups ",r),s.a.createElement("div",null,"Input Acceleration ",l)),s.a.createElement("div",{style:J},s.a.createElement("div",{style:{fontSize:"16px"}},"Graphics Settings"),s.a.createElement("div",null,"Ball Trail ",o)),s.a.createElement("div",{style:J},s.a.createElement("div",{style:{fontSize:"16px"}},"Advanced"),s.a.createElement("div",null,"Deflection Factor ",h),s.a.createElement("div",{style:{fontSize:"13px"}},"Ball's direction change when hit by a moving paddle"),s.a.createElement("div",null,"Ball Acceleration",c),s.a.createElement("div",{style:{fontSize:"13px"}},"How much the ball speeds up at every hit"),s.a.createElement("button",{style:{margin:2},onClick:this.resetAdv.bind(this)},"Reset Advanced Settings")));return s.a.createElement("div",{style:Q},this.state.opened?d:"",s.a.createElement("button",{style:G,onClick:this.toggleDropdown},"Settings ",this.state.opened?"\u2193":"\u2191"," "))}}]),t}(s.a.Component),Z=function(){function e(t){Object(o.a)(this,e),this.x=t.x,this.y=t.y,this.lifetime=40,this.delete=!1,this.color=t.color}return Object(h.a)(e,[{key:"draw",value:function(e){var t=e.context;t.fillStyle=this.color,t.beginPath();var i=this.lifetime/10;t.fillRect(this.x-i/2,this.y-i/2,i,i),t.fill(),t.closePath()}},{key:"update",value:function(){this.lifetime--,this.lifetime<=0&&(this.delete=!0)}}]),e}(),_=i(35),$=i.n(_),ee=i(59),te=i.n(ee),ie=i(60),ae=i.n(ie),se=i(36),ne=i.n(se),re=0,le=1,oe=2,he=3,ce={height:40,width:80,margin:"auto",padding:0,float:"center"},de={width:"50%",height:40,float:"left",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 5px #844 inset"},ue={marginLeft:"50%",height:40,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 5px #448 inset"},pe=(s.a.Component,function(){function e(t){Object(o.a)(this,e),this.x=t.x||k(200,300),this.y=t.y||k(200,300),this.delete=!1}return Object(h.a)(e,[{key:"draw",value:function(e){var t=e.context;t.fillStyle="#0a0",t.fillRect(this.x-10,this.y-10,20,20)}}]),e}()),ye=function(){function e(t){Object(o.a)(this,e),this.playerName=t.playerName||"Untitled",this.color=t.color||"red",this.left=t.left,this.right=t.right,this.x=t.x,this.y=t.y,this.AI=t.AI||!1}return Object(h.a)(e,[{key:"draw",value:function(e){var t=e.context;t.textBaseline="top",t.font="14px sans-serif";var i=t.measureText(this.playerName).width+4;i<42&&(i=42);var a=this.x-i/2,s=this.y-17;t.beginPath(),t.rect(a,s,i,34),t.strokeStyle="red"===this.color?"red":"blue",t.stroke(),t.fillStyle="red"===this.color?"#f88":"#88f",t.fill(),t.fillStyle="black",t.strokeStyle="black",t.fillText(this.playerName,a+2,s+2),t.closePath(),t.font="14px Courier New",this.AI?t.fillText("A.I.",a+2,s+2+14+2):(t.beginPath(),t.moveTo(a+7,s+18),t.lineTo(a+2,s+18+7),t.lineTo(a+7,s+18+14),t.fill(),t.beginPath(),t.moveTo(a+35,s+18),t.lineTo(a+40,s+18+7),t.lineTo(a+35,s+18+14),t.fill(),t.fillText(this.left,a+9,s+18),t.fillText(this.right,a+24,s+18))}}]),e}(),xe={backgroundColor:"\t#fff"},ge={PAUSED:0,RUNNING:1,GOAL_SCORED:2},be=0,fe=1,me=!1,ve=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={input:new x,context:null,gameState:ge.RUNNING,redScore:0,blueScore:0,gameMode:1,settings:{AI:[!1,!1,!1,!1,!1,!1],curveball:!1,powerups:!1,accel:!1,trail:!0,defFactor:.2,accelFactor:.04}},i.draw=i.draw.bind(Object(u.a)(i)),i.reset1v1=i.reset1v1.bind(Object(u.a)(i)),i.reset2v2=i.reset2v2.bind(Object(u.a)(i)),i.reset3v3=i.reset3v3.bind(Object(u.a)(i)),i.resetPositions=i.resetPositions.bind(Object(u.a)(i)),i.updatePaddles=i.updatePaddles.bind(Object(u.a)(i)),i.changeSettings=i.changeSettings.bind(Object(u.a)(i)),i.initBots=i.initBots.bind(Object(u.a)(i)),i.createParticle=i.createParticle.bind(Object(u.a)(i)),i.update=i.update.bind(Object(u.a)(i)),i}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state.input.bindKeys();var e=this.refs.canvas.getContext("2d");this.powerupTimer=1e5,this.setState({context:e}),this.reset1v1(),requestAnimationFrame(this.draw),setInterval(this.update,1e3/120)}},{key:"bluePowerupHandler",value:function(e){for(var t in 2===e?[0,1,2]:[3,4,5]){var i=this.paddles[t];switch(e){case 1:i.bigPowerup();break;case 2:i.smallPowerup();break;case 3:i.boomerPowerup()}}}},{key:"redPowerupHandler",value:function(e){for(var t in 2===e?[3,4,5]:[0,1,2]){var i=this.paddles[t];switch(e){case 1:i.bigPowerup();break;case 2:i.smallPowerup();break;case 3:i.boomerPowerup()}}}},{key:"initBots",value:function(){this.bots=[];for(var e=this.goals.map(function(e){return new H({x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2})}).concat(this.walls),t=0;t<6;t++)if(this.state.settings.AI[t]){var i=Object(l.a)(e);i.splice(t,1),this.bots.push(new V({walls:i,curve:this.state.settings.curveball}))}else this.bots.push(null)}},{key:"reset1v1",value:function(){this.setState({redScore:0,blueScore:0,gameState:ge.RUNNING,gameMode:1}),this.particles=[],this.powerups=[],this.state.settings.powerups&&(this.powerupTimer=k(200,300)),this.walls=[new H({x1:0,y1:100,x2:500,y2:100}),new H({x1:0,y1:399,x2:500,y2:399})],this.goals=[new Y({x1:0,y1:100,x2:0,y2:400,color:"red",teamId:be}),new Y({x1:-100,y1:-100,x2:-100,y2:-100}),new Y({x1:-100,y1:-100,x2:-100,y2:-100}),new Y({x1:499,y1:100,x2:499,y2:400,color:"blue",teamId:fe}),new Y({x1:-100,y1:-100,x2:-100,y2:-100}),new Y({x1:-100,y1:-100,x2:-100,y2:-100})],this.paddles=[new S({x1:10,y1:100,x2:10,y2:400,color:"red"}),new S({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new S({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new S({x1:490,y1:400,x2:490,y2:100,color:"blue"}),new S({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new S({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0})],this.playerCards=[new ye({playerName:"Red 1",color:"red",x:25,y:50,left:"1",right:"2",AI:this.state.settings.AI[0]}),new ye({playerName:"Blue 1",color:"blue",x:475,y:50,left:"-",right:"=",AI:this.state.settings.AI[3]})],this.ball=new I({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"reset2v2",value:function(){this.particles=[],this.powerups=[],this.state.settings.powerups&&(this.powerupTimer=k(200,300)),this.setState({redScore:0,blueScore:0,gameState:ge.RUNNING,gameMode:2}),this.walls=[],this.goals=[new Y({x1:0,y1:250,x2:250,y2:0,color:"red",teamId:be}),new Y({x1:250,y1:0,x2:500,y2:250,color:"red",teamId:be}),new Y({x1:-100,y1:-100,x2:-100,y2:-100}),new Y({x1:250,y1:500,x2:500,y2:250,color:"blue",teamId:fe}),new Y({x1:0,y1:250,x2:250,y2:500,color:"blue",teamId:fe}),new Y({x1:-100,y1:-100,x2:-100,y2:-100})],this.paddles=[new S({x1:10,y1:250,x2:250,y2:10,color:"red"}),new S({x1:250,y1:10,x2:490,y2:250,color:"red"}),new S({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new S({x1:250,y1:490,x2:490,y2:250,color:"blue"}),new S({x1:10,y1:250,x2:250,y2:490,color:"blue"}),new S({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0})],this.playerCards=[new ye({playerName:"Red 1",color:"red",AI:this.state.settings.AI[0],left:"1",right:"2",x:50,y:100}),new ye({playerName:"Red 2",color:"red",AI:this.state.settings.AI[1],left:"S",right:"D",x:450,y:100}),new ye({playerName:"Blue 1",color:"blue",AI:this.state.settings.AI[3],left:"-",right:"=",x:50,y:400}),new ye({playerName:"Blue 2",color:"blue",AI:this.state.settings.AI[4],left:"L",right:";",x:450,y:400})],this.ball=new I({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"reset3v3",value:function(){this.particles=[],this.powerups=[],this.state.settings.powerups&&(this.powerupTimer=k(200,300)),this.setState({redScore:0,blueScore:0,gameState:ge.RUNNING,gameMode:3}),this.walls=[],this.goals=[];for(var e=0;e<6;e++){var t=f({x:-250,y:0},e*Math.PI/3),i=f({x:-250,y:0},(e+1)*Math.PI/3),a=e<3?"red":"blue",s="red"===a?be:fe;this.goals.push(new Y({x1:t.x+250,y1:t.y+250,x2:i.x+250,y2:i.y+250,color:a,teamId:s}))}this.paddles=[];for(var n=0;n<3;n++){var r=f({x:-240,y:0},n*Math.PI/3),l=f({x:-240,y:0},(n+1)*Math.PI/3);this.paddles.push(new S({x1:r.x+250,y1:r.y+250,x2:l.x+250,y2:l.y+250,color:"red"}))}for(var o=0;o<3;o++){var h=this.paddles[2-o],c=h.x1,d=h.y1,u=h.x2,p=h.y2;this.paddles.push(new S({x1:c,y1:500-d,x2:u,y2:500-p,color:"blue"}))}this.playerCards=[new ye({playerName:"Red 1",color:"red",AI:this.state.settings.AI[0],left:"1",right:"2",x:25,y:100}),new ye({playerName:"Red 2",color:"red",AI:this.state.settings.AI[1],left:"S",right:"D",x:250,y:17}),new ye({playerName:"Red 3",color:"red",AI:this.state.settings.AI[2],left:"V",right:"B",x:475,y:100}),new ye({playerName:"Blue 1",color:"blue",AI:this.state.settings.AI[3],left:"-",right:"=",x:25,y:400}),new ye({playerName:"Blue 2",color:"blue",AI:this.state.settings.AI[4],left:"L",right:";",x:250,y:483}),new ye({playerName:"Blue 3",color:"blue",AI:this.state.settings.AI[5],left:"N",right:"M",x:475,y:400})],this.ball=new I({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"resetPositions",value:function(){this.powerups=[],this.particles=[];var e=f({x:1.5,y:0},1===this.state.gameMode?k(-Math.PI/4,Math.PI/4):k(0,2*Math.PI));1===this.state.gameMode&&Math.random()<.5&&(e.x*=-1,e.y*=-1),this.ball=new I({x:250,y:250,dx:e.x,dy:e.y}),this.paddles.forEach(function(e){e.position=50,e.resetPowerup()}),this.bots.forEach(function(e){e&&e.reset()})}},{key:"updatePaddles",value:function(){var e=this.state.input.pressedKeys,t=this.bots;this.paddles[0].update(this.state,t[0]?t[0].output:e.red1),this.paddles[1].update(this.state,t[1]?t[1].output:e.red2),this.paddles[2].update(this.state,t[2]?t[2].output:e.red3),this.paddles[3].update(this.state,t[3]?t[3].output:e.blue1),this.paddles[4].update(this.state,t[4]?t[4].output:e.blue2),this.paddles[5].update(this.state,t[5]?t[5].output:e.blue3)}},{key:"createParticle",value:function(e){this.state.settings.trail&&this.particles.push(new Z(e))}},{key:"update",value:function(){var e=this;if(me=!me,this.state.gameState!==ge.GOAL_SCORED&&this.state.gameState!==ge.PAUSED){if(me){for(;this.particles[0]&&this.particles[0].delete;)this.particles.shift();this.particles.forEach(function(e){return e.update()}),this.createParticle({x:this.ball.x,y:this.ball.y,color:this.ball.color})}this.paddles.forEach(function(t){var i,a=t.getHitbox(),s=[];if(a.forEach(function(e){s.push(e.x),s.push(e.y)}),A.a.circlePolygon(e.ball.x,e.ball.y,e.ball.radius,s)){var n=t.getReflection(e.ball,e.state);e.ball.dx=n.x,e.ball.dy=n.y,e.ball.x+=e.ball.dx,e.ball.y+=e.ball.dy,e.createParticle({x:(i=e.ball).x,y:i.y}),e.ball.color=t.color,3===t.powerup?e.ball.boomerMode=!0:e.ball.boomerMode=!1}}),this.walls.forEach(function(t){if(A.a.circleLine(e.ball.x,e.ball.y,e.ball.radius,t.x1,t.y1,t.x2,t.y2)){var i=t.getReflection(e.ball);e.ball.dx=i.x,e.ball.dy=i.y}}),this.powerups.forEach(function(t,i){A.a.boxCircle(t.x-10,t.y-10,20,20,e.ball.x,e.ball.y,e.ball.radius)&&("red"===e.ball.color?e.redPowerupHandler(Math.floor(k(1.0000001,3.99999999))):"blue"===e.ball.color&&e.bluePowerupHandler(Math.floor(k(1.0000001,3.99999999))),e.powerups.splice(i,1))}),this.bots.forEach(function(t,i){t&&t.calculateOutput(e.ball,e.paddles[i])}),this.ball.update(this.state),this.updatePaddles();var t=this.state.context;this.goals.forEach(function(i){var a;A.a.circleLine(e.ball.x,e.ball.y,e.ball.radius,i.x1,i.y1,i.x2,i.y2)&&(e.draw(0,!0),i.teamId===be?(e.setState(function(e){return{blueScore:e.blueScore+1}}),a="Blue team",t.fillStyle="blue"):(e.setState(function(e){return{redScore:e.redScore+1}}),a="Red team",t.fillStyle="red"),C="30px Courier New",E=a+" has scored!",e.setState({gameState:ge.GOAL_SCORED}),setTimeout(function(){e.resetPositions(),e.setState({gameState:ge.RUNNING})},1500))})}}},{key:"draw",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(Date.now(),this.state.context);return this.state.gameState===ge.PAUSED?(a.font="30px Courier New",a.fillStyle="black",a.fillText("PAUSED",200,250),void(!1===i&&requestAnimationFrame(this.draw))):this.state.gameState===ge.GOAL_SCORED?(a.font="30px Courier New",a.fillStyle=C,a.fillText(E,80,250),void(!1===i&&requestAnimationFrame(this.draw))):(a.save(),a.fillStyle="#FFF",a.translate(.5,.5),a.fillRect(0,0,500,500),this.walls.forEach(function(e){return e.draw(t.state)}),this.goals.forEach(function(e){return e.draw(t.state)}),this.playerCards.forEach(function(e){return e.draw(t.state)}),this.powerups.forEach(function(e){return e.draw(t.state)}),this.particles.forEach(function(e){return e.draw(t.state)}),this.paddles.forEach(function(e){return e.draw(t.state)}),this.ball.draw(this.state),this.state.settings.powerups&&(this.powerupTimer>0?this.powerupTimer--:(this.powerupTimer=k(200,300),this.powerups.length<3&&this.powerups.push(new pe({})))),a.restore(),void(!1===i&&requestAnimationFrame(this.draw)))}},{key:"componentWillUnmount",value:function(){this.state.input.unbindKeys()}},{key:"changeSettings",value:function(e){this.setState({settings:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:xe},s.a.createElement("div",null,s.a.createElement("h1",null,"Pong++"),s.a.createElement("canvas",{ref:"canvas",width:"501",height:"501"}),s.a.createElement(K,{redScore:this.state.redScore,blueScore:this.state.blueScore}),s.a.createElement("center",null,s.a.createElement("button",{id:"1v1",onClick:this.reset1v1},"Reset 1v1"),s.a.createElement("button",{id:"2v2",onClick:this.reset2v2},"Reset 2v2"),s.a.createElement("button",{id:"3v3",onClick:this.reset3v3},"Reset 3v3"),s.a.createElement("button",{onClick:this.resetPositions},"Reset Rally"),s.a.createElement("button",{onClick:function(){e.setState(function(e){if(2!==e.gameState)return{gameState:1-e.gameState}})}},0===this.state.gameState?"Play":"Pause"),s.a.createElement("div",null,"For Orbital Evaluators: Some features have been added since Milestone 3.")),s.a.createElement(q,{settings:this.state.settings,changeHandler:this.changeSettings})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAACwSURBVEhL7ZZRDoMwDEPLrrLzwGHHeXaWUglUIccJVrZ+IPF+iKrUGCcfTLXWMobX8RzAIw0MlL7YkPdn3ovvsu5Fgx5aItddotFrekj5NZBA3ZWOHSmornusNl/PBJeOLYvqRNr2xZvgQZYvnTI4QNdp3QbcVceY4CbSkLU0Rroh0GZ7JNf2Zcq0iXRii+kV7tq2nm0qlht/GKP3la50IhYgcn1WV2rg+cUB7ihdygZqX0ptnwrQJgAAAABJRU5ErkJggg=="},36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADiSURBVEhLpc5bEsIwDEPR7n/TYOrbIUps59HzwzSSPFytz2scClE5wokCxU2Mp6gvY9bJAt+sYKB+73U8RVUR+Y/hWZElKCmy9rQhVGQDYkV265dUFFmDQJE9TmY8KbJG8GSoq2nUiV8NowUMBmlgmJaoRqrMcCBBKTGJDWcGxLnzf00jVzW4kaOXSGPWM7QjccZOFe+hIGChyHau9690FdmDV0XWkCdaikyRKbLH/5tckUVoKLIbHyTKowI9ReaneVMeT9FWRbR617FR8bsPtrCs0d3HPkPrFFdG5O9wy1zXFz58LSiIsJAlAAAAAElFTkSuQmCC"},59:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAACwSURBVEhL7ZNLEoMwDEM5SJfc/2Y9QxBIJaCh0zSOWfFGm/jz2OCppPGojUz1+zUjeg2CTqkH2ndhVSNqBjjaTmpEI12YytWIBv/EJMgYtRmY9eezEsKFRmyXQf1aHcz2xc/JWC8SCkG9Rpvoi1wb+WqbiIRC8FXN+k9si2FrVVsDYa8R22VQvzgZhDvt2Dpz46FrsAtTndQaCXC0VbWaYXah1CoPQmq9EnjURpq6lAXHmJpdMP4siwAAAABJRU5ErkJggg=="},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADeSURBVEhL1dbLDcJADATQhZZogCsVc6UBalosTbS/2OPJYQ+MkDCK/WJtEOJWay17cj/eN+Q/afWsn68vis/7gSKNtHVzLWPNk9NnS9QTOlIUndF8PtVDWtmL9/i0O+N+N4ju0MS9pK90uq+uT3TqIqLeadFFFN1/jMg4b2N4HZ/ju7aE9OIe1VxzvdNjX+Qikb7cKfnlO7stfGULO2viWvhVS0inkxbe49PujHsCRHdo4l7SVzrdV9cnOnURUe+06CKK7j9GJHIRftUS0umkhfd0euxTXIRMbfs7WcoPkOOBh2+xxBIAAAAASUVORK5CYII="},92:function(e,t,i){e.exports=i(175)}},[[92,1,2]]]);
//# sourceMappingURL=main.1545048c.chunk.js.map