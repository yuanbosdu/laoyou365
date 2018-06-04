<template>
  <f7-page>
    <f7-navbar title='发布文章' back-link='Back' sliding></f7-navbar>
    <f7-block>
      <f7-input type="textarea" name='blog' placeholder="主人请写点什么吧" inputStyle="width: 100%"
        id="blog" :value="blog_data" @input="blog_data = $event.target.value" autofocus>
      </f7-input>
    </f7-block>
    <template v-for="(item, key) in src_photo">
      <img :src="item" width="300" height="300" alt='照片' />
    </template>
    <f7-button @click.prevent='backclick' >test</f7-button>
    <f7-button @click.prevent='take_photo' >选择图片</f7-button>
    <f7-button @click="this.window.plugins.toast.show('Hello there!', 'long', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})">{{ src_photo }}</f7-button>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      blog_data: '',
      src_photo: [],
    }
  },
  methods: {
    backclick: function(event) {
      console.log(this.blog_data);
      this.$f7router.back();
    },
    take_photo: function(event) {
      const self = this;
      function onSuccess(imageURI) {
        self.src_photo.push(imageURI);
      }
      function onFail(message) {
        console.log(message);
      }
      const camera_param = {
        destinationType: 1, //URL 0, URI 1
        sourceType: 0,  //PHOTOLIBRARY: 0,
      };
      navigator.camera.getPicture(onSuccess, onFail, camera_param);
    },
  },
  computed: {
    input_blog_data() {
      return this.blog_data;
    }
  }
}
</script>
