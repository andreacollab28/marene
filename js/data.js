// Base de datos de productos para MARENE
const PRODUCTS = [
    {
        id: "col-aura",
        name: "Collar Aura de Oro",
        category: "collares",
        categoryLabel: "Collares",
        price: 89000,
        rating: 4.9,
        reviewsCount: 24,
        description: "Un collar delicado con una cadena de eslabones finos y un colgante circular texturizado que captura la luz de manera espectacular. Bañado en oro de 24k, es la pieza perfecta tanto para llevar sola como en combinación.",
        material: "Latón con baño de oro de 24 quilates",
        dimensions: "Cadena de 45 cm + extensor de 5 cm. Colgante de 1.2 cm de diámetro.",
        care: "Evitar el contacto con perfumes, cremas y agua para prolongar el brillo y la duración del baño de oro.",
        features: [
            "Hipoalergénico y libre de níquel",
            "Baño de oro de 24k de alta durabilidad",
            "Diseñado y ensamblado en Colombia"
        ],
        mainImage: "assets/images/collar-aura-1.png",
        hoverImage: "assets/images/collar-aura-2.png",
        images: [
            "assets/images/collar-aura-1.png",
            "assets/images/collar-aura-2.png",
            "assets/images/collar-aura-3.png"
        ],
        featured: true,
        new: true
    },
    {
        id: "art-solstice",
        name: "Aretes Solstice",
        category: "aretes",
        categoryLabel: "Aretes",
        price: 65000,
        rating: 4.8,
        reviewsCount: 18,
        description: "Aretes tipo arracada o huggies con una hilera de circonias cúbicas engastadas a mano que aportan un brillo sutil pero sofisticado. Ideales para iluminar tu rostro a diario.",
        material: "Plata de Ley 925 con baño de oro de 18 quilates y circonias cúbicas",
        dimensions: "Diámetro interno de 9 mm. Grosor de 2 mm.",
        care: "Limpiar suavemente con un paño de microfibra seco después de cada uso.",
        features: [
            "Plata de ley 925 premium",
            "Circonias engastadas (no pegadas)",
            "Cierre seguro tipo click"
        ],
        mainImage: "assets/images/aretes-solstice-1.png",
        hoverImage: "assets/images/aretes-solstice-2.png",
        images: [
            "assets/images/aretes-solstice-1.png",
            "assets/images/aretes-solstice-2.png"
        ],
        featured: true,
        new: false
    },
    {
        id: "pul-twist",
        name: "Pulsera Twist Minimal",
        category: "pulseras",
        categoryLabel: "Pulseras",
        price: 55000,
        rating: 4.7,
        reviewsCount: 15,
        description: "Una pulsera rígida pero flexible con un diseño trenzado minimalista. Su estructura abierta permite ajustarse cómodamente a diferentes tamaños de muñeca, ofreciendo elegancia sin esfuerzo.",
        material: "Cobre refinado con baño de oro de 18 quilates",
        dimensions: "Diámetro ajustable de 5.5 cm a 6.5 cm. Grosor de 3 mm.",
        care: "Guardar en su bolsa de tela original individual para evitar rayaduras.",
        features: [
            "Ajustable y ergonómica",
            "Acabado espejo pulido a mano",
            "Ideal para combinar con otras pulseras"
        ],
        mainImage: "assets/images/pulsera-twist-1.png",
        hoverImage: "assets/images/pulsera-twist-2.png",
        images: [
            "assets/images/pulsera-twist-1.png",
            "assets/images/pulsera-twist-2.png"
        ],
        featured: true,
        new: false
    },
    {
        id: "an-twist",
        name: "Anillo Twist Fino",
        category: "anillos",
        categoryLabel: "Anillos",
        price: 48000,
        rating: 5.0,
        reviewsCount: 9,
        description: "Anillo de diseño retorcido ultrafino. Su silueta orgánica es perfecta para llevar en conjunto (stacking) o como un toque sutil y femenino por sí solo.",
        material: "Plata de Ley 925 con baño de oro de 18 quilates",
        dimensions: "Disponible en tallas 5, 6, 7 y 8. Grosor de 1.2 mm.",
        care: "Evitar golpes y guardar en lugares secos.",
        features: [
            "Plata de ley 925",
            "Estructura ultrafina y cómoda",
            "Ideal para apilar"
        ],
        mainImage: "assets/images/anillo-twist-1.png",
        hoverImage: "assets/images/anillo-twist-2.png",
        images: [
            "assets/images/anillo-twist-1.png",
            "assets/images/anillo-twist-2.png"
        ],
        featured: false,
        new: true
    },
    {
        id: "set-celeste",
        name: "Set Celeste Gold",
        category: "sets",
        categoryLabel: "Sets",
        price: 135000,
        rating: 4.9,
        reviewsCount: 31,
        description: "El dúo perfecto de elegancia. Este set incluye nuestro aclamado Collar Aura y un par de Aretes Solstice a un precio especial. Diseñado para solucionar tu look diario en segundos.",
        material: "Mix de Plata de Ley 925 y Latón con baños de oro premium",
        dimensions: "Dimensiones individuales correspondientes a cada pieza.",
        care: "Consulte los cuidados específicos de cada pieza incluidos en la tarjeta de empaque.",
        features: [
            "Ahorro del 15% comprando el set completo",
            "Incluye estuche de regalo premium de MARENE",
            "Piezas perfectamente combinables"
        ],
        mainImage: "assets/images/set-celeste-1.png",
        hoverImage: "assets/images/set-celeste-2.png",
        images: [
            "assets/images/set-celeste-1.png",
            "assets/images/set-celeste-2.png"
        ],
        featured: true,
        new: true
    },
    {
        id: "col-luna",
        name: "Collar Luna Creciente",
        category: "collares",
        categoryLabel: "Collares",
        price: 78000,
        rating: 4.8,
        reviewsCount: 12,
        description: "Collar inspirado en el misticismo del cielo nocturno. Cuenta con un dije en forma de luna creciente de bordes redondeados y pulidos que resalta sutilmente sobre el pecho.",
        material: "Latón con baño de oro de 24 quilates",
        dimensions: "Cadena de 40 cm + extensor de 5 cm. Dije de 1 cm.",
        care: "Limpiar con paño seco y evitar cremas corporales.",
        features: [
            "Dije pulido espejo",
            "Cadena de eslabón plano ultrabrillante",
            "Estilo minimalista"
        ],
        mainImage: "assets/images/collar-luna-1.png",
        hoverImage: "assets/images/collar-luna-2.png",
        images: [
            "assets/images/collar-luna-1.png",
            "assets/images/collar-luna-2.png"
        ],
        featured: false,
        new: false
    },
    {
        id: "art-cascade",
        name: "Aretes Cascada de Hilo",
        category: "aretes",
        categoryLabel: "Aretes",
        price: 68000,
        rating: 4.9,
        reviewsCount: 14,
        description: "Aretes colgantes largos compuestos por cadenas ultrafinas que caen con un movimiento elegante y fluido. Una pieza de diseño contemporáneo que aporta verticalidad y sofisticación.",
        material: "Plata de Ley 925 con baño de oro de 18 quilates",
        dimensions: "Largo total de 5.5 cm.",
        care: "Guardar extendidos para evitar enredos en las cadenas finas.",
        features: [
            "Movimiento fluido muy elegante",
            "Cierre de gancho cómodo",
            "Peso ultraligero"
        ],
        mainImage: "assets/images/aretes-cascade-1.png",
        hoverImage: "assets/images/aretes-cascade-2.png",
        images: [
            "assets/images/aretes-cascade-1.png",
            "assets/images/aretes-cascade-2.png"
        ],
        featured: false,
        new: true
    },
    {
        id: "pul-pearl",
        name: "Pulsera Perlas de Río",
        category: "pulseras",
        categoryLabel: "Pulseras",
        price: 72000,
        rating: 4.9,
        reviewsCount: 22,
        description: "Una pulsera que combina la modernidad de una cadena de eslabones alargados con la elegancia clásica de perlas naturales de río seleccionadas individualmente. Cada perla es única.",
        material: "Acero inoxidable hipoalergénico con baño de oro de 18k y perlas naturales cultivadas de agua dulce",
        dimensions: "Largo ajustable de 16 cm a 20 cm.",
        care: "Las perlas son orgánicas; evitar el contacto directo con químicos o alcohol.",
        features: [
            "Perlas de agua dulce genuinas",
            "Base de acero inoxidable (resistente al agua)",
            "Broche marinero elegante"
        ],
        mainImage: "assets/images/pulsera-perlas-1.png",
        hoverImage: "assets/images/pulsera-perlas-2.png",
        images: [
            "assets/images/pulsera-perlas-1.png",
            "assets/images/pulsera-perlas-2.png"
        ],
        featured: false,
        new: false
    },
    {
        id: "an-solitaire",
        name: "Anillo Solitario Petit",
        category: "anillos",
        categoryLabel: "Anillos",
        price: 52000,
        rating: 4.6,
        reviewsCount: 8,
        description: "Un tributo al minimalismo clásico. Este anillo cuenta con una sola circonia engastada en garras sobre una banda delgada. Delicadeza en su máxima expresión.",
        material: "Plata de Ley 925 con baño de oro de 18 quilates y circonia central",
        dimensions: "Disponible en tallas 5, 6, 7 y 8. Circonia de 3 mm.",
        care: "Lavar con agua tibia y jabón suave ocasionalmente para recuperar brillo.",
        features: [
            "Diseño atemporal",
            "Circonia grado AAA de alta refracción",
            "Banda pulida confort"
        ],
        mainImage: "assets/images/anillo-solitario-1.png",
        hoverImage: "assets/images/anillo-solitario-2.png",
        images: [
            "assets/images/anillo-solitario-1.png",
            "assets/images/anillo-solitario-2.png"
        ],
        featured: false,
        new: false
    },
    {
        id: "set-luxe",
        name: "Set Luxe Twist",
        category: "sets",
        categoryLabel: "Sets",
        price: 120000,
        rating: 5.0,
        reviewsCount: 11,
        description: "Nuestro combo más vendido para manos sofisticadas. Incluye la Pulsera Twist Minimal y el Anillo Twist Fino en juego perfecto. Una declaración de estilo minimalista en tonos dorados.",
        material: "Plata de ley y cobre refinado con baños de oro de 18k",
        dimensions: "Ver dimensiones detalladas en las piezas individuales.",
        care: "Guardar en su estuche original especial para el set.",
        features: [
            "Precio especial en conjunto",
            "Texturas a juego para un look unificado",
            "Incluye packaging ecológico y premium"
        ],
        mainImage: "assets/images/set-luxe-1.png",
        hoverImage: "assets/images/set-luxe-2.png",
        images: [
            "assets/images/set-luxe-1.png",
            "assets/images/set-luxe-2.png"
        ],
        featured: true,
        new: false
    }
];

// Hacer disponible globalmente o por módulo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTS };
} else {
    window.PRODUCTS = PRODUCTS;
}
