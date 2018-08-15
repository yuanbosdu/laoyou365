<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
          <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
      </f7-nav-left>
      <f7-nav-center>老友之家</f7-nav-center>
      <f7-nav-right>
          <!-- <f7-link class="searchbar-enable" data-searchbar=".searchbar-components" icon="fa fa-search"></f7-link> -->
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar bottom-md no-shadow tabbar labels>
      <f7-link icon-f7='favorites' icon="custicon" text="推荐" href="/commend/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon-f7='star' icon="custicon" text="社区" href="/community/list/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon-f7='email' icon="custicon" text="通知" href="/user/message/list/all/" :animate="true" :ignore-cache="true"></f7-link>
      <f7-link icon-f7='person' icon="custicon" text="我的" href="/user/detail/" :animate="true" :ignore-cache="true"></f7-link>
    </f7-toolbar>
    <f7-toolbar tabbar no-shadow no-hairline class='commend_toolbar'>
      <f7-link tab-link="#tab-1" tab-link-active>Tab1</f7-link>
      <f7-link tab-link="#tab-2">Tab2</f7-link>
      <f7-link tab-link="#tab-3">Tab3</f7-link>
      <f7-link tab-link="#tab-4">Tab4</f7-link>
      <f7-link tab-link="#tab-5">Tab5</f7-link>
    </f7-toolbar>
    <f7-tabs swipeable>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <p>Tab 1 content</p>
          <div class="list">
  <ul>
    <li>
      <div class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">Ivan Petrov</div>
          <div class="item-after">CEO</div>
        </div>
      </div>
    </li>
    <li>
      <div class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">John Doe</div>
          <div class="item-after"> <span class="badge">5</span></div>
        </div>
      </div>
    </li>
    <li>
      <div class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">Jenna Smith</div>
        </div>
      </div>
    </li>
  </ul>
</div>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-4" class="page-content">
        <f7-block>
          <p>Tab 4 content</p>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-5" class="page-content">
        <f7-block>
          <p>Tab 5 content</p>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<style scoped>
.link {
  text-align: center;
}
.commend_toolbar {
  margin-top: 56px;
}
</style>
<style>
i.custicon {
  line-height: 48px;
}
</style>
<script>
import qs from 'qs';
 export default {
   data() {
     return {

     }
   },
   created() {
     //do something after creating vue instance
     this.$f7.root.addClass('color-theme-red');
     //this.$f7.views.main.router.clearPreviousHistory();
   },
   mounted() {
     //do something after mounting vue instance
     //this.$f7.views.main.router.clearPreviousHistory();
   }
  };
</script>
