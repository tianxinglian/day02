<template>
  <div>
    <div class="title">
      <span class="back" @click="back">＜</span>
      <span class="ti">砍价列表</span>
    </div>
    <ul>
      <li v-for="item of barlist" :key="item.id">
        <div class="list">
          <div class="left">
            <img :src="item.pic" alt />
          </div>
          <div class="right">
            <h4>{{ item.name }}</h4>
            <p class="details">{{ item.characteristic }}</p>
            <p class="price">
              <span class="old">￥169</span>
              <span>￥169</span>
              <span>234件</span>
            </p>
            <p class="prname">
              <span class="oldn">低价</span>
              <span>原价</span>
              <span>限量</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barlist: []
    };
  },
  created() {
    this.http
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(msg => {
        console.log(msg.data.data.goodsMap);
        this.barlist = msg.data.data.goodsMap;
      });
  },
  methods: {
    back() {
      this.$router.push({ path: "/home" });
    }
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
  align-items: center;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.back {
  float: left;
  font-size: 0.3rem;
  width: 0.5rem;
  text-align: center;
}
.ti {
  width: 4rem;
  text-align: center;
}
ul {
  width: 5.2rem;
  list-style: none;
}
.list {
  width: 5.2rem;
  height: 1.8rem;
  font-size: 0.18rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgb(216, 216, 216);
}
.left {
  width: 1.58rem;
  height: 1.58rem;
}
.right {
  width: 3.2rem;
  height: 1.58rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.left img {
  width: 1.58rem;
  height: 1.58rem;
  border-radius: 0.15rem;
}
.price {
  font-size: 0.16rem;
  color: slategrey;
}
.prname {
  font-size: 0.16rem;
  color: slategrey;
}
.old {
  font-weight: bold;
  color: rgb(238, 4, 4);
}
.oldn {
  color: #000;
}
.details {
  font-size: 0.16rem;
  color: rgb(170, 178, 184);
}
</style>