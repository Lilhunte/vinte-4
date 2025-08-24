export const MENU_FR = {
    categories: [
        { id: "starters", name: "Entrées" },
        { id: "fish", name: "Poissons" },
        { id: "meat", name: "Viandes" },
        { id: "veggie", name: "Végétarien" },
        { id: "desserts", name: "Desserts" },
        { id: "drinks", name: "Boissons" },
    ],
    items: [
        // Starters
        { id: "s1", cat: "starters", name: "Couvert", desc: "Pain régional, olives marinées, beurre aux herbes et huile d'olive premium.", price: "3.50€", allergens: ["Gluten", "Produits laitiers"] },
        { id: "s2", cat: "starters", name: "Soupe du Jour", desc: "Soupe de légumes frais de saison.", price: "4.00€", allergens: [] },
        { id: "s3", cat: "starters", name: "Palourdes style 'Bulhão Pato'", desc: "Palourdes fraîches sautées à l'huile d'olive, ail et coriandre.", price: "14.00€", allergens: ["Mollusques"] },
        // Fish
        { id: "f1", cat: "fish", name: "Morue 'à Lagareiro'", desc: "Filet de morue confit à l'huile d'olive, pommes de terre écrasées et verts de navet sautés.", price: "22.00€", allergens: ["Poisson"] },
        { id: "f2", cat: "fish", name: "Poulpe Grillé", desc: "Poulpe tendre grillé au charbon de bois avec purée de patates douces et poivrons padrón.", price: "23.50€", allergens: ["Mollusques"] },
        // Meat
        { id: "m1", cat: "meat", name: "Steak de Veau", desc: "Steak de veau maturé avec pommes de terre rustiques et sauce aux trois poivres.", price: "21.00€", allergens: ["Produits laitiers"] },
        { id: "m2", cat: "meat", name: "Secret de Porc Ibérique", desc: "Grillé à la perfection, servi avec des 'migas' aux asperges.", price: "18.50€", allergens: [] },
        // Veggie
        { id: "v1", cat: "veggie", name: "Risotto aux Champignons Sauvages", desc: "Riz arborio crémeux avec cèpes, pleurotes et parmesan.", price: "17.00€", allergens: ["Produits laitiers"] },
        // Desserts
        { id: "d1", cat: "desserts", name: "Crème Brûlée", desc: "Recette traditionnelle avec une croûte de sucre caramélisé.", price: "5.00€", allergens: ["Produits laitiers", "Oeufs"] },
        { id: "d2", cat: "desserts", name: "Mousse au Chocolat Noir", desc: "Mousse veloutée avec 70% de cacao et fleur de sel.", price: "6.00€", allergens: ["Produits laitiers", "Oeufs"] },
        // Drinks
        { id: "dr1", cat: "drinks", name: "Eau Minérale", desc: "33cl / 75cl", price: "2.00€ / 4.00€", allergens: [] },
        { id: "dr2", cat: "drinks", name: "Vin Maison (rouge/blanc)", desc: "Verre / Bouteille", price: "4.50€ / 15.00€", allergens: ["Sulfites"] },
    ]
};
