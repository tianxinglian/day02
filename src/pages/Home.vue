<template>
  <div>
    <router-view />

    <tab-bar />
  </div>
</template>
<script>
import TabBar from "@/components/TabBar.vue";
export default {
  components: {
    TabBar
  }
};
</script>

<style scoped>
</style>