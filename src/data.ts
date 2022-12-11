import arcadeIcon from "./assets/icon-arcade.svg";
import advancedIcon from "./assets/icon-advanced.svg";
import proIcon from "./assets/icon-pro.svg";

export const PLANS = [
  {
    id: 1,
    title: "Arcade",
    price: { monthly: 9, yearly: 90 },
    icon: arcadeIcon,
  },
  {
    id: 2,
    title: "Advanced",
    price: { monthly: 12, yearly: 120 },
    icon: advancedIcon,
  },
  {
    id: 3,
    title: "Pro",
    price: { monthly: 15, yearly: 150 },
    icon: proIcon,
  },
];

export const ADDONS = [
  {
    id: 1,
    title: " Online service",
    desc: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 2,
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 3,
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];
