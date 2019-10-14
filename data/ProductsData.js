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
    score: {
      palmOil: 2,
      animalProducts: 3,
      ausMade: 1,
    },
  },

  {
    id: '9351008000006',
    itemName: 'Nuttvia',
    category: 'Spreads',
    score: [
      {
        title: 'Palm Oil',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'Animal Products',
        rating: 1,
        ratingDescription: '',
        iconPath: '',
      },
      {
        title: 'ausMade',
        rating: 3,
        ratingDescription: '',
        iconPath: '',
      },
    ],
  },

  // Tuna
  {
    id: '00000000001',
    itemName: 'Sole Mare',
    category: 'Tuna',
    score: {
      catchingMethod: 2,
      tunaType: 3,
      mscCert: 3,
    },
  },

  {
    id: '00000000002',
    itemName: 'Fish 4 Ever',
    category: 'Tuna',
    score: {
      catchingMethod: 1,
      tunaType: 1,
      mscCert: 3,
    },
  },

  // Honey
  {
    id: '00000000003',
    itemName: 'Pureharvest Raw Organic Honey',
    category: 'Honey',
    score: {
      organic: 1,
      fairTrade: 1,
      ausMade: 1,
    },
  },
  {
    id: '930067702286',
    itemName: 'Capilano Pure Honey',
    category: 'Honey',
    score: {
      organic: 3,
      fairTrade: 1,
      ausMade: 1,
    },
  },

  // Coffee
  {
    id: '8711000362747',
    itemName: "L'Or Espresso Pods",
    category: 'Honey',
    score: {
      recyclable: 1,
      fairTrade: 1,
      organic: 1,
    },
  },

  {
    id: '8000070081000',
    itemName: 'Lavazza Pods',
    category: 'Honey',
    score: {
      recyclable: 3,
      fairTrade: 1,
      organic: 3,
    },
  },
];

export default ProductData;
