export default [
  {
    path: '/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  },
  {
    path: '/panel-left/',
    component: require('./assets/vue/pages/panel-left.vue')
  },
  {
    path: '/color-themes/',
    component: require('./assets/vue/pages/color-themes.vue')
  },
  {
    path: '/chat/',
    component: require('./assets/vue/pages/chat.vue')
  },
  {
    path: '/vuex/',
    component: require('./assets/vue/pages/vuex.vue')
  },
  {
    path: '/latest/',
    component: require('./assets/vue/pages/latest.vue')
  },
  {
    path: '/detail/:groupId/:postId/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/group/info/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/group/user/list/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/group/list/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/group/:groupId',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/user/info/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/user/info/edit',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/user/message/list/:mType/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/user/message/:mType/:mId',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/user/blog/list/',
    component: require('./assets/vue/pages/home.vue')
  },
  {
    path: '/user/blog/edit/',
    component: require('./assets/vue/pages/home.vue')
  }
]
