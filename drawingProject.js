var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "black";
//starting x, starting y, width, height//
canvas.fillRect(0, 0, 80000, 10000);
//Draw the bottom left sidewalk
canvas.fillStyle = 'grey';
canvas.fillRect(0, 210, 120, 800);
canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(120, 225, 15, 0, 2 * Math.PI, false);
canvas.fill();
canvas.fillStyle = 'grey';
canvas.fillRect(120, 225, 15, 800);
//Draw the bottom right sidewalk
canvas.fillStyle = 'grey';
canvas.fillRect(800, 210, -220, 800);//
canvas.beginPath();
canvas.fillStyle = "grey";
canvas.arc(580, 225, 15, 0, 2 * Math.PI, false);
canvas.fill();
canvas.fillStyle = 'grey';
canvas.fillRect(580, 225, -15, 800);
//Draw the top left sidewalk
canvas.fillStyle = 'grey';
canvas.fillRect(0, 0, 800, 40)
//Draw crosswalk Line 1
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(147, 240, 12, 85);
//Draw crosswalk Line 2
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(186, 240, 12, 85);
//Draw crosswalk Line 3
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(225, 240, 12, 85);
//Draw crosswalk Line 4
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(264, 240, 12, 85);
//Draw crosswalk Line 5
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(303, 240, 12, 85);
//Draw crosswalk Line 6
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(342, 240, 12, 85);
//Draw crosswalk Line 7
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(381, 240, 12, 85);
//Draw crosswalk Line 8
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(420, 240, 12, 85);
//Draw crosswalk Line 9
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(459, 240, 12, 85);
//Draw crosswalk Line 10
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(498, 240, 12, 85);
//Draw crosswalk Line 11
canvas.beginPath();
canvas.fillStyle = "white"
canvas.fillRect(537, 240, 12, 85);
//Draw road Line 1
canvas.fillStyle = "yellow";
canvas.fillRect(15, 120, 40, 10);
//Draw road Line 2
canvas.fillStyle = "yellow";
canvas.fillRect(155, 120, 40, 10);
//Draw road Line 3
canvas.fillStyle = "yellow";
canvas.fillRect(295, 120, 40, 10);
//Draw road Line 4
canvas.fillStyle = "yellow";
canvas.fillRect(435, 120, 40, 10);
//Draw road Line 5
canvas.fillStyle = "yellow";
canvas.fillRect(575, 120, 40, 10);
//Draw road Line 6
canvas.fillStyle = "yellow";
canvas.fillRect(715, 120, 40, 10);
//Sign Hexagon
canvas.beginPath();
canvas.fillStyle = "red";
canvas.moveTo(75, 75);//point 1
canvas.lineTo(100, 50);//to point 2
canvas.lineTo(125, 50);//to point 3
canvas.lineTo(150, 75);//to point 4
canvas.lineTo(150, 100);//to pint 5
canvas.lineTo(125, 125);//to point 6
canvas.lineTo(100, 125);//to point 7
canvas.lineTo(75, 100);//to point 8
canvas.lineTo(75, 75);//back to point 1
canvas.fill();
canvas.strokeStyle = "black";
canvas.font = "20px Verdana";
canvas.strokeText('STOP', 87, 95);
canvas.lineWidth = 4;
canvas.strokeStyle = 'yellow';
canvas.stroke();
//Sign post pole
canvas.fillStyle = "#C0C0C0";
canvas.beginPath()
canvas.fillRect(107.5, 127, 10, 100);
canvas.fill();
//Draw the bottom of the post
canvas.beginPath();
canvas.fillStyle = "#C0C0C0"
canvas.arc(112.5, 227, 5, 0, Math.PI);
canvas.fill();
