/** @format */

//#region Variables
const containerBestSeller = document.getElementById('containerBestSeller')
const containerImagenes = document.getElementById('listarImagenes')
const listaproductos = []
const listNews = []
//#endregion


const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".listarImagenes");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-70%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});



//#region Funciones de renderizado
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
const redirectProduct = (list) => {
	list.map((item) => (document.getElementById(`prod_${item.id}`).onclick = () => localStorage.setItem('producto', JSON.stringify(item))))
}
const redirectNews = (list) => {
	list.map((item) => (document.getElementById(`news_${item.id}`).onclick = () => localStorage.setItem('new', JSON.stringify(item))))
}
const getProduct = (list) => {
	const products = list.map(
		(item) =>
			`<div class="article" data-aos="zoom-in">
        <img src=${item.imagenes[0]} alt="">
        <div class="textArticle">
          <h3>${item.nombre}</h3>
          <p>$${item.precio}</p>
          <div class="overlay">
            <div class="text" ><a id="prod_${item.id}" href="./pages/product.html">Comprar</a></div>
          </div>
        </div>
    </div>`
	)
	containerBestSeller.innerHTML = products.join('')
	redirectProduct(list)
}
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
