function valid2(){

    var fecha=document.getElementById("fecha-inicio").value;
    var cita=document.getElementById("cita").value;
    var asunto=document.getElementById("asunto").value;
    var diagnostico=document.getElementById("diagnostico").value;
    var tratamiento=document.getElementById("tratamiento").value;

    const UI = new UI();
    UI.addDetalle(Detalle);

    if(fecha=="" || cita=="" || asunto=="" || diagnostico=="" || tratamiento==""){
        alert("Por favor ingrese todos los datos");
    }
    if (new Date(fecha) < new Date(tratamiento)) {
        alert("La fecha de inicio debe ser posterior a la fecha de tratamiento");
        
      }
    
      // Validar que el número de cita sea mayor que cero
      if (cita <= 0) {
        alert("El número de cama debe ser mayor que cero");
      }
  
      else{
        alert("Los datos se han guardados correctamente")
      }
    }
    
    function regreso(){
      window.location="inicio de pagina.html";
    }