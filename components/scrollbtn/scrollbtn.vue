<template>
  <view class="bg" @click="change">
    <!-- 活动后 -->
    <view class="left" v-if="flag==1">
      +{{value}}
    </view>
    <!-- 活动后 -->
    <view class="move-bg" :class="flag==1?'bg-move':''"></view>
    <!-- 活动后 -->
    <view class="move-box" :class="flag==1?'move':''"></view>
    <!-- 未活动 -->
    <view class="right" v-if="flag==0">
      {{value}}
    </view>
  </view>
</template>

<script>
  export default {
    name: "scrollbtn",
    props:['value','daka'],
    data() {
      return {
        flag:0
      };
    },
    methods: {
      change() {
        this.flag = 1
      }
    }
  }
</script>

<style scoped>
  .bg {
    position: relative;
    width: 100rpx;
    height: 50rpx;
    border-radius: 40rpx;
    background-color: #cedbf5;
  }

  .move-box {
    position: absolute;
    width: 46rpx;
    height: 46rpx;
    background-color: #f8d763;
    border-radius: 50%;
    transition: all 0.5s;
    z-index: 3;
    box-shadow: 0 4rpx 0rpx 0rpx #e9a939;
  }

  .move-bg {
    position: absolute;
    transition: all 0.5s;
    width: 0rpx;
    height: 46rpx;
    border-radius: 40rpx;
    z-index: 2;
  }

  .bg-move {
    position: absolute;
    transition: all 0.5s;
    width: 100rpx;
    height: 50rpx;
    background-color: #f8d763;
    border-radius: 40rpx;
    z-index: 2;
  }

  .move {
    position: absolute;
    transform: translateX(60rpx);
    transition: all 0.5s;
    z-index: 3;
  }
  .left {
    position: absolute;
    color: #fb6142;
    font-size: 24rpx;
    z-index: 4;
    left: 4rpx;
    font-weight: 600;
    line-height: 46rpx;
  }
  .right {
    font-size: 24rpx;
    line-height: 46rpx;
    position: absolute;
    z-index: 4;
    right: 10rpx;
  }
</style>
