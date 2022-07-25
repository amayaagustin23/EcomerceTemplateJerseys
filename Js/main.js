const listaproductos = [
  {
    descripcion: 'Barcelona Champions 2022',
    precio: 10.999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7bc7f0de/products/NI_DB5896-406/NI_DB5896-406-1.JPG'
  },
  {
    descripcion: "Newell'sOldBoys 2022",
    precio: 9.599,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc73dbb89/products/GV_NOB22010110121/GV_NOB22010110121-1.JPG'
  },
  {
    descripcion: 'River 2022',
    precio: 14.999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw33965a81/products/AD_GU9603/AD_GU9603-1.JPG'
  },
  {
    descripcion: 'Camiseta adidas Afa',
    precio: 14.999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw66da801b/products/AD_HB9215/AD_HB9215-1.JPG'
  },
  {
    descripcion: 'Estudiantes de La Plata 2021',
    precio: 6.599,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwea6dbe9b/products/UA_1360521-104/UA_1360521-104-1.JPG '
  },
  {
    descripcion: 'Liverpool 21/22',
    precio: 11.999,
    imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa36c5d0d/products/NI_DB2568-688/NI_DB2568-688-1.JPG'
  },
];
const getProductTemplate = () =>
  listaproductos.map(
    item =>
      `<div class="articulo">
        <div class="imagen">
        <img src="${item.imagen}" alt="${item.descripcion}" title="${item.descripcion}"/>
        </div>
        <div class="textos">
        <h3>${item.descripcion}</h3>
        <p>${item.precio}</p>
        </div>
        <button class="buttonArticulo">Agregar al carrito</button>
    </div>`
  );

document.getElementById('containerArticulos').innerHTML = [...getProductTemplate()];
console.log(document.getElementsByClassName('articulo'));
