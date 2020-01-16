function squareNumber()
            {
                const number = document.getElementById("sqrNum").value;
                const squared = number ** 2;
                document.getElementById("ssqr").innerHTML = "The square of " + number + " is " + squared;
                
            }
            function halfNumber()
            {
                const number = document.getElementById("hlfNum").value;
                const half = number / 2;
                document.getElementById("shlf").innerHTML = "The half of " + number + " is " + half;
                
            }
            function percentOf()
            {
                const pOfNum1 = document.getElementById("pOfNum1").value;
                const pOfNum2 = document.getElementById("pOfNum2").value;
                const perc = (pOfNum1 / pOfNum2) * 100 ;
                document.getElementById("sperc").innerHTML = pOfNum1 + " is " + perc + "% of " + pOfNum2;
                
            }
            function circleArea(){
                const rad = document.getElementById("radius").value;
                const area = Math.PI * (rad ** 2);
                document.getElementById("sarea").innerHTML = "The area for a circle with radius" + rad + " is "+ area.toFixed(2);
            } 
            function fullOperation()
            {
                const initialNumber = document.getElementById("finalNumber").value;
                const halfResult = initialNumber / 2;
                const sqrResult = halfResult ** 2;
                const areaResult = Math.PI * (sqrResult ** 2);
                const percResult = (areaResult/sqrResult) * 100;
                document.getElementById("sfinal").innerHTML = "The final result from use of previous functions for " + initialNumber + " is " + percResult.toFixed(2) + "%";
            }
            // function fullOperation()
            // {
            //     const initialNumber = document.getElementById("finalNumber").value;
            //     const halfResult = halfNumber(initialNumber);
            //     const pOfNum1 = squareNumber(halfResult);
            //     const pOfNum2 = circleArea(pOfNum1);
            
            //     const percResult = (pOfNum1/pOfNum2) * 100;
            //     document.getElementById("sfinal").innerHTML = "The final result from use of previous functions for " + initialNumber + " is " + percResult.toFixed(2);
        