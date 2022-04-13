let nombre = document.getElementById("txtNombre");
let apellido = document.getElementById("txtApellido");
let edad = document.getElementById("txtEdad");
let descripcion = document.getElementById("descripcion")


function validar(){

        if(nombre.value === "")
            {
                confirm("El campo nombre es obligatorio")
                return false;
            }

        if(apellido.value === "")
                {
                    confirm("El campo apellido es obligatorio")
                    return false;
                }

        if(edad.value === "")
        {
            confirm("El campo edad es obligatorio")
            return false;
        }
        if(descripcion.value === "")
        {
            confirm("El campo descripcion es obligatorio")
            return false;
        }
        else
        {
            return true;
        }


        

}

function registrar()
{
    if(validar() == true)
    {
        alert("Registro cargado");
    }
  
}

