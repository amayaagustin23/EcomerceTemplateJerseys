//#region Lista
const listNews = []
const getData = () => {

	fetch('../json/news.json')
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			for (let i = 0; i < 5; i++) {
				listNews.push(json[i])
			}
		})
}
getData()
const cardNews = document.getElementById('cardsNews')
//#endregion

//#region funcion de Renderizado
const redirectNew = (list) => {
  list.map((item) => (document.getElementById(`new_${item.id}`).onclick = () => localStorage.setItem('new', JSON.stringify(item))))
}

const getNewsTemplate = (list) => {
	const news = list.map(
		(item) =>
			`<div class="card containerCard" data-aos="fade-right">
          <div class="row">
            <div class="col-md-4">
              <img src=${item.imagenes[0]}>
            </div>
            <div class="col-md-8">
              <div class="tags">
                <div class="tag">${item.categorias[0]}</div>
                <div class="tag">${item.categorias[1]}</div>
                <div class="tag">${item.categorias[2]}</div>
              </div>
              <h3>${item.tituloNew}</h3>
              <p>${item.parrafos[0]}</p>
              <a id="new_${item.id}" class="buttonIndex" href="newView.html"> Ver</a>
            </div>
          </div>
        </div>`
	)

	cardNews.innerHTML = news.join('')
	redirectNew(list)
}

const renderizadoNews = () => {
	setTimeout(() => {
		document.getElementById('loader').style.display = 'none'
		getNewsTemplate(listNews)
	}, 1500)
}

renderizadoNews()
//#endregion
