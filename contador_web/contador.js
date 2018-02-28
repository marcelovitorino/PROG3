/* Marcelo Vitorino - Prog3 - UFCG
*/
var identificador = null; 
 
function start(tempo){
    if(!identificador){
      identificador = setInterval(update, tempo);
      }
    }
  function stop() {
      clearInterval(identificador);
      identificador = null;
}
