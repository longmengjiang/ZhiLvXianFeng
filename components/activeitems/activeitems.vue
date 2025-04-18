<template>
  <view class="item">
    <view class="item-head">
      <image src="../../static/10.jpg" mode=""></image>
      <view class="item-element">
        <p class="item-name">我在自律</p>
        <view class="concern">已关注</view>
      </view>
    </view>
    <view class="item-text">
      又是坚持5km的一天
    </view>
    <view class="img-box">
      <image src="../../static/10.jpg" mode=""></image>
      <image src="../../static/10.jpg" mode=""></image>
      <image src="../../static/10.jpg" mode=""></image>
      <view class="img-number">+6</view>        
    </view>
  </view>
</template>

<script>
  export default {
    name:"activeitems",
    data() {
      return {
        
      };
    }
  }
</script>

<style scoped>
.item {
  width: 630rpx;
  margin-bottom: 40rpx;
}
.item .item-head {
  justify-content: space-between;
  display: flex;
}
.item-head .item-element {
  width: 540rpx;
  display: flex;
  justify-content: space-between;
}
.item-head .item-element .item-name {
  font-size: 26rpx;
  margin-top: 20rpx;
}
.item-head .item-element .concern {
  font-size: 28rpx;
  width: 100rpx;
  height: 50rpx;
  background-color: #cedbf5;
  border-radius: 20rpx;
  text-align: center;
  line-height: 50rpx;
  color: #6f7272;
  font-weight: 600;
  margin-top: 20rpx;
}
.item .item-text {
  font-size: 28rpx;
  color: #6f7272;
  font-weight: 600;
  margin: 10rpx 0;
}
.item .item-head image {
  width: 65rpx;
  height: 65rpx;
  border-radius: 50%;
  border: 1rpx solid #72e6da;
}
.item .img-box {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.item .img-box image {
  width: 200rpx;
  height: 150rpx;
  border-radius: 10rpx;
}
.item .img-number {
  width: 60rpx;
  height: 40rpx;
  position: absolute;
  z-index: 55;
  right: 0;
  text-align: center;
  line-height: 40rpx;
  bottom: 0;
  border-radius: 10rpx;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>