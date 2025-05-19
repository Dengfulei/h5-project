<script setup lang="ts">
import MyItem from '@/components/cards/my/MyItem.vue'
const onClickItem = (text: string) => {
  alert(text)
}
</script>

<template>
  <div class="my-box">
    <MyItem title="我的下载" @on-click-my-item="onClickItem">
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
  margin-bottom: var(--van-nav-bar-height);
  img {
    width: 24px;
  }
}
</style>
