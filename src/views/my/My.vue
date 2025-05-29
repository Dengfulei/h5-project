<script setup lang="ts">
import MyHeadder from '@/components/cards/my/MyHeadder.vue'
import MyItem from '@/components/cards/my/MyItem.vue'
import MyMiddle from '@/components/cards/my/MyMiddle.vue'
import { showToast } from 'vant'
import { ref } from 'vue'

const onClickItem = (text: string) => {
  console.log('text>>>:', text)
  showToast('dasds')
}
const list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
</script>

<template>
  <div class="my-box">
    <MyHeadder></MyHeadder>
    <MyMiddle></MyMiddle>
    <MyItem
      v-for="item in list"
      :key="item"
      :id="item"
      :title="'我的下载 ' + item"
      @on-click-my-item="onClickItem"
    >
      <template #left-icon>
        <img src="@/assets/imgs/ic_my_download.png" alt="" />
      </template>
      <template #right-icon>
        <img src="@/assets/imgs/ic_my_message.png" alt="" />
      </template>
    </MyItem>
  </div>
</template>

<style scoped>
.my-box {
  margin-bottom: var(--van-tabbar-height);
  img {
    width: 24px;
  }
}
</style>
