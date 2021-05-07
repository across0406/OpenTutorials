function twoList(){
    document.write('<li>2-1</li>');
    document.write('<li>2-2</li>');
}

function sum(left, right){
    var sumResult = 0;
    if ((typeof(left) === "number" && typeof(right) === "number") || 
    (typeof(left) === "bigint" && typeof(right) === "bigint")){
        sumResult = left + right;
    }
    else{
        sumResult = 0;
    }

    return sumResult;
}