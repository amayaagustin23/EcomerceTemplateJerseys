//#region Variables
const containerBestSeller = document.getElementById('containerBestSeller')
const containerImagenes = document.getElementById('listarImagenes')
const listaproductos = []
const listNews = []
//#endregion

//#region Funciones de renderizado

//FUNCION PARA TRAER TODOS LOS DATOS DESDE LOS JOINS
const getData = () => {
	fetch('./json/products.json')
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			for (let i = 0; i < 4; i++) {
					listaproductos.push(json[i])
			}
		})
	fetch('./json/news.json')
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			json.map((item) => {
				listNews.push(item)
			})
		})
}
//FUNCION PARA REDIRECCIONAR A UN PRODUCTO
const redirectProduct = (list) => {
	list.map((item) => (document.getElementById(`prod_${item.id}`).onclick = () => localStorage.setItem('producto', JSON.stringify(item))))
}
//FUNCION PARA REDIRECCIONAR A UNA NOTICIA
const redirectNews = (list) => {
	list.map((item) => (document.getElementById(`news_${item.id}`).onclick = () => localStorage.setItem('new', JSON.stringify(item))))
}
//FUNCION PARA RENDERIZAR LOS PRODUCTOS
const getProduct = (list) => {
	const products = list.map(
		(item) =>
			`<div class="article" data-aos="zoom-in">
        <img src=${item.imagenes[0]} alt="">
        <div class="textArticle">
          <h3>${item.nombre}</h3>
          <p>$${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
          <div class="overlay">
            <div class="text" ><a id="prod_${item.id}" href="./pages/product.html">Comprar</a></div>
          </div>
        </div>
    </div>`
	)
	containerBestSeller.innerHTML = products.join('')
	redirectProduct(list)
}
//FUNCION PARA RENDERIZAR LAS NOTICIAS
const getNews = (list) => {
	const news = list.map(
		(item) =>
			`<div class="containerItem" data-aos="zoom-in">
          <img src=${item.imagenes[0]} alt="Avatar" class="image">
          <div class="overlay">
            <a class="text" id="news_${item.id}"  href="./pages/newView.html" >${item.tituloCarrucel}</a>
          </div>
      </div>`
	)
	containerImagenes.innerHTML = news.join('')
	redirectNews(list)
}
//FUNCION PARA LOADING Y RENDERIZADO COMPLETO
const renderizadoHome = () => {
	getData()
	setTimeout(() => {
		document.getElementById('loaderBestSeller').style.display = 'none'
		document.getElementById('loaderNews').style.display = 'none'
		getProduct(listaproductos)
		getNews(listNews)
	}, 1000)
}
renderizadoHome()
//#endregion
