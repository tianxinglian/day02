<template>
  <div>
    <li>
      <div class="hotlist">
        <img :src="shop.pic" alt />
        <h5>{{ shop.name }}</h5>
        <p class="des">{{ shop.characteristic }}</p>
        <p class="price">￥{{ shop.minPrice }}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["shop"],
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  width: 2.2rem;
  height: 3.58rem;
  display: flex;
  font-size: 0.16rem;
  flex-direction: column;
  justify-content: space-around;
}
li img {
  width: 2.2rem;
  height: 2.85rem;
  border-radius: 0.1rem;
}
li h5 {
  font-size: 0.16rem;
  font-weight: 600;
}
li p.price {
  font-size: 0.14rem;
  color: brown;
  width: 2.2rem;
  height: 0.25rem;
}
li p.des {
  color: rgb(124, 137, 155);
  width: 2.2rem;
  height: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>