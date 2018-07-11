<template>
  <f7-page>
    <f7-navbar title="修改密码" back-link='Back' sliding></f7-navbar>
    <f7-list no-hairlines>
      <f7-list-item>
        <template v-if="err_message">
          <p class="err">{{ err_message }}</p>
        </template>
      </f7-list-item>
      <f7-list-item>
        <f7-input type='password' :value='old_passwd' autofocus
        @input='old_passwd = $event.target.value' placeholder="原密码"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type='password' :value='new_passwd'
        @input='new_passwd = $event.target.value' placeholder="新密码"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type='password' :value='new_passwd2'
        @input='new_passwd2 = $event.target.value' placeholder="重复新密码"></f7-input>
      </f7-list-item>
    </f7-list>
    <f7-button round big fill style="align: auto;" color='red' @click='change_passwd'>重置密码</f7-button>
  </f7-page>
</template>
<style scoped>
.err {
  color: #ff0000;
}
</style>
<script>
import qs from 'qs';
export default {
  data() {
    return {
      old_passwd: '',
      new_passwd: '',
      new_passwd2: '',
      err_message: '',

    }
  },
  computed: {

  },
  methods: {
    change_passwd: function() {
      if (this.old_passwd == '') {
        this.err_message = '请输入原密码';
        return;
      }
      if (this.new_passwd=='' || this.new_passwd2=='') {
        this.err_message = '请输入新密码';
        return;
      }
      if (this.new_passwd != this.new_passwd2) {
        this.err_message = '新密码输入不一致';
        return;
      }
      this.err_message = '';  // clear the err_message
      var instance = this.$ajax.create({
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      });
      let reqParams = {
        o_passwd: this.old_passwd,
        n_passwd: this.new_passwd,
        n_passwd2: this.new_passwd2,
      };
      instance.post('/laoyou/api/userinfo/changepasswd/', qs.stringify(reqParams)).then(function(response) {
        console.log(response);
      });
    }

  },
}
</script>
