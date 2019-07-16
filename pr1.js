function submitanswers() {
    var total=5 ;
    var score=0 ;
  
    var q1=document.forms["quizform"]["q1"].value ;
    var q2=document.forms["quizform"]["q2"].value ;
    var q3=document.forms["quizform"]["q3"].value ;
    var q4=document.forms["quizform"]["q4"].value ;
    var q5=document.forms["quizform"]["q5"].value ;
 for(i=1; i<=total ; i++)
 {
     if(eval('q'+i)== null||eval('q'+i)=='')
     {
     alert("you missed the question"+i) ;
 return false ;
    }

 }

//set correct answers
var answers= ["b","b","b","b","b"];
for(i=1;i<=total;i++){
    
if(eval('q'+i)==answers[i-1])
{
    score++ ;
}}
//results
document.getElementById('results').innerHTML= "score="+score+"" ;
//alert("you scored"+score+"out of 5");
return false ;
}
