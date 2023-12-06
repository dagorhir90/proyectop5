console.log("Hola Mundo");
let nombre = prompt('¿Cuál es tu nombre?').toUpperCase()
while (nombre.length < 3) {
    nombre = prompt("Tu nombre no puede ser tan corto, dinos, cuál es realmente tu nombre?").toUpperCase();
  }
let edad = prompt('¿Cuántos años tenés?')
alert ("Hola " + nombre + " De " + edad + " Años." + " ¿Te interesa conseguir tickets?")
const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket");
function FuncTickets(place, noTickets) {
    noTickets= true
    place = "Ruoff Music Center"
   if (noTickets) {
    console.log("Hola World")
     swal(
       "Oh no!",
       "You are outta luck!, there are no more tickets for " + 
       place, "info",
     );
   } else {
     swal("Sold!", "You have tickets to the " + place + 
     " concert", "success");
   }
  }

