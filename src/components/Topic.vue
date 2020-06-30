<template>
  <div>
    <div class="topic">
      <span class="ti">精选专题</span>
      <span class="jump">></span>
    </div>
    <div class="tlist">
      <ul>
        <Stopic class="stopic" v-for="item in topic" :key="item.id" :stopic="item" />
      </ul>
    </div>
  </div>
</template>

<script>
import Stopic from "@/components/Stopic.vue";

export default {
  data() {
    return {
      topic: []
    };
  },
  created() {
    this.http.get("https://api.it120.cc/small4/cms/news/list").then(msg => {
      console.log(msg);
      this.topic = msg.data.data;
    });
  },
  components: {
    Stopic
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 0.16rem;
}
.topic {
  width: 5.2rem;
  height: 0.5rem;
  font-size: 0.18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(216, 216, 216);
}
.jump {
  font-size: 0.25rem;
  text-align: center;
  margin-left: 0.1rem;
}
.tlist {
  width: 100%;
  height: 3.6rem;
  overflow: auto;
}
.tlist ul {
  width: 20rem;
  height: 3.6rem;
  list-style: none;
  display: flex;
}
.ti {
  text-align: center;
}
</style>