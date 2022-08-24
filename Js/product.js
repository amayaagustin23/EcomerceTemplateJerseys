/** @format */

//#region Variables
let productCarrito = ''
let listCart = JSON.parse(localStorage.getItem('listCart'))
const producto = JSON.parse(localStorage.getItem('producto'))
let cantidad = localStorage.getItem('cantidad')
if (cantidad === null) cantidad = 0
document.getElementById('cartcountNav').innerHTML = cantidad
document.getElementById('cartcount').innerHTML = cantidad
let cartList
const talles = document.getElementsByClassName('talle')
const imagenes = document.getElementsByClassName('imagenesExtra')
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
		return cart.join('')
	} else {
		return '<h3>No tiene ningun producto en el carrito</h3>'
	}
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

//#region Renderizado
const zoom = (e) => {
	var zoomer = e.currentTarget
	e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX)
	e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX)
	x = (offsetX / zoomer.offsetWidth) * 100
	y = (offsetY / zoomer.offsetHeight) * 100
	zoomer.style.backgroundPosition = x + '% ' + y + '%'
}
const getImagenes = (list) => {
	const imagenes = list.map((item) => ` <img class="imagenesExtra" src="${item}">`)
	const elementHTML = document.getElementsByClassName('imagenesAll')
	const data = imagenes
	data.forEach((element) => {
		elementHTML.innerHTML += element
	})
	return data
}
const eventBtnCarrito = () => {
	document.getElementById('carrito').onclick = () => {
		if (listCart === null) listCart = []
		if (document.getElementById('count').value === '0') {
			Swal.fire({
				icon: 'error',
				title: 'No se ingreso una cantidad!',
				confirmButtonColor: '#FF8303',
				confirmButtonBorder: '#FF8303',
			})
		} else if (productCarrito === '') {
			Swal.fire({
				icon: 'error',
				title: 'No se selecciono un talle!',
				confirmButtonColor: '#FF8303',
				confirmButtonBorder: '#FF8303',
			})
		} else {
			const prodexistente = listCart.find((item) => item.id === productCarrito.id && item.talle === productCarrito.talle)
			if (prodexistente !== undefined) {
				const filtered = listCart.filter((item) => item.id !== productCarrito.id || item.talle !== productCarrito.talle)
				const count = prodexistente.count + parseInt(document.getElementById('count').value)
				const prod = { ...productCarrito, count: count }
				listCart = filtered
				listCart.push(prod)
			} else {
				const prod = {
					...productCarrito,
					count: parseInt(document.getElementById('count').value),
				}
				listCart.push(prod)
			}
			localStorage.setItem('listCart', JSON.stringify(listCart))
			localStorage.setItem('cantidad', listCart.length)
			document.getElementById('cartcountNav').innerHTML = listCart.length
			document.getElementById('cartcount').innerHTML = listCart.length

			Swal.fire({
				icon: 'success',
				title: 'Se agrego correctamente al carrito',
				showConfirmButton: false,
				timer: 1500,
			})
		}
	}
}
const styleTalles = () => {
	for (let i = 0; i < talles.length; i++) {
		producto.tallesFaltante.map((item) => {
			if (talles[i].innerHTML === item) {
				talles[i].style.display = 'none'
			}
		})
	}

	for (const element of talles) {
		element.addEventListener('click', () => {
			for (const element of talles) {
				element.classList.remove('activeTalle')
			}
			element.classList.toggle('activeTalle')
		})
	}
}
const eventTalles = () => {
	for (let i = 0; i < talles.length; i++) {
		talles[i].onclick = () => {
			productCarrito = { ...producto, talle: talles[i].innerHTML }
			if (productCarrito.talle === talles[i].innerHTML) talles[i].classList.add('activeTalle')
		}
	}
}
const eventImages = () => {
	for (let i = 0; i < imagenes.length; i++) {
		imagenes[i].onclick = () => {
			document.getElementById('imagenPrincipal').src = imagenes[i].currentSrc
			document.getElementById('figurePrincipal').style.backgroundImage = `url(${imagenes[i].currentSrc})`
		}
	}
}
const renderizarProduct = () => {
	const productoView = `<section>
  <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
  aria-label="breadcrumb">
  <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="shop.html">Tienda</a></li>
  <li class="breadcrumb-item active" aria-current="page">${producto.nombre}</li>
  </ol>
  </nav>
  <br>
  <div class="containerSection">
  <div class="imagenProduct">
  <figure id="figurePrincipal" class="zoom" onmousemove="zoom(event)" style="background-image: url(${producto.imagenes[0]})">
  <img id="imagenPrincipal" src=${producto.imagenes[0]}>
  </figure>
  <div class="imagenesAll">
  ${getImagenes(producto.imagenes).join('')}
  </div>
  </div>
  <div class="contenedor">
  <h1>${producto.nombre}</h1>
  <p>Item No. ${producto.item}</p>
  <br>
  <h3 class="precio">$${new Intl.NumberFormat('de-DE').format(producto.precio)}</h3>
  <div class="talles">
  <button class="talle" value="S">S</button>
  <button class="talle" value="M">M</button>
  <button class="talle" value="L">L</button>
  <button class="talle" value="XL">XL</button>
  </div>
  <div class="containerAddCart">
  <button id="carrito">Agregar al carrito</button>
  <input min=0 value=0 type="number" id="count">
  </div>
  <span id="spanNotify"></span>
      </div>
      </div>
      </section>
      <section>
      <div class="accordion mt-4" id="accordionExample">
      <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Descripción
      </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="descripcionProduct">
      <p>${producto.descripcion}</p>
      </div>
      <div class="listasDesc">
      <ol class="listDesc">
      <li><span class="descOp">Género:</span> ${producto.genero}</li>
      <li><span class="descOp">Material:</span> Poliéster</li>
      <li><span class="descOp">Manga: </span> Corta</li>
      <li><span class="descOp">Garantía:</span> Contra defecto de fabricación.</li>
      <li><span class="descOp">Marca: </span> ${producto.marca}</li>
      </ol>
      <ol class="listDesc">
      <li><span class="descOp">Cuello:</span> ${producto.cuello}</li>
      <li><span class="descOp">Calce:</span> ${producto.calce}</li>
      <li><span class="descOp">Liga: </span> ${producto.liga}</li>
      </ol>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>`
	setTimeout(() => {
		document.getElementById('loader').style.display = 'none'
		document.getElementById('containerProduct').innerHTML = productoView
		eventTalles()
		styleTalles()
		eventImages()
		eventBtnCarrito()
		eventCarrito()
	}, 1000)
}
//#endregion

renderizarProduct()
