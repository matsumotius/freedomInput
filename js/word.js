function getWord(consonant,vowel) {
    if(wordTable[consonant][vowel]==null){
	return -1;
    }
    return wordTable[consonant][vowel];
}

function write() {
    document.getElementById("input").innerHTML+=temporaryWord;
}

function changeTemporaryWord() {
    var word=getWord(straightCount,curveCount);
    if(word==-1){
	alert("エラーが起きました");
    }
    if(!curved){
	temporaryWord="["+word+"]";
    } else {
	temporaryWord=word;
    }
}

function showTemporaryWord() {
    document.getElementById("temporaryWord").innerHTML="";
    document.getElementById("temporaryWord").innerHTML=temporaryWord;
}