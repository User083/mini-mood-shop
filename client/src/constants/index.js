import {
  women,
  men,
  jewellery,
  cardigan1,
  cardigan2,
  cardigan3,
  cardigan4,
  cardigan5,
  cardigan6,
  cardigan7,
} from "../assets";

export const api = { url: "https://burgundy-millipede-cuff.cyclic.app/" };

export const collections = [
  {
    id: "women",
    title: "Women's Clothing",
    description: "For the ladies",
    image: women,
    link: "/store/clothing--women",
    query: "women",
  },
  {
    id: "men",
    title: "Men's Clothing",
    description: "For the gents",
    image: men,
    link: "/store/clothing--men",
    query: "men",
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "Add some bling",
    image: jewellery,
    link: "/store/accessories",
    query: "accessories",
  },
];

export const cardigans = {
  1: cardigan1,

  2: cardigan2,

  3: cardigan3,

  4: cardigan4,

  5: cardigan5,

  6: cardigan6,

  7: cardigan7,
};

export const navigation = {
  categories: [
    {
      id: "Categories",
      name: "Categories",
      items: [
        { name: "Clothing", href: "/store/clothing", query: "clothing" },

        {
          name: "Accessories",
          href: "/store/accessories",
          query: "accessories",
        },
        { name: "All", href: "/store/products", query: "products" },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ],
};

export const categories = [
  {
    id: "categories",
    name: "Categories",
    options: [
      { value: "products", label: "All", checked: false },
      { value: "clothing", label: "Clothing", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
];

export const filters = [
  {
    id: "filters",
    name: "Filters",
    options: [
      { value: "cardigans", label: "Cardigans", checked: false },
      { value: "women", label: "Women", checked: false },
      { value: "men", label: "Men", checked: false },
      { value: "summer", label: "Summer", checked: false },
      { value: "winter", label: "Winter", checked: false },
      { value: "trousers", label: "trousers", checked: false },
      { value: "dresses", label: "dresses", checked: false },
    ],
  },
];

export const sortOptions = [
  {
    id: "sort",
    name: "Sort",
    options: [
      { value: "price-high", label: "Price High-to-Low", checked: false },
      { value: "price-low", label: "Price Low-to-High", checked: false },
    ],
  },
];
