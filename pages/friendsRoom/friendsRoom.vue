<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="main">
      <view class="bot1"></view>
      <view class="bot2"></view>
      <view class="title">和好友相互鼓励，相互监督，一起感受自律快乐</view>
      <view class="people1">
        <image src="../../static/10.jpg" mode=""></image>
      </view>
      <view class="people2">
        <image src="../../static/addpeople.png" mode=""></image>
      </view>
      <view class="people3">
        <image src="../../static/addpeople.png" mode=""></image>
      </view>
      <view class="people4">
        <image src="../../static/addpeople.png" mode=""></image>
      </view>
      <view class="people5">
        <image src="../../static/addpeople.png" mode=""></image>
      </view>
      <view class="now">
        1/5人
      </view>
    </view>
    <view class="addfriends">邀请好友</view>
    <view class="addtask">新建任务</view>
    <view class="addtodaytask" @click="toroom">进入今日任务</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      // 去房间页面
      toroom() {
        uni.navigateTo({
          url:'/pages/room/room'
        })
      }
    }
  }
</script>

<style scoped>
.content .bg-img {
    position: fixed;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .content {
    padding: 40rpx;
  }
  .main {
    position: relative;
    height: 300rpx;
    border-radius: 20rpx;
    z-index: 3;
    margin-bottom: 150rpx;
    padding: 20rpx;
    background: rgba(255, 255, 255, 0.9);
  }
  .bot1 {
    position: absolute;
    width: 600rpx;
    left: 35rpx;
    height: 30rpx;
    bottom: -30rpx;
    z-index: 2;
    border-radius: 0 0 20rpx 20rpx;
    background: rgba(255, 255, 255, 0.6);
  }
  .bot2 {
    position: absolute;
    width: 480rpx;
    height: 50rpx;
    bottom: -55rpx;
    left: 90rpx;
    border-radius: 0 0 20rpx 20rpx;
    background: rgba(255, 255, 255, 0.5);
  }
  .title {
    font-size: 28rpx;
    text-align: center;
    padding: 0 0 20rpx 0;
    border-bottom: 2rpx solid #cedbf5;
  }
  .main image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }
  .people1 {
    position: absolute;
    left: 40rpx;
    top: 110rpx;
  }
  .people2 {
    position: absolute;
    left: 160rpx;
    top: 190rpx;
  }
  .people5 {
    position: absolute;
    right: 40rpx;
    top: 110rpx;
  }
  .people4 {
    position: absolute;
    right: 160rpx;
    top: 190rpx;
  }
  .people3 {
    position: absolute;
    top: 230rpx;
    left: 300rpx;
  }
  .now {
    position: absolute;
    left: 290rpx;
    top: 120rpx;
    color: #4f2f7f;
    font-size: 36rpx;
  }
  .addfriends,.addtask,.addtodaytask {
    width: 250rpx;
    height: 90rpx;
    text-align: center;
    line-height: 90rpx;
    font-size: 26rpx;
    margin: 50rpx auto;
    border-radius: 10rpx;
    box-shadow: 0 2rpx 0 0 #9a9aa0;
    background-color: #f3f0f8;
  }
</style>
