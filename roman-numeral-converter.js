function convertToRoman(num) {
    let myNum = [1,2,3,4,5,6,7,8,9,10,20,30,40,49,50,60,70,80,90,99,100,200,300,400,500,600,700,800,900,1000];
    let roman = ["I", "II", "III","IV", "V", "VI", "VII", "VIII","IX", "X","XX", "XXX", "XL", "XLIX", "L", "LX", "LXX", "LXXX", "XC","XCIX","C", "CC", "CCC", "CD","D", "DC", "DCC", "DCCC", "CM", "M"];
 
    let holder =[];
     let initThousand = [];
     let myFinal =[];
    function myPosition(arr, x){
        for(let i = 0; i<arr.length; i++){
            if(arr[i]>x){
                return arr[i-1];
            }
        }
    }
 
    function ourWidth(myX){
         return (myX.toString()).length;
         }
 
    function splitNum(num){
        function myDefault(num){
            if(myNum.indexOf(num) > 0){
                holder.push(num);
                return holder;
            }
        }
 
        function threeD(num){
            if(myNum.indexOf(num)>0){
                return myDefault(num);
            }else{
                let x = num - (myPosition(myNum, num));
                let y = (myPosition(myNum, x));      //40
                let z = x - (myPosition(myNum, x));  //2      
                holder.push((myPosition(myNum, num)), y, z);
                return holder;    
            }
        }
     
        if(ourWidth(num) === 1){
            if(myNum.indexOf(num)>0){
                holder.push(num);
                return holder;
            }
        }else if(ourWidth(num) === 2){
            if(myNum.indexOf(num)>0){
                return myDefault(num);
            }else{
                let y = num - (myPosition(myNum, num));
                holder.push((myPosition(myNum, num)), y);
                return holder;
            }
        }else if(ourWidth(num) === 3){
            return threeD(num);
        }else if(ourWidth(num) === 4){
            if(myNum.indexOf(num)>0){
                return myDefault(num);
             }else{
                 let z = parseInt(num/1000); 
                 let remainder = num-(z*1000);
                 let myR = threeD(remainder);
                 initThousand.unshift(z);
                 return holder;  
             }
        }
    }
 
     let thousand = [];
     let myA = splitNum(num);
     let myB = initThousand;
     if(num === 1){
         myFinal.push(roman[0]);
     }else{
         for(let i = 0; i< myA.length; i++){
         myFinal.push(roman[myNum.indexOf(myA[i])]);
        }
     }
     
     for(let i = 0; i< myB; i++){
         thousand.unshift("M");
     }
     console.log(thousand.concat(myFinal).filter(Boolean).join("").toString().toUpperCase());
     return thousand.concat(myFinal).filter(Boolean).join("").toString().toUpperCase();
 }
 
 
  convertToRoman(115);