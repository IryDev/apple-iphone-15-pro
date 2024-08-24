import {
  allColors,
  blackTitanium,
  blueTitanium,
  naturalTitanium,
  switchAllColors,
  whiteTitanium,
  yellowImg,
  blueImg,
  whiteImg,
  blackImg,
} from "../utils/images";

import {
  iosAddContact,
  iosCall,
  iosFacetime,
  iosKeypad,
  iosMute,
  iosSpeaker,
} from "../utils/icons";

import { highlight1, highlight2, highlight3, highlight4 } from "../utils/video";

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlight1,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlight2,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlight3,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlight4,
    videoDuration: 3.63,
  },
];

export const navLinks: string[] = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

export const footerLinks: {
  explore: string[];
  shop: string[];
  further: string[];
} = {
  explore: [
    "Explore iPhone",
    "Explore All iPhone",
    "iPhone 15 Pro",
    "iPhone 15",
    "iPhone 14",
    "iPhone 13",
    "iPhone SE",
  ],

  shop: [
    "Shop iPhone",
    "iPhone Accessories",
    "Apple Trade In",
    "Carrier Deals at Apple",
    "Financing",
  ],

  further: [
    "iPhone Support",
    "AppleCare+ for iPhone",
    "iOS 18 Preview",
    "Apple Intelligence",
    "Apps by Apple",
    "iPhone Privacy",
    "iCloud+",
    "Wallet, Pay, Card",
    "Siri",
  ],
};

export const lastLinks: string[] = [
  "Privacy Policy",
  "Terms of Use",
  "Sales and Refunds",
  "Legal",
  "Site Map",
];

export const colors: {
  img: string;
  desc: string;
  color?: string;
  bgImg?: string;
}[] = [
  {
    img: allColors,
    desc: '6.1" iPhone 15 Pro in four colors',
    bgImg: switchAllColors,
  },
  {
    img: naturalTitanium,
    desc: "6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in Natural Titanium",
    color: "#8f8a81",
  },
  {
    img: blueTitanium,
    desc: "6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in Blue Titanium",
    color: "#202630",
  },
  {
    img: whiteTitanium,
    desc: "6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in White Titanium",
    color: "#c9c8c2",
  },
  {
    img: blackTitanium,
    desc: "6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in Black Titanium",
    color: "#1e1e1e",
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    titleLarge: "iPhone 15 Pro Max in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    titleLarge: "iPhone 15 Pro Max in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    titleLarge: "iPhone 15 Pro Max in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    titleLarge: "iPhone 15 Pro Max in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const touches: {
  touch: string;
  description: string;
}[] = [
  {
    touch: "1",
    description: " ",
  },
  {
    touch: "2",
    description: "ABC",
  },
  {
    touch: "3",
    description: "DEF",
  },
  {
    touch: "4",
    description: "GHI",
  },
  {
    touch: "5",
    description: "JKL",
  },
  {
    touch: "6",
    description: "MNO",
  },
  {
    touch: "7",
    description: "PQRS",
  },
  {
    touch: "8",
    description: "TUV",
  },
  {
    touch: "9",
    description: "WXYZ",
  },
  {
    touch: "*",
    description: " ",
  },
  {
    touch: "0",
    description: "+",
  },
  {
    touch: "#",
    description: " ",
  },
];

export const buttonCalling = [
  {
    name: "Speaker",
    icon: iosSpeaker,
    color: "#626469",
    width: "35px",
  },
  {
    name: "FaceTime",
    icon: iosFacetime,
    color: "#626469",
  },
  {
    name: "Mute",
    icon: iosMute,
    color: "#626469",
    width: "20x",
  },
  {
    name: "Add",
    icon: iosAddContact,
    color: "#626469",
  },
  {
    name: "End",
    icon: iosCall,
    color: "#f84438",
  },
  {
    name: "Keypad",
    icon: iosKeypad,
    color: "#626469",
  },
];
