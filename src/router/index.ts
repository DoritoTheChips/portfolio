import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectDetails.vue')
  },
  {
    path: '/snippets',
    name: 'Snippets',
    component: () => import(/* webpackChunkName: "snippets" */ '../views/Snippets.vue')
  },
  {
    path: '/snippets/:id',
    name: 'SnippetDetails',
    component: () => import(/* webpackChunkName: "snippets" */ '../views/SnippetDetails.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
})

export default router
