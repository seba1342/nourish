// Ratings:
//  1 = best (green)
//	2 = okay (yellow)
//	3 = bad (red)

const ProductData = [
  // Spreads
  {
    id: '930069800216',
    itemName: 'Nutella',
    category: 'Spreads',
    imagePath:'../assets/images/nutella.jpg',
    score: [
      {
        title: 'Palm Oil',
        rating: 2,
        ratingDescription:
          'Palm oil is derived from the fruit of the oil palm tree. The palm fruit yields both palm oil and palm kernel oil. Palm oil is extracted from the pulp of the fruit and is an edible oil used in food. Palm kernel oil is extracted from the seed of the fruit and is used in the manufacture of cosmetics. Palm oil plantations are the main driver for deforestation in Indonesia and Malaysia. These two regions account for 85 percent of global production of palm oil. Nutella still uses palm oil, but from sustainable sources.',
        iconPath: '',
      },
      {
        title: 'Animal Products',
        rating: 3,
        ratingDescription: 'Livestock farming has a vast environmental footprint. It contributes to land and water degradation, biodiversity loss, acid rain, coral reef degeneration and deforestation. Nutella still uses diary products in its recipe.',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 1,
        ratingDescription:
          'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is made locally in Lithgow, NSW.',
        iconPath: '',
      },
    ],
  },

  {
    id: '9351008000006',
    itemName: 'Nuttvia',
    category: 'Spreads',
    imagePath:'../assets/images/nuttvia.jpg',
    score: [
      {
        title: 'Palm Oil',
        rating: 1,
        ratingDescription:
          'Palm oil is derived from the fruit of the oil palm tree. The palm fruit yields both palm oil and palm kernel oil. Palm oil is extracted from the pulp of the fruit and is an edible oil used in food. Palm kernel oil is extracted from the seed of the fruit and is used in the manufacture of cosmetics. Palm oil plantations are the main driver for deforestation in Indonesia and Malaysia. These two regions account for 85 percent of global production of palm oil. Nuttvia is free from palm oil.',
        iconPath: '',
      },
      {
        title: 'Animal Products',
        rating: 1,
        ratingDescription: 'Livestock farming has a vast environmental footprint. It contributes to land and water degradation, biodiversity loss, acid rain, coral reef degeneration and deforestation. Starting late 2019, Nuttvia will be 100% Vegan.',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 3,
        ratingDescription:
          'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is produced in Germany.',
        iconPath: '',
      },
    ],
  },

  // Tuna
  {
    id: '00000000001',
    itemName: 'Sole Mare',
    category: 'Tuna',
    imagePath:'../assets/images/solemare.jpg',
    score: [
      {
        title: 'Catching Method',
        rating: 2,
        ratingDescription: 'Pole and line fishing is much more selective, ensuring less bycatch. Using purse seine, A vertical net ‘curtain’ is used to surround the school of fish, the bottom of which is then drawn together to enclose the fish, rather like tightening the cords of a drawstring purse. Solemare uses Pole and Line, but also is unclear weather they use Purse seine.',
        iconPath: '',
      },
      {
        title: 'Tuna Type',
        rating: 3,
        ratingDescription: 'There are real concerns that some populations of yellowfin have been totally overfished, and in many places are still plummeting. Yellow fish is unsustainable, try skipjack instead.',
        iconPath: '',
      },
      {
        title: 'MSC Certified',
        rating: 3,
        ratingDescription: 
          'Wild, traceable, sustainable: the blue fish label is only applied to wild fish or seafood from fisheries that have been certified to the MSC Fisheries Standard, a science-based set of requirements for sustainable fishing. Solemare is not MSC Certified',
        iconPath: '',
      },
    ],
  },

  {
    id: '00000000002',
    itemName: 'Fish 4 Ever',
    category: 'Tuna',
    imagePath:'../assets/images/fish4ever.jpg',
    score: [
      {
        title: 'Catching Method',
        rating: 1,
        ratingDescription: 'Pole and line fishing is much more selective, ensuring less bycatch. Using purse seine, A vertical net ‘curtain’ is used to surround the school of fish, the bottom of which is then drawn together to enclose the fish, rather like tightening the cords of a drawstring purse. Fish 4 Ever exclusivly uses tuna caught by Pole and Line, ensuring longevity of the species.',
        iconPath: '',
      },
      {
        title: 'Tuna Type',
        rating: 1,
        ratingDescription: 'Relatively small, and the most abundant and widely-fished of tuna species. Skipjack tuna caught by pole and line is the most sustainable tuna fish.',
        iconPath: '',
      },
      {
        title: 'MSC Certified',
        rating: 3,
        ratingDescription: 
          'Wild, traceable, sustainable: the blue fish label is only applied to wild fish or seafood from fisheries that have been certified to the MSC Fisheries Standard, a science-based set of requirements for sustainable fishing. Fish4Ever is not MSC Certified',
        iconPath: '',
      },
    ],
  },

  // Honey
  {
    id: '00000000003',
    itemName: 'Pureharvest Raw Organic Honey',
    category: 'Honey',
    imagePath:'../assets/images/pureharvest.jpg',
    score: [
      {
        title: 'Organic',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Fair Trade',
        rating: 1,
        ratingDescription: 'Fair trade is about stable prices, decent working conditions and the empowerment of farmers and workers around the world.',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 1,
        ratingDescription:
          'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is made locally using Australian bees.',
        iconPath: '',
      },
    ],
  },
  {
    id: '930067702286',
    itemName: 'Capilano Pure Honey',
    category: 'Honey',
    imagePath:'../assets/images/capilano.jpg',
    score: [
      {
        title: 'Organic',
        rating: 3,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Fair Trade',
        rating: 1,
        ratingDescription: 'Fair trade is about stable prices, decent working conditions and the empowerment of farmers and workers around the world.',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 1,
        ratingDescription:
          'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is made locally using Australian bees.',
        iconPath: '',
      },
    ],
  },

  // Coffee
  {
    id: '8711000362747',
    itemName: "L'Or Espresso Pods",
    category: 'Coffee',
    imagePath:'../assets/images/lor.jpg',
    score: [
      {
        title: 'Recyclable/Compostable',
        rating: 1,
        ratingDescription: 'Alot of aluminium is used in the creation of coffe pods, some companies use Terracycle or similar alternatives to provide recycling initiatives to customers. The aluminium is melted in order to make new recycled products. L\'Or Espresso uses Terracycle.',
        iconPath: '',
      },
      {
        title: 'Fair Trade',
        rating: 1,
        ratingDescription: 'Fair trade is about stable prices, decent working conditions and the empowerment of farmers and workers around the world. L\'Or Espresso has projects across the world promoting fair trade.',
        iconPath: '',
      },
      {
        title: 'Organic',
        rating: 1,
        ratingDescription:
          'UTZ is a certification program for sustainable farming of coffee, tea, cocoa and hazelnuts. The program is part of the Rainforest Alliance, an international non-profit organization working to create a better future for people and nature. This product is UTZ certified',
        iconPath: '',
      },
    ],
  },

  {
    id: '8000070081000',
    itemName: 'Lavazza Pods',
    category: 'Coffee',
    imagePath:'../assets/images/lavazza-coffee-pods.jpg',
    score: [
      {
        title: 'Recyclable/Compostable',
        rating: 3,
        ratingDescription: 'Alot of aluminium is used in the creation of coffe pods, some companies use Terracycle or similar alternatives to provide recycling initiatives to customers. The aluminium is melted in order to make new recycled products. Lavazza has no program in place fro recycling..',
        iconPath: '',
      },
      {
        title: 'Fair Trade',
        rating: 1,
        ratingDescription: 'Fair trade is about stable prices, decent working conditions and the empowerment of farmers and workers around the world. Lavazza has projects across the world promoting fair trade.',
        iconPath: '',
      },
      {
        title: 'Organic',
        rating: 3,
        ratingDescription:
          'UTZ is a certification program for sustainable farming of coffee, tea, cocoa and hazelnuts. The program is part of the Rainforest Alliance, an international non-profit organization working to create a better future for people and nature. This product is not UTZ certified',
        iconPath: '',
      },
    ],
  },
];

export default ProductData;
