<template>
  <div>
    <div class="title">
      <span class="ti">人气推荐</span>
      <span class="jump">></span>
    </div>
    <div class="hot">
      <ul>
        <Hotshop v-for="item in hotshop" :key="item.id" :shop="item" />
      </ul>
    </div>
  </div>
</template>

<script>
import Hotshop from "@/components/Hotshop.vue";
export default {
  data() {
    return {
      hotshop: []
    };
  },
  components: {
    Hotshop
  },
  created() {
    this.http.get("https://api.it120.cc/small4/shop/goods/list").then(msg => {
      console.log(msg);
      this.hotshop = msg.data.data;
    });
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
.title {
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
.ti {
  text-align: center;
}
.hot{
    width: 5.2rem;
}
.hot ul{
    width: 5.2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>