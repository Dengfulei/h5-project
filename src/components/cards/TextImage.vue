<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <div class="title">追光｜乘风破浪的她 飒气登场驶向梦想</div>
        <div class="publish-time">2025-10-20</div>
      </div>
      <img class="image" src="../assets/logo.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px 16px;
}
.row {
  display: flex;
  background-color: red;
}
.column {
  flex: 1;
  background-color: aquamarine;
  padding-right: 8px;
}

.title {
  line-height: 26px; /* 假设每行大约25px高 */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 限制显示的行数 */
  -webkit-box-orient: vertical;
  max-lines: 3;
}

.publish-time {
  margin-top: 16px;
}
.image {
  width: 120px;
  height: 90px;
  background-color: yellow;
}
</style>
