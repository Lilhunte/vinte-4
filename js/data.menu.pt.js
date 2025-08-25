export const MENU_PT = {
    categories: [
        { id: "starters", name: "Entradas" },
        { id: "mains", name: "Pratos Principais" },
        { id: "kids", name: "Menu Infantil" },
        { id: "sides", name: "Acompanhamentos" },
        { id: "desserts", name: "Sobremesas" },
    ],
    items: [
        // Entradas
        { id: "s01", cat: "starters", name: "Pão, Azeite e Azeitonas", desc: "Pão de fermentação lenta, azeite extra virgem e azeitonas marinadas.", price: "€1.50", allergens: [] },
        { id: "s02", cat: "starters", name: "Creme de Cenoura e Coentros", desc: "Aromatizado com coentros e preparado com legumes frescos locais.", price: "€2.00", allergens: [] },
        { id: "s03", cat: "starters", name: "“Chora” de Bacalhau", desc: "Sopa tradicional da gastronomia de bordo, feita com caras de bacalhau fresco.", price: "€3.00", allergens: [] },
        { id: "s04", cat: "starters", name: "Requeijão de Ovelha e Tomate", desc: "Requeijão suave de ovelha, harmonizado com a frescura do tomate.", price: "€6.00", allergens: [] },
        { id: "s05", cat: "starters", name: "Cogumelos Salteados", desc: "Cogumelos frescos de produção local salteados e aromatizados com alho e coentros.", price: "€5.50", allergens: [] },
        { id: "s06", cat: "starters", name: "Camarões ao Alho", desc: "Salteados e finalizados num molho de alho, limão e manteiga.", price: "€13.00", allergens: ["Crustáceos"] },
        { id: "s07", cat: "starters", name: "Pataniscas de Bacalhau", desc: "Clássicas, crocantes e cheias de sabor.", price: "€7.00", allergens: ["Glúten", "Ovos", "Peixe"] },
        { id: "s08", cat: "starters", name: "Peixinhos Fritos", desc: "Peixe fresco da lota, frito até ficar crocante.", price: "€5.50", allergens: ["Glúten", "Peixe"] },
        { id: "s09", cat: "starters", name: "Chouriço Grelhado das Beiras", desc: "Grelhado de produção artesanal, com sabor intenso perfeito para partilhar.", price: "€9.50", allergens: [] },
        { id: "s10", cat: "starters", name: "Língua de Boi e Pickles", desc: "Língua de boi, molho de tomate caseiro e pickles de cebola roxa.", price: "€5.00", allergens: [] },
        { id: "s11", cat: "starters", name: "Ovos e Alheira de Presunto", desc: "Ovos mexidos com alheira caseira de presunto.", price: "€11.50", allergens: ["Ovos", "Glúten"] },

        // Pratos Principais
        { id: "m01", cat: "mains", name: "Salteado de Arroz com Cogumelos", desc: "Arroz salteado com cogumelos e legumes frescos da época.", price: "€10.00", allergens: [] },
        { id: "m02", cat: "mains", name: "Estufado de Grão-de-Bico", desc: "Num caldo feito com legumes frescos locais, aromatizado com coentros.", price: "€10.00", allergens: [] },
        { id: "m03", cat: "mains", name: "Arroz de Samos de Bacalhau", desc: "Arroz malandrinho com delícias de bacalhau, pimentos vermelhos e salsa fresca.", price: "€16.50", allergens: ["Peixe"] },
        { id: "m04", cat: "mains", name: "Arroz de Peixe, Gambas e Coentros", desc: "Camarão fresco e suculento em arroz malandrinho aromatizado com coentros.", price: "€18.50", allergens: ["Peixe", "Crustáceos"] },
        { id: "m05", cat: "mains", name: "Lombinho do Cachapo com Duo de Grão-de-Bico", desc: "Corte especial de bacalhau, servido com puré aveludado e grão-de-bico salteado.", price: "€17.50", allergens: ["Peixe"] },
        { id: "m06", cat: "mains", name: "Arroz de Polvo em Dupla Confeção", desc: "Arroz de polvo malandrinho com duo de pimentos, tomate e salsa fresca.", price: "€20.50", allergens: ["Moluscos"] },
        { id: "m07", cat: "mains", name: "Iscas com Cebola e Esmagada de Batata", desc: "Fígado de bovino, cozinhado com cebola e servido com puré de batata rústico.", price: "€12.00", allergens: [] },
        { id: "m08", cat: "mains", name: "Bife da Vazia, Manteiga d’Alho e Batata Rústica", desc: "Bife de vitela nacional grelhado, finalizado com manteiga de alho, acompanhado de batatas fritas crocantes.", price: "€20.50", allergens: ["Laticínios"] },
        { id: "m09", cat: "mains", name: "Bochecha de Novilho Estufada, Legumes e Esmagada de Batata", desc: "Bochechas de novilho estufadas lentamente em vinho tinto, servidas com puré de batata rústico e legumes da época.", price: "€16.50", allergens: [] },
        { id: "m10", cat: "mains", name: "Plumas do Cachapo de Porco Preto com Açorda de Cogumelos", desc: "Pluma de porco preto ibérico grelhada servida com açorda de cogumelos, aromatizada com coentros e alho.", price: "€17.50", allergens: ["Glúten"] },

        // Menu Infantil
        { id: "k01", cat: "kids", name: "Preguinho no Prato", desc: "Carne de novilho grelhada, acompanhada de arroz branco e batatas fritas caseiras.", price: "€8.50", allergens: [] },

        // Acompanhamentos
        { id: "sd01", cat: "sides", name: "Arroz Cozido", desc: "", price: "€1.50", allergens: [] },
        { id: "sd02", cat: "sides", name: "Salada Tomate e Cebola", desc: "", price: "€1.50", allergens: [] },
        { id: "sd03", cat: "sides", name: "Batata Frita Caseira", desc: "", price: "€1.50", allergens: [] },
        { id: "sd04", cat: "sides", name: "Esmagada de Batata", desc: "", price: "€1.50", allergens: [] },
        { id: "sd05", cat: "sides", name: "Legume da Época Salteado", desc: "", price: "€1.50", allergens: [] },
        { id: "sd06", cat: "sides", name: "Pão Massa Mãe", desc: "", price: "€1.50", allergens: ["Glúten"] },

        // Sobremesas
        { id: "d01", cat: "desserts", name: "Queijo de Ovelha Amanteigado e Mel das Beiras", desc: "Queijo de ovelha curado, acompanhado por mel de altitude e nozes crocantes.", price: "€7.00", allergens: ["Laticínios", "Frutos de casca rija"] },
        { id: "d02", cat: "desserts", name: "Bolo de Chocolate Cacau 62% Húmido", desc: "Bolo de chocolate de textura macia, polvilhado com pó de cacau.", price: "€4.00", allergens: ["Glúten", "Ovos", "Laticínios"] },
        { id: "d03", cat: "desserts", name: "Leite Creme com Infusão de Camomila Queimado ao Momento", desc: "Cremoso e suave, com uma camada de açúcar queimado na hora.", price: "€4.00", allergens: ["Laticínios", "Ovos"] },
        { id: "d04", cat: "desserts", name: "Mousse de Avelã e Praliné de Amêndoa", desc: "Mousse cremosa de avelã, enriquecida com crocante praliné de amêndoa.", price: "€4.00", allergens: ["Laticínios", "Ovos", "Frutos de casca rija"] },
        { id: "d05", cat: "desserts", name: "Mousse de Chocolate Negro e Caramelo de Amendoim Salgado", desc: "Mousse de chocolate suave e cremosa com um irresistível caramelo de amendoim salgado.", price: "€4.00", allergens: ["Laticínios", "Amendoim"] },
    ]
};
