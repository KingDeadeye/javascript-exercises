const reverseString = function(string) {

    let x ='';
    let result='';
    for(let i=1;i <= string.length;i++){
        x=string[(string.length-i)];
        result=result.concat(x);
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
