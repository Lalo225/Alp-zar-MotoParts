// Datos de los productos, puedes agregar más aquí
const products = [
    { id: 1, name: "Zapatas de freno trasero", category: "Frenos", price: "300", description: "Zapatas de freno trasero de alta calidad para motocicleta." },
    { id: 2, name: "Lugo superior", category: "Aceite", price: "150", description: "Aceite de alta rendimiento para motocicletas." },
    // Añade todos los productos aquí con sus respectivas propiedades
];

// Mostrar productos en la página principal
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ''; // Limpiar la lista antes de cargar nuevos productos

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Categoría: ${product.category}</p>
            <p>Precio: $${product.price}</p>
            <a href="detalle.html?id=${product.id}">Ver más</a>
        `;

        productList.appendChild(productElement);
    });
}

// Cargar los detalles del producto
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(p => p.id == productId);

    if (product) {
        const productDetail = document.getElementById("product-detail");
        productDetail.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Categoría:</strong> ${product.category}</p>
            <p><strong>Precio:</strong> $${product.price}</p>
            <p><strong>Descripción:</strong> ${product.description}</p>
        `;
    } else {
        document.getElementById("product-detail").innerHTML = "<p>Producto no encontrado.</p>";
    }
}

// Función para la búsqueda de productos
function searchProducts() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    const productCatalog = document.getElementById("product-catalog");
    productCatalog.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Categoría: ${product.category}</p>
            <p>Precio: $${product.price}</p>
            <a href="detalle.html?id=${product.id}">Ver más</a>
        `;
        productCatalog.appendChild(productElement);
    });
}

// Llamadas a las funciones al cargar las páginas
window.onload = function() {
    if (document.getElementById("product-list")) {
        displayProducts();
    }
    if (document.getElementById("product-catalog")) {
        searchProducts();
    }
    if (document.getElementById("product-detail")) {
        loadProductDetails();
    }
};
