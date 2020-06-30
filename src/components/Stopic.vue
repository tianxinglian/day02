<template>
  <div>
    <li>
        <img :src="stopic.pic" alt />
        <h4>{{ stopic.title }}</h4>
        <p>{{ stopic.descript }}</p>
    </li>
  </div>
</template>

<script>
export default {
  props: ["stopic"],
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
  width: 4.1rem;
  height: 3.6rem;
  border: 0.05rem solid #ffffff;
  display: flex;
  font-size: 0.16rem;
  flex-direction: column;
  justify-content: space-around;
}
li img {
  width: 4.1rem;
  height: 2.63rem;
  border-radius: 0.1rem;
}
li h4{
  width: 4rem;
  font-size: 0.18rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li p{
  width: 4rem;
  font-size: 0.16rem;
  color: rgb(135, 143, 155);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>