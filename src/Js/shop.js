/** @format */

//#region Variables yLocalStorage
let cantidad = localStorage.getItem('cantidad')
if (cantidad === null) cantidad = 0
document.getElementById('cartcountNav').innerHTML = cantidad
document.getElementById('cartcount').innerHTML = cantidad
let listCart = JSON.parse(localStorage.getItem('listCart'))
const carrito = []
let listaproductos = []
let marcasFiltradas = []
let tallesFIltrados = []
let generoFiltrados = []
let searchFiltrados = []
const marcas = document.getElementsByClassName('form-check-marcas')
const talles = document.getElementsByClassName('form-check-talles')
const generos = document.getElementsByClassName('form-check-genero')
const modal = document.getElementById('myModal')
let total
let parrafototal
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
const eventRemove = () => {
	listCart?.map((item) => {
		document.getElementById(`remove_${item.id}_${item.talle}`).onclick = () => {
			removeProductToCartModal(item)
		}
	})
}
const openModal = () => {
	listCart = JSON.parse(localStorage.getItem('listCart'))
	const total = listCart?.reduce((acum, elemento) => (acum += elemento.precio * elemento.count), 0)
	if (listCart === null) total = 0
	const parrafototal = `<h4>Total: $${new Intl.NumberFormat('de-DE').format(total)}</h4>`
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
const eventCarrito = () => {
	document.getElementById('cartNavResponsive').onclick = () => {
		openModal()
	}
	document.getElementById('cartNav').onclick = () => {
		openModal()
	}
}
// #endregion

//#region Funciones de renderizados
const getData = () => {
	fetch('../json/products.json')
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			json.map((item) => {
				listaproductos.push(item)
			})
		})
}
getData()
const redirectToProduct = (list) => {
	list.map((item) => (document.getElementById(`prod_${item.id}`).onclick = () => localStorage.setItem('producto', JSON.stringify(item))))
}
const eventFilters = () => {
	document.getElementById('buttonSearch').onclick = () => {
		FiltrosSearch()
	}
	for (let i = 0; i < marcas.length; i++) {
		marcas[i].addEventListener('click', function (event) {
			filterMarcas(event)
			aplicarFiltros()
		})
	}

	for (let i = 0; i < talles.length; i++) {
		talles[i].addEventListener('click', function (event) {
			filterTalles(event)
			aplicarFiltros()
		})
	}

	for (let i = 0; i < generos.length; i++) {
		generos[i].addEventListener('click', function (event) {
			filterGeneros(event)
			aplicarFiltros()
		})
	}
}
const collapsedFilter = () => {
	if (screen.width < 1220) {
		document.getElementById('collapseTwo').classList.add('collapse')
		document.getElementById('panelsStayOpen-collapseOne').classList.add('collapse')
		document.getElementById('panelsStayOpen-collapseTwo').classList.add('collapse')
		document.getElementById('panelsStayOpen-collapseThree').classList.add('collapse')
	}
}
const LabelColor = () => {
	let etiquetas = document.getElementsByClassName('etiqueta')
	for (let index = 0; index < etiquetas.length; index++) {
		if (etiquetas[index].innerHTML === 'OFERTA') etiquetas[index].style.backgroundColor = 'green'
		if (etiquetas[index].innerHTML === 'NUEVO') etiquetas[index].style.backgroundColor = 'orange'
	}
}
const getProductTemplate = (list) => {
	collapsedFilter()
	document.getElementById('loader').style.display = 'block'
	setTimeout(() => {
		document.getElementById('loader').style.display = 'none'
		const products = list.map(
			(item) =>
				`<div data-aos="zoom-in" class="articulo" id=${item.nombre}>
                  <a id="prod_${item.id}" href="../pages/product.html">
                    <div class="imagen">
                      <img src="${item.imagenes[0]}" alt="${item.nombre}" title="${item.nombre}"/>
					  </div>
					  <div class="textos">
                      <img src="${item.logoMarca}" alt="${item.nombre}" title="${item.nombre}"/>
                      <h3 class="title">${item.nombre}</h3>
                      <div class='precioEtiqueta'>
                        <p>$${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p class='etiqueta'>${item.etiqueta}</p>
                      </div>
                    </div>
                  </a>
                </div>`
		)
		document.getElementById('containerArticulos').innerHTML = products.join('')
		LabelColor()
		redirectToProduct(list)
		eventFilters()
		eventCarrito()
	}, 1000)
}
//#endregion

//#region Filtros
const FiltrosSearch = () => {
	const search = document.getElementById('search').value.toLowerCase()
	searchFiltrados = listaproductos.filter((item) => item.nombre.toLowerCase().includes(search) || item.descripcion.toLowerCase().includes(search))
	aplicarFiltros()
}
const filterMarcas = (event) => {
	if (event.srcElement.checked) {
		marcasFiltradas.push(event.target.value)
	} else {
		let aux = marcasFiltradas.filter((item) => item !== event.target.value)
		marcasFiltradas = aux
	}
}
const filterTalles = (event) => {
	if (event.srcElement.checked) {
		tallesFIltrados.push(event.target.value)
	} else {
		let aux = tallesFIltrados.filter((item) => item !== event.target.value)
		tallesFIltrados = aux
	}
}
const filterGeneros = (event) => {
	if (event.srcElement.checked) {
		generoFiltrados.push(event.target.value)
	} else {
		let aux = generoFiltrados.filter((item) => item !== event.target.value)
		generoFiltrados = aux
	}
}
const aplicarFiltros = () => {
	let productosFiltrados = []
	listaproductos.forEach((item) => {
		let bool1 = marcasFiltradas.length === 0 ? true : marcasFiltradas.includes(item.marca)
		let bool2 = generoFiltrados.length === 0 ? true : generoFiltrados.includes(item.genero)
		let bool3 = false
		let bool4 = searchFiltrados.length === 0 ? true : searchFiltrados.includes(item)
		if (tallesFIltrados.length === 0) bool3 = true
		else {
			for (let index = 0; index < item.tallesDisponibles.length; index++) {
				if (tallesFIltrados.includes(item.tallesDisponibles[index])) bool3 = tallesFIltrados.includes(item.tallesDisponibles[index])
			}
		}
		if (bool1 && bool2 && bool3 && bool4) productosFiltrados.push(item)
	})
	document.getElementById('containerArticulos').innerHTML = ''
	if (productosFiltrados.length === 0) {
		document.getElementById('containerArticulos').classList.remove('containerArticulos')
		document.getElementById('containerArticulos').classList.add('containerNoProduct')
		document.getElementById('containerArticulos').innerHTML = `<h2 class="noProduct">NO SE ENCONTRARON PRODUCTOS</h2>`
	} else {
		document.getElementById('containerArticulos').classList.add('containerArticulos')
		getProductTemplate(productosFiltrados)
	}
}
//#endregion

getProductTemplate(listaproductos)
