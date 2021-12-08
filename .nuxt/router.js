import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _518b8967 = () => interopDefault(import('../pages/gyms.vue' /* webpackChunkName: "pages/gyms" */))
const _0c32f3aa = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _5445ae10 = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _2f740a32 = () => interopDefault(import('../pages/search/_keyword.vue' /* webpackChunkName: "pages/search/_keyword" */))
const _1d362dc6 = () => interopDefault(import('../pages/tag/_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _cc6cf9ca = () => interopDefault(import('../pages/work/_slug.vue' /* webpackChunkName: "pages/work/_slug" */))
const _bc9086da = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/gyms",
    component: _518b8967,
    name: "gyms"
  }, {
    path: "/profile",
    component: _0c32f3aa,
    name: "profile"
  }, {
    path: "/category/:id?",
    component: _5445ae10,
    name: "category-id"
  }, {
    path: "/search/:keyword?",
    component: _2f740a32,
    name: "search-keyword"
  }, {
    path: "/tag/:id?",
    component: _1d362dc6,
    name: "tag-id"
  }, {
    path: "/work/:slug?",
    component: _cc6cf9ca,
    name: "work-slug"
  }, {
    path: "/",
    component: _bc9086da,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
