


$(document).ready(function(){
    $(".naslov1").hover(function (){
        $(".naslov1").css("color", "#cccccc");
    })
});


    $(document).ready(function(){
        $("#dugme1").hover(function (){
             $("#dugme1").css("border", "#030369 solid 2px ");
        })
     });

     $(document).ready(function(){
        $("#dugme2").hover(function (){
             $("#dugme2").css("border", "#030369 solid 2px ");
        })
     });

     $(document).ready(function(){
        $("#dugme2").click(function (e){
          let r=confirm("Da li ste sigurni da zelite da poništite unos?");
          
         if (r==true){
          $(".forma1").reset();
         }else{
          e.preventDefault();
         }
        })
     });

    


    
   $(".galerijaSlika").on("click",function () {
      $(".paragraf1").toggle(2000);
   });

   $(".restoranSlika").on("click",function () {
      $(".paragraf2").toggle(2000);
   });


  $("#imePrezime").on("focus blur",function (e) {
     
     if(e.type=="focus"){
          $(this).css("border","2px solid #062038"); 
     }
      else{
           $(this).css("border", "2px solid gray"); 
     }
   });

      $("#email").on("focus blur",function (e) {
     
         if(e.type=="focus"){
              $(this).css("border","2px solid #062038"); 
         }
          else{
               $(this).css("border", "2px solid gray"); 
          }
      });

      $("#brTel").on("focus blur",function (e) {
         if(e.type=="focus"){
              $(this).css("border","2px solid #062038"); 
         }
          else{
               $(this).css("border", "2px solid gray"); 
          }
      });

      $("#brOsoba").on("focus blur",function (e) {
         if(e.type=="focus"){
              $(this).css("border","2px solid #062038"); 
         }
          else{
               $(this).css("border", "2px solid gray"); 
          }
      });
      $("#datumIvreme").on("focus blur",function (e) {
         if(e.type=="focus"){
              $(this).css("border","2px solid #062038"); 
         }
          else{
               $(this).css("border", "2px solid gray"); 
          }
      });
      $("#potvrda").on("focus blur",function (e) {
         if(e.type=="focus"){
              $(this).css("border","2px solid #062038"); 
         }
          else{
               $(this).css("border", "2px solid gray"); 
          }
      });
      $("#napomena").on("focus blur",function (e) {
         if(e.type=="focus"){
              $(this).css("border","2px solid #062038"); 
         }
          else{
               $(this).css("border", "2px solid gray"); 
          }
      });

     


       $("#dugme1").on("click",function () {
          let imePrezimeGreska=false;
          let imePrezimeValue = $("#imePrezime").val();
          if (imePrezimeValue.length == ""  || imePrezimeValue.length <4 || imePrezimeValue.length > 30 ) {
             imePrezimeGreska=true;
         
          }
    
          else {
             imePrezimeGreska=false;
          }
         let brTelGreska=false;
         let brTelValue = $("#brTel").val();
         if (brTelValue.length == ""  || brTelValue.length <9 || brTelValue.length > 15 ) {
           brTelGreska=true;
         }

         else {
          brTelGreska=false;
         }

         let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
         let emailValue= $("#email").val();
         let emailGreska=false;
         if(regex.test(emailValue)){
          emailGreska=false;
         }
         else{
          emailGreska=true;
         }
         
         if(imePrezimeGreska==false && brTelGreska==false  && emailGreska==false) {
          alert("Ime i prezime: " + $("#imePrezime").val() + "\nBroj telefona: " + $("#brTel").val() +  "\nEmail adresa: " + $("#email").val() + 
          "\nBroj osoba: " + $("#brOsoba").val() + "\nDatum i vreme: " + $("#datumIvreme").val()+ "\nPotvrda: " + $("#potvrda").val()  + "\nNapomena: " + $("#napomena").val());
         }
         else{
           alert("GRESKA!");
           if(imePrezimeGreska==true && brTelGreska==false && emailGreska==false ) {
               $("#imePrezimecheck").show(2000);
               $("#brTelcheck").hide();
               $("#emailCheck").hide();
           }
           else if(imePrezimeGreska==false && brTelGreska==true && emailGreska==false) {
               $("#brTelcheck").show(2000);
               $("#imePrezimecheck").hide();
               $("#emailCheck").hide();

           }
           else if(imePrezimeGreska==false && brTelGreska==false && emailGreska==true) {
               $("#brTelcheck").hide();
               $("#imePrezimecheck").hide();
               $("#emailCheck").show(2000);

           }

           else if(imePrezimeGreska==true && brTelGreska==true && emailGreska==false){
               $("#brTelcheck").show(2000);
               $("#imePrezimecheck").show(2000);
               $("#emailCheck").hide();

           }
           else if(imePrezimeGreska==true && brTelGreska==false && emailGreska==true){
               $("#brTelcheck").hide();
               $("#imePrezimecheck").show(2000);
               $("#emailCheck").show(2000);

          }
          else if(imePrezimeGreska==false && brTelGreska==true && emailGreska==true){
               $("#brTelcheck").show(2000);
               $("#imePrezimecheck").hide();
               $("#emailCheck").show(2000);

          }

           else if (imePrezimeGreska==true && brTelGreska==true && emailGreska==true){
               $("#imePrezimecheck").show(2000);
               $("#brTelcheck").show(2000);
               $("#emailCheck").show(2000);
           }
           
         } 
       });

       
      



      

      
