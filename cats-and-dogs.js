
const prompt = require('prompt-sync')();
const T = prompt('Enter Number of Test cases \n');
while(T > 1000 || T < 1){
  const T = prompt('Enter a Number between 1 and 1000')
}
const C = prompt('Enter Number of Dogs \n');
const D = prompt('Enter Number of Cats\n');
const L = prompt('Enter Number of Legs Chef Counted \n');

counted1 = [T,C,D,L]
removeNumberOfIntegerAndCheckChef(counted1)

function removeNumberOfIntegerAndCheckChef(array){
   array.shift()
   checkChef(array)
}

function checkChef(counted){
   catLeg = counted[0] * 4
   dogLeg = counted[1] * 4
   totalLegChefCounted = counted[2]
   dogAndCatLegTotal = catLeg + dogLeg
   if (totalLegChefCounted % 4 != 0){
    console.log('no')
    
   }
   else if (totalLegChefCounted > dogAndCatLegTotal){
    console.log("no")
    
   }
   else if(totalLegChefCounted < dogLeg ){
    console.log("no")
    
   }
   else{
    console.log("yes")
    
   }
}