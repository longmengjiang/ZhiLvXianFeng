<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="talk-box">
      <view class="he">
        <image src="../../static/10.jpg" mode="" class="avatar-img"></image>
        <view class="he-text">
          你好吗？
        </view>
      </view>
      <view class="me">
        <view class="me-text">
          嗯，好的很
        </view>
        <image src="../../static/car1.png" mode="" class="avatar-img"></image>
      </view>
      <view class="he">
        <image src="../../static/10.jpg" mode="" class="avatar-img"></image>
        <view class="he-text">
          有多好
        </view>
      </view>
      <view class="me">
        <view class="me-text">
          跟你一样好
        </view>
        <image src="../../static/car1.png" mode="" class="avatar-img"></image>
      </view>
    </view>
    <view class="input">
      <view class="input-left">
        <textarea name="" id="" cols="30" rows="10" placeholder="说点什么..."></textarea>
        <view class="set" @click="sendmsg">
          发送
        </view>
      </view>
      <view class="icon-box">
        <view class="icon-album">
          <image src="../../static/icon-album.png" mode=""></image>
        </view>
        <view class="icon-emoji">
          <image src="../../static/Emoji.png" mode=""></image>
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
    onLoad() {
      // 设置导航栏标题
      uni.setNavigationBarTitle({
          title: '不偷懒'
      });
    },
    methods: {
      // 发送信息
      async sendmsg() {
        await this.request({
        url:`8002/ucenterservice/chat/addChat/${uni.getStorageSync('userid')}/{toUserId}/{content}`,
        method:'GET',
        }).then(res=> {
          if(res.code === 200) {
            this.continuity = res.data.count
            uni.setStorageSync('continuity',res.data.count)
            console.log(res.data.count)
          }
        }).catch(err => {
          console.log(err)
        })
      },
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
  padding: 0 40rpx;
}
.title {
  text-align: center;
}
.avatar-img {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
}
.he-text {
  position: relative;
  color: #ffffff;
  max-width: 450rpx;
  padding: 10rpx;
  margin-left: 30rpx;
  line-height: 40rpx;
  border-radius: 10rpx;
  background-color: #8397e2;
}
.he {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}
.he-text::before {
  position: absolute;
  content: '';
  width: 0px;
  height: 0px;
  left: -20rpx;
  top: 50%;
  transform: translateY(-50%);
  border-top: 10rpx solid transparent;
  border-right: 20rpx solid #8397e2;
  border-bottom: 10rpx solid transparent;
}
.talk-box {
  margin-top: 40rpx;
}
.me {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20rpx;
}
.me-text {
  position: relative;
  color: #ffffff;
  max-width: 450rpx;
  padding: 10rpx;
  margin-right: 30rpx;
  line-height: 40rpx;
  border-radius: 10rpx;
  background-color: #a891d6;
}
.me-text::before {
  position: absolute;
  content: '';
  width: 0px;
  height: 0px;
  right: -20rpx;
  top: 50%;
  transform: translateY(-50%);
  border-top: 10rpx solid transparent;
  border-left: 20rpx solid #a891d6;
  border-bottom: 10rpx solid transparent;
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
    width: 400rpx;
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
    justify-content: flex-end;
  }
  .icon-box {
    width: 150rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .icon-box image {
    width: 40rpx;
    height: 40rpx;
  }
  .icon-emoji image {
    width: 50rpx;
    height: 50rpx;
  }
</style>
