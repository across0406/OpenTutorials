function isEqual(a, b){
    return a === b;
}

function isGreater(a, b){
    return a > b;
}

function isGreaterOrEqual(a, b){
    return a >= b;
}

function isLess(a, b){
    return a < b;
}

function isLessOrEqual(a, b){
    return a <= b;
}

function operateProgram(whole, condition){
    document.write('1 - Print<br>');
    
    if (whole){
        document.write('2 - if whole 1st<br>');
        document.write('3 - if whole 2nd<br>');
    }
    else{
        if (condition){
            document.write('2 - if condition<br>');
        }
        else{
            document.write('3 - else for if condition<br>');
        }
    }

    document.write('4 - Print<br>');
}