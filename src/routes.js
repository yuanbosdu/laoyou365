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
    path: '/community/list/',
    component: require('./assets/vue/pages/community/community_list.vue')
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
    path: '/commend/',
    component: require('./assets/vue/pages/commend.vue')
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
    path: '/user/detail/',
    component: require('./assets/vue/pages/user/detail.vue')
  },
  {
    path: '/user/info/setting',
    component: require('./assets/vue/pages/user/setting.vue')
  },
  {
    path: '/user/info/changepasswd',
    component: require('./assets/vue/pages/user/change_passwd.vue')
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
    path: '/user/blog/write/',
    component: require('./assets/vue/pages/writeblog.vue')
  }
]
