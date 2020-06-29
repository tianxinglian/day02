<template>
  <div>
     <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item of banners" :key="item.id">
            <img :src="item.picUrl" alt="">
        </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            banners:[]
        }
    },
    created(){
        axios.get("https://api.it120.cc/small4/banner/list").then((msg) => {
            console.log(msg)
            this.banners = msg.data.data
        })
    }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  height: 426px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ffffff;
}
.my-swipe .van-swipe-item img{
    width: 100%;
    height: 100%;
}
</style>