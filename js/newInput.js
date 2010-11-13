function onClickCanvas(event){
    if(!event) { return; }

    /* I'll fix LIKE : canvas.set(event).to(canvas.startPoint); */ 
    canvas.startPoint['X'] = event.pageX;
    canvas.startPoint['Y'] = event.pageY;
    canvas.clicked = true;

    return;
}
function onMoveCanvas(event){   
    if(canvas.clicked == false) { return; }
 
    /* set movingPoint */
    /* I'll fix LIKE : canvas.set(event).to("movingPoint");  */
    canvas.movingPoint['X'] = event.pageX;
    canvas.movingPoint['Y'] = event.pageY;

    if(calculateRange(canvas.startPoint,canvas.movingPoint) <= config.wordRange){ return; } 

    /* I'll fix LIKE : canvas.set("movingPoint").to("endPoint");  */
    canvas.endPoint['X'] = movingPoint['X'];
    canvas.endPoint['Y'] = movingPoint['Y'];

    return;
}


