import { Square } from "./square.js";
import { Thing } from "./thing.js";

function randomValue(min,max){
return min + Math.random()*(max-min);
}

export class Scene{

constructor(canvas,options){

this.canvas = canvas;
this.ctx = canvas.getContext("2d");

this.speedMultiplier = options.speedMultiplier || 1;
this.colourMode = options.colourMode || "normal";

this.objects = [];

for(let i=0;i<options.squares;i++){

this.objects.push(
new Square(
this.randomLocation,
this.randomSize,
this.randomSpeed,
this.randomColour
)
);

}

for(let i=0;i<options.things;i++){

this.objects.push(
new Thing(
{x:canvas.width/2,y:canvas.height/2},
randomValue(-Math.PI,Math.PI)
)
);

}

}

get randomLocation(){

return{
x: randomValue(0,this.canvas.width),
y: randomValue(0,this.canvas.height)
}

}

get randomSize(){

return randomValue(20,80);

}

get randomSpeed(){

return{
x: randomValue(-200,200) * this.speedMultiplier,
y: randomValue(-200,200) * this.speedMultiplier,
rotation: randomValue(-3,3)
}

}

get randomColour(){

let saturation = 80;
let lightness = 60;

if(this.colourMode === "dull"){

saturation = randomValue(10,30);
lightness = randomValue(40,60);

}

if(this.colourMode === "bright"){

saturation = randomValue(80,100);
lightness = randomValue(60,70);

}

const hue = randomValue(0,360);

return `hsl(${hue},${saturation}%,${lightness}%)`;

}

update(elapsed){

for(const obj of this.objects){

obj.update(elapsed);
obj.handleEdge(this.canvas);

}

}

draw(){

for(const obj of this.objects){

obj.draw(this.ctx);

}

}

}