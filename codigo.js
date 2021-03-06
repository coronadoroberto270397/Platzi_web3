var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.stokeStyle = "red";
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.stokeStyle = "blue";
lienzo.moveTo(10,170);
lienzo.lineTo(250,130);
lienzo.stroke();
lienzo.closePath();