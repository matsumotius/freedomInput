function init() {
    canvas = new Canvas();
    word = new Word();
    config = new Config();
    return;
}
/* マウスの動きのstateも持ってるので重い。いずれ分ける。 */
function Canvas() {
    this.clicked=false;
    this.moved=false;
    this.curved=false;

    /* i want to fix later */
    this.straightReversed=false;
    this.curveReversed=false;

    this.firstPoint = { X : 0 , Y : 0 };
    this.startPoint = { X : 0 , Y :0 };
    this.endPoint = { X : 0 , Y : 0 };
    this.movingPoint = { X : 0 , Y : 0 }; 

    this.range = 0;
    this.state = "";

    this.straightCount = 0;
    this.curveCount = 0;
    
    this.switchPoint = function() {
      this.startPoint['X'] = this.endPoint['X'];
      this.startPoint['Y'] = this.endPoint['Y'];

      this.endPoint['X'] = this.movingPoint['X'];
      this.endPoint['Y'] = this.movingPoint['Y'];
    };
    this.adjustCount = function() {
      if(this.curved) {
        /* TODO:数値をどこか別の場所で持ちたい。wordTableに関係するところで */
	/* ダメダメ条件分岐 */
        if((this.curveCount > 2 && this.straightCount == 7) || (this.curveCount > 2 && this.straightCount == 9) ||
           (this.curveCount > 4 && !this.curveReversed) || (this.curveCount < 0 && this.curveReversed)) {
            
	    this.curved = false;
            this.curveCount = 0;
        }
	return;
      }
	
      if(this.straightCount > 9 && !this.straightReversed){
            this.straightCount = 0;
	    return;
      }

      if(this.straightCount < 0 && this.straightReversed){
            this.straightCount = 9;
      }
    };
}

function Word() {
    /* 表示用文字 */
    this.nowShowing = "";
    /* 濁音などのない表 */
    this.table=new Array(10);
    this.table[0]=new Array("あ","い","う","え","お");
    this.table[1]=new Array("か","き","く","け","こ");
    this.table[2]=new Array("さ","し","す","せ","そ");
    this.table[3]=new Array("た","ち","つ","て","と");
    this.table[4]=new Array("な","に","ぬ","ね","の");
    this.table[5]=new Array("は","ひ","ふ","へ","ほ");
    this.table[6]=new Array("ま","み","む","め","も");
    this.table[7]=new Array("や","ゆ","よ");
    this.table[8]=new Array("ら","り","る","れ","ろ");
    this.table[9]=new Array("わ","を","ん");

    this.set = function(consonant,vowel) {
      this.nowShowing = this.table[consonant][vowel];
    };
    this.show = function() {
      document.getElementById("temporaryWord").innerHTML = "";
      document.getElementById("temporaryWord").innerHTML = this.nowShowing;
    };
    this.write = function() {
      document.getElementById("input").innerHTML+=this.nowShowing;
    };  
}

function Config() {
    this.wordRange = 20;
    this.angleRange = 5;
    this.curveAngle = 150;
}

