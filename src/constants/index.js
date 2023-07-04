import { women, men, jewellery, cardigan1, cardigan2, cardigan3, cardigan4, cardigan5, cardigan6, cardigan7 } from "../assets";

export const collections = [
    {
        id: "women",
        title: "Women's Clothing",
        description: "For the ladies",
        image: women,
        link: "/store",
        query: "products/category/women's clothing"
    },
    {
        id: "men",
        title: "Men's Clothing",
        description: "For the gents",
        image: men,
        link: "/store",
        query: "products/category/men's clothing"
    },
    {
        id: "jewellery",
        title: "Jewellery",
        description: "Add some bling",
        image: jewellery,
        link: "/store",
        query: "products/category/jewelery"
    },    
];

export const cardigans = 
    {
        
        1: cardigan1,
       
        2: cardigan2,
     
        3: cardigan3,
  
        4: cardigan4,
    
        5: cardigan5,

        6: cardigan6,

        7: cardigan7,
    }


export const navigation = {
    categories: [
      {
        id: 'collections',
        name: 'Collections',
            items: [
              { name: "Women's Clothing", href: '/store' },
              { name: "Men's Clothing", href: '/store' },
              { name: "Jewellery", href: '/store' },
            ],
          },
        ],
    pages: [
      { name: 'About Us', href: '/about' },
    ],
  }
