<script setup lang="ts">
import SingleImageToolBar from './SingleImageToolBar.vue'
const emits = defineEmits(['onClickNewsItem'])

const clickNewsItem = () => {
  emits('onClickNewsItem', 'item')
}
</script>

<template>
  <div class="container" @click="clickNewsItem">
    <div class="column">
      <img
        src="https://static-o.oss-cn-shenzhen.aliyuncs.com/images/tpbj/ImitatePhotoStyle1.jpg"
        alt=""
      />
      <div class="title">
        中国最美金秋｜秋日北京，北京永定门公园风景一览中国最美金秋｜秋日北京，北京永定门公园风景一览中国最美金秋｜秋日北京，北京永定门公园风景一览
      </div>
      <SingleImageToolBar></SingleImageToolBar>
    </div>
  </div>
</template>

<style scoped>
.column img {
  width: 100%;
  aspect-ratio: 16/9;
}

.column .title {
  line-height: 26px; /* 假设每行大约25px高 */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制显示的行数 */
  -webkit-box-orient: vertical;
  max-lines: 2;
  margin-left: 16px;
  margin-top: 8px;
  margin-right: 16px;
  background-color: chartreuse;
  text-align: center;
}
</style>
