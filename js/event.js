function onClickCanvas(event){
    if(!event || canvas.clicked) { return; }

    canvas.firstPoint['X'] = event.pageX;
    canvas.firstPoint['Y'] = event.pageY;
    
    canvas.clicked = true;

    if(canvas.moved) { return; }
    word.nowShowing = "[あ]";
    word.show();
}
function onMoveCanvas(event){
    if(!canvas.clicked || !event) { return; }

    canvas.movingPoint['X'] = event.pageX;
    canvas.movingPoint['Y'] = event.pageY;
    canvas.range += calculateRange(canvas.startPoint,canvas.movingPoint);
    /* 角度判定距離に到達時 */
    if(canvas.range > config.angleRange) {
      // if(canvas.first)
      commandByAngle(calculateAngle(canvas.startPoint,canvas.endPoint,canvas.movingPoint));
      canvas.switchPoint();
    }
    /* １マス分進んだ時の処理 */
    if(canvas.range > config.wordRange){
      if(!canvas.moved){
	canvas.moved = true;
	return;
      }
      canvas.adjustCount();

      word.set(canvas.straightCount,canvas.curveCount);
      word.show();
      canvas.range = 0;
    }
    return;
}
