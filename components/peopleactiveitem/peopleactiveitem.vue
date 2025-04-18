<template>
  <view class="item">
    <view class="item-head">
      <p>2022.10.20 23:16</p>
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
    name:"peopleactiveitem",
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
  padding-bottom: 20rpx;
  border-bottom: 2rpx solid #6f7272;
}
.item .item-head p {
  font-size: 28rpx;
}
.item .item-text {
  font-size: 28rpx;
  color: #6f7272;
  font-weight: 600;
  margin: 0 0 10rpx 0;
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