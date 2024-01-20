const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(array) {
  x=0
  array.forEach(element => {
    x+=element;
  });
	return x;
};

const multiply = function(array) {
  let p = array.reduce((total,item)=>{
   return total*item;
  },1)
  return p;

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(x) {
  if(x==0 || x==1){
    return 1;
  }
  let fact =1;
  for(let i =1;i<=x;i++){
    fact=fact*i;
  }
  return fact;
  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
