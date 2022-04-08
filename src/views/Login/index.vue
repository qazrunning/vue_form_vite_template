<template>
  <div>
    <button @click="cellphoneHttps">登录</button>
  </div>
</template>

<script setup>
import { cellphone } from "@/apis/login/index.js";

const cellphoneHttps = async () => {
  let params = {};
  const res = await cellphone({});
  console.log(res);
};
</script>

<style>
</style>