//// MISC STUFF

function printClear() {
  document.getElementById('console').innerHTML = "" 
}
function printAdd(s) {
  document.getElementById('console').innerHTML += s +"\n";
  document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight
}

function getMousePosition(canvas) {
    let rect = canvas.getBoundingClientRect();
    let x = Math.trunc(event.clientX - rect.left);
    let y = Math.trunc(event.clientY - rect.top);
    return [x,y];
  }

//// DRAWING THE ROBOT

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 1/DEG2RAD;


	let OriginX=50, OriginY=250;

// robot joint lengths

var L1 = 150; //form filled
var L2 = 100; //form filled
var L3 = 75; //form filled
var L4 = 30;

// robot joint angles

var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;

function drawCircle(x,y, r=10, color="black") {
  ctx.strokeStyle = color;
  
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawRobot() {

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 500);
  
  ctx.save();

	ctx.translate(OriginX,OriginY);
  ctx.rotate(-90 *DEG2RAD);
  ctx.fillStyle = "green";
  ctx.fillRect(-40, -20, 50, 40);
  
  
  ctx.rotate(a1 *DEG2RAD);
	ctx.fillStyle = "green";
  ctx.fillRect(0, -5, L1, 10);
  drawCircle(0,0,7); ctx.fill(); 
  
  ctx.translate(L1,0);
  ctx.rotate(a2 *DEG2RAD);
  ctx.fillStyle = "blue";
  ctx.fillRect(0, -5, L2, 10);
  drawCircle(0,0,7); ctx.fill();
  
  ctx.translate(L2,0);
  ctx.rotate(a3 *DEG2RAD);
  ctx.fillStyle = "red";
  ctx.fillRect(0, -5, L3, 10);
  drawCircle(0,0,7); ctx.fill();
  
  ctx.translate(L3,0);
  ctx.rotate(a4 *DEG2RAD);
  ctx.fillStyle = "black";
  ctx.fillRect(-L4/2, -2.5, L4, 5);
  
  ctx.restore();

}




drawRobot();

