document.addEventListener("DOMContentLoaded", () => {

    // Arreglo inicial de productos
    const productos = [
        {
            nombre: "Laptop",
            precio: 850,
            descripcion: "Equipo portátil para trabajo y estudio"
        },
        {
            nombre: "Mouse",
            precio: 15,
            descripcion: "Dispositivo apuntador inalámbrico"
        },
        {
            nombre: "Teclado",
            precio: 25,
            descripcion: "Teclado mecánico de uso profesional"
        }
    ];

    // Referencias al DOM
    const lista = document.getElementById("listaProductos");
    const btnAgregar = document.getElementById("btnAgregar");

    // Función para renderizar productos
    function renderizarProductos() {
        lista.innerHTML = "";

        productos.forEach(producto => {
            const item = document.createElement("li");
            item.innerHTML = `
                <strong>${producto.nombre}</strong><br>
                Precio: $${producto.precio}<br>
                ${producto.descripcion}
            `;
            lista.appendChild(item);
        });
    }

    // Render inicial
    renderizarProductos();

    // Evento del botón (AHORA SÍ FUNCIONA)
    btnAgregar.addEventListener("click", () => {
        const nuevoProducto = {
            nombre: "Producto Nuevo",
            precio: 0,
            descripcion: "Descripción del nuevo producto"
        };

        productos.push(nuevoProducto);
        renderizarProductos();
    });

});
