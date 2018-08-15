<template>

  <f7-page>

    <f7-navbar back-link="Back">

      <f7-nav-left></f7-nav-left>

      <f7-nav-title>Blog list</f7-nav-title>

      <f7-nav-right></f7-nav-right>

    </f7-navbar>

    <f7-list>

      <f7-list-item v-for="(blog, index) in blogs">{{ blog }}</f7-list-item>

    </f7-list>
    <f7-button big color="red" href="/community/topic/blog/detail/">detail</f7-button>

  </f7-page>

</template>

<script>

export default {

  data() {

    return {

      'blogs': [

        'blog1',

        'blog2',

        'blog3',

      ]

    }

  },

  methods: {



  },

  computed: {



  }

}

</script>
