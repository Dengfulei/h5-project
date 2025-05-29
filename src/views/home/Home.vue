<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import TextImage from '@/components/cards/TextImage.vue'
import SingleImage from '@/components/cards/SingleImage.vue'
import { showToast } from 'vant'
import { useScroll } from '@vueuse/core'
import router from '@/router'

const { y } = useScroll(window)
console.log('scroll>>>>>> ', y)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const showTop = ref(false)

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log('onActivated')
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('onDeactivated')
})
onMounted(() => {
  console.log('onMounted')
  loadData()
})

onUnmounted(() => {
  console.log('onUnmounted')
})

const onLoad = () => {
  console.log('onLoad>>> ')
  loadData()
}

const onRefresh = () => {
  console.log('onRefresh>>> ')
  // 清空列表数据
  finished.value = false
  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  loadData()
}

const loadData = () => {
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

const testclisck = (a: any) => {
  console.log('aaaaaa>>> ', a.index)
}

const jumpToDetail = () => {
  router.push({ path: '/detail' })
}
</script>

<template>
  <div class="top-nav">
    <van-nav-bar :title="'标题' + y" fixed safe-area-inset-top />
  </div>
  <div class="middle-content">
    <div class="testclisck" @click="testclisck">testclisck</div>
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
        :immediate-check="false"
      >
        <van-cell v-for="item in list" :key="item" :title="item" @click="jumpToDetail" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<style scoped>
.middle-content {
  margin-top: var(--van-nav-bar-height);
  margin-bottom: var(--van-tabbar-height);
}
.testclisck {
  width: 100px;
  background-color: red;
}
</style>
