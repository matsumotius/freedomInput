function onClickCanvas(event){
    if(!event || canvas.clicked) { return; }

    canvas.startPoint['X']=event.pageX;
    canvas.StartPoint['Y']=event.pageY;
    
    canvas.clicked=true;

    if(canvas.moved) { return; }
    word.nowShowing="[あ]";
    word.show();

}
function onMoveCanvas(event){
    if(!canvas.clicked || !event) { return; }

    canvas.movingPoint['X'] = event.pageX;
    canvas.movingPoint['Y'] = event.pageY;
    canvas.range = calculateRange(canvas.startPoint,canvas.movingPoint);

    if(canvas.range > config.angleRange) {
      commandByAngle(calculateAngle(canvas.startPoint,canvas.endPoint,canvas.movingPoint));
    }
    /* １マス分進んだ時の処理 */
    if(canvas.range > config.wordRange){
      if(!canvas.moved){
	moved=true;
	return;
      }

      checkAndAdjustCount();
      canvas.switchPoint();

      word.set(canvas.straightCount,canvas.curveCount);
      word.show();
    }
    return;
}
