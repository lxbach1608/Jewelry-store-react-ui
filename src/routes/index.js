import {
  Home,
  Shop,
  Cart,
  Checkout,
  Details,
  Login,
  Register,
  Otp,
  Gallery,
  About,
  Contact,
  Admin,
} from "~/pages";
import { HomeLayout, CustomerLayout } from "~/layouts";

import { Address, Order, Detail, Wishlist, Dashboard } from "~/pages/Customer";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: HomeLayout,
  },
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
    path: "/categories/:categoryParam",
    component: Shop,
  },
  {
    path: "/products/:param",
    component: Details,
  },
  {
    path: "/cart",
    component: Cart,
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
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/admin",
    component: Admin,
    layout: HomeLayout,
  },
];

export const privateRoutes = [
  {
    path: "/customer/dashboard",
    component: Dashboard,
    layout: CustomerLayout,
  },
  {
    path: "/customer/orders",
    component: Order,
    layout: CustomerLayout,
  },
  {
    path: "/customer/addresses",
    component: Address,
    layout: CustomerLayout,
  },
  {
    path: "/customer/details",
    component: Detail,
    layout: CustomerLayout,
  },
  {
    path: "/customer/wishlist",
    component: Wishlist,
    layout: CustomerLayout,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];
