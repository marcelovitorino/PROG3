function fib(n) {
	
function tail(a,b,n) {
	if (n > 0) {
		return tail(b,a + b,n-1);
	} else {
		return a;
	}
	}		
		
return tail(1,1,n);
}

