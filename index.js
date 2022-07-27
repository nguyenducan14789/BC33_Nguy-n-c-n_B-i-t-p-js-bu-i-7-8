var org = []
function addArray1(){
   var a = +document.getElementById("addArray1").value;
   org.push(a)
   console.log(org);
   document.getElementById("org").innerHTML = org;
}
/**
 * Bài 1: Tổng các số dương trong mảng.
 */

function ex1(arr){
    // arr = document.getElementById("org");
    var totalPositiveNum = 0;
    for(i = 0; i < org.length; i++ ){
        if(org[i] > 0){
            totalPositiveNum = totalPositiveNum + org[i]
        }
    }
    document.getElementById("totalPositiveNum").innerHTML = totalPositiveNum;
}

// ex1([-5,5,4,7,8,9,-10,-9])

/**
 * bài 2: Đếm có bao nhiêu số dương trong mảng.
 */

 function ex2(arr){
    var positives = 0;
    for(i = 0; i < org.length; i++ ){
        if(org[i] > 0){
            positives = positives +1;
        }
    }
    document.getElementById("countPositiveNum").innerHTML = positives;
}

// ex2([-5,5,4,7,8,9,-10,-9])

/**
 * bài 3: Tìm số nhỏ nhất trong mảng.
 */

 function ex3(arr){
    for(var i = 0; i < org.length; i++){

        for(var j = 0; j < ( org.length - i -1 ); j++){
          if(org[j] > org[j+1]){
            var temp = org[j]
            org[j] = org[j + 1]
            org[j+1] = temp
          }
        }
      }
  
      document.getElementById("min").innerHTML = org[0];
}

// ex3([-5,5,4,7,8,9,-10,-9])

/**
 * bài 4: Tìm số dương nhỏ nhất trong mảng.
 */

 function ex4(arr){
    for(var i = 0; i < org.length; i++){

        for(var j = 0; j < ( org.length - i -1 ); j++){
          if(org[j] > org[j+1]){
            var temp = org[j]
            org[j] = org[j + 1]
            org[j+1] = temp
          }
        }
      }
      console.log(org)
      var minPositive
      for(var k = 0; j < org.length; k++){
        if(org[k] > 0){
            minPositive = org[k];
            console.log(minPositive);
            break;
            
        }
        
      }
      console.log(minPositive)
    document.getElementById("minPositive").innerHTML = minPositive;
    
}

// ex4([-5,5,4,7,8,9,-10,-9])

/**
 * bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
 */


// checkarr([-5,5,4,7,8,9,-10,-9]);
// function checkarr(arr){
//     for(i = 0; i < org.length; i++){
//         if(org[i] % 2 === 0){
//             return;
//         }
//     }
//     return document.getElementById("nonEveNum").innerHTML = "-1";
// }
function ex5(arr){
    
    for(i = 0; i< org.length; i++){
        if(org[i]%2 === 0){
        var evenNum = org[i]
        } 
    }
    if(evenNum === undefined){
        evenNum = -1;
    }
    
    
    document.getElementById("evenNum").innerHTML = evenNum;
}


// ex5([-5,5,4,7,8,9,-10,-9])
// ex5([-5,5,1,73,5,9,-1,-9])

/**
 * bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
 */

 function ex6(arr){
    var a = + document.getElementById("swapa").value;
    var b = + document.getElementById("swapb").value;
    var temporary = org[a];
    org[a] = org[b];
    org[b] = temporary
    document.getElementById("newarr").innerHTML = org;
    console.log(org);
}

// ex6([-5,5,4,7,8,9,-10,-9], 3, 4)

/**
 * bài 7: Sắp xếp mảng theo thứ tự tăng dần.
 */

 function ex7(arr){
    for(var i = 0; i < org.length; i++){

      for(var j = 0; j < ( org.length - i -1 ); j++){
        if(org[j] > org[j+1]){
          var temp = org[j]
          org[j] = org[j + 1]
          org[j+1] = temp
        }
      }
    }

    document.getElementById("newarr1").innerHTML = org;
}

// ex7([-5,5,4,7,8,9,-10,-9])

/**
 * bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
 */

 function checkN(n)
 {
     if (n < 2)    
         return 0;
 
     if(n / Math.floor(n) === 1){
        for (var i = 2; i <= Math.sqrt(n); i ++)
     {
         if (n%i===0)
         {
             return 0;
         }
     }
     return 1;
     }
 }

 function checkarr1(arr){
    for(i = 0; i< org.length; i++){
        if(checkN(org[i]) == 1)
        return;
    }
    return document.getElementById("nonPrime").innerHTML = "-1";
}
// checkarr1([4,6,8,9,15,5])
function ex8(arr){
     for(var i = 0; i < org.length; i++)
     {
         if ( checkN(org[i]) == 1 )
         {
             console.log(org[i]);
             document.getElementById("prime").innerHTML = org[i]
             break;
         }
     }
     
 }

// ex8([1.2,5.7,3,7.2,8,9.3,11])


// var a = 8.5;
// var b = Math.floor(a);
// console.log(b)

/**
 * bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

 */

 function ex9(arr){
    var count = 0;
    for(var i = 0; i < org.length; i++){
        if(org[i]/Math.floor(org[i]) === 1){
            count = count +1;
        }
      
    }

    console.log(count);
    document.getElementById("countP").innerHTML = count;
}

// ex9([1.2,2,5.7,3,7.2,8,9.3,11,56])

/**
 * bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

 */

 function ex10(arr){
    var count1 = 0;
    var count2 = 0;
    for(i = 0; i < org.length; i++){
        if(org[i] > 0){
            count1 = count1 +1;
        } else {
            count2 = count2 +1;
        }
    }

    if(count1 > count2){
        console.log("Số lượng số dương nhiều hơn số âm")
        document.getElementById("compare").innerHTML = "Số lượng số dương nhiều hơn số âm"
    } else if(count1 < count2){
        console.log("Số lượng số âm nhiều hơn số dương")
        document.getElementById("compare").innerHTML = "Số lượng số âm nhiều hơn số dương"
    } else if(count1 = count2){
        console.log("Số lượng dương và số âm bằng nhau")
        document.getElementById("compare").innerHTML = "Số lượng dương và số âm bằng nhau"
    }
}

// ex10([-5,5,4,7,-8,9,-10,-9])


