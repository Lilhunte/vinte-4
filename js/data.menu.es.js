export const MENU_ES = {
    categories: [
        { id: "starters", name: "Entrantes" },
        { id: "fish", name: "Pescados" },
        { id: "meat", name: "Carnes" },
        { id: "veggie", name: "Vegetariano" },
        { id: "desserts", name: "Postres" },
        { id: "drinks", name: "Bebidas" },
    ],
    items: [
        // Starters
        { id: "s1", cat: "starters", name: "Cubierto", desc: "Pan regional, aceitunas marinadas, mantequilla de hierbas y aceite de oliva premium.", price: "3.50€", allergens: ["Gluten", "Lácteos"] },
        { id: "s2", cat: "starters", name: "Sopa del Día", desc: "Sopa de verduras frescas de temporada.", price: "4.00€", allergens: [] },
        { id: "s3", cat: "starters", name: "Almejas al estilo 'Bulhão Pato'", desc: "Almejas frescas salteadas en aceite de oliva, ajo y cilantro.", price: "14.00€", allergens: ["Moluscos"] },
        // Fish
        { id: "f1", cat: "fish", name: "Bacalao 'à Lagareiro'", desc: "Lomo de bacalao confitado en aceite de oliva, patatas 'a murro' y grelos salteados.", price: "22.00€", allergens: ["Pescado"] },
        { id: "f2", cat: "fish", name: "Pulpo a la Brasa", desc: "Pulpo tierno a la parrilla con puré de batata dulce y pimientos de padrón.", price: "23.50€", allergens: ["Moluscos"] },
        // Meat
        { id: "m1", cat: "meat", name: "Filete de Ternera", desc: "Filete de ternera madurado con patatas rústicas y salsa de tres pimientos.", price: "21.00€", allergens: ["Lácteos"] },
        { id: "m2", cat: "meat", name: "Secretos de Cerdo Ibérico", desc: "A la parrilla a la perfección, servido con migas de espárragos.", price: "18.50€", allergens: [] },
        // Veggie
        { id: "v1", cat: "veggie", name: "Risotto de Champiñones Silvestres", desc: "Cremoso arroz arborio con champiñones porcini, setas de ostra y parmesano.", price: "17.00€", allergens: ["Lácteos"] },
        // Desserts
        { id: "d1", cat: "desserts", name: "Crema Catalana Quemada", desc: "Receta tradicional con una costra de azúcar caramelizado.", price: "5.00€", allergens: ["Lácteos", "Huevos"] },
        { id: "d2", cat: "desserts", name: "Mousse de Chocolate Negro", desc: "Mousse aterciopelada con 70% de cacao y flor de sal.", price: "6.00€", allergens: ["Lácteos", "Huevos"] },
        // Drinks
        { id: "dr1", cat: "drinks", name: "Agua Mineral", desc: "33cl / 75cl", price: "2.00€ / 4.00€", allergens: [] },
        { id: "dr2", cat: "drinks", name: "Vino de la Casa (tinto/blanco)", desc: "Copa / Botella", price: "4.50€ / 15.00€", allergens: ["Sulfitos"] },
    ]
};
