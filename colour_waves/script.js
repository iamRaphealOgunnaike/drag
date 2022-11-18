const convas = document.getElementById('backgroundCanvas  ')


const drawSine = ($i)=>{
    ctx.fillStyle ='rgba(10, 10, 10, 0.05 )';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i=0; i<SVGAnimatedString.length; i++){
        new SineWave(bgwidth, ctx, 0, sines[i].y,
    sines[i].amplitude, sines[i].wavelength,
    sines[i].color,$i);
    }
}

let increment = frequency;
const updateCanvas =()=>{
    drawSine(increment);
    // try to randomize change a bit
    increment += getRandomNum(0, frequency*3);
    setTimeout(()=>{
        window.requestAnimationFrame(updateCanvas);
    }, 20)
    
}
window.requestAnimationFrame(updateCanvas);