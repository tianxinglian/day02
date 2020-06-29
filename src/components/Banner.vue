<template>
  <div>
    <div class="banner">
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
      banners: []
    };
  },
  created() {
    this.http.get("https://api.it120.cc/small4/banner/list").then(msg => {
      console.log(msg);
      this.banners = msg.data.data;
    });
  }
};
</script>

<style lang="less">
body {
  font-size: 0.16rem;
}
.banner {
  width: 100%;
  position: relative;
}
.my-swipe .van-swipe-item {
  height: 5.2rem;
  color: #fff;
  font-size: 1rem;
  line-height: 150px;
  text-align: center;
  background-color: #ffffff;
  img {
    width: 100%;
    height: 100%;
  }
}
.nav {
  width: 100%;
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
  img {
    width: 0.58rem;
    height: 0.58rem;
  }
}
</style>