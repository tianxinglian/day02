<template>
  <div>
    <van-loading v-if="loading">加载中。。。</van-loading>
    <div class="banner" v-else>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item of banners" :key="item.id">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
      <ul class="nav">
        <li>
          <img src="/static/img/cd1.7808faf.png" alt />
          <p>签到</p>
        </li>
        <li>
          <img src="/static/img/cd2.png" alt />
          <p>签到</p>
        </li>
        <li>
          <img src="/static/img/cd3.png" alt />
          <p>签到</p>
        </li>
        <li>
          <img src="/static/img/cd4.png" alt />
          <p>签到</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      banners: [],
      loading: true
    };
  },
  created() {
    this.http.get("https://api.it120.cc/small4/banner/list").then(msg => {
      console.log(msg);
      this.banners = msg.data.data;
      this.loading = false;
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
.banner {
  width: 5.2rem;
  position: relative;
}
.my-swipe {
  width: 5.2rem;
  height: 5.2rem;
}
.my-swipe .van-swipe-item {
  width: 5.2rem;
  height: 5.2rem;
  color: #fff;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  background-color: #ffffff;
}
.my-swipe .van-swipe-item img {
  width: 5.2rem;
  height: 5.2rem;
}
.nav {
  width: 5.2rem;
  height: 1.3rem;
  font-size: 0.22rem;
  background: white;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 20% 20% 0 0;
  border-bottom: 0.2rem solid #f5f5f5;
}
.nav img {
  width: 0.58rem;
  height: 0.58rem;
}
</style>