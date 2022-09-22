<template>
    <Tabbar>
      <TabbarItem path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png">
        <img slot="item-icon-click" src="@/assets/img/tabbar/home-click.png">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/categories">
        <img slot="item-icon" src="@/assets/img/tabbar/categories.png">
        <img slot="item-icon-click" src="@/assets/img/tabbar/categories-click.png">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/shop">
        <img slot="item-icon" src="@/assets/img/tabbar/shop.png">
        <img slot="item-icon-click" src="@/assets/img/tabbar/shop-click.png">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.png">
        <img slot="item-icon-click" src="@/assets/img/tabbar/profile-click.png">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
</template>

<script>
import Tabbar from "@/components/commen/Tabbar";
import TabbarItem from "@/components/commen/Tabbar";

export default {
  name: "MainTabbar",
  components: {
    TabbarItem,
    Tabbar
  }
}

</script>

<style scoped>
  @import "css/base.css";
</style>