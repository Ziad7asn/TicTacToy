var numbersOfCards = document.querySelectorAll(".card").length; 
var listOfCards =   document.querySelectorAll(".card");
var previous = "x";
var listOfH3 = document.querySelectorAll("h3");
var k = 0;
var j = 0;
for (var i = 0; i < numbersOfCards; i++) {
   
    document.querySelectorAll(".card")[i].innerHTML=" ";
  document
    .querySelectorAll(".card")
    [i].addEventListener("click", function () {
        
     this.innerHTML= validate(this.innerHTML);
      game();


      
    });

    function validate(textContext){
        if(textContext==="o"||textContext==="x"){
          return;
      }else{
       
        if(previous === "x"){
            textContext="o";
                previous ="o";
        }
        else if (previous === "o"){
            textContext="x";
            previous ="x";
        }
           
      }
       return textContext;
    }
      
    function game(){
       if(listOfCards[0].innerHTML===listOfCards[1].innerHTML && listOfCards[2].innerHTML===listOfCards[0].innerHTML && listOfCards[0].innerHTML!==" " ){
           alert(listOfCards[0].innerHTML+" Win")
          
           
       }else if(listOfCards[3].innerHTML===listOfCards[4].innerHTML && listOfCards[5].innerHTML===listOfCards[3].innerHTML && listOfCards[3].innerHTML!==" "){
        alert(listOfCards[3].innerHTML+" Win")


       }else if(listOfCards[6].innerHTML===listOfCards[7].innerHTML && listOfCards[8].innerHTML===listOfCards[6].innerHTML && listOfCards[6].innerHTML!==" "){
        alert(listOfCards[6].innerHTML+" Win")
      }else if(listOfCards[0].innerHTML===listOfCards[3].innerHTML && listOfCards[6].innerHTML===listOfCards[0].innerHTML && listOfCards[0].innerHTML!==" "){
        alert(listOfCards[0].innerHTML+" Win")
      }else if(listOfCards[1].innerHTML===listOfCards[4].innerHTML && listOfCards[7].innerHTML===listOfCards[1].innerHTML && listOfCards[1].innerHTML!==" "){
        alert(listOfCards[1].innerHTML+" Win")
      }else if(listOfCards[2].innerHTML===listOfCards[5].innerHTML && listOfCards[8].innerHTML===listOfCards[2].innerHTML && listOfCards[2].innerHTML!==" "){
        alert(listOfCards[2].innerHTML+" Win")
      }else if(listOfCards[0].innerHTML===listOfCards[4].innerHTML && listOfCards[8].innerHTML===listOfCards[0].innerHTML && listOfCards[0].innerHTML!==" "){
        alert(listOfCards[0].innerHTML+" Win")
      }else if(listOfCards[2].innerHTML===listOfCards[4].innerHTML && listOfCards[6].innerHTML===listOfCards[2].innerHTML && listOfCards[2].innerHTML!==" "){
        alert(listOfCards[2].innerHTML+" Win")
      }else if(listOfCards[0].innerHTML!==" " && listOfCards[1].innerHTML!==" " && 
      listOfCards[2].innerHTML!==" " && listOfCards[3].innerHTML!==" " && 
       listOfCards[4].innerHTML!==" " && listOfCards[5].innerHTML!==" " && 
       listOfCards[6].innerHTML!==" " && listOfCards[7].innerHTML!==" " && 
       listOfCards[8].innerHTML!==" "){ 
        alert("Draw");
        return;
       } 
       else {
         return;
       }

       for(var i = 0 ; i<listOfCards.length;i++){
         listOfCards[i].innerHTML=" ";
       }
       if(previous ==="o" ){
         k++;
         listOfH3[0].innerHTML = "you: "+k;
         previous = "x";
       }else if(previous ==="x"){
        j++;
        listOfH3[1].innerHTML = "your friend: "+j;
        previous = "o";
       }
        
    }

    


 // document.querySelectorAll(".card")[i].innerHTML = " ";
}

