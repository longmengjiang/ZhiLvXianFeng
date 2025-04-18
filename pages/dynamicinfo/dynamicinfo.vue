<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="con">
      <view class="con-head">
        <view class="con-head-left">
          <image src="../../static/bg.png" mode="" class="avatar"></image>
          <p class="name">我在自律</p>
        </view>
        <view class="follow">关注</view>
      </view>
      <view class="text">又是坚持5km的一天</view>
      <view class="img-box">
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
        <image src="../../static/bg.png" mode=""></image>
      </view>
      <view class="bot">
        <p class="time">2022.12.31 12:23</p>
        <image src="../../static/more(2).png" mode=""></image>
      </view>
      <view class="comment-box">
        <view class="comment">
          <view class="comment-items">
            <view class="items-left">
              <image src="../../static/10.jpg" mode="" class="item-avatar"></image>
              <view class="item-name">
                <p class="comment-name">我在自律</p>
                <!-- <p class="huifu">回复></p>
                <p class="comment-name">我在自律</p> -->
              </view>
            </view>
          </view>
          <view class="item-text">加油加油加油加油加油加油加油加油</view>
          <p class="IP">2022.12.31 13:45·广东</p>
        </view>
        <view class="comment">
          <view class="comment-items">
            <view class="items-left">
              <image src="../../static/10.jpg" mode="" class="item-avatar"></image>
              <view class="item-name">
                <p class="comment-name">我在自律</p>
                <p class="huifu">回复></p>
                <p class="comment-name">我在自律</p>
              </view>
            </view>
          </view>
          <view class="item-text">加油加油加油加油加油加油加油加油</view>
          <p class="IP">2022.12.31 13:45·广东</p>
        </view>
      </view>
    </view>
    <view class="input">
      <view class="input-left">
        <textarea name="" id="" cols="30" rows="10" placeholder="说点什么..."></textarea>
        <view class="set">
          发送
        </view>
      </view>
      <view class="icon-box">
        <view class="icon-comment">
          <image src="../../static/comment.png" mode=""></image>
          <p class="icon-number">10</p>
        </view>
        <view class="icon-zan">
          <image src="../../static/fabulous1.png" mode=""></image>
          <p class="icon-number">10</p>
        </view>
      </view>
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
.content {
  padding: 40rpx;
}
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
.con {
  padding: 20rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
}
.avatar {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
}
.IP {
  display: flex;
  font-size: 26rpx;
  color: #8e9096;
  margin-top: 10rpx;
  justify-content: flex-end;
}
.name {
  font-size: 28rpx;
  margin-left: 10rpx;
}
.follow {
  width: 110rpx;
  height: 50rpx;
  text-align: center;
  line-height: 50rpx;
  font-weight: 600;
  font-size: 24rpx;
  color: #494687;
  border-radius: 40rpx;
  background-color: #cedbf5;
}
.con-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con-head-left {
  display: flex;
  align-items: center;
}
.img-box {
  margin-top: 20rpx;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.img-box image {
  width: 190rpx;
  height: 130rpx;
  margin-bottom: 20rpx;
  border-radius: 20rpx;
}
.text {
  margin-top: 20rpx;
  color: #6e7073;
  font-weight: 600;
}
.bot {
  display: flex;
  font-size: 28rpx;
  align-items: center;
  padding-bottom: 10rpx;
  justify-content: space-between;
  height: 40rpx;
  color: #b0b3ba;
  font-weight: 600;
  border-bottom: 2rpx solid #b0b3ba;
}
.bot image {
  width: 30rpx;
  height: 30rpx;
}
.comment {
  margin-top: 20rpx;
  padding-bottom: 10rpx;
  /* border-bottom: 2rpx solid #b0b3ba; */
}
.comment-box {
  padding: 20rpx;
}
.item-avatar  {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
}
.items-left {
  display: flex;
  align-items: center;
}
.comment-items {
  display: flex;
  align-items: center;
  color: #6e7073;
  justify-content: space-between;
}
.item-name {
  font-size: 26rpx;
  display: flex;
  margin-left: 10rpx;
  font-weight: 600;
  color: #8e9096;
}
.item-text {
  margin-left: 60rpx;
}
.item-right {
  font-size: 24rpx;
}
.comment-back {
  margin-top: 10rpx;
  margin-left: 60rpx;
}
.comment-back-text {
  margin-left: 60rpx;
}
.comment-name {
  color: #494687;
}
.huifu {
  margin: 0 10rpx;
}
.input {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 20rpx;
  width: 710rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
}
  .input textarea {
    width: 300rpx;
    height: 50rpx;
    font-size: 28rpx;
    margin-left: 20rpx;
    padding-left: 10rpx;
    line-height: 50rpx;
    border-radius: 20rpx 0 0 20rpx;
    background-color: #d4e2ff;
  }
  .input .set {
    width: 120rpx;
    height: 50rpx;
    color: #fff;
    font-size: 26rpx;
    text-align: center;
    line-height: 50rpx;
    border-radius: 0 20rpx 20rpx 0;
    background-color: #8397e2;
  }
  .input-left {
    display: flex;
  }
  .icon-box {
    width: 180rpx;
    display: flex;
    justify-content: space-around;
  }
  .icon-box image {
    width: 50rpx;
    height: 50rpx;
  }
  .icon-comment,.icon-zan {
    position: relative;
  }
  .icon-comment .icon-number,.icon-zan .icon-number {
    position: absolute;
    top: -10rpx;
    right: -20rpx;
    font-size: 24rpx;
    color: #494687;
  }
</style>
