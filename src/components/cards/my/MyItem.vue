<script setup lang="ts">
const props = defineProps(['title'])
const emits = defineEmits(['onClickMyItem'])
const onClickItem = ()=>{
  emits('onClickMyItem','111')
}
</script>

<template>
  <div class="my-item" @click="onClickItem">
    <slot name="left-icon"></slot>
    <div class="my-item-title">{{ title }}</div>
    <slot name="right-icon"></slot>
  </div>
</template>

<style scoped>
.my-item {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 16px;
}
.my-item-title {
  margin-left: 10px;
  flex: 1;
}
</style>
