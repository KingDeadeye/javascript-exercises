const repeatString = function (string, number) {
    let x='';
    if(number<0){
        return "ERROR";
    }
    for (let int = 0; int < number; int++) {
        
        x = x.concat(string);
    }
    return x;

};

// Do not edit below this line
module.exports = repeatString;
