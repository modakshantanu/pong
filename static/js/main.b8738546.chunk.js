(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,i){e.exports=i(65)},42:function(e,t,i){},43:function(e,t,i){},65:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),a=i(35),r=i.n(a),l=(i(42),i(12)),h=i(2),o=i(1),d=i(6),y=i(5),c=i(3),x=i(7),u=function(){function e(){Object(h.a)(this,e),this.pressedKeys={},this.pressedKeys.red1={right:0,left:0},this.pressedKeys.red2={right:0,left:0},this.pressedKeys.red3={right:0,left:0},this.pressedKeys.blue1={right:0,left:0},this.pressedKeys.blue2={right:0,left:0},this.pressedKeys.blue3={right:0,left:0}}return Object(o.a)(e,[{key:"bindKeys",value:function(){window.addEventListener("keyup",this.handleKeys.bind(this,!1)),window.addEventListener("keydown",this.handleKeys.bind(this,!0))}},{key:"unbindKeys",value:function(){window.removeEventListener("keyup",this.handleKeys),window.removeEventListener("keydown",this.handleKeys)}}]),Object(o.a)(e,[{key:"handleKeys",value:function(e,t){var i=this.pressedKeys;switch(t.key){case"1":i.red1.left=e;break;case"2":i.red1.right=e;break;case"s":case"S":i.red2.left=e;break;case"d":case"D":i.red2.right=e;break;case"v":case"V":i.red3.left=e;break;case"b":case"B":i.red3.right=e;break;case"n":case"N":i.blue3.left=e;break;case"m":case"M":i.blue3.right=e;break;case"l":case"L":i.blue2.left=e;break;case";":i.blue2.right=e;break;case"-":i.blue1.left=e;break;case"=":i.blue1.right=e}this.pressedKeys=i}}]),e}(),p=(i(43),i(13));function b(e,t,i,n){return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-n,2))}function f(e,t){var i=e.x,n=e.y;return{x:Math.cos(t)*i-Math.sin(t)*n,y:Math.sin(t)*i+Math.cos(t)*n}}function v(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var i=t.x*e.x+t.y*e.y,n=e;return n.x-=2*i*t.x,n.y-=2*i*t.y,n}var g=i(4),m=i.n(g),w=function(){function e(t){Object(h.a)(this,e),this.x1=t.x1||0,this.y1=t.y1||0,this.x2=t.x2||0,this.y2=t.y2||0,this.hidden=t.hidden,this.depth=t.depth||10,this.width=t.width||50,this.position=50,this.paddleCenterX=(this.x1+this.x2)/2,this.paddleCenterY=(this.y1+this.y2)/2,this.slidinglength=b(this.x1,this.y1,this.x2,this.y2),this.y1===this.y2?this.tiltAngle=90*Math.PI/180:this.tiltAngle=-Math.atan((this.x2-this.x1)/(this.y2-this.y1)),this.minPosition=this.width/this.slidinglength*100/2,this.maxPosition=100*(1-this.width/this.slidinglength/2)}return Object(o.a)(e,[{key:"getReflection",value:function(e){for(var t,i=this.getHitbox(),n=0;n<4&&(t=[i[n].x,i[n].y,i[(n+1)%4].x,i[(n+1)%4].y],!m.a.circleLine.apply(m.a,[e.x,e.y,e.radius].concat(Object(l.a)(t))));n++);var s=f({x:t[2]-t[0],y:t[3]-t[1]},Math.PI/2),a={x:(t[2]+t[0])/2,y:(t[3]+t[1])/2},r=Object(p.a)({},a);r.x+=1e-4*s.x,r.y+=1e-4*s.y,b(this.paddleCenterX,this.paddleCenterY,a.x,a.y)>b(this.paddleCenterX,this.paddleCenterY,r.x,r.y)&&(s.x*=-1,s.y*=-1);var h=Math.sqrt(Math.pow(s.x,2)+Math.pow(s.y,2));s.x/=h,s.y/=h;var o=v({x:e.dx,y:e.dy},s,1);o.x+=.05*(e.x-this.paddleCenterX),o.y+=.05*(e.y-this.paddleCenterY);var d={x:this.paddleCenterX-this.previousCenterX,y:this.paddleCenterY-this.previousCenterY};return 0===d.x&&0===d.y?o:o=f(o,.2*function(e,t){var i=e.x,n=e.y,s=t.x,a=t.y;return Math.atan(i*a-n*s,i*s+n*a)}(o,d))}},{key:"render",value:function(e,t){if(!this.hidden){var i=e.context;t.right&&this.position++,t.left&&this.position--,this.position>this.maxPosition&&(this.position=this.maxPosition),this.position<this.minPosition&&(this.position=this.minPosition),this.position=Math.round(this.position),this.previousCenterX=this.paddleCenterX,this.previousCenterY=this.paddleCenterY,this.paddleCenterX=this.x1*(1-this.position/100)+this.x2*this.position/100,this.paddleCenterY=this.y1*(1-this.position/100)+this.y2*this.position/100,i.save(),i.translate(.5,.5),i.strokeStyle="#000000",i.fillStyle="#888888",i.translate(this.paddleCenterX,this.paddleCenterY),i.rotate(this.tiltAngle),i.fillRect(-this.depth/2,-this.width/2,this.depth,this.width),i.restore()}}},{key:"getHitbox",value:function(){var e=this,t=this.width/2,i=this.depth/2;return[{x:i,y:t},{x:i,y:-t},{x:-i,y:-t},{x:-i,y:t}].map(function(t){var i=f(t,e.tiltAngle),n=i.x,s=i.y;return{x:n+e.paddleCenterX,y:s+e.paddleCenterY}})}},{key:"getInnerWall",value:function(){var e=f({x:this.depth/2,y:0},this.tiltAngle);return b(this.x1,this.y1,250,250)<b(this.x1+e.x,this.y1+e.y,250,250)&&(e.x*=-1,e.y*=-1),{x1:this.x1+e.x,y1:this.y1+e.y,x2:this.x2+e.x,y2:this.y2+e.y}}}]),e}(),k=function(){function e(t){Object(h.a)(this,e),this.x=t.x,this.y=t.y,this.dx=t.dx,this.dy=t.dy,this.radius=10,this.delete=!1}return Object(o.a)(e,[{key:"render",value:function(e){this.x+=this.dx,this.y+=this.dy;var t=e.context;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle="#0095DD",t.fill(),t.closePath()}}]),e}(),E={height:0,width:400,margin:"auto",padding:20,alignItems:"left",justifyContent:"left",float:"left"},S=s.a.createElement("div",{className:E},s.a.createElement("h2",{align:"left"},"CONTROLS INFO"),s.a.createElement("div",{align:"left"},s.a.createElement("p",null," RED 1  : 1  --\x3e LEFT / UP  &&  2   --\x3e RIGHT / DOWN  "),s.a.createElement("p",null," RED 2  : S  --\x3e LEFT  &&  D --\x3e RIGHT "),s.a.createElement("p",null," RED 3  : V  --\x3e LEFT  &&  B --\x3e RIGHT  "),s.a.createElement("p",null," BLUE 3 : N  --\x3e LEFT  &&  M   --\x3e RIGHT "),s.a.createElement("p",null," BLUE 2 : L --\x3e LEFT  &&  ';' --\x3e RIGHT  "),s.a.createElement("p",null," BLUE 1 : -  --\x3e LEFT  &&  =   --\x3e DOWN  "))),O={height:50,width:100,margin:"auto",padding:10},I={width:"50%",height:50,float:"left",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 10px red inset"},C={marginLeft:"50%",height:50,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 10px blue inset"},j={margin:"auto",height:"30px",width:"30px"},M=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{style:O},s.a.createElement("div",{id:"red",style:I},this.props.redScore),s.a.createElement("div",{id:"blue",style:C},this.props.blueScore)),s.a.createElement("div",{style:j}),s.a.createElement("div",{style:E},S))}}]),t}(s.a.Component),P=function(){function e(t){Object(h.a)(this,e),this.x1=t.x1,this.y1=t.y1,this.x2=t.x2,this.y2=t.y2}return Object(o.a)(e,[{key:"getReflection",value:function(e){var t=f({x:this.x2-this.x1,y:this.y2-this.y1},Math.PI/2),i={x:(this.x1+this.x2)/2,y:(this.y1+this.y2)/2},n=Object(p.a)({},i);n.x+=.001*t.x,n.y+=.001*t.y,b(e.x,e.y,i.x,i.y)<b(e.x,e.y,n.x,n.y)&&(t.x*=-1,t.y*=-1);var s=Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2));return t.x/=s,t.y/=s,v({x:e.dx,y:e.dy},t,1)}},{key:"render",value:function(e){var t=e.context;t.save(),t.strokeStyle="#000",t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.stroke(),t.restore()}}]),e}(),R=function(){function e(t){Object(h.a)(this,e),this.x1=t.x1,this.y1=t.y1,this.x2=t.x2,this.y2=t.y2,this.color=t.color||"red",this.teamId=t.teamId||0}return Object(o.a)(e,[{key:"render",value:function(e){var t=e.context;t.save(),t.strokeStyle=this.color,t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.stroke(),t.restore()}}]),e}();function T(e,t){return e+Math.random()*(t-e)}var A,N=i(19),L=function(){function e(t){Object(h.a)(this,e),this.walls=t.walls,this.output={left:0,right:0},this.waitTimer=0,this.lookAhead=10,this.debug=t.debug}return Object(o.a)(e,[{key:"reset",value:function(){this.waitTimer=-1,this.output={left:0,right:0}}},{key:"calculateOutput",value:function(e,t){if(this.waitTimer>0)this.waitTimer--;else{this.waitTimer=0;for(var i=t.getInnerWall(),n={x:e.x,y:e.y,dx:e.dx,dy:e.dy},s=this.lookAhead;s>0;){for(var a=!1,r={x:n.x+1e3*n.dx,y:n.y+1e3*n.dy},l={x:n.x,y:n.y},h=0;h<this.walls.length;h++){var o=this.walls[h],d=Object(N.a)(o.x1,o.y1,o.x2,o.y2,r.x,r.y,l.x,l.y);if("intersecting"===d.type){n.x=d.point.x,n.y=d.point.y,n.x-=n.dx,n.y-=n.dy;var y=o.getReflection(n);n.x+=n.dx,n.y+=n.dy,n.dx=y.x,n.dy=y.y,n.x+=n.dx,n.y+=n.dy,0===this.waitTimer&&(this.waitTimer=Math.round(Math.abs(e.dx)>1e-4?(d.point.x-e.x)/e.dx:(d.point.y-e.y)/e.dy)+1),s--,a=!0;break}}if(!a){var c=Object(N.a)(i.x1,i.y1,i.x2,i.y2,r.x,r.y,l.x,l.y);if("intersecting"===c.type){var x={x:t.paddleCenterX,y:t.paddleCenterY};if(0===this.waitTimer&&(this.waitTimer=Math.round(Math.abs(e.dx)>1e-4?(c.point.x-e.x)/e.dx:(c.point.y-e.y)/e.dy)+1),b(x.x,x.y,c.point.x,c.point.y)<8)return void(this.output={left:0,right:0});var u={x:x.x+(t.x2-t.x1)/100,y:x.y+(t.y2-t.y1)/100};b(u.x,u.y,c.point.x,c.point.y)<b(x.x,x.y,c.point.x,c.point.y)?this.output={left:0,right:1}:this.output={left:1,right:0};var p=Math.round(b(x.x,x.y,c.point.x,c.point.y)/b(x.x,x.y,u.x,u.y));return void(this.waitTimer=Math.min(this.waitTimer,p))}s--}}}}}]),e}(),D={position:"fixed",bottom:0,right:0},K={background:"#AAAAFF",width:"90%",margin:"auto",marginTop:"2px"},B={position:"absolute",right:0,bottom:30,width:300,minHeight:150,border:"2px solid blue",background:"#8888ff",zIndex:"1"},F={width:"100px",padding:"2px",border:"2px solid blue",margin:"2px",textAlign:"center",borderRadius:"2",userSelect:"none",position:"fixed",bottom:0,right:0},G=function(e){function t(e){var i;return Object(h.a)(this,t),(i=Object(d.a)(this,Object(y.a)(t).call(this,e))).state={opened:!1},i.toggleDropdown=i.toggleDropdown.bind(Object(c.a)(i)),i.AICheckboxChange=i.AICheckboxChange.bind(Object(c.a)(i)),i}return Object(x.a)(t,e),Object(o.a)(t,[{key:"toggleDropdown",value:function(){this.setState(function(e){return{opened:!e.opened}})}},{key:"AICheckboxChange",value:function(e){var t=this.props.settings;t.AI[e.target.id]=!t.AI[e.target.id],this.props.changeHandler(t)}},{key:"render",value:function(){for(var e=[],t=["Red 1","Red 2","Red 3","Blue 1","Blue 2","Blue 3"],i=0;i<6;i++){var n=s.a.createElement("div",{key:i,style:{width:45,display:"flex",flexDirection:"column"}},s.a.createElement("div",{style:{color:"R"===t[i][0]?"red":"blue"}},t[i]),s.a.createElement("input",{type:"checkbox",id:i.toString(),checked:this.props.settings.AI[i],onChange:this.AICheckboxChange}));e.push(n)}var a=s.a.createElement("div",{style:B},s.a.createElement("div",{style:K},s.a.createElement("div",null,"Enable AI "),s.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e),s.a.createElement("div",null,"Settings are applied when you reset game")));return s.a.createElement("div",{style:D},this.state.opened?a:"",s.a.createElement("div",{style:F,onClick:this.toggleDropdown},"Settings ",this.state.opened?"\u2193":"\u2191"," "))}}]),t}(s.a.Component),U={STOPPED:0,RUNNING:1,GOAL_SCORED:2},X=0,Y=1,H=function(e){function t(e){var i;return Object(h.a)(this,t),(i=Object(d.a)(this,Object(y.a)(t).call(this,e))).state={input:new u,context:null,gameState:U.RUNNING,redScore:0,blueScore:0,gameMode:1,settings:{AI:[!1,!1,!1,!1,!1,!1]}},i.draw=i.draw.bind(Object(c.a)(i)),i.reset1v1=i.reset1v1.bind(Object(c.a)(i)),i.reset2v2=i.reset2v2.bind(Object(c.a)(i)),i.reset3v3=i.reset3v3.bind(Object(c.a)(i)),i.resetPositions=i.resetPositions.bind(Object(c.a)(i)),i.renderPaddles=i.renderPaddles.bind(Object(c.a)(i)),i.changeSettings=i.changeSettings.bind(Object(c.a)(i)),i.initBots=i.initBots.bind(Object(c.a)(i)),i}return Object(x.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.state.input.bindKeys();var e=this.refs.canvas.getContext("2d");this.setState({context:e}),this.reset1v1(),A=requestAnimationFrame(this.draw)}},{key:"initBots",value:function(){this.bots=[];for(var e=this.goals.map(function(e){return new P({x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2})}).concat(this.walls),t=0;t<6;t++)if(this.state.settings.AI[t]){var i=Object(l.a)(e);i.splice(t,1),this.bots.push(new L({walls:i}))}else this.bots.push(null)}},{key:"reset1v1",value:function(){this.setState({redScore:0,blueScore:0,gameState:U.RUNNING,gameMode:1}),this.walls=[new P({x1:0,y1:100,x2:500,y2:100}),new P({x1:0,y1:399,x2:500,y2:399})],this.goals=[new R({x1:0,y1:100,x2:0,y2:400,color:"red",teamId:X}),new R({x1:-100,y1:-100,x2:-100,y2:-100}),new R({x1:-100,y1:-100,x2:-100,y2:-100}),new R({x1:499,y1:100,x2:499,y2:400,color:"blue",teamId:Y}),new R({x1:-100,y1:-100,x2:-100,y2:-100}),new R({x1:-100,y1:-100,x2:-100,y2:-100})],this.paddles=[new w({x1:10,y1:100,x2:10,y2:400}),new w({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new w({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new w({x1:490,y1:400,x2:490,y2:100}),new w({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new w({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0})],this.ball=new k({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"reset2v2",value:function(){this.setState({redScore:0,blueScore:0,gameState:U.RUNNING,gameMode:2}),this.walls=[],this.goals=[new R({x1:0,y1:250,x2:250,y2:0,color:"red",teamId:X}),new R({x1:250,y1:0,x2:500,y2:250,color:"red",teamId:X}),new R({x1:-100,y1:-100,x2:-100,y2:-100}),new R({x1:250,y1:500,x2:500,y2:250,color:"blue",teamId:Y}),new R({x1:0,y1:250,x2:250,y2:500,color:"blue",teamId:Y}),new R({x1:-100,y1:-100,x2:-100,y2:-100})],this.paddles=[new w({x1:10,y1:250,x2:250,y2:10}),new w({x1:250,y1:10,x2:490,y2:250}),new w({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new w({x1:250,y1:490,x2:490,y2:250}),new w({x1:10,y1:250,x2:250,y2:490}),new w({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0})],this.ball=new k({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"reset3v3",value:function(){this.setState({redScore:0,blueScore:0,gameState:U.RUNNING,gameMode:3}),this.walls=[],this.goals=[];for(var e=0;e<6;e++){var t=f({x:-250,y:0},e*Math.PI/3),i=f({x:-250,y:0},(e+1)*Math.PI/3),n=e<3?"red":"blue",s="red"===n?X:Y;this.goals.push(new R({x1:t.x+250,y1:t.y+250,x2:i.x+250,y2:i.y+250,color:n,teamId:s}))}this.paddles=[];for(var a=0;a<3;a++){var r=f({x:-240,y:0},a*Math.PI/3),l=f({x:-240,y:0},(a+1)*Math.PI/3);this.paddles.push(new w({x1:r.x+250,y1:r.y+250,x2:l.x+250,y2:l.y+250}))}for(var h=0;h<3;h++){var o=this.paddles[2-h],d=o.x1,y=o.y1,c=o.x2,x=o.y2;this.paddles.push(new w({x1:d,y1:500-y,x2:c,y2:500-x}))}this.ball=new k({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"resetPositions",value:function(){var e=f({x:3,y:0},1===this.state.gameMode?T(-Math.PI/4,Math.PI/4):T(0,2*Math.PI));1===this.state.gameMode&&Math.random()<.5&&(e.x*=-1,e.y*=-1),this.ball=new k({x:250,y:250,dx:e.x,dy:e.y}),this.paddles.forEach(function(e){return e.position=50}),this.bots.forEach(function(e){e&&e.reset()})}},{key:"renderPaddles",value:function(){var e=this.state.input.pressedKeys,t=this.bots;this.paddles[0].render(this.state,t[0]?t[0].output:e.red1),this.paddles[1].render(this.state,t[1]?t[1].output:e.red2),this.paddles[2].render(this.state,t[2]?t[2].output:e.red3),this.paddles[3].render(this.state,t[3]?t[3].output:e.blue1),this.paddles[4].render(this.state,t[4]?t[4].output:e.blue2),this.paddles[5].render(this.state,t[5]?t[5].output:e.blue3)}},{key:"draw",value:function(){var e=this,t=this.state.context;t.save(),t.fillStyle="#FFF",t.translate(.5,.5),t.fillRect(0,0,500,500),this.walls.forEach(function(t){t.render(e.state)}),this.goals.forEach(function(t){t.render(e.state)}),this.paddles.forEach(function(t){var i=t.getHitbox(),n=[];if(i.forEach(function(e){n.push(e.x),n.push(e.y)}),m.a.circlePolygon(e.ball.x,e.ball.y,e.ball.radius,n)){var s=t.getReflection(e.ball);e.ball.dx=s.x,e.ball.dy=s.y,e.ball.x+=e.ball.dx,e.ball.y+=e.ball.dy}}),this.walls.forEach(function(t){if(m.a.circleLine(e.ball.x,e.ball.y,e.ball.radius,t.x1,t.y1,t.x2,t.y2)){var i=t.getReflection(e.ball);e.ball.dx=i.x,e.ball.dy=i.y,e.ball.x+=e.ball.dx,e.ball.y+=e.ball.dy}}),this.goals.forEach(function(i){var n;m.a.circleLine(e.ball.x,e.ball.y,e.ball.radius,i.x1,i.y1,i.x2,i.y2)&&(i.teamId===X?(e.setState(function(e){return{blueScore:e.blueScore+1}}),n="Blue team",t.fillStyle="blue"):(e.setState(function(e){return{redScore:e.redScore+1}}),n="Red team",t.fillStyle="red"),t.font="30px Courier New",t.fillText(n+" has scored!",80,250),cancelAnimationFrame(A),e.setState({gameState:U.GOAL_SCORED}))}),this.bots.forEach(function(t,i){t&&t.calculateOutput(e.ball,e.paddles[i])}),this.renderPaddles(),this.ball.render(this.state),t.restore(),this.state.gameState===U.RUNNING?A=requestAnimationFrame(this.draw):this.state.gameState===U.GOAL_SCORED&&(cancelAnimationFrame(A),setTimeout(function(){A=requestAnimationFrame(e.draw),e.resetPositions(),e.setState({gameState:U.RUNNING})},1500))}},{key:"componentWillUnmount",value:function(){this.state.input.unbindKeys()}},{key:"changeSettings",value:function(e){this.setState({settings:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Pong++"),s.a.createElement("canvas",{ref:"canvas",width:"501",height:"501"}),s.a.createElement(M,{redScore:this.state.redScore,blueScore:this.state.blueScore}),s.a.createElement("center",null,"Reset Game"),s.a.createElement("center",null,s.a.createElement("button",{id:"1v1",onClick:this.reset1v1},"1v1"),s.a.createElement("button",{id:"2v2",onClick:this.reset2v2},"2v2"),s.a.createElement("button",{id:"3v3",onClick:this.reset3v3},"3v3")),s.a.createElement(G,{settings:this.state.settings,changeHandler:this.changeSettings}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.b8738546.chunk.js.map