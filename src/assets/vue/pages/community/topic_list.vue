<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left></f7-nav-left>
      <f7-nav-title>Topic</f7-nav-title>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <f7-list>
      <f7-list-item v-for="(topic, index) in topics">{{ topic }}</f7-list-item>
    </f7-list>
    <f7-button big color="red" href="/community/topic/blog/list/">blog</f7-button>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      'topics': [
        'topic1',
        'topic2',
        'topic3',
      ]
    }
  },
  methods: {

  },
  computed: {
    
  }
}
</script>
