console.log("Aqui")


//manejador de eventos (Cuando el html se cargue)
$(document).ready()
//manejador de eventos (Cuando se haga click en el div)
$("div").click()


//Cambia de color y lo mueve
$(function(){
  $("h4").mouseenter(function(){ 
    $(this).animate({
      marginLeft:"50px"
    }, "slow", function(){
      $(this).css({
        "color": "blue",
        "backgroundColor": "yellow"
      });
    });
  });
});


$(function(){
  $("h4").mouseleave(function(){ 
    $(this).animate({
      marginRight:"50px"
    }, "fast", function(){
      $(this).css({
        "color": "white",
        "backgroundColor": "black"
      });
    });
  });
});