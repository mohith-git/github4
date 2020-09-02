
alert("Please fill and check all the  boxes before submitting!!!");



var array = [];


  function select(){

    var p = document.getElementById("grades1").value;
    var q = document.getElementById("grades2").value;
    var r = document.getElementById("grades3").value;
    var s = document.getElementById("grades4").value;
    var t = document.getElementById("grades5").value;
   
    array = [p,q,r,s,t];
    
} 

function calculate(){

    var credit = [parseFloat(document.getElementById("num4").value),parseFloat(document.getElementById("num6").value),parseFloat(document.getElementById("num8").value),parseFloat(document.getElementById("num10").value),parseFloat(document.getElementById("num12").value)];
  
    console.log(credit);

       var m = 0 ;
       var i = 0;
   while(i<5){

       m +=credit[i];
            i++;
    
   };

var cg = 0;
var j=0;

while(j<5){
    
   cg += (array[j]*credit[j]);
    j++;
   
}
   
var l=0;

while(l<5){

if(array[l]==0){

    array.length--;

} 

l++;

}

    var currcg = cg / array.length;

   document.getElementById("currcg").value= currcg;
   document.getElementById("currcredit").value= m;

   var a = parseFloat(document.getElementById("num1").value);
   var b = currcg;
   
   var c = a + b;
   
document.getElementById("totalcg").value = c;

var d = parseFloat(document.getElementById("num2").value);
   var e = m;
   var f = d + e;

document.getElementById("totalcredits").value = f;

}



