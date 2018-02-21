
function eq2grau(equacao) {
 var delta = Math.pow(equacao.b,2) - (4*equacao.a*equacao.c);
  
  return calculaRaizes(equacao,delta);
} 


function calculaRaizes(equacao,delta) {
  var x1_eq = (-equacao.b + Math.sqrt(delta)) / (2*equacao.a);
  var x2_eq = (-equacao.b - Math.sqrt(delta)) / (2*equacao.a);
  
  
  if (delta < 0 )  {
    return {delta: delta};
  } else if (delta === 0) {
    return {delta: delta, x1: x1_eq};
  } else {
    return {delta: delta, x1: x1_eq, x2: x2_eq};
  }
  
}


