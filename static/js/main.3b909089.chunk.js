(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(t,e,i){},149:function(t,e,i){},171:function(t,e,i){"use strict";i.r(e);i(89);var s=i(0),n=i.n(s),a=i(86),r=i.n(a),l=(i(148),i(33)),o=i(2),h=i(1),d=i(16),c=i(15),y=i(3),x=i(17),u={187:"=",186:";",189:"-"},p=function(){function t(){Object(o.a)(this,t),this.pressedKeys={},this.pressedKeys.red1={right:0,left:0},this.pressedKeys.red2={right:0,left:0},this.pressedKeys.red3={right:0,left:0},this.pressedKeys.blue1={right:0,left:0},this.pressedKeys.blue2={right:0,left:0},this.pressedKeys.blue3={right:0,left:0}}return Object(h.a)(t,[{key:"bindKeys",value:function(){window.addEventListener("keyup",this.handleKeys.bind(this,!1)),window.addEventListener("keydown",this.handleKeys.bind(this,!0))}},{key:"unbindKeys",value:function(){window.removeEventListener("keyup",this.handleKeys),window.removeEventListener("keydown",this.handleKeys)}}]),Object(h.a)(t,[{key:"handleKeys",value:function(t,e){var i=this.pressedKeys;switch("Unidentified"==e.key?u[e.keyCode]:e.key){case"1":i.red1.left=t;break;case"2":i.red1.right=t;break;case"s":case"S":i.red2.left=t;break;case"d":case"D":i.red2.right=t;break;case"v":case"V":i.red3.left=t;break;case"b":case"B":i.red3.right=t;break;case"n":case"N":i.blue3.left=t;break;case"m":case"M":i.blue3.right=t;break;case"l":case"L":i.blue2.left=t;break;case";":i.blue2.right=t;break;case"-":i.blue1.left=t;break;case"=":i.blue1.right=t}this.pressedKeys=i}}]),t}(),b=(i(149),i(34));function f(t,e,i,s){return Math.sqrt(Math.pow(t-i,2)+Math.pow(e-s,2))}function v(t,e){var i=t.x,s=t.y;return{x:Math.cos(e)*i-Math.sin(e)*s,y:Math.sin(e)*i+Math.cos(e)*s}}function g(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var i=e.x*t.x+e.y*t.y,s=t;return s.x-=2*i*e.x,s.y-=2*i*e.y,s}function m(t,e){var i=t.x,s=t.y,n=e.x,a=e.y;return Math.atan(i*a-s*n,i*n+s*a)}var w=i(14),k=i.n(w),E=function(){function t(e){Object(o.a)(this,t),this.x1=e.x1||0,this.y1=e.y1||0,this.x2=e.x2||0,this.y2=e.y2||0,this.hidden=e.hidden,this.color=e.color||"#000",this.depth=e.depth||10,this.width=e.width||50,this.position=50,this.paddleCenterX=(this.x1+this.x2)/2,this.paddleCenterY=(this.y1+this.y2)/2,this.slidinglength=f(this.x1,this.y1,this.x2,this.y2),this.y1===this.y2?this.tiltAngle=90*Math.PI/180:this.tiltAngle=-Math.atan((this.x2-this.x1)/(this.y2-this.y1)),this.minPosition=this.width/this.slidinglength*100/2,this.maxPosition=100*(1-this.width/this.slidinglength/2)}return Object(h.a)(t,[{key:"getReflection",value:function(t,e){for(var i,s=this.getHitbox(),n=0;n<4&&(i=[s[n].x,s[n].y,s[(n+1)%4].x,s[(n+1)%4].y],!k.a.circleLine.apply(k.a,[t.x,t.y,t.radius].concat(Object(l.a)(i))));n++);var a=v({x:i[2]-i[0],y:i[3]-i[1]},Math.PI/2),r={x:(i[2]+i[0])/2,y:(i[3]+i[1])/2},o=Object(b.a)({},r);o.x+=1e-4*a.x,o.y+=1e-4*a.y,f(this.paddleCenterX,this.paddleCenterY,r.x,r.y)>f(this.paddleCenterX,this.paddleCenterY,o.x,o.y)&&(a.x*=-1,a.y*=-1);var h=Math.sqrt(Math.pow(a.x,2)+Math.pow(a.y,2));a.x/=h,a.y/=h;var d=g({x:t.dx,y:t.dy},a,1);d.x+=.05*(t.x-this.paddleCenterX),d.y+=.05*(t.y-this.paddleCenterY);var c={x:this.paddleCenterX-this.previousCenterX,y:this.paddleCenterY-this.previousCenterY};if(0===c.x&&0===c.y)return d;if(d=v(d,.2*m(d,c)),e){var y=m(c,{x:t.dx,y:t.dy});t.dr+=y/20}return d}},{key:"render",value:function(t,e){if(!this.hidden){var i=t.context;e.right&&this.position++,e.left&&this.position--,this.position>this.maxPosition&&(this.position=this.maxPosition),this.position<this.minPosition&&(this.position=this.minPosition),this.position=Math.round(this.position),this.previousCenterX=this.paddleCenterX,this.previousCenterY=this.paddleCenterY,this.paddleCenterX=this.x1*(1-this.position/100)+this.x2*this.position/100,this.paddleCenterY=this.y1*(1-this.position/100)+this.y2*this.position/100,i.save(),i.translate(.5,.5),i.strokeStyle="#000000",i.fillStyle="#888888",i.translate(this.paddleCenterX,this.paddleCenterY),i.rotate(this.tiltAngle),i.fillRect(-this.depth/2,-this.width/2,this.depth,this.width),i.restore()}}},{key:"getHitbox",value:function(){var t=this,e=this.width/2,i=this.depth/2;return[{x:i,y:e},{x:i,y:-e},{x:-i,y:-e},{x:-i,y:e}].map(function(e){var i=v(e,t.tiltAngle),s=i.x,n=i.y;return{x:s+t.paddleCenterX,y:n+t.paddleCenterY}})}},{key:"getInnerWall",value:function(){var t=v({x:this.depth/2,y:0},this.tiltAngle);return f(this.x1,this.y1,250,250)<f(this.x1+t.x,this.y1+t.y,250,250)&&(t.x*=-1,t.y*=-1),{x1:this.x1+t.x,y1:this.y1+t.y,x2:this.x2+t.x,y2:this.y2+t.y}}}]),t}(),S=function(){function t(e){Object(o.a)(this,t),this.x=e.x,this.y=e.y,this.dx=e.dx,this.dy=e.dy,this.radius=10,this.delete=!1,this.r=0,this.dr=0,this.color="#000"}return Object(h.a)(t,[{key:"render",value:function(t){if(this.x+=this.dx,this.y+=this.dy,this.r+=this.dr,t.settings.curveball){var e=v({x:this.dx,y:this.dy},this.dr/10);this.dx=e.x,this.dy=e.y}var i=t.context;i.save(),i.translate(this.x+.5,this.y+.5),i.rotate(this.r),"red"===this.color?i.fillStyle="#800":"blue"===this.color?i.fillStyle="#008":i.fillStyle="#888",i.beginPath(),i.arc(0,0,this.radius,this.radius,0,2*Math.PI),i.fill(),i.closePath(),t.settings.curveball&&(i.strokeStyle="#fff",i.lineWidth=2,i.beginPath(),i.moveTo(-10,0),i.lineTo(10,0),i.stroke(),i.closePath()),i.restore()}}]),t}(),O=i(173),C={width:"100px",padding:"2px",border:"2px solid blue",margin:"2px",textAlign:"center",fontSize:15,borderRadius:"2",userSelect:"none",position:"auto"},I={height:50,width:100,margin:"auto",padding:10,float:"center"},j={width:"50%",height:50,float:"left",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 10px red inset"},P={marginLeft:"50%",height:50,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 0px 10px blue inset"},M={margin:"auto",height:"30px",width:"30px"},R={margin:"auto",height:40,width:400,padding:40,alignItems:"left",justifyContent:"left",float:"left"},T=function(t){function e(){var t,i;Object(o.a)(this,e);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(i=Object(d.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(n)))).state={display:!1},i.handleOnClick=function(){i.setState(function(t){return{display:!t.display}})},i}return Object(x.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=n.a.createElement("div",null,n.a.createElement("h2",{align:"left"},"CONTROLS INFO"),n.a.createElement("div",{align:"left"},n.a.createElement("p",null," RED 1  : 1  --\x3e LEFT / UP  &&  2   --\x3e RIGHT / DOWN  "),n.a.createElement("p",null," RED 2  : S  --\x3e LEFT  &&  D --\x3e RIGHT "),n.a.createElement("p",null," RED 3  : V  --\x3e LEFT  &&  B --\x3e RIGHT  "),n.a.createElement("p",null," BLUE 3 : N  --\x3e LEFT  &&  M   --\x3e RIGHT "),n.a.createElement("p",null," BLUE 2 : L --\x3e LEFT  &&  ';' --\x3e RIGHT  "),n.a.createElement("p",null," BLUE 1 : -  --\x3e LEFT  &&  =   --\x3e DOWN  ")));return n.a.createElement("div",null,n.a.createElement("div",{style:I},n.a.createElement("div",{id:"red",style:j},this.props.redScore),n.a.createElement("div",{id:"blue",style:P},this.props.blueScore)),n.a.createElement("div",{style:M}),n.a.createElement("div",{style:R},this.state.display?t:"",n.a.createElement("div",null,n.a.createElement(O.a,{style:C,variant:"primary",onClick:this.handleOnClick},"Instructions"))))}}]),e}(n.a.Component),A=function(){function t(e){Object(o.a)(this,t),this.x1=e.x1,this.y1=e.y1,this.x2=e.x2,this.y2=e.y2}return Object(h.a)(t,[{key:"getReflection",value:function(t){var e=v({x:this.x2-this.x1,y:this.y2-this.y1},Math.PI/2),i={x:(this.x1+this.x2)/2,y:(this.y1+this.y2)/2},s=Object(b.a)({},i);s.x+=.001*e.x,s.y+=.001*e.y,f(t.x,t.y,i.x,i.y)<f(t.x,t.y,s.x,s.y)&&(e.x*=-1,e.y*=-1);var n=Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2));return e.x/=n,e.y/=n,g({x:t.dx,y:t.dy},e,1)}},{key:"render",value:function(t){var e=t.context;e.save(),e.strokeStyle="#000",e.beginPath(),e.moveTo(this.x1,this.y1),e.lineTo(this.x2,this.y2),e.stroke(),e.restore()}}]),t}(),N=function(){function t(e){Object(o.a)(this,t),this.x1=e.x1,this.y1=e.y1,this.x2=e.x2,this.y2=e.y2,this.color=e.color||"red",this.teamId=e.teamId||0}return Object(h.a)(t,[{key:"render",value:function(t){var e=t.context;e.save(),e.strokeStyle=this.color,e.beginPath(),e.moveTo(this.x1,this.y1),e.lineTo(this.x2,this.y2),e.stroke(),e.restore()}}]),t}();function L(t,e){return t+Math.random()*(e-t)}var F,K=i(57),D=function(){function t(e){Object(o.a)(this,t),this.walls=e.walls,this.output={left:0,right:0},this.waitTimer=0,this.lookAhead=10,this.debug=e.debug,this.curve=e.curve}return Object(h.a)(t,[{key:"reset",value:function(){this.waitTimer=-1,this.output={left:0,right:0}}},{key:"calculateOutput",value:function(t,e){if(this.waitTimer>0&&!this.curve)this.waitTimer--;else{this.waitTimer=0;for(var i=e.getInnerWall(),s={x:t.x,y:t.y,dx:t.dx,dy:t.dy},n=this.lookAhead;n>0;){for(var a=!1,r={x:s.x+1e3*s.dx,y:s.y+1e3*s.dy},l={x:s.x,y:s.y},o=0;o<this.walls.length;o++){var h=this.walls[o],d=Object(K.a)(h.x1,h.y1,h.x2,h.y2,r.x,r.y,l.x,l.y);if("intersecting"===d.type){s.x=d.point.x,s.y=d.point.y,s.x-=s.dx,s.y-=s.dy;var c=h.getReflection(s);s.x+=s.dx,s.y+=s.dy,s.dx=c.x,s.dy=c.y,s.x+=s.dx,s.y+=s.dy,0===this.waitTimer&&(this.waitTimer=Math.round(Math.abs(t.dx)>1e-4?(d.point.x-t.x)/t.dx:(d.point.y-t.y)/t.dy)+1),n--,a=!0;break}}if(!a){var y=Object(K.a)(i.x1,i.y1,i.x2,i.y2,r.x,r.y,l.x,l.y);if("intersecting"===y.type){var x={x:e.paddleCenterX,y:e.paddleCenterY};if(0===this.waitTimer&&(this.waitTimer=Math.round(Math.abs(t.dx)>1e-4?(y.point.x-t.x)/t.dx:(y.point.y-t.y)/t.dy)+1),f(x.x,x.y,y.point.x,y.point.y)<8)return void(this.output={left:0,right:0});var u={x:x.x+(e.x2-e.x1)/100,y:x.y+(e.y2-e.y1)/100};f(u.x,u.y,y.point.x,y.point.y)<f(x.x,x.y,y.point.x,y.point.y)?this.output={left:0,right:1}:this.output={left:1,right:0};var p=Math.round(f(x.x,x.y,y.point.x,y.point.y)/f(x.x,x.y,u.x,u.y));return void(this.waitTimer=Math.min(this.waitTimer,p))}n--}}}}}]),t}(),B={position:"fixed",bottom:0,right:0},G={background:"#AAAAFF",width:"90%",margin:"auto",marginTop:"2px"},U={position:"absolute",right:0,bottom:30,width:300,minHeight:150,border:"2px solid blue",background:"#8888ff",zIndex:"1"},X={width:"100px",padding:"2px",border:"2px solid blue",margin:"2px",textAlign:"center",borderRadius:"2",userSelect:"none",position:"fixed",bottom:0,right:0},Y=function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(d.a)(this,Object(c.a)(e).call(this,t))).state={opened:!1},i.toggleDropdown=i.toggleDropdown.bind(Object(y.a)(i)),i.AICheckboxChange=i.AICheckboxChange.bind(Object(y.a)(i)),i}return Object(x.a)(e,t),Object(h.a)(e,[{key:"toggleDropdown",value:function(){this.setState(function(t){return{opened:!t.opened}})}},{key:"AICheckboxChange",value:function(t){var e=this.props.settings;e.AI[t.target.id]=!e.AI[t.target.id],this.props.changeHandler(e)}},{key:"render",value:function(){for(var t=[],e=["Red 1","Red 2","Red 3","Blue 1","Blue 2","Blue 3"],i=0;i<6;i++){var s=n.a.createElement("div",{key:i,style:{width:45,display:"flex",flexDirection:"column"}},n.a.createElement("div",{style:{color:"R"===e[i][0]?"red":"blue"}},e[i]),n.a.createElement("input",{type:"checkbox",id:i.toString(),checked:this.props.settings.AI[i],onChange:this.AICheckboxChange}));t.push(s)}var a=n.a.createElement("div",{style:U},n.a.createElement("div",{style:G},n.a.createElement("div",null,"Enable AI "),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},t),n.a.createElement("div",null,"Settings are applied when you reset game")));return n.a.createElement("div",{style:B},this.state.opened?a:"",n.a.createElement("button",{style:X,onClick:this.toggleDropdown},"Settings ",this.state.opened?"\u2193":"\u2191"," "))}}]),e}(n.a.Component),H=function(){function t(e){Object(o.a)(this,t),this.x=e.x,this.y=e.y,this.lifetime=50,this.delete=!1,this.color=e.color}return Object(h.a)(t,[{key:"render",value:function(t){var e=t.context;e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.lifetime/20,0,2*Math.PI),e.fill(),e.closePath(),this.lifetime--,this.lifetime<=0&&(this.delete=!0)}}]),t}(),W={backgroundColor:"\t#FFFF33"},q={STOPPED:0,RUNNING:1,GOAL_SCORED:2},_=0,z=1,J=function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(d.a)(this,Object(c.a)(e).call(this,t))).state={input:new p,context:null,gameState:q.RUNNING,redScore:0,blueScore:0,gameMode:1,settings:{AI:[!1,!1,!1,!1,!1,!1],curveball:!0}},i.draw=i.draw.bind(Object(y.a)(i)),i.reset1v1=i.reset1v1.bind(Object(y.a)(i)),i.reset2v2=i.reset2v2.bind(Object(y.a)(i)),i.reset3v3=i.reset3v3.bind(Object(y.a)(i)),i.resetPositions=i.resetPositions.bind(Object(y.a)(i)),i.renderPaddle1s=i.renderPaddles.bind(Object(y.a)(i)),i.changeSettings=i.changeSettings.bind(Object(y.a)(i)),i.initBots=i.initBots.bind(Object(y.a)(i)),i.createParticle=i.createParticle.bind(Object(y.a)(i)),i}return Object(x.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.state.input.bindKeys();var t=this.refs.canvas.getContext("2d");this.setState({context:t}),this.reset1v1(),F=requestAnimationFrame(this.draw)}},{key:"initBots",value:function(){this.bots=[];for(var t=this.goals.map(function(t){return new A({x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2})}).concat(this.walls),e=0;e<6;e++)if(this.state.settings.AI[e]){var i=Object(l.a)(t);i.splice(e,1),this.bots.push(new D({walls:i,curve:this.state.settings.curveball}))}else this.bots.push(null)}},{key:"reset1v1",value:function(){this.setState({redScore:0,blueScore:0,gameState:q.RUNNING,gameMode:1}),this.particles=[],this.walls=[new A({x1:0,y1:100,x2:500,y2:100}),new A({x1:0,y1:399,x2:500,y2:399})],this.goals=[new N({x1:0,y1:100,x2:0,y2:400,color:"red",teamId:_}),new N({x1:-100,y1:-100,x2:-100,y2:-100}),new N({x1:-100,y1:-100,x2:-100,y2:-100}),new N({x1:499,y1:100,x2:499,y2:400,color:"blue",teamId:z}),new N({x1:-100,y1:-100,x2:-100,y2:-100}),new N({x1:-100,y1:-100,x2:-100,y2:-100})],this.paddles=[new E({x1:10,y1:100,x2:10,y2:400,color:"red"}),new E({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new E({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new E({x1:490,y1:400,x2:490,y2:100,color:"blue"}),new E({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new E({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0})],this.ball=new S({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"reset2v2",value:function(){this.particles=[],this.setState({redScore:0,blueScore:0,gameState:q.RUNNING,gameMode:2}),this.walls=[],this.goals=[new N({x1:0,y1:250,x2:250,y2:0,color:"red",teamId:_}),new N({x1:250,y1:0,x2:500,y2:250,color:"red",teamId:_}),new N({x1:-100,y1:-100,x2:-100,y2:-100}),new N({x1:250,y1:500,x2:500,y2:250,color:"blue",teamId:z}),new N({x1:0,y1:250,x2:250,y2:500,color:"blue",teamId:z}),new N({x1:-100,y1:-100,x2:-100,y2:-100})],this.paddles=[new E({x1:10,y1:250,x2:250,y2:10}),new E({x1:250,y1:10,x2:490,y2:250}),new E({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0}),new E({x1:250,y1:490,x2:490,y2:250}),new E({x1:10,y1:250,x2:250,y2:490}),new E({x1:-100,y1:-100,x2:-100,y2:-100,hidden:!0})],this.ball=new S({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"reset3v3",value:function(){this.particles=[],this.setState({redScore:0,blueScore:0,gameState:q.RUNNING,gameMode:3}),this.walls=[],this.goals=[];for(var t=0;t<6;t++){var e=v({x:-250,y:0},t*Math.PI/3),i=v({x:-250,y:0},(t+1)*Math.PI/3),s=t<3?"red":"blue",n="red"===s?_:z;this.goals.push(new N({x1:e.x+250,y1:e.y+250,x2:i.x+250,y2:i.y+250,color:s,teamId:n}))}this.paddles=[];for(var a=0;a<3;a++){var r=v({x:-240,y:0},a*Math.PI/3),l=v({x:-240,y:0},(a+1)*Math.PI/3);this.paddles.push(new E({x1:r.x+250,y1:r.y+250,x2:l.x+250,y2:l.y+250,color:"red"}))}for(var o=0;o<3;o++){var h=this.paddles[2-o],d=h.x1,c=h.y1,y=h.x2,x=h.y2;this.paddles.push(new E({x1:d,y1:500-c,x2:y,y2:500-x,color:"blue"}))}this.ball=new S({x:250,y:250}),this.initBots(),this.resetPositions()}},{key:"resetPositions",value:function(){this.particles=[];var t=v({x:3,y:0},1===this.state.gameMode?L(-Math.PI/4,Math.PI/4):L(0,2*Math.PI));1===this.state.gameMode&&Math.random()<.5&&(t.x*=-1,t.y*=-1),this.ball=new S({x:250,y:250,dx:t.x,dy:t.y}),this.paddles.forEach(function(t){return t.position=50}),this.bots.forEach(function(t){t&&t.reset()})}},{key:"renderPaddles",value:function(){var t=this.state.input.pressedKeys,e=this.bots;this.paddles[0].render(this.state,e[0]?e[0].output:t.red1),this.paddles[1].render(this.state,e[1]?e[1].output:t.red2),this.paddles[2].render(this.state,e[2]?e[2].output:t.red3),this.paddles[3].render(this.state,e[3]?e[3].output:t.blue1),this.paddles[4].render(this.state,e[4]?e[4].output:t.blue2),this.paddles[5].render(this.state,e[5]?e[5].output:t.blue3)}},{key:"createParticle",value:function(t){this.particles.push(new H(t))}},{key:"draw",value:function(){var t=this,e=this.state.context;e.save(),e.fillStyle="#FFF",e.translate(.5,.5),e.fillRect(0,0,500,500),this.walls.forEach(function(e){e.render(t.state)}),this.goals.forEach(function(e){e.render(t.state)});for(var i=this.particles.length-1;i>=0;i--)this.particles[i].delete?this.particles.splice(i,1):this.particles[i].render(this.state);this.paddles.forEach(function(e){var i=e.getHitbox(),s=[];if(i.forEach(function(t){s.push(t.x),s.push(t.y)}),k.a.circlePolygon(t.ball.x,t.ball.y,t.ball.radius,s)){var n=e.getReflection(t.ball,t.state.settings.curveball);t.ball.dx=n.x,t.ball.dy=n.y,t.ball.color=e.color}}),this.walls.forEach(function(e){if(k.a.circleLine(t.ball.x,t.ball.y,t.ball.radius,e.x1,e.y1,e.x2,e.y2)){var i=e.getReflection(t.ball);t.ball.dx=i.x,t.ball.dy=i.y}}),this.goals.forEach(function(i){var s;k.a.circleLine(t.ball.x,t.ball.y,t.ball.radius,i.x1,i.y1,i.x2,i.y2)&&(i.teamId===_?(t.setState(function(t){return{blueScore:t.blueScore+1}}),s="Blue team",e.fillStyle="blue"):(t.setState(function(t){return{redScore:t.redScore+1}}),s="Red team",e.fillStyle="red"),e.font="30px Courier New",e.fillText(s+" has scored!",80,250),cancelAnimationFrame(F),t.setState({gameState:q.GOAL_SCORED}))}),this.bots.forEach(function(e,i){e&&e.calculateOutput(t.ball,t.paddles[i])}),this.renderPaddles(),this.ball.render(this.state),this.createParticle({x:this.ball.x,y:this.ball.y,color:this.ball.color}),e.restore(),this.state.gameState===q.RUNNING?F=requestAnimationFrame(this.draw):this.state.gameState===q.GOAL_SCORED&&(cancelAnimationFrame(F),setTimeout(function(){F=requestAnimationFrame(t.draw),t.resetPositions(),t.setState({gameState:q.RUNNING})},1500))}},{key:"componentWillUnmount",value:function(){this.state.input.unbindKeys()}},{key:"changeSettings",value:function(t){this.setState({settings:t})}},{key:"render",value:function(){return n.a.createElement("div",{style:W},n.a.createElement("div",null,n.a.createElement("h1",null,"Pong++"),n.a.createElement("canvas",{ref:"canvas",width:"501",height:"501"}),n.a.createElement(T,{redScore:this.state.redScore,blueScore:this.state.blueScore}),n.a.createElement("center",null,"Reset Game"),n.a.createElement("center",null,n.a.createElement("button",{id:"1v1",onClick:this.reset1v1},"1v1"),n.a.createElement("button",{id:"2v2",onClick:this.reset2v2},"2v2"),n.a.createElement("button",{id:"3v3",onClick:this.reset3v3},"3v3")),n.a.createElement(Y,{settings:this.state.settings,changeHandler:this.changeSettings})))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},88:function(t,e,i){t.exports=i(171)}},[[88,1,2]]]);
//# sourceMappingURL=main.3b909089.chunk.js.map