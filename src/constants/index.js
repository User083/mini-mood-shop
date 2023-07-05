import { women, men, jewellery, cardigan1, cardigan2, cardigan3, cardigan4, cardigan5, cardigan6, cardigan7 } from "../assets";

export const api = {url:"https://burgundy-millipede-cuff.cyclic.app/"}

export const collections = [
    {
        id: "women",
        title: "Women's Clothing",
        description: "For the ladies",
        image: women,
        link: "/store",
        query: "women"
    },
    {
        id: "men",
        title: "Men's Clothing",
        description: "For the gents",
        image: men,
        link: "/store",
        query: "men"
    },
    {
        id: "accessories",
        title: "Accessories",
        description: "Add some bling",
        image: jewellery,
        link: "/store",
        query: "accessories"
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
              { name: "Women's Clothing", href: '/store', query: "women" },
              { name: "Men's Clothing", href: '/store', query: "men" },
              { name: "Accessories", href: '/store', query: "accessories" },
            ],
          },
        ],
    pages: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
    ],
  }
