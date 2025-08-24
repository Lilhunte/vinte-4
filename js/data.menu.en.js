export const MENU_EN = {
    categories: [
        { id: "starters", name: "Starters" },
        { id: "fish", name: "Fish" },
        { id: "meat", name: "Meat" },
        { id: "veggie", name: "Vegetarian" },
        { id: "desserts", name: "Desserts" },
        { id: "drinks", name: "Beverages" },
    ],
    items: [
        // Starters
        { id: "s1", cat: "starters", name: "Couvert", desc: "Regional bread, marinated olives, herb butter, and premium olive oil.", price: "3.50€", allergens: ["Gluten", "Dairy"] },
        { id: "s2", cat: "starters", name: "Soup of the Day", desc: "Fresh seasonal vegetable soup.", price: "4.00€", allergens: [] },
        { id: "s3", cat: "starters", name: "Clams 'Bulhão Pato' style", desc: "Fresh clams sautéed in olive oil, garlic, and cilantro.", price: "14.00€", allergens: ["Molluscs"] },
        // Fish
        { id: "f1", cat: "fish", name: "Codfish 'à Lagareiro'", desc: "Cod loin confit in olive oil, punched potatoes, and sautéed greens.", price: "22.00€", allergens: ["Fish"] },
        { id: "f2", cat: "fish", name: "Grilled Octopus", desc: "Tender octopus grilled over charcoal with sweet potato purée and padrón peppers.", price: "23.50€", allergens: ["Molluscs"] },
        // Meat
        { id: "m1", cat: "meat", name: "Veal Steak", desc: "Matured veal steak with rustic potatoes and a three-pepper sauce.", price: "21.00€", allergens: ["Dairy"] },
        { id: "m2", cat: "meat", name: "Iberian Black Pork 'Secretos'", desc: "Grilled to perfection, served with asparagus migas.", price: "18.50€", allergens: [] },
        // Veggie
        { id: "v1", cat: "veggie", name: "Wild Mushroom Risotto", desc: "Creamy arborio rice with porcini, oyster mushrooms, and parmesan.", price: "17.00€", allergens: ["Dairy"] },
        // Desserts
        { id: "d1", cat: "desserts", name: "Burnt Custard", desc: "Traditional recipe with a caramelized sugar crust.", price: "5.00€", allergens: ["Dairy", "Eggs"] },
        { id: "d2", cat: "desserts", name: "Dark Chocolate Mousse", desc: "Velvety mousse with 70% cocoa and a touch of sea salt.", price: "6.00€", allergens: ["Dairy", "Eggs"] },
        // Drinks
        { id: "dr1", cat: "drinks", name: "Mineral Water", desc: "33cl / 75cl", price: "2.00€ / 4.00€", allergens: [] },
        { id: "dr2", cat: "drinks", name: "House Wine (red/white)", desc: "Glass / Bottle", price: "4.50€ / 15.00€", allergens: ["Sulphites"] },
    ]
};
