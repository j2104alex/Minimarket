//Objeto nativo de js (Date) es para trabajar con fechas
//New es para crear un nuevo objeto tipo date
let date = new Date(); //Date y parentesis son para construir el objeto (es un método especial)
//El metodo devuelve un valor en milisegundos y con los metodos se puede obtener dia, mes, año, etc.
//Es un metodo que devuelve segun el local time ._______()
let dia = date.getDate(); 
let mes = date.getMonth();
let anio = date.getFullYear();
//Se actualiza en el html OJO es actualizar
document.getElementById("mes").innerHTML = mes+1; //Se coloca +1 porque empieza a contar desde 0
document.getElementById("dia").innerHTML = dia;
document.getElementById("a_o").innerHTML = anio;

//Creamos variable visitasActuales y recuperamos del local storage la key visitas
//La primera vez que se ejecuta es undefined
let visitasActuales = localStorage.getItem("visitas");

//Se comprueba que la variable está definida (true)
    if (visitasActuales) {
      //Si ya está definida se crea la variable aumento donde se almacena las visitasactuales+1
      let aumento = parseInt(visitasActuales) +1; 
      //Se actualiza el html|
      document.getElementById("visitas").innerHTML = aumento;
      //Se actualiza el local Storage
      localStorage.setItem("visitas", aumento);
    } else {
      //Definida como undefined entonces se crea clave visitas y se asigna el valor 1
      localStorage.setItem("visitas", 1);
      //Se actualiza el html
      document.getElementById("visitas").innerHTML = 1;
    }
