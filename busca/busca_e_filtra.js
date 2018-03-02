function busca_e_filtra(url_base) {
	fetch(url_base)
  .then(response => response.json())
  .then(data => console.log('data is', data))
}
