const findTheOldest = function (array) {

    //array->obj->name,YOB N DATE;  PLAN: ARRAY[INDEX]->[YEAROFDEATH-YEAR OF BIRTH]
    //STORE IN VARIABLE NUMBER
    //KEEP ARRAY[0].NAME IN VAR too IF GREATER FOUND UPDATE ELSE DONT UPDATE

    let x;
    let m;
    let g=0;
    
    for (let i = 0; i < array.length; i++) {
        const date = new Date();

        if((array[i].yearOfDeath)==undefined){
            array[i].yearOfDeath=date.getFullYear();
            console.log(date.getFullYear());
            
        }
        x = Number(array[i].yearOfDeath - array[i].yearOfBirth);
        console.log(x);

        if (g <= x) {
            g = x;
            m = array[i];

            console.log(m);

        }

    }
    return m;

}
// Do not edit below this line
module.exports = findTheOldest;
