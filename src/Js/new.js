//#region Variables y LocalStorage
const news = JSON.parse(localStorage.getItem("new"));
//#endregion

//#region Renderizado
//FUNCION PARA RENDERIZAR LA NOTICIA
const renderizadoNew = () => {
  const newView = `
<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="news.html">Noticias</a></li>
    <li class="breadcrumb-item active" aria-current="page">${news.tituloCarrucel}</li>
  </ol>
</nav>
<div class="titleContainer">
  <img src=${news.imagenes[0]} alt=${news.tituloNew} />
  <div class="categorias">
    <p class="categoria">${news.categorias[0]}</p>
    <p class="categoria">${news.categorias[1]}</p>
    <p class="categoria">${news.categorias[2]}</p>
  </div>
  <h1>${news.tituloNew}</h1>
</div>
<section>
  <article>
    <p>${news.parrafos[0]}</p>
    <img src=${news.imagenes[1]} alt=${news.tituloNew} />
    <p>${news.parrafos[1]}</p>
    <img src=${news.imagenes[2]} alt=${news.tituloNew} />
    <p>${news.parrafos[2]}</p>
  </article>
</section>
`;
	setTimeout(() => {
		document.getElementById('loader').style.display = 'none'
    document.getElementById('containerNew').innerHTML = newView;
	}, 1500)
}

renderizadoNew()
//#endregion