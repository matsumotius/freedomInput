function onClickCanvas(event){
    if(event) {
	stackedStartX=event.pageX;
        stackedStartY=event.pageY;
        clicked=true;
	if(!moved) {
	    temporaryWord="[あ]";
	    showTemporaryWord();
	}
    }
    return;
}

function onMoveCanvas(event){
    if(clicked&&event) {
        movingX=event.pageX;
	movingY=event.pageY;
        var range=calculateRange(stackedStartX,stackedStartY,movingX,movingY);
	if(range > getDivisionForRange()){
	  commandByAngle(calculateAngle(stackedStartX,stackedStartY,stackedEndX,stackedEndY,movingX,movingY));
	  var debug=calculateAngle(stackedStartX,stackedStartY,stackedEndX,stackedEndY,movingX,movingY);
	  document.getElementById("debug").innerHTML=debug;
	}
	/* １マス分進んだ時の処理 */
        if(range > getDivision()){
            /* debug用 */
            if(!moved){
		moved=true;
	    } else {
		checkAndAdjustCount();
		stackedStartX=stackedEndX;
		stackedStartY=stackedEndY;
	    }
	    stackedEndX=movingX;
	    stackedEndY=movingY;
	    changeTemporaryWord();
	    showTemporaryWord();
        }
    }
    return;
}
