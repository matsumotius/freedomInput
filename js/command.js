/* 角度ごとに命令 */
function commandByAngle(angle) {
    if(isCurveAngle(angle)){
        curve();
    } else if(isReverseAngle(angle)) {
        reverse();
    } else if(isStraightAngle(angle)) {
        straight();
    }
    // canvas.range = 0;
    canvas.adjustCount();
    return;
}
/* 角度判定 */
function isCurveAngle(angle) {
    if(config.curveAngle>angle&&angle>(180-config.curveAngle)){return true;}
    return false;
}
function isReverseAngle(angle) {
    if((180-config.curveAngle)>angle&&angle>=0){return true;}
    return false;
}
function isStraightAngle(angle) {
    if(180>=angle&&angle>=config.curveAngle){return true;}
    return false;
}
/* 曲がったときの処理 */
function curve() {
    if(canvas.curved){
        //書き込み処理 
        word.write();
	canvas.straightCount=0;
    }
    canvas.curved=!canvas.curved;
    canvas.curveCount=0;
    return;
}
/* 反対方向を向いたときの処理 */
function reverse() {
    if(canvas.curved) {
        canvas.curveReversed=!canvas.curveReversed;
    } else {
        canvas.straightReversed=!canvas.straightReversed;
    }
    straight();
    return;
}
/* straightというboolean判定は無い */
function straight() {
    if(canvas.curved&&canvas.curveReversed){
        canvas.curveCount--;
    } else if(canvas.straightReversed) {
        canvas.straightCount--;
    } else if(canvas.curved) {
        canvas.curveCount++;
    } else {
        canvas.straightCount++;
    }
    return;
}

