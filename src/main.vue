<template>
    <!-- App -->
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main" />
        </f7-panel>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
    </div>
</template>
<style>
.md body {
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
</style>
<script>
export default {
    mounted() {
        console.log(this.$device);
    },
}
</script>
