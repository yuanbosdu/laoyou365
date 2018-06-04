<template>
  <f7-page>
    <f7-navbar title="老友之家" back-link="Back" sliding></f7-navbar>
    <f7-toolbar bottom-md no-shadow tabbar labels>
      <f7-link icon-f7='favorites' icon="custicon" text="最新" href="/latest/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon-f7='star' icon="custicon" text="小组" href="/group/list/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon-f7='email' icon="custicon" text="通知" href="/user/message/list/all/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon-f7='person' icon="custicon" text="我的" href="/user/detail/" :animate="true" :ignore-cache="true"></f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<style scoped>
.link {
  text-align: center;
}
</style>
<style>
i.custicon {
  line-height: 48px;
}
</style>
<script>
 export default {
  };
</script>
