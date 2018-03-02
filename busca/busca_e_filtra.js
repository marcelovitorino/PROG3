function busca_e_filtra(url_base) {
	recurso1 = fetch(url_base + "/data")
  .then(response => response.json())
  .then(data => console.log('data is', data));
  
  	recurso2 = fetch(url_base + dados.recurso)
  .then(response => response.json())
  .then(data => console.log('data is', data));
  
  
}
