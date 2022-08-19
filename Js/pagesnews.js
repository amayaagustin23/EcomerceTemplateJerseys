//#region Lista
const listNews = [
  {
    id: 1,
    tituloNew: 'Tercera camiseta Adidas de Arsenal 2022-23',
    tituloCarrucel: 'Tercera Arsenal 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/arsenal-2022-23-adidas-third-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/arsenal-2022-23-adidas-third-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/arsenal-2022-23-adidas-third-kit-3.jpg',
    ],
    parrafos: [
      'Esta mañana fue presentada la tercera camiseta de Arsenal FC para la temporada 2022/23 del fútbol inglés y la UEFA Europa League. Los Gunners completan su nueva colección adidas, de la que ya habíamos visto los modelos titular y suplente correspondientes.',
      'La camiseta será rosa, color que nunca se ha usado en la historia del equipo, agregando un patrón tonal de armiños heráldicos similar al que tuvo el escudo institucional entre finales de los años 40 e inicios del siglo actual. El cuello es tipo V cruzado, pintado de azul marino con un remate celeste. Las tres tiras se posicionan sobre los hombros, con el mismo color base del cuello.',
      'El escudo se aplica en versión monocromática, haciendo juego con los logos de Adidas y patrocinadores sobre el frente y manga izquierda. El patrón de armiños se repite en las mangas y espalda de la prenda.',
    ],
    categorias: ['ESTRENOS', 'PREMIER LEAGUE', 'DESTACADOS'],
  },
  {
    id: 2,
    tituloNew: 'Camiseta Puma de Borussia Dortmund copas 2022-23',
    tituloCarrucel: 'Borussia Dortmund 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/borussia-dortmund-2022-23-puma-cup-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/borussia-dortmund-2022-23-puma-cup-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/borussia-dortmund-2022-23-puma-cup-kit-5.jpg',
    ],
    parrafos: [
      'Borussia Dortmund presentó su nueva camiseta para copas de la temporada 2022/23, que verá acción en competencias como la UEFA Champions League y la DFB Pokal. Esta se suma al modelo titular para liga y la camiseta suplente que verá acción en todas las competencias.',
      'La camiseta toma inspiración en el modelo de 1989, con el que ganaron la Copa de Alemania ante Werder Bremen con Nobby Dickel como gran héroe. La base amarilla es acompañada por figuras en negro y blanco sobre los hombros, emulando el diseño de aquel entonces. El cuello redondo se pinta en negro sólido, mientras que las mangas quedan completamente blancas.',
      'El escudo se presenta en sus colores oficiales, acompañado por los logos de Puma y patrocinadores. El lema “Borussia Verbindet” (Borussia Se Conecta) toma posición en lo alto de la espalda, como vimos en las otras dos camisetas.',
    ],
    categorias: ['ESTRENOS', 'LIGA ALEMANA', 'DESTACADOS'],
  },
  {
    id: 3,
    tituloNew: 'Camisetas EA7 de SSC Napoli 2022-23',
    tituloCarrucel: 'SSC Napoli 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/ssc-napoli-ea7-2022-23-kits-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/ssc-napoli-ea7-2022-23-kits-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/ssc-napoli-ea7-2022-23-kits-4.jpg',
    ],
    parrafos: [
      'SSC Napoli presentó en estos días sus primeras dos camisetas para la próxima temporada del fútbol italiano y la UEFA Champions League. Este será su segundo año con EA7, la marca deportiva de Emporio Armani, que inicialmente sólo los iba a vestir un año, y con la que sorprendieron a propios y extraños lanzando 13 camisetas durante la temporada anterior, cosa que al parecer se repetirá.',
      'La camiseta presenta un gofrado en el cuerpo con el escudo del club en repetición, complementado por un gradiente de varias capas sobre las mangas, que conecta con el tono azul marino del cuello. El escudo aparece en sus colores oficiales, acompañado por los logos de EA7 y patrocinadores, incluyendo el habitual Lete en rojo.',
      '¿Te gustó lo nuevo de EA7 y Napoli? ¡Deja tu opinión en la sección de comentarios de abajo!',
    ],
    categorias: ['ESTRENOS', 'SERIE A', 'DESTACADOS'],
  },
  {
    id: 4,
    tituloNew: 'Tercera camiseta Puma de Valencia CF 2022-23',
    tituloCarrucel: 'Valencia CF 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-puma-valencia-cf-2022-23-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-puma-valencia-cf-2022-23-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-puma-valencia-cf-2022-23-2.jpg',
    ],
    parrafos: [
      'Entre los estrenos de estos días estuvo el de Valencia CF y su tercera equipación para la temporada 2022/23 del fútbol español. Esta se suma a los modelos titular y suplente que ya habían presentado junto a Puma.',
      'La camiseta ve el esperado regreso de la Senyera, que no se había visto desde que Puma tomo el rol de sponsor técnico de los Murciélagos en 2019. Los bastones amarillos y rojos se posan sobre el frente y espalda baja de la prenda, dejando la zona dorsal en amarillo sólido. Como es habitual en Valencia, el diseño se completa con vivos azules, que esta vez se toman los hombros y mangas.',
      'El escudo se aplica en sus colores oficiales, acompañado por los logos de Puma y patrocinadores, destacando Cazoo dentro de una caja al frente. El sello que conmemora los 100 años del Estadio Mestalla aparece como jock tag sobre la nuca. Shorts y medias azules completan la nueva tercera equipación de Valencia CF para la próxima temporada.',
    ],
    categorias: ['ESTRENOS', 'LA LIGA', 'DESTACADOS'],
  },
];
//#endregion

//#region funcion de Renderizado
const getNewsTemplate = list => {
  const news = list.map(
    item =>
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
  );
  const elementHTML = document.getElementById('cardsNews');
  const data = news;
  data.forEach(element => {
    elementHTML.innerHTML += element;
  });
};
getNewsTemplate(listNews);
//#endregion

//#region Evento Onclick
const Click = (event, item) => {
  const idView = event.srcElement.id.split('_');
  const id = idView[1];
  console.log(id);
  if (id === item.id);
  {
    localStorage.setItem('news', JSON.stringify(listNews));
    localStorage.setItem('idNew', id);
  }
};
listNews.map(item => {
  document.getElementById('new_' + item.id).onclick = event => {
    Click(event, item);
  };
});
//#endregion
