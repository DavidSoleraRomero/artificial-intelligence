/**********************************************************/
/* Web de Inteligencia Artificial                         */
/* Hoja de javascript para index.html y gallery.html      */
/* Autor: David Solera Romero                             */
/* Versión: 1.0                                           */
/* 12 de octubre de 2023                                  */
/**********************************************************/

/* Java Script que regula la barra de navegación */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }