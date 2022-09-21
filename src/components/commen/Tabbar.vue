<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabbarItem from "@/components/commen/TabbarItem";

  export default {
    name: "Tabbar",
    components: {
      TabbarItem
    }
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -2px 1px rgba(100,100,100,.1);
  }

</style>