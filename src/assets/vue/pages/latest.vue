<template>
  <f7-page>
    <f7-navbar title="老友之家" back-link="Back" sliding></f7-navbar>
    <f7-toolbar bottom-md no-shadow tabbar labels>
      <f7-link icon="icon-1" text="最新" href="/latest/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon="icon-2" text="小组" href="/group/list/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon="icon-3" text="通知" href="/user/message/list/all/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon="icon-4" text="我的" href="/user/info/" :animate="true" :ignore-cache="true"></f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
 export default {
  };
</script>
