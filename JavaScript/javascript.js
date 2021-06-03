function toggleBloque() {
    <div id="flotante" style="display:none;">div</div>
  var demo = document.getElementById("demo");
  if (demo.style.display === "none") {
      demo.style.display = "block";
      document.getElementById ("toggleBloque").textContent = "Ocultar texto";

  } else {

    demo.style.display = "none" 
    document.getElementById ("toggleBloque").textContent = "Mostrar texto"; 
  }  
 
}
  
    
    
    function operaciones(op)
    {
    
        var ops = {
            sumar: function sumarNumeros(n1, n2) {
                return (parseInt(n1) + parseInt(n2));
            },
    
            restar: function restarNumeros(n1, n2) {
                return (parseInt(n1) - parseInt(n2));
            },
            
            multiplicar: function multiplicarNumeros(n1, n2) {
                return (parseInt(n1) * parseInt(n2));
            },
    
        };
    
    
    
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
    
        
        if (isNaN(parseFloat(document.getElementById('num1').value))) {
            document.getElementById('resultado').innerHTML="<span style='color: red;'>Inserta un número en la primera casilla </span>";
            document.getElementById("num1").innerText = "0";
            document.getElementById("num1").focus();
            } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
            document.getElementById('resultado').innerHTML="<span style='color: red;'>Inserta un número en la segunda casilla</span>";
            document.getElementById("num2").innerText = "0";
            document.getElementById("num2").focus();
        }
        else {
        
            switch(op) {
                case 'sumar':
                    var resultado = ops.sumar(num1, num2);
                    document.getElementById('resultado').innerHTML="<span style='color: black;'>"+resultado+"</span>";
                    break;
                case 'restar':
                    var resultado = ops.restar(num1, num2);
                    document.getElementById('resultado').innerHTML="<span style='color: black;'>"+resultado+"</span>";
                    break;
                case 'multiplicar':
                    var resultado = ops.multiplicar(num1, num2);
                    document.getElementById('resultado').innerHTML="<span style='color: black;'>" +resultado+"</span>";
                    break;
               
    
            }
        }
    
    }

