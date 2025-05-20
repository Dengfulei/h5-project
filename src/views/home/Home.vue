<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import TextImage from '@/components/cards/TextImage.vue'
import SingleImage from '@/components/cards/SingleImage.vue'
import { showToast } from 'vant'
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)
console.log('scroll>>>>>> ', y)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const showTop = ref(false)

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = []
      refreshing.value = false
    }

    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }
    loading.value = false

    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}

const onRefresh = () => {
  // 清空列表数据
  finished.value = false
  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}

const onClickItem = (item: string) => {
  console.log('clickNewsItem11111:', item)
  showToast('dddsds')
}

const handleScroll = () => {
  console.log('handleScroll')
  alert('handleScroll')
}
</script>

<template>
  <div class="top-nav">
    <van-nav-bar :title="'标题' + y" fixed safe-area-inset-top />
  </div>
  <div class="middle-content">
    <!-- <text-image @on-click-news-item="onClickItem"></text-image>
    <single-image @on-click-news-item="onClickItem"></single-image>
    <text-image @on-click-news-item="onClickItem"></text-image>
    <single-image @on-click-news-item="onClickItem"></single-image>
    <text-image @on-click-news-item="onClickItem"></text-image>
    <single-image @on-click-news-item="onClickItem"></single-image> -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<style scoped>
.middle-content {
  margin-top: var(--van-nav-bar-height);
  margin-bottom: var(--van-nav-bar-height);
}
</style>
