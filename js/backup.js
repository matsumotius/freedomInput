function init() {
    // 一時保存される座標
    stackedX=0;
    stackedY=0;
    // 常時動く座標
    movingX=0;
    movingY=0;
    // 最初にクリックされた座標
    clickedX=0;
    clickedY=0;
    clicked=false;
    return;
}

function onClickCanvas(event) {
    if(event) {
	stackedX=event.pageX;
	stackedY=event.pageY;
	clicked=true;
    }
    return;
}

function onMoveCanvas(event) {
    if(clicked&&event) {
	movingX=event.pageX;
	movingY=event.pageY;
	/* debug用 */
	// document.getElementById("pageX").value=event.pageX;
	// document.getElementById("pageY").value=event.pageY;
	var range=calculateRange(stackedX,stackedY,movingX,movingY);
	if(range > getDivision()){ 
	    /* debug用 */
	    // document.getElementById("pageX").value="!";
	    stackedX=movingX;
	    stackedY=movingY;
	} else {
	    document.getElementById("pageX").value="";
	}
    }
    return;
}

// 距離計測
function calculateRange(startX,startY,endX,endY) { 
    var tmpX = Math.abs(startX-endX);
    var tmpY = Math.abs(startY-endY);
    return Math.sqrt(Math.pow(tmpX,2) + Math.pow(tmpY,2));
}

//１目盛の定数取得
function getDivision() {
    return 10;
}
