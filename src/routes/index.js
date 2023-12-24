import {
  Home,
  Shop,
  Cart,
  Checkout,
  Details,
  Login,
  Register,
  Otp,
} from "~/pages";
import { HomeLayout } from "~/layouts";

export const publicRoutes = [
  {
    path: "/home",
    component: Home,
    layout: HomeLayout,
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/Details",
    component: Details,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/otp",
    component: Otp,
  },
];

export const privateRoutes = [
  {
    path: "/admin",
    element: Home,
  },
];
