// Lógica Global - MARENE

// Función para crear el HTML de la tarjeta de producto (Mantiene tu diseño intacto)
window.createProductCardHTML = function(product) {
    // Forzamos a que use la imagen de la lista si está disponible
    const imageUrl = (product.images && product.images.length > 0) ? product.images[0] : product.image;
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card-image" onclick="openProductDetail('${product.id}')" style="cursor: pointer;">
                <img src="${imageUrl}" alt="${product.name}" onerror="this.src='assets/images/maria1.JPG'">
            </div>
            <div class="product-card-body">
                <h4 class="product-card-title" onclick="openProductDetail('${product.id}')" style="cursor: pointer;">${product.name}</h4>
                <p class="product-card-price">$ ${product.price.toLocaleString('co-CO')}</p>
            </div>
        </div>
    `;
};

// Función para abrir el detalle del producto (Arregla la imagen grande del modal)
window.openProductDetail = function(productId) {
    if (!window.PRODUCTS) return;
    const product = window.PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Elementos del modal
    const modal = document.getElementById('product-detail-modal');
    const modalTitle = document.getElementById('modal-product-title');
    const modalPrice = document.getElementById('modal-product-price');
    const modalDescription = document.getElementById('modal-product-description');
    const mainImg = document.getElementById('modal-main-img');
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    const featuresList = document.getElementById('modal-features-list');

    if (!modal) return;

    // Asignar textos básicos
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = `$ ${product.price.toLocaleString('co-CO')}`;
    if (modalDescription) modalDescription.textContent = product.description;

    // Configurar imagen principal del modal
    if (mainImg) {
        mainImg.src = (product.images && product.images.length > 0) ? product.images[0] : product.image;
    }

    // Configurar las miniaturas de abajo
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        const imgsArray = product.images || [product.image];
        
        imgsArray.forEach((imgUrl, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgUrl;
            thumb.alt = `${product.name} - Vista ${index + 1}`;
            thumb.className = index === 0 ? 'thumb-img active' : 'thumb-img';
            thumb.style.cursor = 'pointer';
            thumb.style.width = '50px';
            thumb.style.height = '50px';
            thumb.style.objectFit = 'cover';
            thumb.style.marginRight = '10px';
            thumb.style.borderRadius = '5px';
            
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                if (mainImg) mainImg.src = imgUrl;
            });
            thumbnailsContainer.appendChild(thumb);
        });
    }

    // Configurar lista de especificaciones
    if (featuresList) {
        featuresList.innerHTML = '';
        if (product.features) {
            product.features.forEach(feat => {
                const li = document.createElement('li');
                li.textContent = feat;
                featuresList.appendChild(li);
            });
        }
    }

    // Mostrar el modal agregando la clase activa
    modal.classList.add('active');
    modal.style.display = 'flex';
};

// Función para cerrar el modal
window.closeProductDetail = function() {
    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
    }
};

// Configurar el botón de cerrar del modal al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', window.closeProductDetail);
    }
    
    // Cerrar si se hace clic fuera del contenido del modal
    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeProductDetail();
        });
    }
});
