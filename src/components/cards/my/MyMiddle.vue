<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import downloadIcon from '@/assets/imgs/ic_my_download.png'
import followICon from '@/assets/imgs/ic_my_follow.png'
import messageIcon from '@/assets/imgs/ic_my_message.png'

const list = reactive([
  { src: downloadIcon, id: 'xhs1' },
  { src: followICon, id: 'xhs2' },
  { src: messageIcon, id: 'xhs3' },

  // { src: '/src/assets/imgs/ic_my_download.png', id: 'xhs3' },
])

onMounted(() => {
  console.log('>>>downloadImage:', downloadIcon)
})
</script>

<template>
  <div class="my-middle">
    <div class="my-middle-item" v-for="item in list" :key="item.id">
      <div class="icon">
        <img :src="item.src" alt="" />
      </div>
      <span>ddddd</span>
    </div>
  </div>
</template>

<style scoped>
.my-middle {
  display: flex;
  justify-content: space-around;
}
.my-middle-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 44px;
    height: 44px;
  }
}
</style>
