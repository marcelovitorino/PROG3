function fat(n) {
		
	function tail(elemento) {
		if (elemento === 1) {
			return 1;
		} else {
			return tail(elemento - 1) * elemento 
		}

	}
	
return tail(n);
}
// distancias.reduce / distancias.length
