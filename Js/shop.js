const carrito = [];
let cantidad = (localStorage.getItem('cantidad'));
console.log(cantidad)
if(cantidad===null) cantidad=0
document.getElementById('cartcountNav').innerHTML = cantidad;
document.getElementById('cartcount').innerHTML = cantidad;

const listaproductos = [
  {
    id: 1,
    nombre: 'Barcelona 2022/23',
    item:"AD_GU9601",
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
    tallesDisponibles: ['M', 'XL'],
    tallesFaltante: ['S', 'L'],
    etiqueta: 'OFERTA',
  },
  {
    id: 2,
    nombre: "Newell's Old Boys 2022",
    item:"AD_GU9602",
    precio: 9599,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc73dbb89/products/GV_NOB22010110121/GV_NOB22010110121-1.JPG',
    descripcion:
    "Ya llevas la pasión por Newell's en las venas, ahora llevala puesta con la Camiseta Givova Newell's Old Boys Titular, confeccionada con cuello en V y mangas cortas para mayor frescura y con el escudo del club que más alegrías te dio sobre el pecho.",
    genero: 'Hombre',
    material: 'Poliéster',
    liga: 'Argentina',
    cuello: 'En V',
    calce: 'Regular',
    marca: 'Givova',
    garantia: 'Contra defecto de fabricación',
    tallesDisponibles: ['S', 'L', 'XL'],
    tallesFaltante: ['M'],
    etiqueta: '',
  },
  {
    id: 3,
    nombre: 'River Plate 2022',
    item:"AD_GU9603",
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
    tallesDisponibles: ['M', 'L'],
    tallesFaltante: ['S', 'XL'],
    etiqueta: 'OFERTA',
  },
  {
    id: 4,
    nombre: 'Camiseta adidas Afa',
    item:"AD_GU9604",
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
    tallesDisponibles: ['S', 'XL'],
    tallesFaltante: ['M', 'L'],
    etiqueta: 'NUEVO',
  },
  {
    id: 5,
    nombre: 'Camiseta C.A.T. 2022 ',
    item:"AD_GU9605",
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
    tallesDisponibles: ['L', 'XL'],
    tallesFaltante: ['S', 'M'],
    etiqueta: '',
  },
  {
    id: 6,
    nombre: 'Liverpool Fc 2022/23',
    item:"AD_GU9606",
    precio: 12999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw969a2eb2/products/NI_DJ7862-609/NI_DJ7862-609-1.JPG',
    descripcion:
    'La Camiseta Nike Liverpool FC 2022/23 Stadium Home es una representación ideal de tu pasión por uno de los equipos más grandes de todos. Combina detalles de diseño tipo réplica basado en la camiseta que usan los profesionales en el campo dándote un look insuperable. Además te brinda comodidad absoluta gracias a su tecnología Dri-FIT para la absorción de sudor. Algo muy importante al momento de elegir esta prenda, es que está hecha en un 100% de fibras recicladas. Porque sabemos que no solo pensás en elegir tu vestimenta, sino que querés hacerlo bien.',
    genero: 'Mujer',
    material: 'Poliéster',
    liga: 'Inglaterra',
    cuello: 'Redondo',
    calce: 'Regular',
    marca: 'Nike',
    garantia: 'Contra defecto de fabricación',
    tallesDisponibles: ['S', 'L', 'XL'],
    tallesFaltante: ['M'],
    etiqueta: 'OFERTA',
  },
];

const getProductTemplate = list => {
  const products = list.map(
    item =>
      `<div class="articulo" id=${item.nombre}>
    <a id="view_${item.id}" href="../pages/product.html">
    <div class="imagen">
    <img src="${item.imagen}" alt="${item.nombre}" title="${item.nombre}"/>
    </div>
    <div class="textos">
    <h3 class="title">${item.nombre}</h3>
    <div class='precioEtiqueta'>
    <p>$${item.precio}</p>
    <p class='etiqueta'>${item.etiqueta}</p>
    </div>
    </div>
    </a>
    </div>`
  );
  const elementHTML = document.getElementById('containerArticulos');
  const data = products;
  data.forEach(element => {
    elementHTML.innerHTML += element;
  });
};

getProductTemplate(listaproductos);

let etiquetas = document.getElementsByClassName('etiqueta');
for (let index = 0; index < etiquetas.length; index++) {
  if (etiquetas[index].innerHTML === 'OFERTA') etiquetas[index].style.backgroundColor = 'green';
  if (etiquetas[index].innerHTML === 'NUEVO') etiquetas[index].style.backgroundColor = 'orange';
}

listaproductos.map(item => {
  document.getElementById('view_' + item.id).onclick = () => {
    const idView = document.getElementById('view_' + item.id).id.split('_');
    const id = idView[1];
    if (id === item.id);
    {
      localStorage.setItem('productos', JSON.stringify(listaproductos));
      localStorage.setItem('idProducto', id);
    }
  };
});

let productosFiltrados = [];
let marcasFiltradas = [];
let tallesFIltrados = [];
let generoFiltrados = [];

const marcas = document.getElementsByClassName('form-check-marcas');
for (let i = 0; i < marcas.length; i++) {
  marcas[i].addEventListener('click', function (event) {
    if (event.srcElement.checked) {
      marcasFiltradas.push(event.target.value);
    } else {
      let aux = marcasFiltradas.filter(item => item !== event.target.value);
      marcasFiltradas = aux;
    }
    aplicarFiltros();
  });
}

const talles = document.getElementsByClassName('form-check-talles');
for (let i = 0; i < talles.length; i++) {
  talles[i].addEventListener('click', function (event) {
    if (event.srcElement.checked) {
      tallesFIltrados.push(event.target.value);
    } else {
      let aux = tallesFIltrados.filter(item => item !== event.target.value);
      tallesFIltrados = aux;
    }
    aplicarFiltros();
  });
}

const generos = document.getElementsByClassName('form-check-genero');
for (let i = 0; i < generos.length; i++) {
  generos[i].addEventListener('click', function (event) {
    if (event.srcElement.checked) {
      generoFiltrados.push(event.target.value);
    } else {
      let aux = generoFiltrados.filter(item => item !== event.target.value);
      generoFiltrados = aux;
    }
    aplicarFiltros();
  });
}
const aplicarFiltros = () => {
  let productosFiltrados = [];
  listaproductos.forEach(item => {
    console.log(tallesFIltrados);
    let bool1 = marcasFiltradas.length === 0 ? true : marcasFiltradas.includes(item.marca);
    let bool2 = generoFiltrados.length === 0 ? true : generoFiltrados.includes(item.genero);
    let bool3 = false;
    if (tallesFIltrados.length === 0) {
      bool3 = true;
    } else {
      for (let index = 0; index < item.tallesDisponibles.length; index++) {
        if (tallesFIltrados.includes(item.tallesDisponibles[index])) {
          bool3 = tallesFIltrados.includes(item.tallesDisponibles[index]);
        }
      }
    }
    if (bool1 && bool2 && bool3) {
      productosFiltrados.push(item);
    }
  });
  document.getElementById('containerArticulos').innerHTML = '';
  getProductTemplate(productosFiltrados);
};
