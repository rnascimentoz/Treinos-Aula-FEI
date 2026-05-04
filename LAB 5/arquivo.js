let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = '#8B4513';
ctx.fillRect(150, 200, 100, 100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(300,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#FA8072';
ctx.moveTo(200,150);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.lineTo(200, 150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'grey';
ctx.moveTo(0, 300);
ctx.lineTo(400, 300);
ctx.lineTo(400, 400);
ctx.lineTo(0, 400);
ctx.lineTo(0, 300);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgba(99, 161, 253, 1)';
ctx.fillRect(160, 215, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgba(99, 161, 253, 1)';
ctx.fillRect(210, 215, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#6e3a14ff';
ctx.fillRect(190, 245, 20, 55);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgb(99, 160, 253)';
ctx.lineTo(150, 400)
ctx.arc(150,400,50,1.5*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgb(99, 160, 253)';
ctx.lineTo(0, 300)
ctx.arc(0,300,50,1.5*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgb(99, 160, 253)';
ctx.fillRect(0, 300, 50, 100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgb(99, 160, 253)';
ctx.fillRect(150, 400, -100, -50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#8B4513';
ctx.fillRect(50,300, 15, -40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#8B4513';
ctx.fillRect(350,350, 15, -40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(58,240,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(358,290,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();