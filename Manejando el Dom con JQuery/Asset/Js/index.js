console.log("Aqui")

$(function(){
$("#btn1").click(function(){
  //console.log("text: "+$("#test").text()); //mostrar texto
  $("#test").text("Remplazamos este texto"); // Remplazar texto
});

$("#btn2").click(function(){
  //console.log("HTML: "+$("#test").html()); //mostramos el html
 "html" + $("#test").html("<h1>Remplazamos este texto</h1>"); // Remplazar texto por uno más grande
});

$("#btn3").click(function(){
  //console.log("Value: "+$("#valorNom").val() + "" + $("#valorAp").val());
  "Value" + $("#valorNom").val("Salvador")+ "" + $("#valorAp").val("Dali") //remplazamos los valores por defecto 
});
});

//Esta funcion remplaza el valor del input por hola
$(function(){
$("button").click(function(){
  $("input").attr("value","hola")
}
)}
);
// cambiar el color de fondo
$(function(){
  $("#btnColores").click(function(){
  $("p").css({"background-color": "yellow",
              "font-size": "150%",
              "color": "150%",
              "color": "blue"
            })
  })
});
