<script setup lang="ts"></script>

<template>
  <div class="bootom-tool-bar">
    <van-button class="comment" icon="plus" type="primary">评论</van-button>
    <van-button class="priase" icon="plus" type="primary">点赞</van-button>
    <van-button class="share" icon="plus" type="primary">分享</van-button>
  </div>
</template>

<style scoped>
.bootom-tool-bar {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}
.comment,
.priase,
.share {
  background-color: transparent;
  border: none;
  color: #000;
}
</style>
