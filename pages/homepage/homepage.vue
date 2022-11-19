<template>
  <view class="content">
    <view class="head">
      <image v-for="item in imgArr" :src="item" class="avatar-img"></image>
      <view class="change" @click="chooseImg">点击更换背景</view>
      <image src="../../static/share2.png" mode="" class="share"></image>
    </view>
    <view class="con">
      <view class="info">
        <view class="info-left">
          <image src="../../static/default.jpg" mode="" class="avatar"></image>
          <p class="name">hello</p>
        </view>
        <view class="info-right">
          <view class="follow">
            <p class="number">20k</p>
            <p>关注</p>
          </view>
          <view class="line">|</view>
          <view class="friends">
            <p class="number">50</p>
            <p>好友</p>
          </view>
          <view class="line">|</view>
          <view class="fabulous">
            <p class="number">22w</p>
            <p>获赞</p>
          </view>
          <view class="erweima" @click="toErweima">
            <image src="../../static/QR-Code.png" mode=""></image>
          </view>
        </view>
      </view>
      <view class="level">
        <image src="../../static/level5.png" mode=""></image>
      </view>
      <view class="person-info">
        <view class="person-info-left">
          <p class="sex">女</p>
          <view class="line">|</view>
          <p class="address">广东省芜湖市芜湖区</p>
          <view class="line">|</view>
          <p class="ip">IP属地广东</p>
        </view>
        <view class="person-info-right" @click="toPersonal">
          <p>设置 ></p>
        </view>
      </view>
      <view class="join">
        @hello 2022.10.15 加入
      </view>
      <view class="panel">
        <view class="totaltime">
          <p>总自律时长</p>
          <p class="time"><span>15467</span>min</p>
        </view>
        <view class="totalday">
          <p>已坚持打卡</p>
          <p class="day"><span>80</span>day</p>
        </view>
      </view>
    </view>
    <view class="bot-con">
      <view class="bot-head">
        <view class="bot-head-left">
          <image src="../../static/star(2).png" mode=""></image>
          <p>自律日记</p>
        </view>
        <view class="bot-head-right">
          <image src="../../static/fabulous.png" mode=""></image>
          <p>20w人赞过</p>
        </view>
      </view>
      <view class="bot-body">
        <image src="../../static/none.png" mode=""></image>
        <p>还没有发过动态...</p>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        imgArr:['../../static/10.jpg'],
      }
    },
    methods: {
      chooseImg() {
        uni.chooseImage({
          count:1,
          success: res => {
            this.imgArr = res.tempFilePaths
          }
        })
      },
      toPersonal() {
        uni.navigateTo({
          url:'/pages/personal/personal'
        })
      },
      toErweima() {
        uni.navigateTo({
          url:'/pages/erweima/erweima'
        })
      },
    }
  }
</script>

<style scoped>
.head {
  position: relative;
}
.head image {
  width: 100%;
  height: 350rpx;
}
.head .change {
  position: absolute;
  right: 40rpx;
  bottom: 20rpx;
  width: 200rpx;
  height: 40rpx;
  border-radius: 10rpx;
  text-align: center;
  line-height: 40rpx;
  font-size: 22rpx;
  z-index: 99;
  background-color: rgb(255,255,255,0.7);
}
.head .share {
  position: absolute;
  width: 50rpx;
  height: 50rpx;
  right: 40rpx;
  top: 20rpx;
}
.con {
  padding: 40rpx;
  z-index: 22;
}
.con .info {
  display: flex;
  margin-top: -80rpx;
  justify-content: space-between;
  width: 670rpx;
  height: 130rpx;
}
.info .info-left .avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  z-index: 99;
  border: 6rpx solid #ffffff;
}
.info-left {
  display: flex;
}
.info-left .name {
  margin-top: 70rpx;
  margin-left: 10rpx;
  font-size: 28rpx;
  font-weight: 600;
}
.info-right {
  display: flex;
  margin-top: 40rpx;
  justify-content: space-between;
  width: 350rpx;
  font-size: 24rpx;
}
.info .info-right .line {
  margin-top: 25rpx;
}
.info .info-right .erweima {
  margin-top: 20rpx;
}
.info-right .erweima image {
  width: 50rpx;
  border: 2rpx solid #4fdcb9;
  border-radius: 10rpx;
  height: 50rpx;
}
.info-right .follow,.info-right .friends,.info-right .fabulous {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.level image {
  width: 80rpx;
  height: 40rpx;
}
.person-info {
  display: flex;
  justify-content: space-between;
}
.person-info .person-info-left {
  display: flex;
  margin-left: 10rpx;
  justify-content: space-between;
  width: 460rpx;
  font-size: 26rpx;
}
.person-info .person-info-right {
  font-size: 24rpx;
  line-height: 40rpx;
}
.join {
  margin-left: 10rpx;
  margin-top: 40rpx;
  font-size: 26rpx;
}
.panel {
  font-size: 28rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40rpx;
  width: 670rpx;
  height: 150rpx;
  border-radius: 20rpx;
  background-color: #ffffff;
  box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
}
.panel .totaltime,.panel .totalday {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.panel .totaltime span,.panel .totalday span {
  font-size: 34rpx;
  font-weight: 700;
  color: #4fdcb9;
}
.panel p {
  margin-top: 10rpx;
}
.bot-con {
  width: 100%;
  border-radius: 20rpx;
  height: 700rpx;
  background-color: #ffffff;
}
.bot-head {
  display: flex;
  justify-content: space-around;
}
.bot-head image {
  width: 50rpx;
  margin-right: 10rpx;
  height: 50rpx;
}
.bot-head-left,.bot-head-right {
  margin-top: 40rpx;
  display: flex;
  line-height: 50rpx;
  font-size: 28rpx;
}
.bot-body {
  margin-top: 80rpx;
}
.bot-body image {
  width: 100%;
  height: 300rpx;
}
.bot-body p {
  text-align: center;
  font-size: 26rpx;
}
</style>
