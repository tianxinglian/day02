<template>
  <div>
    <Banner></Banner>
    <Barpeo></Barpeo>
    <Topic></Topic>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Barpeo from "@/components/barpeo.vue";
import Topic from "@/components/Topic.vue";
export default {
  components: {
    Banner,
    Barpeo,
    Topic
  }
};
</script>

<style scoped>
</style>