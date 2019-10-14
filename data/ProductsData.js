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
    score: [
      {
        title: 'Palm Oil',
        rating: 2,
        ratingDescription: 'Palm oil is derived from the fruit of the oil palm tree. The palm fruit yields both palm oil and palm kernel oil. Palm oil is extracted from the pulp of the fruit and is an edible oil used in food. Palm kernel oil is extracted from the seed of the fruit and is used in the manufacture of cosmetics. Palm oil plantations are the main driver for deforestation in Indonesia and Malaysia. These two regions account for 85 percent of global production of palm oil. Nutella still uses palm oil, but from sustainable sources.',
        iconPath: '',
      },
      {
        title: 'Animal Products',
        rating: 3,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 1,
        ratingDescription: 'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is made locally in Lithgow, NSW.',
        iconPath: '',
      },
    ],
  },

  {
    id: '9351008000006',
    itemName: 'Nuttvia',
    category: 'Spreads',
    score: [
      {
        title: 'Palm Oil',
        rating: 1,
        ratingDescription: 'Palm oil is derived from the fruit of the oil palm tree. The palm fruit yields both palm oil and palm kernel oil. Palm oil is extracted from the pulp of the fruit and is an edible oil used in food. Palm kernel oil is extracted from the seed of the fruit and is used in the manufacture of cosmetics. Palm oil plantations are the main driver for deforestation in Indonesia and Malaysia. These two regions account for 85 percent of global production of palm oil. Nuttvia is free from palm oil.',
        iconPath: '',
      },
      {
        title: 'Animal Products',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 3,
        ratingDescription: 'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is produced in Germany.',
        iconPath: '',
      },
    ],
  },

  // Tuna
  {
    id: '00000000001',
    itemName: 'Sole Mare',
    category: 'Tuna',
    score: [
      {
        title: 'Catching Method',
        rating: 2,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Tuna Type',
        rating: 3,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'MSC Certified',
        rating: 3,
        ratingDescription: '',
        iconPath: '',
      },
    ],
  },

  {
    id: '00000000002',
    itemName: 'Fish 4 Ever',
    category: 'Tuna',
    score: [
      {
        title: 'Catching Method',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Tuna Type',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'MSC Certified',
        rating: 3,
        ratingDescription: '',
        iconPath: '',
      },
    ],
  },

  // Honey
  {
    id: '00000000003',
    itemName: 'Pureharvest Raw Organic Honey',
    category: 'Honey',
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
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 1,
        ratingDescription: 'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is made locally using Australian bees.',
        iconPath: '',
      },
    ],
  },
  {
    id: '930067702286',
    itemName: 'Capilano Pure Honey',
    category: 'Honey',
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
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Australian Made',
        rating: 1,
        ratingDescription: 'A good part of the production of the item has taken place here, and a significant part of the process of transforming the goods into the finished product that you are now looking at has happened in Australia. This product is made locally using Australian bees.',
        iconPath: '',
      },
    ],
  },

  // Coffee
  {
    id: '8711000362747',
    itemName: "L'Or Espresso Pods",
    category: 'Coffee',
    score: [
      {
        title: 'Recyclable/Compostable',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Fair Trade',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Organic',
        rating: 1,
        ratingDescription: 'UTZ is a certification program for sustainable farming of coffee, tea, cocoa and hazelnuts. The program is part of the Rainforest Alliance, an international non-profit organization working to create a better future for people and nature. This product is UTZ certified',
        iconPath: '',
      },
    ],
  },

  {
    id: '8000070081000',
    itemName: 'Lavazza Pods',
    category: 'Coffee',
    score: [
      {
        title: 'Recyclable/Compostable',
        rating: 3,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Fair Trade',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Organic',
        rating: 3,
        ratingDescription: 'UTZ is a certification program for sustainable farming of coffee, tea, cocoa and hazelnuts. The program is part of the Rainforest Alliance, an international non-profit organization working to create a better future for people and nature. This product is not UTZ certified',
        iconPath: '',
      },
    ],
  },
];

export default ProductData;
