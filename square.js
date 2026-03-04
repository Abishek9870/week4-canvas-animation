export class Square{

constructor(location,size,speed,colour){

this.location = location;
this.size = size;
this.speed = speed;
this.colour = colour;

this.angle = 0;

}

update(elapsed){

this.location.x += this.speed.x * elapsed;
this.location.y += this.speed.y * elapsed;

this.angle += this.speed.rotation * elapsed;

}

handleEdge(canvas){

if(this.location.x < 0 || this.location.x > canvas.width){
this.speed.x *= -1;
}

if(this.location.y < 0 || this.location.y > canvas.height){
this.speed.y *= -1;
}

}

draw(ctx){

ctx.save();

ctx.translate(this.location.x,this.location.y);
ctx.rotate(this.angle);

ctx.fillStyle = this.colour;
ctx.strokeStyle = "white";

ctx.beginPath();

ctx.rect(
-this.size/2,
-this.size/2,
this.size,
this.size
);

ctx.fill();
ctx.stroke();

ctx.restore();

}

}