//#region Variables y LocalStorage
const listCart = JSON.parse(localStorage.getItem('listCart'));
const modal = document.getElementById('myModal');
let totalCompra = listCart?.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
let compraEnvio = totalCompra;
if (totalCompra === undefined) totalCompra = 0;
document.getElementById('subtotal').innerHTML = `$${new Intl.NumberFormat('de-DE').format(totalCompra)}`;
let cantidad = localStorage.getItem('cantidad');
if (cantidad === null) cantidad = 0;
document.getElementById('cartcountNav').innerHTML = cantidad;
document.getElementById('cartcount').innerHTML = cantidad;
document.getElementById('countProducts').innerHTML = `${cantidad} PRODUCTOS `;
let filtered = [];
let select = document.getElementById('select');
let total;
let parrafototal;
//#endregion

//#region Modal Carrito
const removeProductToCartModal = item => {
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
      document.getElementById('countProducts').innerHTML = filtered.length;
      let totalCompraNew = filtered.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
      document.getElementById('subtotal').innerHTML = `$${totalCompraNew}`;
      getCart(filtered)
    }
  });
};

const getCarrito = list => {
  if(list!==null){
    const cart = list.map(
      item => `
        <div class="bodyCart">
        <h4>${item.nombre}</h4>
        <div class="containerModal">
        <img class="imgCart" src=${item.imagenes[0]}>
        <div class="textContainer">
        <p>Talle: ${item.talle}</p>
        <p>Cantidad: ${item.count}</p>
        <p>Total: $${new Intl.NumberFormat('de-DE').format(item.count * item.precio)}</p>
        </div>
        <button id="remove_${item.id}_${item.talle}" class="deleteCart"><img src="../image/icon/delete.png"></button>
        </div>
        </div>
        `
        );
        return cart.join('');
      }
      else{
        return "<h3>No tiene ningun producto en el carrito</h3>"
      }
};
document.getElementById('cartNavResponsive').onclick = () => {
  const listCart = JSON.parse(localStorage.getItem("listCart"));
  total = listCart?.reduce(
    (acum, elemento) => (acum += elemento.precio * elemento.count),
    0
  );
  if (listCart === null) total = 0;
  parrafototal = `<h4>Total: $${new Intl.NumberFormat("de-DE").format(
    total
  )}</h4>`;
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
  listCart?.map(item => {
    document.getElementById(`removeModal_${item.id}_${item.talle}`).onclick = () => {
      removeProductToCartModal(item)
    };
  });
};
document.getElementById('cartNav').onclick = () => {
  const listCart = JSON.parse(localStorage.getItem("listCart"));
  total = listCart?.reduce(
    (acum, elemento) => (acum += elemento.precio * elemento.count),
    0
  );
  if (listCart === null) total = 0;
  parrafototal = `<h4>Total: $${new Intl.NumberFormat("de-DE").format(
    total
  )}</h4>`;
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
  listCart?.map(item => {
    document.getElementById(`removeModal_${item.id}_${item.talle}`).onclick = () => {
      removeProductToCartModal(item)
    };
  });
};
// #endregion


//#region Renderizado
const getCart = list => {
  document.getElementById('containerCart').innerHTML = '';
  const carts = list?.map(
    item =>
      `  
      <hr class="my-4" />
		  <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
        <a href="../pages/product.html"><img  id="viewImg_${item.id}_${item.talle}"src=${item.imagenes[0]} class="img-fluid rounded-3" /></a>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <a  href="../pages/product.html"><h6 id="view_${item.id}_${item.talle}" class="text-muted">${item.nombre} - ${item.talle}</h6></a>
          <h6 class="text-black mb-0">Camiseta</h6>
		    </div>
		  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
			  <input id="count_${item.id}_${item.talle}" min=0 name="quantity" value=${item.count} type="number" class="form-control form-control-sm" />
		  </div>
		  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
			  <h6 id="precio_${item.id}_${item.talle}" class="mb-0">$${new Intl.NumberFormat('de-DE').format(item.precio*item.count)}</h6>
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
  document.getElementById('subtotal').innerHTML = `$${new Intl.NumberFormat('de-DE').format(totalCompra)}`;
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
      getCart(filtered)
    }
  });
};

const changeCount = (item,cantidad) => {
  const id = item.id;
  const talle = item.talle;
  if (item => item.id === id && item.talle === talle) {
    const newCount = parseInt(document.getElementById('count_' + item.id + '_' + item.talle).value);
    item.count = newCount;
    totalCompra = listCart.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
    compraEnvio = totalCompra;
    document.getElementById('subtotal').innerHTML = `$${new Intl.NumberFormat('de-DE').format(totalCompra)}`;
    filtered = listCart.filter(item => item.id !== id || item.talle !== talle);
    filtered.push(item);
    console.log(filtered)
    localStorage.setItem('listCart', JSON.stringify(filtered));
    document.getElementById(`precio_${item.id}_${item.talle}`).innerHTML=`$${new Intl.NumberFormat('de-DE').format(item.precio*cantidad)}`
  }
  filtered = listCart.filter(item => item.id !== id && item.talle !== talle);
};

const redirectProduct=(item)=>{
  localStorage.setItem('idProducto', item.id);
}

listCart?.map(item => {
  document.getElementById('count_' + item.id + '_' + item.talle).onchange = () => {
    changeCount(item,document.getElementById('count_' + item.id + '_' + item.talle).value);
  };
  document.getElementById('remove_' + item.id + '_' + item.talle).onclick = () => {
    removeProductToCart(item);
  };
  document.getElementById('view_' + item.id + '_' + item.talle).onclick = () => {
    redirectProduct(item);
  };
  document.getElementById('viewImg_' + item.id + '_' + item.talle).onclick = () => {
    redirectProduct(item);
  };
});
//#endregion
