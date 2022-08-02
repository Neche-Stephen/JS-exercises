let arrayFour = [5,447474,228,6664,40,81]
        removeNumberOfIntegerAndCheckFour(arrayFour)
        

        function removeNumberOfIntegerAndCheckFour(arrayFour){
            arrayFour.shift()
            theNumberOfFours = arrayFour.map(checkFour)
            console.log(theNumberOfFours)
        }
        function checkFour(Four){  
            Four = Four.toString()
            a = 0
            for(let s of Four){
               s = Number(s)
               if (s/4 == 1){
                a++
               }
            }
            return a
        }