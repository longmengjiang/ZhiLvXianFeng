<template>
  <view class="content">
    <view class="erweima-box">
      <view class="head">
        <image src="../../static/10.jpg" mode="" class="avatar"></image>
        <view class="info">
          <p class="name">~蓝桉</p>
          <p class="address">广东湛江</p>
        </view>
      </view>
      <image src="../../static/QR-Code.png" mode="" class="erweima"></image>
    </view>
  </view> 
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.erweima-box {
  padding: 40rpx;
  margin: 0 auto;
  margin-top: 200rpx;
  width: 500rpx;
  background-color: #fff;
  height: 580rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.head {
  display: flex;
}
.head .avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.info {
  margin-left: 20rpx;
}
.info .address {
  font-size: 26rpx;
}
.erweima-box .erweima {
  width: 400rpx;
  height: 400rpx;
  margin: 50rpx;
}
</style>
