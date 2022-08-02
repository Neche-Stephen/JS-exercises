acctDetails1 = [30, 120.00]
        acctDetails2 = [42, 120.00]
        acctDetails3 = [300, 120.00]
        withDraw(acctDetails1)
        withDraw(acctDetails2)
        withDraw(acctDetails3)

        function withDraw(acctDetails){
            if (acctDetails[0] > acctDetails[1]){
                console.log(acctDetails[1].toFixed(2))
                
            }
            else if (acctDetails[0] % 5 != 0){
                console.log(acctDetails[1].toFixed(2)) 
                
            }
            else{
                balance = (acctDetails[1] - acctDetails[0]) - 0.5
                console.log(balance.toFixed(2))
                
            }

        }
