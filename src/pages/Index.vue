<template>
  <div>
    <Banner></Banner>
    <Barpeo></Barpeo>
    <Topic></Topic>
    <Hot />
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Barpeo from "@/components/barpeo.vue";
import Topic from "@/components/Topic.vue";
import Hot from "@/components/Hot.vue";
export default {
  components: {
    Banner,
    Barpeo,
    Topic,
    Hot
  }
};
</script>

<style scoped>
</style>