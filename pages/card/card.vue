<template>
  <view>
    <view class="content">
      <image src="../../static/bg.png" mode="" class="bg-img"></image>
      <view class="bg-img"></view>
      <view class="con">
        <image src="../../static/card-bg.png" mode=""></image>
        <p class="title">我在Timer抓住时间</p>
        <p class="time">· 2022.12.25</p>
        <view class="today">
          <p class="today-time">6h34min</p>
          <p class="kind">今日自律</p>
        </view>
        <view class="keep">
          <p class="das">127天</p>
          <p class="kind">坚持天数</p>
        </view>
        <view class="erweima">
          <image src="../../static/my-erweima.png" mode=""></image>
          <p>扫码加好友</p>
        </view>
      </view>
      <view class="bot">
        <view class="save">
          <image src="../../static/onload.png" mode=""></image>
          <p>保存</p>
        </view>
        <view class="share" @click="share">
          <image src="../../static/share1.png" mode=""></image>
          <p>分享</p>
        </view>
      </view>
    </view>
    <view class="share-box" :style="{'bottom':bottom+'rpx'}">
      <view class="head">
        <p class="title">分享给朋友</p>
        <view class="cancel" @click="cancel">
          取消
        </view>
      </view>
      <view class="to-friends">
        <view class="friends">
          <image src="../../static/10.jpg" mode=""></image>
          <p>啊坤</p>
        </view>
        <view class="friends">
          <image src="../../static/10.jpg" mode=""></image>
          <p>大巴</p>
        </view>
        <view class="friends">
          <image src="../../static/10.jpg" mode=""></image>
          <p>梅子</p>
        </view>
      </view>
      <view class="to-others">
        <view class="others">
          <image src="../../static/friends-ship.png" mode=""></image>
          <p>朋友圈</p>
        </view>
        <view class="others">
          <image src="../../static/weixin.png" mode=""></image>
          <p>微信</p>
        </view>
        <view class="others">
          <image src="../../static/QQ-space.png" mode=""></image>
          <p>QQ空间</p>
        </view>
        <view class="others">
          <image src="../../static/QQ.png" mode=""></image>
          <p>QQ</p>
        </view>
        <view class="others">
          <image src="../../static/weibo.png" mode=""></image>
          <p>微博</p>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        bottom:-550
      }
    },
    methods: {
      // 取消按钮执行事件
      cancel() {
        this.bottom = -550
      },
      // 分享按钮执行事件
      share() {
        this.bottom = 0
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
    padding: 60rpx;
  }
  .con image {
    width: 100%;
    border-radius: 20rpx 20rpx 0 0;
    height: 700rpx;
  }
  .con {
    height: 700rpx;
    position: relative;
  }
  .con .title {
    position: absolute;
    left: 20rpx;
    top: 20rpx;
    font-size: 28rpx;
    color: #ffffff;
    z-index: 2;
  }
  .con .time {
    position: absolute;
    left: 20rpx;
    z-index: 2;
    color: #ffffff;
    bottom: 140rpx;
  }
  .con .today {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 20rpx;
    font-size: 28rpx;
    color: #ffffff;
    bottom: 50rpx;
  }
  .con .keep {
    position: absolute;
    display: flex;
    font-size: 28rpx;
    flex-direction: column;
    align-items: center;
    left: 180rpx;
    bottom: 50rpx;
    color: #ffffff;
  }
  .con .erweima {
    position: absolute;
    right: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    bottom: 50rpx;
    color: #ffffff;
    font-size: 18rpx;
    width: 150rpx;
    height: 150rpx;
  }
  .con .erweima image {
    width: 100rpx;
    height: 100rpx;
  }
  .bot {
    display: flex;
    bottom: 0;
    justify-content: space-between;
    padding: 40rpx 100rpx;
    border-radius: 0 0 20rpx 20rpx;
    background: rgba(255, 255, 255, 0.5);
  }
  .bot image {
    width: 40rpx;
    height: 40rpx;
    margin-right: 20rpx;
  }
  .save,.share {
    display: flex;
    align-items: center;
  }
  .share-box {
    width: 630rpx;
    position: fixed;
    transition: all 0.6s; 
    bottom: 0;
    left: 0;
    padding: 60rpx;
    background-color: #f9f9f9;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .head .title {
    font-size: 28rpx;
    font-weight: 600;
  }
  .head .cancel {
    width: 100rpx;
    height: 40rpx;
    border-radius: 20rpx;
    color: #ffffff;
    font-size: 28rpx;
    text-align: center;
    line-height: 40rpx;
    background-color: #8397e2;
  }
  .to-friends {
    padding: 20rpx 0;
    display: flex;
    border-bottom: 2rpx solid #b6b6b6;
  }
  .to-others {
    padding: 20rpx 0;
    display: flex;
  }
  .friends,.others {
    display: flex;
    font-size: 26rpx;
    margin-right: 30rpx;
    flex-direction: column;
    align-items: center;
  }
  .friends image,.others image {
    width: 80rpx;
    height: 80rpx;
    margin-bottom: 10rpx;
    border-radius: 50%;
  }
</style>
