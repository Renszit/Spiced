(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //head
    ctx.beginPath();
    ctx.strokeStyle = "pink";
    ctx.lineWidth = 3;
    ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    //body and right leg
    ctx.beginPath();
    ctx.StrokeStyle = "pink";
    ctx.lineWidth = 3;
    ctx.moveTo(300, 150);
    ctx.lineTo(300, 300);
    ctx.lineTo(380, 380);
    ctx.stroke();

    //left leg
    ctx.beginPath();
    ctx.StrokeStyle = "pink";
    ctx.lineWidth = 3;
    ctx.moveTo(220, 380);
    ctx.lineTo(300, 300);
    ctx.stroke();

    //right arm
    ctx.beginPath();
    ctx.StrokeStyle = "pink";
    ctx.lineWidth = 3;
    ctx.moveTo(200,150);
    ctx.lineTo(300, 200);
    ctx.stroke();

    //left arm
    ctx.beginPath();
    ctx.StrokeStyle = "pink";
    ctx.lineWidth = 3;
    ctx.moveTo(400,150);
    ctx.lineTo(300,200);
    ctx.stroke();

    
})();
