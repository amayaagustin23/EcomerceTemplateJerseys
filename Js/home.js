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
  const getProductTemplate=(list)=> {
    const products=list.map(
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
      
    }
    
    getProductTemplate(listaproductos)

    listaproductos.map(item => {
        document.getElementById('view_' + item.id).onclick = function (event) {
          const idView = event.srcElement.id.split('_');
          const id = idView[1];
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
            // window.location.href = 'product.html';
          }
        };
      });
      