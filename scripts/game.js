let canvas,
    ctx;

function initCanvas() {
    canvas = document.getElementById('pong');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    } else {
        console.error('canvas-unsupported');
    }
}


function render() {
    //console.log(Math.random() * 1000);
}

function drawRectangle() {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
}

function init() {
    initCanvas();
    
    drawRectangle();

    setInterval(() => {
        render()
    }, 1000 / 30);
    
}