window.onload = function(){
     let canvas = document.getElementById("canvas");
     let context = canvas.getContext("2d");

    context.beginPath();
    context.rect(50, 50, 300, 200);
    context.fillStyle = "yellow";
    context.fill();

    context.arc(150, 150, 100, 0, 1 * Math.PI);
    context.beginPath();
    context.arc(300, 200, 100, 0, 2 * Math.PI);
    context.strokeStyle = "lightgreen";
    context.fillStyle = "black";
    context.fill();
    context.stroke();
    };
