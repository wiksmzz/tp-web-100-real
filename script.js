import datosAPI from './app.json' with { type: 'json' };

function ponerCards() {
    const contenedor = document.getElementById("nuevas_cards");
    if (!contenedor) return;

    // Limpiamos el contenedor
    contenedor.innerHTML = "";

    const listaProd = datosAPI.products;
    const rowDiv = document.createElement("div");
    rowDiv.className = "row g-4";

    listaProd.forEach((producto) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-6 col-lg-4";
        
        const card = document.createElement("div");
        card.className = "card h-100";

        card.innerHTML = `
            <img src="./public/img/${producto.image}" class="card-img-top" alt="${producto.name}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="precio fw-bold">$${producto.price.toLocaleString('es-AR')}</p>
                </div>
                <p class="card-text">${producto.card_description}</p>
                <a href="./pages/${producto.page}" class="btn btn-outline-dark w-100">Ver más</a>
            </div>
        `;

        colDiv.appendChild(card);
        rowDiv.appendChild(colDiv);
    });

    contenedor.appendChild(rowDiv);
}

// Ejecutamos la función cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ponerCards);
} else {
    ponerCards();
}