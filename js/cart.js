let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = productos.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.nombre} añadido al carrito`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if(cartCount) cartCount.innerText = `🛒 Cart (${cart.length})`;
}
window.onload = updateCartCount;