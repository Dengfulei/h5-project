<script setup lang="ts"></script>

<template>
  <div class="my-header" safe-area-inset-top>
    <div class="my-message">
      <img src="@/assets/imgs/ic_my_message.png" alt="" srcset="" />
    </div>
    <div class="middle-content">
      <div class="left">
        <div class="report">举报</div>
        <div class="make-money">赚积分</div>
      </div>
      <div class="middle-icon">
        <img src="../../../assets/logo.svg" alt="" srcset="" />
      </div>
      <div class="right">站位</div>
    </div>
    <div class="bottom-content">
      <div class="title">新华社网友</div>
      <div class="sub-title">给时光以生命，而不是给生命以时光</div>
    </div>
  </div>
</template>

<style scoped>
.my-header {
  padding: 0 16px;
}
.my-message {
  display: flex;
  /* justify-content: left; */
  align-items: center;
  height: 46px;
  background-color: red;
}
.my-message img {
  width: 22px;
  height: 22px;
}
.middle-content {
  display: flex;
  justify-content: left;
  background-color: yellow;
  .left {
    background-color: bisque;
    width: 100px;
  }

  .middle-icon {
    width: 104px;
    height: 94px;
    margin: 0 auto;
    background-color: blueviolet;
  }
  .right {
    background-color: blue;
    width: 100px;
    visibility: hidden;
  }
}

.bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;

  .title {
    font-family: SourceHanSerifCN, SourceHanSerifCN;
    font-weight: bold;
    font-size: 22px;
    color: #1c1c1c;
    line-height: 31px;
    text-align: center;
    font-style: normal;
  }
  .sub-title {
    font-family: SourceHanSerifCN, SourceHanSerifCN;
    font-weight: 500;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 20px;
    text-align: center;
    font-style: normal;
  }
}
</style>
