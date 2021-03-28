window.addEventListener("load", ()=>{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const clearCanvasButton = document.getElementById("clearCanvas")
    const colorSelect = document.getElementById("colorSelect");
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function endPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = colorSelect.value;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY); 
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup",endPosition);
    canvas.addEventListener("mousemove", draw)
})

function clearTheCanvas(canvas1) {
    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);

}


//resizing after window resizeing
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

