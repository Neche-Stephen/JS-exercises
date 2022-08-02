counted1 = [1,1,8]
counted2 = [1,1,4]
counted3 = [1,1,2]
personalCount = [3,4,4]
checkChef(counted1)
checkChef(counted2)
checkChef(counted3)
checkChef(personalCount)

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