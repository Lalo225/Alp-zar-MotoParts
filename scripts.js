document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const products = document.querySelectorAll(".product");

    searchBar.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();
        products.forEach(product => {
            const productName = product.getAttribute("data-name").toLowerCase();
            if (productName.includes(searchText)) {
                product.classList.remove("hidden");
            } else {
                product.classList.add("hidden");
            }
        });
    });
});