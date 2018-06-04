<template>
  <f7-page class='page'>
    <f7-navbar title='我' back-link='Back' sliding></f7-navbar>
    <f7-row class="header">
      <f7-col width="100" class="avatar">
        <img src="../../../images/avatar.jpg" />
      </f7-col>
      <f7-col width="100" class="username">
        <p>username</p>
      </f7-col>
    </f7-row>

    <f7-list class='list'>
      <f7-list-item title="我的话题" link='#'>
        <i class="f7-icons" slot="media">compose</i>
      </f7-list-item>
      <f7-list-item title="我的评论" link='#'>
        <i class="f7-icons" slot="media">chat</i>
      </f7-list-item>
      <f7-list-item title="意见反馈" link='#'>
        <i class="f7-icons" slot="media">email</i>
      </f7-list-item>
    </f7-list>

    <f7-button color="red" big big-ios big-md fill fill-ios fill-md>退出登录</f7-button>

  </f7-page>

</template>
<style scoped>
.page {
  color: #ffffff;
}
.header {
  background-color: #f44336;
  display: flex;
  justify-content: center;
}
.avatar {
  height: 130px;
  justify-content: center;
  text-align: center;
}
.username {
  text-align: center;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 30px;
}
p {
  display: block;
}
.list {
  color: gray;
}
</style>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    methodName() {

    }
  },
  computed: {

  }
}
</script>
