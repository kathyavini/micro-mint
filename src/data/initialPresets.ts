export interface Preset {
  name: string;
  searchString: string;
}

export const initialPresets = [
  { name: 'Groceries', searchString: 'Superstore, T&T, Fruiticana' },
  { name: 'Delivery', searchString: 'Skip, Uber, Dash' },
  {
    name: 'Downtown',
    searchString:
      'Tim Hortons, Blenz, Papparoti, Whole Foods, Al-Hadbah, Subway, Breka, Vietsub, Chipotle, Silver Spoon, Garden, Holy Guacamole',
  },
  {
    name: 'Sunset',
    searchString: 'Best Quality, Himalaya',
  },
  {
    name: 'Skincare',
    searchString: 'Shoppers, Sephora',
  },
];
