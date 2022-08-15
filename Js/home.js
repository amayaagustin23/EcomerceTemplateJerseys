//#region Listas
const listNews = [
  {
    id: 1,
    tituloNew: 'Tercera Camiseta adidas de Arsenal 2022-23',
    tituloCarrucel: 'Tercera Arsenal 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/arsenal-2022-23-adidas-third-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/arsenal-2022-23-adidas-third-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/arsenal-2022-23-adidas-third-kit-3.jpg',
    ],
    parrafos: [
      'Esta mañana fue presentada la tercera camiseta de Arsenal FC para la temporada 2022/23 del fútbol inglés y la UEFA Europa League. Los Gunners completan su nueva colección adidas, de la que ya habíamos visto los modelos titular y suplente correspondientes.',
      'La camiseta será rosa, color que nunca se ha usado en la historia del equipo, agregando un patrón tonal de armiños heráldicos similar al que tuvo el escudo institucional entre finales de los años 40 e inicios del siglo actual. El cuello es tipo V cruzado, pintado de azul marino con un remate celeste. Las tres tiras se posicionan sobre los hombros, con el mismo color base del cuello.',
      'El escudo se aplica en versión monocromática, haciendo juego con los logos de adidas y patrocinadores sobre el frente y manga izquierda. El patrón de armiños se repite en las mangas y espalda de la prenda.',
    ],
    categorias: ['ESTRENOS', 'PREMIER LEAGUE', 'DESTACADOS'],
  },
  {
    id: 2,
    tituloNew: 'Camiseta PUMA de Borussia Dortmund Copas 2022/23',
    tituloCarrucel: 'Borussia Dortmund 2022/23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/borussia-dortmund-2022-23-puma-cup-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/borussia-dortmund-2022-23-puma-cup-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/borussia-dortmund-2022-23-puma-cup-kit-5.jpg',
    ],
    parrafos: [
      'Borussia Dortmund presentó su nueva camiseta para copas de la temporada 2022/23, que verá acción en competencias como la UEFA Champions League y la DFB Pokal. Esta se suma al modelo titular para liga y la camiseta suplente que verá acción en todas las competencias.',
      'La camiseta toma inspiración en el modelo de 1989, con el que ganaron la Copa de Alemania ante Werder Bremen con Nobby Dickel como gran héroe. La base amarilla es acompañada por figuras en negro y blanco sobre los hombros, emulando el diseño de aquel entonces. El cuello redondo se pinta en negro sólido, mientras que las mangas quedan completamente blancas.',
      'El escudo se presenta en sus colores oficiales, acompañado por los logos de PUMA y patrocinadores. El lema “Borussia Verbindet” (Borussia Se Conecta) toma posición en lo alto de la espalda, como vimos en las otras dos camisetas.',
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
    tituloNew: 'Tercera Camiseta PUMA de Valencia CF 2022-23',
    tituloCarrucel: 'Valencia CF 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-puma-valencia-cf-2022-23-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-puma-valencia-cf-2022-23-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-puma-valencia-cf-2022-23-2.jpg',
    ],
    parrafos: [
      'Entre los estrenos de estos días estuvo el de Valencia CF y su tercera equipación para la temporada 2022/23 del fútbol español. Esta se suma a los modelos titular y suplente que ya habían presentado junto a PUMA.',
      'La camiseta ve el esperado regreso de la Senyera, que no se había visto desde que PUMA tomo el rol de sponsor técnico de los Murciélagos en 2019. Los bastones amarillos y rojos se posan sobre el frente y espalda baja de la prenda, dejando la zona dorsal en amarillo sólido. Como es habitual en Valencia, el diseño se completa con vivos azules, que esta vez se toman los hombros y mangas.',
      'El escudo se aplica en sus colores oficiales, acompañado por los logos de PUMA y patrocinadores, destacando Cazoo dentro de una caja al frente. El sello que conmemora los 100 años del Estadio Mestalla aparece como jock tag sobre la nuca. Shorts y medias azules completan la nueva tercera equipación de Valencia CF para la próxima temporada.',
    ],
    categorias: ['ESTRENOS', 'LA LIGA', 'DESTACADOS'],
  },
  {
    id: 5,
    tituloNew: 'Camiseta Suplente PUMA de AC Milan 2022-23',
    tituloCarrucel: 'AC Milan 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/ac-milan-2022-23-puma-away-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/ac-milan-2022-23-puma-away-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/ac-milan-2022-23-puma-away-kit-4.jpg',
    ],
    parrafos: [
      'AC Milan reveló hace algunos días su camiseta away para la temporada 2022/23 del fútbol italiano y la UEFA Champions League. Los campeones de la Serie A ya había presentado el modelo titular correspondiente hace algunas semanas junto a PUMA.',
      'La camiseta vuelve al tono blanco después de un año en beige, con toques rojinegros en el cuello, puños y franjas horizontales sobre el panel frontal que se cortan a los costados. Mangas y espalda, por su parte, quedan dominadas por el blanco.',
      'El escudo se aplica en sus colores oficiales, acompañado por los logos de PUMA y patrocinadores en rojo. El lema “Sempre Milan” se aplica en dos colores sobre un sello negro en la nuca de la prenda, y el Scudetto se ubica en medio del pecho.',
    ],
    categorias: ['ESTRENOS', 'SERIE A', 'DESTACADOS'],
  },
  {
    id: 6,
    tituloNew: 'Camiseta Suplente adidas de Juventus 2022-23',
    tituloCarrucel: 'Juventus 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/juventus-2022-23-adidas-away-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/juventus-2022-23-adidas-away-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/juventus-2022-23-adidas-away-kit-3.jpg',
    ],
    parrafos: [
      'Juventus FC presentó hoy su nueva camiseta suplente para la temporada 2022/23 del fútbol italiano y la UEFA Champions League. La Vecchia Signora ya había revelado el modelo titular correspondiente junto a adidas en mayo pasado.',
      'La camiseta alternativa de la Juve pasa a ser negra, agregando un patrón enérgico que el club ha descrito como una aplicación sutil de la estrella, símbolo asociado con Juventus. El mencionado gráfico se aplica sobre toda la superficie en forma tonal, incluyendo la zona dorsal. El cuello va con corte V cruzado, pintado de negro sólido con un borde blanco, haciendo juego con el remate de los puños. Las tres tiras de la marca alemana hacen presencia sobre los hombros en blanco.',
      'El escudo del club aparece en blanco, acompañado por los logos de adidas y Jeep, este con su nueva aplicación con rayos adentro que ya vimos en la camiseta titular.',
    ],
    categorias: ['ESTRENOS', 'SERIE A', 'DESTACADOS'],
  },
  {
    id: 7,
    tituloNew: 'Tercera Camiseta Kappa de Venezia FC 2022-23',
    tituloCarrucel: 'Tercera Venezia FC 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/venezia-2022-23-kappa-third-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/venezia-2022-23-kappa-third-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/venezia-2022-23-kappa-third-kit-3.jpg',
    ],
    parrafos: [
      'Venezia FC se suma a los lanzamientos de hoy con la presentación de su tercera camiseta para la temporada 2022/23 del ascenso italiano. Los Arancioneroverdi y Kappa suman esta camiseta a la colección en la que ya habían revelado los modelos titular y suplente correspondientes.',
      'Siguiendo la línea de las otras dos, esta camiseta presenta un look sencillo en el que destaca el uso de dorado, color que ha tenido bastante presencia en los kits de Venezia, además de tener prominencia en el arte y arquitectura de la ciudad. El cuello es tipo polo abotonable con solapas negras que hacen juego con los puños de la prenda. El cierre cuenta con vivos verdes y naranjas, con un botón negro adelante.',
      'El renovado escudo del club se aplica en negro, acompañado por los logos de Kappa (ubicados en pecho y hombros) y el patrocinio de la ciudad, aplicado en tamaño reducido, como vimos en el modelo titular.',
    ],
    categorias: ['ESTRENOS', 'SERIE A', 'DESTACADOS'],
  },
  {
    id: 8,
    tituloNew: 'Camiseta Suplente PUMA de Manchester City 2022-23',
    tituloCarrucel: 'Suplente Manchester City 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/manchester-city-2022-23-puma-away-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/manchester-city-2022-23-puma-away-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/manchester-city-2022-23-puma-away-kit-3.jpg',
    ],
    parrafos: [
      'Manchester City se suma a los estrenos de hoy con el lanzamiento oficial de su camiseta away para la temporada 2022/23 del fútbol inglés y UEFA Champions League. Los campeones de la Premier League ya habían revelado el modelo titular correspondiente junto a PUMA en mayo pasado.',
      'La camiseta ve el regreso de los bastones rojinegros, look que el club ha usado en varias ocasiones y que ha tenido presencia en varios títulos desde la FA Cup de 1969. Para darle un giro de tuerca, esta vez han decidido aplicar las líneas de forma diagonal sobre el frente y espalda baja. El cuello V, mangas y espalda quedan en negro sólido.',
      'El escudo se aplica en negro y amarillo, acompañado por los logos de PUMA y patrocinadores. El barco del escudo hace presencia en lo alto de la espalda junto a la palabra “City”.',
    ],
    categorias: ['ESTRENOS', 'PREMIER LEAGUE', 'DESTACADOS'],
  },
  {
    id: 9,
    tituloNew: 'Camiseta Suplente adidas de Manchester United 2022-23',
    tituloCarrucel: 'Manchester United 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/manchester-united-2022-23-adidas-away-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/manchester-united-2022-23-adidas-away-kit-3.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/manchester-united-2022-23-adidas-away-kit-1.jpg',
    ],
    parrafos: [
      'Manchester United presentó ayer su nueva camiseta away para la temporada 2022/23 del fútbol inglés y la UEFA Europa league. Los Red Devils y adidas ya habían presentado el modelo titular correspondiente la semana pasada, y queda pendiente por verse la tercera camiseta en los próximos meses.',
      'La camiseta es dominada por el blanco, como muchos modelos alternativos clásicos del United. Esta vez el cuello y puños se pintan de negro y agregan un patrón de diamantes que alternan entre rojo y blanco. Un leve patrón de hélice está grabado sobre la tela, mientras que las tres tiras alternan entre rojo y negro sobre los hombros.',
      'El escudo se presenta con el mismo envolvente noventero visto en la titular, ahora con fondo negro; acompañan los logos de adidas y patrocinadores.',
    ],
    categorias: ['ESTRENOS', 'PREMIER LEAGUE', 'DESTACADOS'],
  },
  {
    id: 10,
    tituloNew: 'Camiseta Nike de Inter Milan 2022-23',
    tituloCarrucel: 'Inter Milan 2022-23',
    imagenes: [
      'https://todosobrecamisetas.com/wp-content/uploads/inter-milan-2022-23-nike-home-kit-h.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/inter-milan-2022-23-nike-home-kit-1.jpg',
      'https://todosobrecamisetas.com/wp-content/uploads/inter-milan-2022-23-nike-home-kit-2.jpg',
    ],
    parrafos: [
      'Esta mañana fue presentada oficialmente la nueva camiseta titular de Inter Milan para la temporada 2022/23 del fútbol italiano y la UEFA Champions League. Los Nerazzurri completan 24 años con Nike como su sponsor técnico, siendo uno de los vínculos más largos en la actualidad del fútbol.',
      'Luego de un par de temporadas con experimentos, la camiseta de Inter vuelve a lo tradicional, implementando bastones azules y negros sobre uno de los templates actuales de la marca norteamericana. Las rayas aparecen sobre el frente, mangas y espalda; el cuello cuenta con un panel negro al frente y otro azul sobre el posterior, mientras que los puños se pintan de negro con finos bordes azules.',
      'El escudo actual del club, que debutó el año pasado, se aplica en azul, negro y blanco, acompañado por la estrella que representa sus títulos de liga. La Coccarda se posa sobre el logo de Nike, certificándolos como vigentes campeones de la Coppa Italia. Un sello que celebra la unión de Inter con la ciudad de Milán aparece dentro del cuello.',
    ],
    categorias: ['ESTRENOS', 'SERIE A', 'DESTACADOS'],
  },
];
const listaproductos = [
  {
    id: 1,
    nombre: 'Barcelona 2022/23',
    precio: 12999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6bdad884/products/NI_DM1840-452/NI_DM1840-452-1.JPG',
    descripcion:
      'La Camiseta Nike Fc Barcelona 2022/23 Stadium Home es una representación ideal de tu pasión por uno de los equipos más grandes de todos. Combina detalles de diseño basado en la camiseta que usan los profesionales en el campo dándote un look insuperable. Además te brinda comodidad absoluta gracias a su tecnología Dri-FIT para la absorción de sudor. Algo muy importante al momento de elegir esta prenda, es que está hecha en al menos un 50% de fibras recicladas. Porque sabemos que no solo pensás en elegir tu vestimenta, sino que querés hacerlo bien.',
    genero: 'Hombre',
    material: 'Poliéster',
    liga: 'España',
    cuello: 'Redondo',
    calce: 'Regular',
    marca: 'Nike',
    garantia: 'Contra defecto de fabricación',
    tallesDisponibles: 'M,XL',
  },
  {
    id: 3,
    nombre: 'River Plate 2022',
    precio: 14999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw33965a81/products/AD_GU9603/AD_GU9603-1.JPG',
    descripcion:
      'La camiseta adidas River Plate 120 Años es más que un homenaje al Millonario y su vida de grandeza. Su diseño posee la banda roja más ancha que nunca, como una alfombra de gala para las ocasiones más especiales que existen. La tecnología AEROREADY te brinda una sensación de comodidad estés donde estés, mientras que la confección con Primegreen, una serie de materiales reciclados de alta performance, le dan el toque justo. Posee el escudo y una leyenda en la zona de la nuca para que la vistas con orgullo todos tus días.',
    genero: 'Hombre',
    material: 'Poliéster',
    liga: 'Argentina',
    cuello: 'En V',
    calce: 'Regular',
    marca: 'Adidas',
    garantia: 'Contra defecto de fabricación',
    tallesDisponibles: 'M,L',
  },
  {
    id: 4,
    nombre: 'Camiseta adidas Afa',
    precio: 14999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw66da801b/products/AD_HB9215/AD_HB9215-1.JPG',
    descripcion:
      'Porque este año no podés dejar de tener la Camiseta adidas Afa, para alentar llevar con vos los colores de tu selección. Está diseñada para que portes tu pasión con toda la comodidad que esperás ya que su corte relajado te permite moverte fácilmente donde vayas. Además cuenta con tecnología AEROREADY para absorber la transpiración y se combina con sus paneles de malla laterales para mantenerte seco y fresco en todo momento. El detalle de la bandera nacional debajo del cuello en la parte de atrás, le da el toque final. Unite a la hinchada con esta increible prenda.',
    genero: 'Hombre',
    material: 'Poliéster',
    liga: 'Argentina',
    cuello: 'Redondo',
    calce: 'Regular',
    marca: 'Adidas',
    garantia: 'Contra defecto de fabricación',
    tallesDisponibles: 'S,XL',
  },
  {
    id: 5,
    nombre: 'Camiseta C.A.T. 2022 ',
    precio: 11949,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9e95136d/products/UB_U31TU01021-7267/UB_U31TU01021-7267-1.JPG',
    descripcion:
      'La Camiseta Umbro C.A.T 2022 Titular es una prenda ideal para los que eligen llevar el amor por el celeste y blanco a sus partidos más esforzados o al asado con amigos. El cuello escote en V le da un aire futbolístico moderno ideal para lucir en la cancha. Su escudo original festoneado y el logo Umbro bordado imprimen el toque final a tu pasión.',
    genero: 'Hombre',
    material: 'Poliéster',
    liga: 'Argentina',
    cuello: 'En V',
    calce: 'Regular',
    marca: 'Umbro',
    garantia: 'Contra defecto de fabricación',
    tallesDisponibles: 'L,XL',
  },
];
//#endregion

