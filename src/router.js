import { createRouter, createWebHistory } from "vue-router";
import User from "./views/User.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/users/:userId", component: User }]
});
