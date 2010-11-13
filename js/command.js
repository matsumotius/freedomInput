/* 角度ごとに命令 */
function commandByAngle(angle) {
    if(isCurveAngle(angle)){
        curve();
    } else if(isReverseAngle(angle)) {
        reverse();
    } else if(isStraightAngle(angle)) {
        straight();
    }
    checkAndAdjustCount();
    return;
}

/* 角度判定 */
function isCurveAngle(angle) {
    if(getCurveAngle()>angle&&angle>(180-getCurveAngle())){return true;}
    return false;
}

function isReverseAngle(angle) {
    if((180-getCurveAngle())>angle&&angle>=0){return true;}
    return false;
}

function isStraightAngle(angle) {
    if(180>=angle&&angle>=getCurveAngle()){return true;}
    return false;
}

/* 曲がったときの処理 */
function curve() {
    if(curved){
        //書き込み処理 
        write();
	straightCount=0;
    }
    curved=!curved;
    curveCount=0;
    return;
}

/* 反対方向を向いたときの処理 */
function reverse() {
    if(curved) {
        curveReversed=!curveReversed;
    } else {
        straightReversed=!straightReversed;
    }
    straight();
    return;
}

/* straightというboolean判定は無い */
function straight() {
    if(curved&&curveReversed){
        curveCount--;
    } else if(straightReversed) {
        straightCount--;
    } else if(curved) {
        curveCount++;
    } else {
        straightCount++;
    }
    return;
}


/* 表示文字用の変数を制御 */
function checkAndAdjustCount() {
    if(curved) {
        /* TODO:数値をどこか別の場所で持ちたい。wordTableに関係するところで */
        if((curveCount>2&&straightCount==7)||(curveCount>2&&straightCount==9)||
	   (curveCount>4&&!curveReversed)||(curveCount<0&&curveReversed)) {
            curved=false;
            curveCount=0;
        }
    } else {
        if(straightCount>9&&!straightReversed){
            straightCount=0;
        } else if(straightCount<0&&straightReversed){
            straightCount=9;
        }
    }
}
