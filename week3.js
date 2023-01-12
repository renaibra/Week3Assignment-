var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var length =ages.length;
var agediff = ages[length-1]-ages[0];

//1b
console.log("first element diff " + agediff);

//ic
var ageSum = 0;
for (let index = 0; index < ages.length; index++) {
    ageSum = ageSum + ages[index];
}

console.log("Sum of all ages  " + ageSum);
console.log("Avg age    " + ageSum/length);


//2a
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];var ageSum = 0;

var letterSum = 0;

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    letterSum = letterSum + names[index].length;
}
console.log("Sum of all letters  " + letterSum);
console.log("average number of letters     " + letterSum/names.length);

//2b
let concatnames="";
for (let index = 0; index < names.length; index++) {
    concatnames= concatnames + " " + names[index];

}
console.log("concated names " + concatnames);

//3
var lastElement = names[names.length-1];

//4
var firstElement = names[0];

//5
var nameLengths = [] ;
for (let index = 0; index < names.length; index++) {
    nameLengths[index]= names[index].length;

}
console.log("nameLengths  " + nameLengths);

//6
var sumOfnameLengths = 0;
for (let index = 0; index < nameLengths.length; index++) {
    sumOfnameLengths += nameLengths[index];
    
}
console.log("sumOfnameLengths  " + sumOfnameLengths);


//7
console.log("repeat word  " + repeatword("hello",3));


function repeatword( word, n ){

    let ret="";
    for (let index = 0; index < n; index++) {
        ret+=word;
    }
    return ret;
}


//8
console.log("fullname   " + fullname("cleo", "patra"));

function fullname( firstname,lastname ){

    
    return  firstname + " " + lastname;

}

//9
var sumarr = [3,99];

console.log(" checkSum100  " + checkSum100(sumarr));

function checkSum100( arr ){

    let sum=0;
    for (let index = 0; index < arr.length; index++) {
        sum+=arr[index];
    }
    return sum>100;
}


//10
var avgarr = [3,99];

console.log(" checkSum100  " + avg(avgarr));

function avg( arr ){

    let sum=0;
    for (let index = 0; index < arr.length; index++) {
        sum+=arr[index];
    }
    return sum/arr.length;
}


//11
var arr1 = [3,99];
var arr2 = [3,100];

console.log(" comparravg  " + comparravg(arr1,arr2));

function comparravg( arr1,arr2){

    let sum=0;
    for (let index = 0; index < arr1.length; index++) {
        sum+=arr1[index];
    }
    var arr1avg=sum/arr1.length;

    sum=0;
    for (let index = 0; index < arr2.length; index++) {
        sum+=arr2[index];
    }
    var arr2avg=sum/arr2.length;

    return arr1avg>arr2avg;

}


//12
console.log("willBuyDrink "  +willBuyDrink(true,11) );
console.log("willBuyDrink "  +willBuyDrink(false,11) );
console.log("willBuyDrink "  +willBuyDrink(true,9) );

function willBuyDrink(isHotOutside, moneyInPocket){
    if (moneyInPocket >10.50 && isHotOutside) {
      return true;
    } else {
      return false;
    }
  }
//13 Fuction that takes in Temperature

  console.log("canIgothebeach "  +canIgothebeach(80) );
  console.log("canIgothebeach "  +canIgothebeach(70) );

  function canIgothebeach(temp){
return temp>=75;

}