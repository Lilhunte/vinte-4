export const MENU_PT = {
    categories: [
        { id: "starters", name: "Entradas" },
        { id: "fish", name: "Peixes" },
        { id: "meat", name: "Carnes" },
        { id: "veggie", name: "Vegetarianos" },
        { id: "desserts", name: "Sobremesas" },
        { id: "drinks", name: "Bebidas" },
    ],
    items: [
        // Starters
        { id: "s1", cat: "starters", name: "Couvert", desc: "Pão regional, azeitonas marinadas, manteiga de ervas e azeite premium.", price: "3.50€", allergens: ["Glúten", "Laticínios"] },
        { id: "s2", cat: "starters", name: "Sopa do Dia", desc: "Sopa de legumes frescos da estação.", price: "4.00€", allergens: [] },
        { id: "s3", cat: "starters", name: "Amêijoas à Bulhão Pato", desc: "Amêijoas frescas salteadas em azeite, alho e coentros.", price: "14.00€", allergens: ["Moluscos"] },
        // Fish
        { id: "f1", cat: "fish", name: "Bacalhau à Lagareiro", desc: "Lombo de bacalhau confitado em azeite, batata a murro e grelos salteados.", price: "22.00€", allergens: ["Peixe"] },
        { id: "f2", cat: "fish", name: "Polvo na Brasa", desc: "Polvo tenro grelhado na brasa com puré de batata doce e pimentos padrón.", price: "23.50€", allergens: ["Moluscos"] },
        // Meat
        { id: "m1", cat: "meat", name: "Naco de Vitela", desc: "Naco de vitela maturado, batata rústica e um molho de três pimentas.", price: "21.00€", allergens: ["Laticínios"] },
        { id: "m2", cat: "meat", name: "Secretos de Porco Preto", desc: "Grelhados na perfeição, servidos com migas de espargos.", price: "18.50€", allergens: [] },
        // Veggie
        { id: "v1", cat: "veggie", name: "Risotto de Cogumelos Selvagens", desc: "Arroz arbório cremoso com cogumelos porcini, pleurotus e parmesão.", price: "17.00€", allergens: ["Laticínios"] },
        // Desserts
        { id: "d1", cat: "desserts", name: "Leite Creme Queimado", desc: "Receita tradicional com uma crosta de açúcar caramelizado.", price: "5.00€", allergens: ["Laticínios", "Ovos"] },
        { id: "d2", cat: "desserts", name: "Mousse de Chocolate Negro", desc: "Mousse aveludada com 70% cacau e flor de sal.", price: "6.00€", allergens: ["Laticínios", "Ovos"] },
        // Drinks
        { id: "dr1", cat: "drinks", name: "Água Mineral", desc: "33cl / 75cl", price: "2.00€ / 4.00€", allergens: [] },
        { id: "dr2", cat: "drinks", name: "Vinho da Casa (tinto/branco)", desc: "Copo / Garrafa", price: "4.50€ / 15.00€", allergens: ["Sulfitos"] },
    ]
};
