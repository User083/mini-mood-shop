import { women, men, jewellery } from "../assets";

export const collections = [
    {
        id: "women",
        title: "Women's Clothing",
        description: "For the ladies",
        image: women,
        link: "/store#women",
    },
    {
        id: "men",
        title: "Men's Clothing",
        description: "For the gents",
        image: men,
        link: "/store#men",
    },
    {
        id: "jewellery",
        title: "Jewellery",
        description: "Add some bling",
        image: jewellery,
        link: "/store#jewellery",
    },    
];

export const navigation = {
    categories: [
      {
        id: 'collections',
        name: 'Collections',
            items: [
              { name: "Women's Clothing", href: '/store#women' },
              { name: "Men's Clothing", href: '/store#men' },
              { name: "Jewellery", href: '/store#jewellery' },
            ],
          },
        ],
    pages: [
      { name: 'About Us', href: '/about' },
    ],
  }
