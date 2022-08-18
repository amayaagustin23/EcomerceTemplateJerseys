//#region Variables y LocalStorage
const listCart = JSON.parse(localStorage.getItem('listCart'));
const modal = document.getElementById('myModal');

let totalCompra = listCart?.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
let compraEnvio = totalCompra;
if (totalCompra === undefined) totalCompra = 0;
document.getElementById('subtotal').innerHTML = `$${totalCompra}`;
let cantidad = localStorage.getItem('cantidad');
if (cantidad === null) cantidad = 0;
document.getElementById('cartcountNav').innerHTML = cantidad;
document.getElementById('cartcount').innerHTML = cantidad;
document.getElementById('countProducts').innerHTML = `${cantidad} PRODUCTOS `;
let filtered = [];
let select = document.getElementById('select');
//#endregion

//#region Modal Carrito
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
            <p>Subtotal: $${item.count * item.precio}</p>
          </div>
          </div>
        </div>
        `
  );
  return cart.join('');
};

document.getElementById('cartNavResponsive').onclick = () => {
  Swal.fire({
    position: 'top-end',
    title: 'Carrito ',
    showConfirmButton: true,
    html: getCarrito(listCart),
    width: '25rem',
    padding: '-20rem',
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
};
document.getElementById('cartNav').onclick = () => {
  Swal.fire({
    position: 'top-end',
    title: 'Carrito ',
    showConfirmButton: true,
    html: getCarrito(listCart),
    width: '25rem',
    padding: '-20rem',
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
};
//#endregion

//#region Renderizado
const getCart = list => {
  document.getElementById('containerCart').innerHTML = '';
  const carts = list?.map(
    item =>
      `  <hr class="my-4" />
		<div class="row mb-4 d-flex justify-content-between align-items-center">
		  <div class="col-md-2 col-lg-2 col-xl-2">
			<img src=${item.imagenes[0]} class="img-fluid rounded-3" />
		  </div>
		  <div class="col-md-3 col-lg-3 col-xl-3">
			<h6 class="text-muted">${item.nombre} - ${item.talle}</h6>
			<h6 class="text-black mb-0">Camiseta</h6>
		  </div>
		  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

			<input id="count_${item.id}_${item.talle}" min=0 name="quantity" value=${item.count} type="number" class="form-control form-control-sm" />

	
		  </div>
		  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
			<h6 class="mb-0">$${item.precio}</h6>
		  </div>
		  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
			<a href="#!" class="text-muted"><i id="remove_${item.id}_${item.talle}" class="fas fa-times"></i></a>
		  </div>
		</div>`
  );
  const cartHTML = document.getElementById('containerCart');
  const cartData = carts;
  cartData?.forEach(element => {
    cartHTML.innerHTML += element;
  });
};
getCart(listCart);
//#endregion

//#region Funciones
select.addEventListener('change', function () {
  let selectedOption = this.options[select.selectedIndex];
  totalCompra = compraEnvio + parseInt(selectedOption.value);
  document.getElementById('subtotal').innerHTML = `$${totalCompra}`;
});

const removeProductToCart = item => {
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
      const idView = document.getElementById('remove_' + item.id + '_' + item.talle).id.split('_');
      const id = parseInt(idView[1]);
      const talle = idView[2];
      filtered = listCart.filter(item => item.id !== id || item.talle !== talle);
      localStorage.setItem('listCart', JSON.stringify(filtered));
      localStorage.setItem('cantidad', filtered.length);
      document.getElementById('cartcountNav').innerHTML = filtered.length;
      document.getElementById('cartcount').innerHTML = filtered.length;
      document.getElementById('countProducts').innerHTML = filtered.length;
      let totalCompraNew = filtered.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
      document.getElementById('subtotal').innerHTML = `$${totalCompraNew}`;
      window.location.href = './shoppingCart.html';
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    }
  });
};

const changeCount = item => {
  const dataInput = document.getElementById('count_' + item.id + '_' + item.talle).id.split('_');
  const id = dataInput[1];
  const talle = dataInput[2];
  if (item => item.id === id && item.talle === talle) {
    const newCount = parseInt(document.getElementById('count_' + item.id + '_' + item.talle).value);
    item.count = newCount;
    totalCompra = listCart.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
    compraEnvio = totalCompra;
    document.getElementById('subtotal').innerHTML = `$${totalCompra}`;
    filtered = listCart.filter(item => item.id !== id && item.talle !== talle);
    filtered.push(item);
    localStorage.setItem('listCart', JSON.stringify(filtered));
  }
  filtered = listCart.filter(item => item.id !== id && item.talle !== talle);
};

listCart?.map(item => {
  document.getElementById('count_' + item.id + '_' + item.talle).onchange = () => {
    changeCount(item);
  };
  document.getElementById('remove_' + item.id + '_' + item.talle).onclick = () => {
    removeProductToCart(item);
  };
});
//#endregion
