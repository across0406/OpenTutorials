var coworkers = {};

coworkers = {
    "programmer": "egoing",
    "designer": "leezche"
};

function createObject(){
    document.write("programmer: " + String(coworkers.programmer) + "<br>");
    document.write("designer: " + String(coworkers.designer) + "<br>");
    coworkers.bookkeeper = "duru";
    document.write("bookkeeper: " + String(coworkers.bookkeeper) + "<br>");
}

function iterateObject(){
    for(var key in coworkers){
        var value = coworkers[key];
        document.write(String(key) + ": " + String(value) + "<br>");
    }
}

function addShowAllMethod(){
    coworkers.showAll = function(){
        for(var key in this){
            var value = this[key];

            if (typeof(value) !== "function")
            {
                document.write(String(key) + ": " + String(value) + "<br>");
            }
        }
    };
    
    coworkers.showAll();
}