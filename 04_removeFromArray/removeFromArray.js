const removeFromArray = function(array , ...num) {

    let x = [];
    x=num;
    let result
    
    for(let i =0; i<array.length;i++){
        // ([1, 2, 3, 4], 3, 2)).toEqual([1, 4]); 0 <4 ; 0<2 ; 1<3 ; 

        for(let j=0;j<x.length;j++){
            if (array[i]===x[j]){
                result = array.splice(i,1);
                console.log(array);
                i=0;
            }

        }
        
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
