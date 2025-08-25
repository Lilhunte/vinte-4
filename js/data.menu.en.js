export const MENU_EN = {
    categories: [
        { id: "starters", name: "Starters" },
        { id: "mains", name: "Main Courses" },
        { id: "kids", name: "Kids Menu" },
        { id: "sides", name: "Side Dishes" },
        { id: "desserts", name: "Desserts" },
    ],
    items: [
        // Starters
        { id: "s01", cat: "starters", name: "Bread, Olive Oil and Olives", desc: "Artisanal sourdough bread, extra virgin olive oil and marinated olives.", price: "€1.50", allergens: [] },
        { id: "s02", cat: "starters", name: "Carrot Cream Soup and Coriander", desc: "Flavored with coriander and made with fresh local vegetables.", price: "€2.00", allergens: [] },
        { id: "s03", cat: "starters", name: "“Chora” Codfish Soup", desc: "Traditional shipboard cuisine soup, made with fresh codfish heads.", price: "€3.00", allergens: ["Fish"] },
        { id: "s04", cat: "starters", name: "Sheep's Ricotta and Tomato", desc: "Smooth sheep ricotta paired with the freshness of tomato.", price: "€6.00", allergens: ["Dairy"] },
        { id: "s05", cat: "starters", name: "Sautéed Mushrooms", desc: "Sautéed fresh locally sourced mushrooms flavored with garlic and cilantro.", price: "€5.50", allergens: [] },
        { id: "s06", cat: "starters", name: "Garlic Shrimp", desc: "Sautéed shrimp, finished in a garlic, lemon, and butter sauce.", price: "€13.00", allergens: ["Crustaceans"] },
        { id: "s07", cat: "starters", name: "Codfish Fritters", desc: "Classic, crispy, and full of flavor.", price: "€7.00", allergens: ["Gluten", "Eggs", "Fish"] },
        { id: "s08", cat: "starters", name: "Fried Fish Bites", desc: "Fresh fish from the local market, fried until crispy.", price: "€5.50", allergens: ["Gluten", "Fish"] },
        { id: "s09", cat: "starters", name: "Grilled “Chouriço” from Beiras", desc: "Grilled artisanal sausage, with an intense flavor perfect for sharing.", price: "€9.50", allergens: [] },
        { id: "s10", cat: "starters", name: "Ox Tongue and Pickles", desc: "Ox tongue, homemade tomato sauce and red onion pickles.", price: "€5.00", allergens: [] },
        { id: "s11", cat: "starters", name: "Eggs and Ham Sausage", desc: "Scrambled eggs with artisanal ham sausage.", price: "€11.50", allergens: ["Eggs", "Gluten"] },

        // Main Courses
        { id: "m01", cat: "mains", name: "Sautéed Rice with Mushrooms", desc: "Rice sautéed with mushrooms and fresh seasonal vegetables.", price: "€10.00", allergens: [] },
        { id: "m02", cat: "mains", name: "Chickpea Stew", desc: "In a broth made with fresh local vegetables, flavored with cilantro.", price: "€10.00", allergens: [] },
        { id: "m03", cat: "mains", name: "Brothy Rice with Cod Delicacies", desc: "Brothy rice with cod delicacies, red peppers and fresh parsley.", price: "€16.50", allergens: ["Fish"] },
        { id: "m04", cat: "mains", name: "Fish and Shrimp Rice with Coriander", desc: "Fresh and succulent shrimp in brothy rice flavored with coriander.", price: "€18.50", allergens: ["Fish", "Crustaceans"] },
        { id: "m05", cat: "mains", name: "Special Cod Loin with Chickpea Duo", desc: "Special cut of cod, served with velvety puree and sautéed chickpeas.", price: "€17.50", allergens: ["Fish"] },
        { id: "m06", cat: "mains", name: "Octopus Rice in Double Cooking", desc: "Brothy octopus rice with bell pepper duo, tomato, and fresh parsley.", price: "€20.50", allergens: ["Molluscs"] },
        { id: "m07", cat: "mains", name: "Liver with Onions and Mashed Potatoes", desc: "Beef liver, cooked with onions and served with rustic mashed potatoes.", price: "€12.00", allergens: [] },
        { id: "m08", cat: "mains", name: "Sirloin Steak, Garlic Butter and Rustic Fries", desc: "Grilled national veal steak, finished with garlic butter, accompanied by crispy fries.", price: "€20.50", allergens: ["Dairy"] },
        { id: "m09", cat: "mains", name: "Braised Beef Cheeks, Vegetables and Mashed Potatoes", desc: "Beef cheeks slowly braised in red wine, served with rustic mashed potatoes and seasonal vegetables.", price: "€16.50", allergens: [] },
        { id: "m10", cat: "mains", name: "Grilled Iberian Black Pork Pluma with Mushroom 'Açorda'", desc: "Grilled Iberian black pork pluma served with mushroom açorda, flavored with cilantro and garlic.", price: "€17.50", allergens: ["Gluten"] },

        // Kids Menu
        { id: "k01", cat: "kids", name: "Grilled Beef Fillet", desc: "Grilled beef served with white rice and homemade fries.", price: "€8.50", allergens: [] },

        // Side Dishes
        { id: "sd01", cat: "sides", name: "Boiled Rice", desc: "", price: "€1.50", allergens: [] },
        { id: "sd02", cat: "sides", name: "Tomato and Onion Salad", desc: "", price: "€1.50", allergens: [] },
        { id: "sd03", cat: "sides", name: "Homemade Fries", desc: "", price: "€1.50", allergens: [] },
        { id: "sd04", cat: "sides", name: "Mashed Potatoes", desc: "", price: "€1.50", allergens: [] },
        { id: "sd05", cat: "sides", name: "Sautéed Seasonal Vegetables", desc: "", price: "€1.50", allergens: [] },
        { id: "sd06", cat: "sides", name: "Sourdough Bread", desc: "", price: "€1.50", allergens: ["Gluten"] },

        // Desserts
        { id: "d01", cat: "desserts", name: "Creamy Sheep's Cheese and Honey", desc: "Cured sheep cheese served with mountain honey and crunchy walnuts.", price: "€7.00", allergens: ["Dairy", "Nuts"] },
        { id: "d02", cat: "desserts", name: "Moist Chocolate Cake", desc: "Soft textured chocolate cake, dusted with cocoa powder.", price: "€4.00", allergens: ["Gluten", "Eggs", "Dairy"] },
        { id: "d03", cat: "desserts", name: "Leite Creme Infused with Chamomile Tea, Burnt to Order", desc: "Creamy and smooth, topped with a layer of caramelized sugar burnt to order.", price: "€4.00", allergens: ["Dairy", "Eggs"] },
        { id: "d04", cat: "desserts", name: "Hazelnut Mousse and Almond Praline", desc: "Creamy hazelnut mousse, enriched with crispy almond praline.", price: "€4.00", allergens: ["Dairy", "Eggs", "Nuts"] },
        { id: "d05", cat: "desserts", name: "Dark Chocolate Mousse with Salted Peanut Caramel", desc: "A smooth and creamy chocolate mousse with an irresistible salted peanut caramel.", price: "€4.00", allergens: ["Dairy", "Peanuts"] },
    ]
};
