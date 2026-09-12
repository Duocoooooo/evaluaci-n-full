const productos = [
    { id: 1, nombre: "Smartphone X", precio: 500000, img: "phone.jpg", desc: "El mejor teléfono", cat: "Electrónica" },
    { id: 2, nombre: "Laptop Pro", precio: 1200000, img: "laptop.jpg", desc: "Potencia pura", cat: "Computación" },
    { id: 3, nombre: "Watch Ultra", precio: 150000, img: "watch.jpg", desc: "Reloj inteligente", cat: "Accesorios" },
];

function renderProductos() {
    const container = document.getElementById('grid-productos');
    if(!container) return;
    
    container.innerHTML = productos.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <a href="detalle.html?id=${p.id}" class="btn">Ver Detalle</a>
            <button onclick="addToCart(${p.id})">Añadir</button>
        </div>
    `).join('');
}
window.onload = renderProductos;