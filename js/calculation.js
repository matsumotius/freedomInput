/* 2点の座標からピタゴラす */
function calculateRange(startX,startY,endX,endY) {
    var tmpX = Math.abs(startX-endX);
    var tmpY = Math.abs(startY-endY);
    return Math.sqrt(Math.pow(tmpX,2) + Math.pow(tmpY,2));
}

/* 3点から回転方向つき角度を求める */
function calculateAngleWithRotate(aX,aY,bX,bY,cX,cY) {
    var ba={};
    ba['x']=aX-bX;
    ba['y']=aY-bY;
    var bc={};
    bc['x']=cX-bX;
    bc['y']=cY-bY;

    var ba2=Math.sqrt(Math.pow(ba['x'],2)+Math.pow(ba['y'],2));
    var bc2=Math.sqrt(Math.pow(bc['x'],2)+Math.pow(bc['y'],2));
    /* 内積,外積を出す */
    var dot=(ba['x']*bc['x'])+(ba['y']*bc['y']);
    var cross=(ba['x']*bc['y'])-(bc['x']*ba['y']);

    return -((180*Math.atan2(cross,dot))/Math.PI);
}

/* 3点から回転方向なしの角度を求める */
function calculateAngle(aX,aY,bX,bY,cX,cY) {
    var ba={};
    ba['x']=aX-bX;
    ba['y']=aY-bY;
    var bc={};
    bc['x']=cX-bX;
    bc['y']=cY-bY;

    var ba2=Math.sqrt(Math.pow(ba['x'],2)+Math.pow(ba['y'],2));
    var bc2=Math.sqrt(Math.pow(bc['x'],2)+Math.pow(bc['y'],2));
    var cos=((ba['x']*bc['x'])+(ba['y']*bc['y']))/(ba2*bc2);

    return (180*Math.acos(cos))/Math.PI;
}
