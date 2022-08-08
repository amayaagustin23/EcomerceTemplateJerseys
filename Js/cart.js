
const listCart=JSON.parse(localStorage.getItem('myArray'))
const cantidad=parseInt(localStorage.getItem('cantidad'))
let totalCompra = listCart.reduce((acum, elemento)=> acum +=elemento.precio*elemento.count, 0)
let compraEnvio=totalCompra
document.getElementById("subtotal").innerHTML=`$${totalCompra}`
document.getElementById("countProducts").innerHTML=`${cantidad} PRODUCTOS `
document.getElementById('cartcountNav').innerHTML = `${cantidad} `;
document.getElementById('cartcount').innerHTML = `${cantidad} `;

console.log(listCart)

const result = listCart.reduce((acc,item)=>{
	if(!acc.includes(item)){
		acc.push(item);
	}
	return acc;
  },[])


console.log(result)
let select = document.getElementById('select');
select.addEventListener('change',
  function(){
	let selectedOption = this.options[select.selectedIndex];
	totalCompra=compraEnvio+parseInt(selectedOption.value);
	document.getElementById("subtotal").innerHTML=`$${totalCompra}`
  });

function getCart() {
  return result.map(
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
			<a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
		  </div>
		</div>`
  );
}


const cartHTML = document.getElementById('containerCart');
const cartData = getCart();
cartData.forEach(element => {
  cartHTML.innerHTML += element;
});