//#region Funciones de renderizado
const getProductTemplate = list => {
  const products = list.map(
    item =>
      `<div class="article">
      <img src=${item.imagen} alt="">
      <div class="textArticle">
        <h3>${item.nombre}</h3>
        <p>$${item.precio}</p>
        <div class="overlay">
          <div class="text" ><a id="view_${item.id}" >Comprar</a></div>
        </div>
      </div>
    </div>`
  );
  const elementHTML = document.getElementById('containerBestSeller');
  const data = products;
  data.forEach(element => {
    elementHTML.innerHTML += element;
  });
};

const getNewsTemplate = list => {
  const news = list.map(
    item =>
      `<div class="containerItem">
        <img src=${item.imagenes[0]} alt="Avatar" class="image">
        <div class="overlay">
          <a class="text" id="new_${item.id}"  href="./pages/newView.html" >${item.tituloCarrucel}</a>
        </div>
      </div>`
  );
  const elementHTML = document.getElementById('listarImagenes');
  const data = news;
  data.forEach(element => {
    elementHTML.innerHTML += element;
  });
};

getNewsTemplate(listNews);
getProductTemplate(listaproductos);
//#endregion

//#region Funciones de Redirect
const redirectToProduct = (event, item) => {
  console.log(event.srcElement.id);
  const idView = event.srcElement.id.split('_');
  const id = idView[1];
  console.log(id);
  if (id === item.id);
  {
    localStorage.setItem('idProducto', id);
    console.log(window.location.href);
    if (window.location.href === 'http://127.0.0.1:5501/index.html') {
      window.location.href = 'http://127.0.0.1:5501/pages/product.html';
    }
    if (window.location.href === 'https://amayaagustin23.github.io/EcomerceTemplateJerseys/index.html') {
      window.location.href = 'https://amayaagustin23.github.io/EcomerceTemplateJerseys/pages/product.html';
    }
  }
};

const redirectToNews = (event, item) => {
  const idView = event.srcElement.id.split('_');
  const id = idView[1];
  console.log(id);
  if (id === item.id);
  {
    localStorage.setItem('news', JSON.stringify(listNews));
    localStorage.setItem('idNew', id);
  }
};

listaproductos.map(item => {
  document.getElementById('view_' + item.id).onclick = event => {
    redirectToProduct(event, item);
  };
});

listNews.map(item => {
  document.getElementById('new_' + item.id).onclick = event => {
    redirectToNews(event, item);
  };
});
//#endregion