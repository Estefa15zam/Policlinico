function valid3(){
    var historial=document.getElementById("historial").value;
  
    if(historial==""){
      alert("Por favor ingrese el numero de cedula para realizar la busqueda del paciente");
    }else{
        window.location="Registro historial.html";
      }
    }

    function regreso(){
        window.location="inicio de pagina.html"
    }