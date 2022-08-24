/** @format */

//#region Variables y LocalStorage
let listCart = JSON.parse(localStorage.getItem('listCart'))
const modal = document.getElementById('myModal')
let totalCompra = listCart?.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0)
let compraEnvio = totalCompra
if (totalCompra === undefined) totalCompra = 0
document.getElementById('subtotal').innerHTML = `$${new Intl.NumberFormat('de-DE').format(totalCompra)}`
let cantidad = localStorage.getItem('cantidad')
if (cantidad === null) cantidad = 0
document.getElementById('cartcountNav').innerHTML = cantidad
document.getElementById('cartcount').innerHTML = cantidad
document.getElementById('countProducts').innerHTML = `${cantidad} PRODUCTOS `
let filtered = []
let select = document.getElementById('select')
//#endregion

//#region Modal Carrito
const removeProductToCartModal = (item) => {
	Swal.fire({
		title: '¿Esta seguro que quiere eliminar?',
		text: '',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#FF8303',
		cancelButtonColor: '#1B1A17',
		cancelButtonText: 'Cancelar',
		confirmButtonText: 'Si',
	}).then((result) => {
		if (result.isConfirmed) {
			const id = item.id
			const talle = item.talle
			filtered = listCart.filter((item) => item.id !== id || item.talle !== talle)
			localStorage.setItem('listCart', JSON.stringify(filtered))
			localStorage.setItem('cantidad', filtered.length)
			document.getElementById('cartcountNav').innerHTML = filtered.length
			document.getElementById('cartcount').innerHTML = filtered.length
			document.getElementById('countProducts').innerHTML = `${filtered.length} PRODUCTOS `
			getCart(filtered)
		}
	})
}
const getCarrito = (list) => {
	if (list !== null) {
		const cart = list.map(
			(item) => `
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
		)
		if (list.length === 0) return '<h3>No tiene ningun producto en el carrito</h3>'
		return cart.join('')
	} else return '<h3>No tiene ningun producto en el carrito</h3>'
}
const eventRemove=()=>{
	listCart?.map((item) => {
		document.getElementById(`removeModal_${item.id}_${item.talle}`).onclick = () => {
			removeProductToCartModal(item)
		}
	})

}
const eventModalCarrito = () => {
	listCart = JSON.parse(localStorage.getItem('listCart'))
	total = listCart?.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0)
	if (listCart === null) total = 0
	parrafototal = `<h4>Total: $${new Intl.NumberFormat('de-DE').format(total)}</h4>`
	document.getElementById('cartNavResponsive').onclick = () => {
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
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = './shoppingCart.html'
			}
		})
		eventRemove()
	}
	document.getElementById('cartNav').onclick = () => {
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
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = './shoppingCart.html'
			}
		})
		eventRemove()
	}
}
// #endregion

//#region Funciones
const eventSelect = () => {
	select.addEventListener('change', () => {
		let selectedOption = this.options[select.selectedIndex]
		totalCompra = compraEnvio + parseInt(selectedOption.value)
		document.getElementById('subtotal').innerHTML = `$${new Intl.NumberFormat('de-DE').format(totalCompra)}`
	})
}

const postRemove = (list) => {
	localStorage.setItem('listCart', JSON.stringify(list))
	localStorage.setItem('cantidad', list.length)
	document.getElementById('cartcountNav').innerHTML = list.length
	document.getElementById('cartcount').innerHTML = list.length
	document.getElementById('countProducts').innerHTML = `${list.length} PRODUCTOS `
	let totalCompraNew = list.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0)
	document.getElementById('subtotal').innerHTML = `$${totalCompraNew}`
	getCart(list)
}
const removeProductToCart = (item) => {
	const listCart = JSON.parse(localStorage.getItem('listCart'))
	Swal.fire({
		title: '¿Esta seguro que quiere eliminar?',
		text: '',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#FF8303',
		cancelButtonColor: '#1B1A17',
		cancelButtonText: 'Cancelar',
		confirmButtonText: 'Si',
	}).then((result) => {
		if (result.isConfirmed) {
			const id = item.id
			const talle = item.talle
			filtered = listCart.filter((item) => item.id !== id || item.talle !== talle)
			postRemove(filtered)
		}
	})
}

const changeCount = (item, cantidad) => {
	const id = item.id
	const talle = item.talle
	if ((item) => item.id === id && item.talle === talle) {
		const newCount = parseInt(document.getElementById('count_' + item.id + '_' + item.talle).value)
		item.count = newCount
		totalCompra = listCart.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0)
		compraEnvio = totalCompra
		document.getElementById('subtotal').innerHTML = `$${new Intl.NumberFormat('de-DE').format(totalCompra)}`
		filtered = listCart.filter((item) => item.id !== id || item.talle !== talle)
		filtered.push(item)
		console.log(filtered)
		localStorage.setItem('listCart', JSON.stringify(filtered))
		document.getElementById(`precio_${item.id}_${item.talle}`).innerHTML = `$${new Intl.NumberFormat('de-DE').format(item.precio * cantidad)}`
	}
	filtered = listCart.filter((item) => item.id !== id && item.talle !== talle)
}

const redirectProduct = (item) => {
	localStorage.setItem('idProducto', item.id)
}

const eventCarts = (list) => {
	list?.map((item) => {
		document.getElementById('count_' + item.id + '_' + item.talle).onchange = () => {
			changeCount(item, document.getElementById('count_' + item.id + '_' + item.talle).value)
		}
	})
	list?.map((item) => {
		document.getElementById('remove_' + item.id + '_' + item.talle).onclick = () => {
			removeProductToCart(item)
		}
	})
	list.map(
		(item) =>
			(document.getElementById(`viewImg_${item.id}_${item.talle}`).onclick = () => {
				delete item.talle
				localStorage.setItem('producto', JSON.stringify(item))
			})
	)
	list.map(
		(item) =>
			(document.getElementById(`view_${item.id}_${item.talle}`).onclick = () => {
				delete item.talle
				localStorage.setItem('producto', JSON.stringify(item))
			})
	)
}
//#endregion

//#region Renderizado
const getCart = (list) => {
	document.getElementById('containerCart').innerHTML = ''
	document.getElementById('loader').style.display = 'flex'
	const carts = list?.map(
		(item) =>
			`  <div data-aos="zoom-in">
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
			  <h6 id="precio_${item.id}_${item.talle}" class="mb-0">$${new Intl.NumberFormat('de-DE').format(item.precio * item.count)}</h6>
		  </div>
		  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
			<a href="#!" class="text-muted"><i id="remove_${item.id}_${item.talle}" class="fas fa-times"></i></a>
		  </div>
		</div>
		</div>
		`
	)
	setTimeout(() => {
		document.getElementById('loader').style.display = 'none'
		document.getElementById('containerCart').innerHTML = carts.join('')
		eventCarts(list)
		eventSelect()
		eventModalCarrito()
	}, 1000)
}
//#endregion

getCart(listCart)
