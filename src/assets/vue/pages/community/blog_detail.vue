<template>

  <f7-page infinite>

    <f7-navbar>

      <f7-nav-left></f7-nav-left>

      <f7-nav-title>{{ blog.title }}</f7-nav-title>

      <f7-nav-right></f7-nav-right>

    </f7-navbar>

    <f7-block>

      <f7-row>

        <f7-col>

          {{ blog.content }}

        </f7-col>

      </f7-row>

    </f7-block>

  </f7-page>

</template>

<script>

export default {

  data() {

    return {

      blog: {

        title:"blog title",

        content: "blog content",

      }

    }

  },

  methods: {



  },

  computed: {

    

  }

}

</script>
