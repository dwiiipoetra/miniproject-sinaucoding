import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("./views/Register.vue"),
    },
    {
      path: "/products",
      component: () => import("./views/products/ShowProducts.vue"),
    },
    {
      path: "/add-product",
      component: () => import("./views/products/AddProduct.vue"),
    },
    {
      path: "/suppliers",
      component: () => import("./views/suppliers/ShowSuppliers.vue"),
    },
    {
      path: "/add-supplier",
      component: () => import("./views/suppliers/AddSupplier.vue"),
    },
  ],
});
