import Image1 from "../assets/beef.jpg";
import Image2 from "../assets/goat.jpg";
import Image3 from "../assets/oil.jpg";
import Image4 from "../assets/donkwa.jpg"
import Image5 from "../assets/kuli.jpg";
import Banner from "../assets/Banner.jpg";
import Test1 from "../assets/test1.jpg";
import Test2 from "../assets/test2.jpg";
import Test3 from "../assets/test3.jpg";
import Test4 from "../assets/test4.jpg"
import Test5 from "../assets/test5.jpg";




export const MENU = [
  { id: 1, name: "Home", link: "#hero" },
  { id: 2, name: "Top Rated", link: "#topproduct" },
  { id: 3, name: "Meat", link: "#products" }
  
];

export const dropdownMenu = [
  { id: 1, name: "Donkwa", link: "#products" },
  { id: 2, name: "Kulikuli", link: "#products" },
  { id: 3, name: "Kokoro", link: "#products" },
  { id: 4, name: "Suya Spice", link: "#products" },
];
export const dropdownMenu1 = [
  { id: 1, name: "Groundnut oil", link: "#topproduct" },
  { id: 2, name: "Palmoil", link: "#topproduct" },
  { id: 3, name: "Salt", link: "#topproduct" },
  { id: 4, name: "Sugar", link: "#topproduct" },
];

export const imageList = [
  {
    id: 1,
    img: Image1,
    title: "30% off on all our Beefs",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nisi!",
  },
  {
    id: 2,
    img: Image2,
    title: "50% discount on all our Goat meat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, pariatur.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all out Groundnut oil",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.",
  },
  {
        id:4,
        img:Image4,
        title:"Donkwa",
        ratings:3.0,
        color:"Organic",
        aosDelay:"500",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sint placeat neque?"
    },
    {
        id:5,
        img:Image5,
        title:"Kulikuli",
        ratings:3.0,
        color:"Organic",
        aosDelay:"300",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius amet qui aut?"
    }
];


export const productData =[
    {
        id:1,
        img:Image1,
        title:"Cow Meat",
        ratings:5.0,
        color:"Fresh Cut",
        aosDelay:"500"
    },
    {
        id:2,
        img:Image2,
        title:"Goat Meat",
        ratings:5.0,
        color:"Fresh Cut",
        aosDelay:"700"
    },
    {
        id:3,
        img:Image3,
        title:"Groundnut oil",
        ratings:4.0,
        color:"Organic",
        aosDelay:"200",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias quae illo."
    },
    {
        id:4,
        img:Image4,
        title:"Donkwa",
        ratings:3.0,
        color:"Organic",
        aosDelay:"500",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sint placeat neque?"
    },
    {
        id:5,
        img:Image5,
        title:"Kulikuli",
        ratings:3.0,
        color:"Organic",
        aosDelay:"300",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius amet qui aut?"
    }
]

export const bannerImg ={
  backgroundImage:`url(${Banner})`,
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"100%",
  width:"100%"

}
export const TestimonialData =[
  {
    id:1,
    name:"Victor",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cumque.",
    img:Test1
  },
  {
    id:2,
    name:"Ayo",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cumque.",
    img:Test2
  },
  {
    id:3,
    name:"Ben",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cumque.",
    img:Test3
  },
  {
    id:1,
    name:"Kola",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cumque.",
    img:Test4
  },
  {
    id:1,
    name:"Seun",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cumque.",
    img:Test5
  },
]

export const FooterLink = [
  {
    title:'Home',
    link:'#home'
  },
  {
    title:'About',
    link:'#about'
  },
  {
    title:'Contact',
    link:'#contact'
  },
  {
    title:'Blog',
    link:'#blog'
  }
]