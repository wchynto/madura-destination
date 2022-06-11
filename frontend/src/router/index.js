import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Posts from "../views/Posts.vue";
import Dashboard from "../views/Dashboard.vue";
import PostsDashboard from "../views/PostsDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
    },
  },
  {
    path: "/dashboard/posts",
    name: "PostsDashboard",
    component: PostsDashboard,
    meta: {
      title: "Posts",
    },
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  // {
  //   path: "*",
  //   beforeEach: (to, from, next) => {
  //     next({ name: "Home" });
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
