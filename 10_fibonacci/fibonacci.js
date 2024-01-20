const fibonacci = function (x) {
    if(x<0){
        return "OOPS";
    }

    if (x == 0) {
        return 0;
    }
    if (x == 1) {
        return 1
    }
    result1 = 1;
    result2 = 0;
    for (let i = 1; i < x; i++) {
        result = result1 + result2;
        result2 = result1;
        result1 = result;






    }
    return result;

};
//1 1 2 3 5 
// Do not edit below this line
module.exports = fibonacci;
