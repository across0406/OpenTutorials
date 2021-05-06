function forLiWrite(){
    for(i = 0;i < 3;i++){
        document.write('<li>' + String(i) + '</li>')
    }
}

function whileLiWrite(){
    var i = 0
    while(i < 3){
        document.write('<li>' + String(i) + '</li>')
        i++;
    }
}