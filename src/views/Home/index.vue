<template>
  <div>
    Home
    <div>
      {{ name }}
      <button class="btn" @click="changeVuex">点我改变vuex</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const name = computed(() => store.state.name);
const changeVuex = () => {
  store.commit("plus");
  console.log(22);
};
</script>

<style lang="less" scoped>
.btn {
  width: 200px;
  height: 60px;
  background-color: greenyellow;
}
</style>