export interface Preset {
  name: string;
  searchString: string;
}

export const initialPresets = [
  { name: 'Cafes', searchString: 'Blenz, Tim Hortons, Breka' },

  { name: 'Delivery', searchString: 'Skip, Uber, Dash' },
  {
    name: 'Groceries',
    searchString: 'Superstore, T&T, Fruiticana, Whole Foods',
  },
];
