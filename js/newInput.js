function init() {
    // 一時保存される座標
    stackedStartX=0;
    stackedStartY=0;

    stackedEndX=0;
    stackedEndY=0;
    // 常時動く座標
    movingX=0;
    movingY=0;
    // 最初にクリックされた座標
    clickedX=0;
    clickedY=0;
    clicked=false;
    return;
}

function onClickCanvas(event){
    if(event) {
        stackedStartX=event.pageX;
        stackedStartY=event.pageY;
        clicked=true;
    }
    return;
}

function onMoveCanvas(event){   
    if(clicked&&event) {
        movingX=event.pageX;
        movingY=event.pageY;
        /* debug用 */
        // document.getElementById("pageX").value=event.pageX;
        // document.getElementById("pageY").value=event.pageY;
        var range=calculateRange(stackedStartX,stackedStartY,movingX,movingY);
        if(range > getDivision()){
            /* debug用 */
            // document.getElementById("pageX").value="!";
            stackedEndX=movingX;
            stackedEndY=movingY;
	    
        } else {
            document.getElementById("pageX").value="";
        }
    }
    return;
}

function calculateRange(startX,startY,endX,endY) {
    var tmpX = Math.abs(startX-endX);
    var tmpY = Math.abs(startY-endY);
    return Math.sqrt(Math.pow(tmpX,2) + Math.pow(tmpY,2));
}

function getDivision() {
    return 10;
}

function calculateAngle() {

}
