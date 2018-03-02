/* Marcelo Vitorino - Prog3 - UFCG
*/
var identificador = null; 
var state;
 
function start(tempo){
    if(!identificador){
      identificador = setInterval(update, tempo);
      state = iniciado;
      }
    }
  function stop() {
      clearInterval(identificador);
      identificador = null;
      state = parado;
}
