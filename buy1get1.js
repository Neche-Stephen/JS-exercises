let jewelArray = [4,"ssss","ssas","sa","s"]
        removeNumberOfJewel(jewelArray)

        function removeNumberOfJewel(jewelArray){
            jewelArray.shift()
            minCost = jewelArray.map(checkJewelsMinCost)
            console.log(minCost)
        }
        function checkJewelsMinCost(theJewels){ 
            sCount = 0
            otherCount = 0
            for(let jewelry of theJewels){
               if (jewelry == 's'){
                sCount++
               }
               else{
                otherCount++
               }
            }
            if (sCount % 2 == 0){
                sheWillPayForS = sCount/2
            }
            else if (sCount % 2 == 1 && sCount > 1){
                sheWillPayForS = ((sCount - 1)/2) + 1
            }
            else{
                sheWillPayForS = 1
            }
            sheWillPayTotal = sheWillPayForS + otherCount
            return sheWillPayTotal
            
        }


