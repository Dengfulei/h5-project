<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
  <div class="bottom-tabbar">
    <van-tabbar v-model="active" route fixed safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
