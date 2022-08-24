//#region Variables y LocalStorage
const news = JSON.parse(localStorage.getItem("new"));
//#endregion

//#region Renderizado
const newView = `<div class="titleContainer">
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
document.getElementById('containerNew').innerHTML = newView;
//#endregion