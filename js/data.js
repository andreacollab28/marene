// Configuración de Categorías Habilitadas en MARENE
window.CATEGORIES = [
    { id: "all", label: "Todos", enabled: true },
    { id: "collares", label: "Collares", enabled: true },
    { id: "cinturones", label: "Cinturones", enabled: true }
];

// Base de Datos de Productos
window.PRODUCTS = [
    {
        id: "cinturon-maria",
        name: "Cinturón María",
        price: 35000,
        category: "cinturones",
        categoryLabel: "Cinturones",
        image: "assets/images/maria1.JPG", 
        images: [
            "assets/images/maria1.JPG",
            "assets/images/maria2.JPG"
        ],
        // Definimos los colores disponibles y un color seleccionado por defecto
        colors: ["Blanco", "Dorado"],
        selectedColor: "Blanco",
        description: "", // La dejamos vacía porque me pediste quitar el texto largo
        features: [
            "Referencia: MARIA",
            "Tejido artesanalmente flor por flor",
            "Elaborado con perlas delicadas y mostacillas seleccionadas",
            "Incluye dije colgante floral ajustable"
        ]
    }
];
