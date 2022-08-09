const listCart = JSON.parse(localStorage.getItem('listCart'));
const cantidad = parseInt(localStorage.getItem('cantidad'));
let totalCompra = listCart.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0);
let compraEnvio = totalCompra;
document.getElementById('subtotal').innerHTML = `$${totalCompra}`;
document.getElementById('countProducts').innerHTML = `${cantidad} PRODUCTOS `;
document.getElementById('cartcountNav').innerHTML = `${cantidad} `;
document.getElementById('cartcount').innerHTML = `${cantidad} `;
console.log(listCart);
let select = document.getElementById('select');
select.addEventListener('change', function () {
  let selectedOption = this.options[select.selectedIndex];
  totalCompra = compraEnvio + parseInt(selectedOption.value);
  document.getElementById('subtotal').innerHTML = `$${totalCompra}`;
});

const getCart = list => {
  document.getElementById('containerCart').innerHTML = '';
  const carts = list.map(
    item =>
      `  <hr class="my-4" />
		<div class="row mb-4 d-flex justify-content-between align-items-center">
		  <div class="col-md-2 col-lg-2 col-xl-2">
			<img src=${item.imagen} class="img-fluid rounded-3" />
		  </div>
		  <div class="col-md-3 col-lg-3 col-xl-3">
			<h6 class="text-muted">${item.nombre} - ${item.talle}</h6>
			<h6 class="text-black mb-0">Camiseta</h6>
		  </div>
		  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
			<button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
			  <i class="fas fa-minus"></i>
			</button>

			<input id="form1" min="0" name="quantity" value=${item.count} type="number" class="form-control form-control-sm" />

			<button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
			  <i class="fas fa-plus"></i>
			</button>
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
  cartData.forEach(element => {
    cartHTML.innerHTML += element;
  });
};
getCart(listCart);
let filtered = [];
listCart.map(item => {
  document.getElementById('remove_' + item.id + '_' + item.talle).onclick = () => {
    const idView = document.getElementById('remove_' + item.id + '_' + item.talle).id.split('_');
    const id = idView[1];
    const talle = idView[2];
    filtered = listCart.filter(item => item.id !== id && item.talle !== talle);
    getCart(filtered);
    localStorage.setItem('listCart', JSON.stringify(filtered));
    localStorage.setItem('cantidad', filtered.length);
    document.getElementById('cartcountNav').innerHTML = filtered.length;
    document.getElementById('cartcount').innerHTML = filtered.length;
    document.getElementById('countProducts').innerHTML = filtered.length;
  };
});
