//#region LocalStorage
let cantidad = localStorage.getItem('cantidad');
if (cantidad === null) cantidad = 0;
document.getElementById('cartcountNav').innerHTML = cantidad;
document.getElementById('cartcount').innerHTML = cantidad;
let listCart = JSON.parse(localStorage.getItem('listCart'));
//#endregion

//#region Variables
const carrito = [];
const listaproductos = [
  {
    id: 1,
    nombre: 'Barcelona 2022/23',
    item: 'AD_GU9601',
    precio: 12999,
    imagenes: [
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6bdad884/products/NI_DM1840-452/NI_DM1840-452-1.JPG',
      'https://essential.vtexassets.com/arquivos/ids/593398-1200-auto?v=637939395993430000&width=1200&height=auto&aspect=true',
    ],
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
    item: 'AD_GU9602',
    precio: 9599,
    imagenes: [
      'https://newsport.vteximg.com.br/arquivos/ids/14058869-1000-1000/22010110121-A.jpg?v=637945245819900000',
      'https://newsport.vteximg.com.br/arquivos/ids/14058870-1000-1000/22010110121-B.jpg?v=637945245822270000',
    ],
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
    item: 'AD_GU9603',
    precio: 14999,
    imagenes: [
      'https://pacogarcia.vtexassets.com/arquivos/ids/170630-1200-auto?v=637578022186100000&width=1200&height=auto&aspect=true',
      'https://pacogarcia.vtexassets.com/arquivos/ids/170631-1200-auto?v=637578022274630000&width=1200&height=auto&aspect=true',
    ],
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
    item: 'AD_GU9604',
    precio: 14999,
    imagenes: [
      'https://newsport.vteximg.com.br/arquivos/ids/13956745-1000-1000/HB9215-a.jpg?v=637928170158630000',
      'https://newsport.vteximg.com.br/arquivos/ids/13956747-1000-1000/HB9215-c.jpg?v=637928170163000000',
    ],
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
    item: 'AD_GU9605',
    precio: 11949,
    imagenes: [
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9e95136d/products/UB_U31TU01021-7267/UB_U31TU01021-7267-1.JPG',
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwdc6f837c/products/UB_U31TU01021-7267/UB_U31TU01021-7267-2.JPG',
    ],
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
    item: 'AD_GU9606',
    precio: 12999,
    imagenes: [
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw969a2eb2/products/NI_DJ7862-609/NI_DJ7862-609-1.JPG',
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4a5a80dd/products/NI_DM1843-609/NI_DM1843-609-2.JPG',
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4a5a80dd/products/NI_DM1843-609/NI_DM1843-609-3.JPG',
    ],
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
let productosFiltrados = [];
let marcasFiltradas = [];
let tallesFIltrados = [];
let generoFiltrados = [];
let searchFiltrados = [];
const marcas = document.getElementsByClassName('form-check-marcas');
const talles = document.getElementsByClassName('form-check-talles');
const generos = document.getElementsByClassName('form-check-genero');
const modal = document.getElementById('myModal');
//#endregion

//#region Funciones de renderizados

if (screen.width < 1220) {
  document.getElementById('collapseTwo').classList.add('collapse');
  document.getElementById('panelsStayOpen-collapseOne').classList.add('collapse');
  document.getElementById('panelsStayOpen-collapseTwo').classList.add('collapse');
  document.getElementById('panelsStayOpen-collapseThree').classList.add('collapse');
}
const LabelColor = () => {
  let etiquetas = document.getElementsByClassName('etiqueta');
  for (let index = 0; index < etiquetas.length; index++) {
    if (etiquetas[index].innerHTML === 'OFERTA') etiquetas[index].style.backgroundColor = 'green';
    if (etiquetas[index].innerHTML === 'NUEVO') etiquetas[index].style.backgroundColor = 'orange';
  }
};

const getProductTemplate = list => {
  const products = list.map(
    item =>
      `<div class="articulo" id=${item.nombre}>
    <a id="view_${item.id}" href="../pages/product.html">
    <div class="imagen">
    <img src="${item.imagenes[0]}" alt="${item.nombre}" title="${item.nombre}"/>
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
  LabelColor();
};

getProductTemplate(listaproductos);
//#endregion

//#region Funciones de Redirect
const redirectToProduct = item => {
  document.getElementById('view_' + item.id).onclick = () => {
    const idView = document.getElementById('view_' + item.id).id.split('_');
    const id = idView[1];
    if (id === item.id);
    {
      localStorage.setItem('productos', JSON.stringify(listaproductos));
      localStorage.setItem('idProducto', id);
    }
  };
};

listaproductos.map(item => {
  redirectToProduct(item);
});
//#endregion

//#region Filtros
const FiltrosSearch = () => {
  const search = document.getElementById('search').value.toLowerCase();
  searchFiltrados = listaproductos.filter(item => item.nombre.toLowerCase().includes(search) || item.descripcion.toLowerCase().includes(search));
  aplicarFiltros();
};
document.getElementById('buttonSearch').onclick = () => {
  FiltrosSearch();
};

const filterMarcas = event => {
  if (event.srcElement.checked) {
    marcasFiltradas.push(event.target.value);
  } else {
    let aux = marcasFiltradas.filter(item => item !== event.target.value);
    marcasFiltradas = aux;
  }
};

const filterTalles = event => {
  if (event.srcElement.checked) {
    tallesFIltrados.push(event.target.value);
  } else {
    let aux = tallesFIltrados.filter(item => item !== event.target.value);
    tallesFIltrados = aux;
  }
};

const filterGeneros = event => {
  if (event.srcElement.checked) {
    generoFiltrados.push(event.target.value);
  } else {
    let aux = generoFiltrados.filter(item => item !== event.target.value);
    generoFiltrados = aux;
  }
};

for (let i = 0; i < marcas.length; i++) {
  marcas[i].addEventListener('click', function (event) {
    filterMarcas(event);
    aplicarFiltros();
  });
}

for (let i = 0; i < talles.length; i++) {
  talles[i].addEventListener('click', function (event) {
    filterTalles(event);
    aplicarFiltros();
  });
}

for (let i = 0; i < generos.length; i++) {
  generos[i].addEventListener('click', function (event) {
    filterGeneros(event);
    aplicarFiltros();
  });
}

const aplicarFiltros = () => {
  let productosFiltrados = [];
  listaproductos.forEach(item => {
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
    let bool4 = searchFiltrados.length === 0 ? true : searchFiltrados.includes(item);
    if (bool1 && bool2 && bool3 && bool4) {
      productosFiltrados.push(item);
    }
  });
  document.getElementById('containerArticulos').innerHTML = '';
  if (productosFiltrados.length === 0) {
    document.getElementById('containerArticulos').classList.remove('containerArticulos');
    document.getElementById('containerArticulos').classList.add('containerNoProduct');
    document.getElementById('containerArticulos').innerHTML = `<h2 class="noProduct">NO SE ENCONTRARON PRODUCTOS</h2>`;
  } else {
    document.getElementById('containerArticulos').classList.add('containerArticulos');
    getProductTemplate(productosFiltrados);
  }
};
//#endregion

//#region Modal Carrito
const removeProductToCart = item => {
  console.log(item)
  Swal.fire({
    title: '¿Esta seguro que quiere eliminar?',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#FF8303',
    cancelButtonColor: '#1B1A17',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si',
  }).then(result => {
    if (result.isConfirmed) {
      const id = item.id;
      const talle = item.talle;
      filtered = listCart.filter(item => item.id !== id || item.talle !== talle);
      console.log(filtered)
      localStorage.setItem('listCart', JSON.stringify(filtered));
      localStorage.setItem('cantidad', filtered.length);
      document.getElementById('cartcountNav').innerHTML = filtered.length;
      document.getElementById('cartcount').innerHTML = filtered.length;
    }
  });
};
let total = listCart?.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
const parrafototal = `<h4>Total: $${total}</h4>`;
const getCarrito = list => {
  const cart = list.map(
    item => `
        <div class="bodyCart">
          <h4>${item.nombre}</h4>
          <div class="containerModal">
            <img class="imgCart" src=${item.imagenes[0]}>
            <div class="textContainer">
              <p>Talle: ${item.talle}</p>
              <p>Cantidad: ${item.count}</p>
              <p>Total: $${item.count * item.precio}</p>
            </div>
            <button id="remove_${item.id}_${item.talle}" class="deleteCart"><img src="../image/icon/delete.png"></button>
          </div>
        </div>
        `
  );
  return cart.join('');
};
document.getElementById('cartNavResponsive').onclick = () => {
  listCart = JSON.parse(localStorage.getItem('listCart'));
  Swal.fire({
    position: 'top-end',
    title: 'Carrito ',
    showConfirmButton: true,
    html: getCarrito(listCart),
    width: '25rem',
    customClass: 'modalAlert',
    confirmButtonColor: '#FF8303',
    confirmButtonText: 'Ver carrito',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
    footer: parrafototal,
  }).then(result => {
    if (result.isConfirmed) {
      window.location.href = './shoppingCart.html';
    }
  });
  listCart.map(item => {
    document.getElementById(`remove_${item.id}_${item.talle}`).onclick = () => {
      removeProductToCart(item)
    };
  });
};
document.getElementById('cartNav').onclick = () => {
  listCart = JSON.parse(localStorage.getItem('listCart'));
  Swal.fire({
    position: 'top-end',
    title: 'Carrito ',
    showConfirmButton: true,
    html: getCarrito(listCart),
    width: '25rem',
    customClass: 'modalAlert',
    confirmButtonColor: '#FF8303',
    confirmButtonText: 'Ver carrito',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
    footer: parrafototal,
  }).then(result => {
    if (result.isConfirmed) {
      window.location.href = './shoppingCart.html';
    }
  });
  listCart.map(item => {
    document.getElementById(`remove_${item.id}_${item.talle}`).onclick = () => {
      removeProductToCart(item)
    };
  });
};
// #endregion
