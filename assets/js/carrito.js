
//DOM
document.addEventListener('DOMContentLoaded', () => { 
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Base Matte Full Cover',
            precio: 15000,
            imagen: 'assets/img/Base full cover.jpeg',
            categoria: 'Bases'
        },
        {
            id: 2,
            nombre: 'Base líquida full cover',
            precio: 12000,
            imagen: 'assets/img/Base líquida.jpeg',
            categoria: 'Bases'
        },
        {
            id: 3,
            nombre: 'Bloqueador solar - USHAS',
            precio: 13000,
            imagen: 'assets/img/bloqueador solar.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 4,
            nombre: 'Blush en barra',
            precio: 4000,
            imagen: 'assets/img/Blush en barra.jpeg',
            categoria: 'Rubores'
        },
        {
            id: 5,
            nombre: 'Cepillo limpiador',
            precio: 6500,
            imagen: 'assets/img/Cepillo limpiador.jpeg',
            categoria: 'Accesorios'
        },
        {
            id: 6,
            nombre: 'Contorno de ojos - Bioaqua',
            precio: 3500,
            imagen: 'assets/img/contorno de ojos - bioaqua.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 7,
            nombre: 'Diadema',
            precio: 6000,
            imagen: 'assets/img/diadema.jpeg',
            categoria: 'Accesorios'
        },
        {
            id: 8,
            nombre: 'Espuma limpiadora - Bioaqua',
            precio: 8000,
            imagen: 'assets/img/espuma limpiadora - bioaqua.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 9,
            nombre: 'Fijador en aerosol - MyK',
            precio: 18000,
            imagen: 'assets/img/fijador MyK.jpeg',
            categoria: 'Piel'
        },
        {
            id: 10,
            nombre: 'Gel hidratante - Bioaqua',
            precio: 5000,
            imagen: 'assets/img/gel hidratante - bioaqua.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 11,
            nombre: 'Gloss Fat Oil - Color',
            precio: 5000,
            imagen: 'assets/img/Gloss Fat Oil con brillitos.jpeg',
            categoria: 'Glosses'
        },
        {
            id: 12,
            nombre: 'Gloss Fat Oil',
            precio: 5000,
            imagen: 'assets/img/Gloss Fat Oil.jpeg',
            categoria: 'Glosses'
        },
        {
            id: 13,
            nombre: 'Kit Capilar Lisos - Exotic',
            precio: 23000,
            imagen: 'assets/img/kit capilar exotic lisos.jpeg',
            categoria: 'Línea capilar'
        },
        {
            id: 14,
            nombre: 'Kit Capilar Rizos - Exotic',
            precio: 23000,
            imagen: 'assets/img/kit capilar exotic rizos.jpeg',
            categoria: 'Línea capilar'
        },
        {
            id: 15,
            nombre: 'Kit Capilar S.O.S - Exotic',
            precio: 23000,
            imagen: 'assets/img/kit capilar exotic sos.jpeg',
            categoria: 'Línea capilar'
        },
        {
            id: 16,
            nombre: 'Limpiador facial - Bioaqua',
            precio: 5500,
            imagen: 'assets/img/limpiador facil arroz - bioaqua.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 17,
            nombre: 'Loción de Arroz - Bioaqua',
            precio: 5500,
            imagen: 'assets/img/locion arroz - bioaqua.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 18,
            nombre: 'Mascarilla facial, velo hidratante Arroz - Bioaqua',
            precio: 1500,
            imagen: 'assets/img/mascarilla arroz - bioaqua.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 19,
            nombre: 'Paleta de sombras, 20 tonos',
            precio: 14000,
            imagen: 'assets/img/paleta de sombras 2.jpeg',
            categoria: 'Sombras'
        },
        {
            id: 20,
            nombre: 'Paleta de sombras, 21 tonos',
            precio: 14000,
            imagen: 'assets/img/paleta de sombras 3.jpeg',
            categoria: 'Sombras'
        },
        {
            id: 21,
            nombre: 'Pestañina - Mini Tango',
            precio: 5000,
            imagen: 'assets/img/pestañina.jpeg',
            categoria: 'Pestañinas'
        },
        {
            id: 22,
            nombre: 'Polvo suelto - Hudamoji',
            precio: 7500,
            imagen: 'assets/img/Polvo suelto.jpeg',
            categoria: 'Piel'
        },
        {
            id: 23,
            nombre: 'Primer - Ice Cream',
            precio: 4500,
            imagen: 'assets/img/primer ice cream.jpeg',
            categoria: 'Piel'
        },
        {
            id: 24,
            nombre: 'Tónico Arroz - Bioaqua',
            precio: 5500,
            imagen: 'assets/img/tonico arroz - bioaqua.jpeg',
            categoria: 'Skin Care'
        },
        {
            id: 25,
            nombre: 'Tratamiento capilar Aceite Árgan - Exotic',
            precio: 12000,
            imagen: 'assets/img/tratamiento exotic aceite argan.jpeg',
            categoria: 'Línea capilar'
        },
        {
            id: 26,
            nombre: 'Tratamiento capilar Ácido Hialurónico - Exotic',
            precio: 12000,
            imagen: 'assets/img/tratamiento exotic acido hialuronico.jpeg',
            categoria: 'Línea capilar'
        },
        {
            id: 27,
            nombre: 'Tratamiento capilar kids lisos - Exotic',
            precio: 12000,
            imagen: 'assets/img/tratamiento exotic lisos.jpeg',
            categoria: ''
        }
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
    const filtroSelect = document.getElementById("filtro");

    // Funciones

    function renderizarProductos() {
        DOMitems.innerHTML = "";
        const filtro = filtroSelect.value;
        const productosFiltrados = baseDeDatos.filter(producto => 
            filtro === "todas" || producto.categoria === filtro
        );
        productosFiltrados.forEach((info) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            const miNodoTitle = document.createElement('h6');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
// Obtén el contador del almacenamiento local
    let visitas = localStorage.getItem('contadorVisitas');
// Si no hay visitas almacenadas, inicializa a 0
    if (!visitas) {
        visitas = 0;
    }
// Incrementa el contador
    visitas++;
// Guarda el nuevo contador en el almacenamiento local
    localStorage.setItem('contadorVisitas', visitas);
// Muestra el contador en la página
    document.getElementById('contador').textContent = visitas;
    function anadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'));
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }
    function handleCarritoValue(value) {
        const carritoContainer = document.getElementById("carrito-value");
        carritoContainer.textContent = `${value}`;
    }
    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }
    //borra carrito
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }
    //calcular el total
    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }
    //vaciar todos los elementos del carrito
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
    }
    //guardar en local el carrito
    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
    //cargar del local el carriro
    function cargarCarritoDeLocalStorage() {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            handleCarritoValue(carrito.length);
        }
    }
    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    filtroSelect.addEventListener('change', renderizarProductos);
    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});