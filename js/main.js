// Funcionalidades globales para MARENE

// Funciones Auxiliares
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// 1. Sticky Header al hacer Scroll
function handleHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// 2. Control de Menú Móvil (Drawer Lateral)
function initMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const drawer = document.getElementById('mobile-nav-drawer');
    const overlay = document.getElementById('site-overlay');
    const closeBtn = document.getElementById('mobile-nav-close-btn');
    
    if (!toggleBtn || !drawer || !overlay) return;
    
    const openMenu = () => {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    };
    
    const closeMenu = () => {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };
    
    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Cerrar menú al hacer clic en un enlace móvil (para SPAs o anclas)
    const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// 3. Buscador Instantáneo
function initInstantSearch() {
    const searchBtn = document.getElementById('search-toggle-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close-btn');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    
    if (!searchBtn || !searchOverlay || !searchInput || !resultsContainer) return;
    
    // Alternar visibilidad de la barra de búsqueda
    const openSearch = () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    };
    
    const closeSearch = () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
    };
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchOverlay.classList.contains('active')) {
            closeSearch();
        } else {
            openSearch();
        }
    });
    
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    
    // Cerrar buscador con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
    });
    
    // Lógica de filtrado en tiempo real
    const handleSearchInput = () => {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'none';
            return;
        }
        
        if (!window.PRODUCTS) return;
        
        // Filtrar productos
        const filtered = window.PRODUCTS.filter(product => {
            return (
                product.name.toLowerCase().includes(query) ||
                product.categoryLabel.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
            );
        }).slice(0, 5); // Limitar a 5 resultados sugeridos
        
        if (filtered.length === 0) {
            const safeQuery = escapeHTML(searchInput.value);
            resultsContainer.innerHTML = `
                <div style="padding: 1rem; text-align: center; font-size: 0.9rem; color: var(--color-text-secondary);">
                    No se encontraron productos para "${safeQuery}"
                </div>
            `;
            resultsContainer.style.display = 'block';
            return;
        }
        
        // Renderizar resultados
        let html = '';
        filtered.forEach(product => {
            html += `
                <a href="producto.html?id=${product.id}" class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('active')">
                    <img src="${product.mainImage}" alt="${product.name}">
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <p>${window.formatCOP ? window.formatCOP(product.price) : '$' + product.price}</p>
                    </div>
                </a>
            `;
        });
        
        resultsContainer.innerHTML = html;
        resultsContainer.style.display = 'block';
    };

    searchInput.addEventListener('input', debounce(handleSearchInput, 200));
}

// 4. Animación de Revelado en Scroll (Intersection Observer)
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length === 0) return;
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Dejar de observar una vez animado
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // viewport
        threshold: 0.15, // se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px" // activa ligeramente antes de entrar
    });
    
    reveals.forEach(element => {
        revealObserver.observe(element);
    });
}

// 5. Cargar Footer Dinámico de Derechos de Autor (Año actual)
function initFooterYear() {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// Inicializar todas las funcionalidades al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Escuchar el scroll del header con throttle mediante requestAnimationFrame
    let scrollTicker = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicker) {
            window.requestAnimationFrame(() => {
                handleHeaderScroll();
                scrollTicker = false;
            });
            scrollTicker = true;
        }
    });
    handleHeaderScroll(); // comprobar estado inicial
    
    // Inicializaciones
    initMobileMenu();
    initInstantSearch();
    initScrollReveal();
    initFooterYear();
});

// Función global para generar el HTML de una tarjeta de producto (Product Card)
function createProductCardHTML(product) {
    const isFav = window.isFavorite ? window.isFavorite(product.id) : false;
    const heartFill = isFav ? 'currentColor' : 'none';
    const activeClass = isFav ? 'active' : '';
    const formatFn = window.formatCOP || (val => `$${val}`);
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card-image">
                <a href="producto.html?id=${product.id}">
                    <img src="${product.mainImage}" alt="${product.name}" class="product-main-img">
                    <img src="${product.hoverImage}" alt="${product.name}" class="product-hover-img">
                </a>
                <button class="fav-btn ${activeClass}" data-id="${product.id}" onclick="toggleFavorite('${product.id}')" aria-label="Agregar a favoritos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${heartFill}" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                    </svg>
                </button>
                ${product.new ? '<span class="product-badge badge-new">Nuevo</span>' : ''}
            </div>
            <div class="product-card-info">
                <p class="product-card-category">${product.categoryLabel}</p>
                <h3 class="product-card-title"><a href="producto.html?id=${product.id}">${product.name}</a></h3>
                <div class="product-card-footer">
                    <span class="product-card-price">${formatFn(product.price)}</span>
                    <button class="btn-add-cart-icon" onclick="addToCart('${product.id}')" aria-label="Agregar al carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

window.createProductCardHTML = createProductCardHTML;
