import { Scene } from "./scene.js";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.append(canvas);

let scene = new Scene(canvas,{
squares:20,
things:10,
speedMultiplier:1,
colourMode:"normal"
});


// BUTTON EVENTS

document.getElementById("normalBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:20,things:10,speedMultiplier:1,colourMode:"normal"});
};

document.getElementById("dullBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:20,things:10,speedMultiplier:1,colourMode:"dull"});
};

document.getElementById("brightBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:20,things:10,speedMultiplier:1,colourMode:"bright"});
};

document.getElementById("slowBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:20,things:10,speedMultiplier:0.3,colourMode:"normal"});
};

document.getElementById("fastBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:20,things:10,speedMultiplier:3,colourMode:"normal"});
};

document.getElementById("manyBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:100,things:50,speedMultiplier:1,colourMode:"normal"});
};

document.getElementById("fewBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:5,things:2,speedMultiplier:1,colourMode:"normal"});
};

document.getElementById("mixedBtn").onclick = ()=>{
scene = new Scene(canvas,{squares:30,things:30,speedMultiplier:1,colourMode:"bright"});
};


// ANIMATION LOOP

let previousTimestamp = 0;

function frame(timestamp){

const elapsed = (timestamp - previousTimestamp)/1000;
previousTimestamp = timestamp;

ctx.clearRect(0,0,canvas.width,canvas.height);

scene.update(elapsed);
scene.draw();

requestAnimationFrame(frame);

}

requestAnimationFrame(frame);