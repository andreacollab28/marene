/**
 * Catálogo principal de MARENE.
 *
 * Administra tu tienda desde este único archivo.
 * Para agregar un producto nuevo, solo edita `PRODUCTS` y copia las imágenes a `assets/images`.
 */

const CATEGORIES = [
    { id: 'collares', label: 'Collares', enabled: true },
    { id: 'aretes', label: 'Aretes', enabled: false },
    { id: 'pulseras', label: 'Pulseras', enabled: false },
    { id: 'anillos', label: 'Anillos', enabled: false },
    { id: 'sets', label: 'Sets', enabled: false }
];

// Productos reales de la tienda.
// No incluyas datos ficticios aquí.
const PRODUCTS = [
    /*
    Ejemplo de producto:
    {
        id: 'col-aura',
        name: 'Collar Aura',
        category: 'collares',
        categoryLabel: 'Collares',
        price: 119000,
        rating: 4.9,
        reviewsCount: 12,
        description: 'Descripción breve y elegante para tu producto.',
        material: 'Latón con baño de oro de 24 quilates',
        dimensions: 'Cadena 45 cm + extensor 5 cm',
        care: 'Evitar el contacto con agua y perfume.',
        features: [
            'Hipoalergénico',
            'Baño de oro duradero',
            'Diseño minimalista'
        ],
        mainImage: 'assets/images/collar-aura-1.png',
        hoverImage: 'assets/images/collar-aura-2.png',
        images: [
            'assets/images/collar-aura-1.png',
            'assets/images/collar-aura-2.png'
        ],
        featured: true,
        new: true
    }
    */
];

const CONFIG = {
    siteName: 'MARENE',
    whatsappNumber: '573001234567',
    whatsappIntro: 'Hola MARENE, quiero recibir atención personalizada para mi pedido.',
    whatsappOrderIntro: '✨ *NUEVO PEDIDO - MARENE* ✨\n\nHola, me gustaría realizar el siguiente pedido:',
    heroDescription: 'Elegancia sutil y diseño minimalista para acompañarte en cada ocasión.'
};

// Hacer disponible globalmente o por módulo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTS, CATEGORIES, CONFIG };
} else {
    window.PRODUCTS = PRODUCTS;
    window.CATEGORIES = CATEGORIES;
    window.CONFIG = CONFIG;
}
