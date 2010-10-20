 function init() {
    initWordTable();
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
    // check用のboolean変数
    clicked=false;
    moved=false;
    curved=false;
    straightReversed=false;
    curveReversed=false;
    // count
    straightCount=0;
    curveCount=0;
    // 表示用の文字
    temporaryWord="";
    /* debug */
    // alert(calculateAngle(1,1,2,2,2,1));
    return;
}

function initWordTable() {
    /* 濁音などのない表 */
    wordTable=new Array(10);
    wordTable[0]=new Array("あ","い","う","え","お");
    wordTable[1]=new Array("か","き","く","け","こ");
    wordTable[2]=new Array("さ","し","す","せ","そ");
    wordTable[3]=new Array("た","ち","つ","て","と");
    wordTable[4]=new Array("な","に","ぬ","ね","の");
    wordTable[5]=new Array("は","ひ","ふ","へ","ほ");
    wordTable[6]=new Array("ま","み","む","め","も");
    wordTable[7]=new Array("や","ゆ","よ");
    wordTable[8]=new Array("ら","り","る","れ","ろ");
    wordTable[9]=new Array("わ","を","ん");
}

function getDivision() {
    return 30;
}

function getCurveAngle() {
    return 120;
}

