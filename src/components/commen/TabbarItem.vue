<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    <img src="../../assets/img/tabbar/home.png">-->
<!--    <div>首页</div>-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-click"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props:{
    path: String
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick() {
      console.log('itemClick');
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 16px;
  }

  .tab-bar-item img{
    height: 25px;
    weight: 30px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active{
    color: red;
  }
</style>