<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#ffffff" indicator-active-color="#71e6d3" circular="true">
      <swiper-item>
        <view class="motto">
          <image src="../../static/car.png"></image>
          <p class="motto-text">能约束自己的人，最有威信。</p>
          <p class="signature">-- 塞涅卡</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car1.png"></image>
          <p class="motto-text">征服自己的一切弱点，正是一个人伟大的起始。</p>
          <p class="signature">-- 沈从文</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car2.png"></image>
          <p class="motto-text">不奋发，则心日颓靡；不检束，则心日恣肆。</p>
          <p class="signature">-- 北宋·朱熹</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car3.png"></image>
          <p class="motto-text">登峰造极的成就源于自律。</p>
          <p class="signature">-- 松下幸之助</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car4.png"></image>
          <p class="motto-text">其身正，不令而行；其身不正，虽令不行。</p>
          <p class="signature">-- 孔子</p>
        </view>
      </swiper-item>
    </swiper>
    <view class="active">
      <view class="my-active" @click="tochallenge">
        <view class="active-head">
          <view class="tiao">
            <p>我的挑战</p>
            <p class="small">1个进行中</p>
          </view>
          <image src="../../static/grade4.png" mode=""></image>
        </view>
      </view>
      <view class="and-friends" @click="tofriendsroom">
        <image src="../../static/peoples.png" mode=""></image>
        <p>好友活动室</p>
      </view>
    </view>
    <view class="dynamic">
      <view class="dynamic-head">
        <view class="item-box">
          <view class="head-item" :class="move===index?'move':''" v-for="(item,index) in headitem" :key="item.id" @click="change(index)">{{item.title}}</view>
        </view>
        <view class="add" @click="toAddDynamics">+</view>
      </view>
      <view class="dynamic-content">
        <view v-show="current === 0">
          <view class="dynamic-items">
            <activeitems></activeitems>
            <activeitems></activeitems>
            <activeitems></activeitems>
          </view>
        </view>
        <view v-show="current === 1">
          <activeitems></activeitems>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  // 导入自定义活动项组件
  import activeitems from '../../components/activeitems/activeitems.vue'
  export default {
    // 基础数据
    data() {
      return {
        move:0,
        current:0,
        headitem:[
          {
            id:1,
            title:'社圈'
          },
          {
            id:2,
            title:'关注'
          }
        ]
      }
    },
    methods: {
      // 切换
      change(index) {
        this.move = index,
        this.current = index
      },
      // 去挑战页面
      tochallenge() {
        uni.navigateTo({
          url:'/pages/challenge/challenge'
        })
      },
      // 去发表页面
      toAddDynamics() {
        uni.navigateTo({
          url:'/pages/AddDynamics/AddDynamics'
        })
      },
      // 去好友活动室页面
      tofriendsroom() {
        uni.navigateTo({
          url:'/pages/friendsRoom/friendsRoom'
        })
      }
    },
    components: {
      activeitems
    }
  }
</script>

<style>
  body {
    background-color: #cedbf5;
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
.content {
  padding: 40rpx;
}
.content .motto {
  position: relative;
}
.content .motto image {
  width: 670rpx;
  border-radius: 20rpx;
  height: 270rpx;
}
.content .motto .motto-text {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 600;
  color: #fff;
  text-align: left;
  letter-spacing: 5rpx;
  line-height: 50rpx;
  width: 550rpx;
  height: 60rpx;
  padding: 60rpx 60rpx 0 60rpx;
}
.content .motto .signature {
  position: absolute;
  right: 60rpx;
  bottom: 60rpx;
  color: #fff;
}
.content .active {
  margin-top: 20rpx;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20rpx;
  padding: 40rpx;
  display: flex;
  justify-content: space-around;
}
.content .active .chance {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content .active .chance image {
  width: 120rpx;
  height: 120rpx;
}
.content .active .my-active .active-head {
  display: flex;
  width: 220rpx;
  justify-content: space-between;
}
.content .active .my-active .active-head p {
  width: 125rpx;
  font-size: 28rpx;
  text-align: center;
}
.content .active .my-active .active-head .small {
  font-size: 22rpx;
}
.content .active .my-active .active-head image {
  width: 60rpx;
  height: 80rpx;
}
.tiao {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.and-friends {
  display: flex;
  font-size: 26rpx;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.and-friends image {
  width: 100rpx;
  height: 60rpx;
}
.dynamic {
  width: 630rpx;
  border-radius: 20rpx;
  margin-top: 20rpx;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20rpx;
}
.dynamic-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40rpx;
}
.dynamic-head .item-box {
  display: flex;
  justify-content: space-between;
}
.dynamic-head .head-item {
  margin-right: 50rpx;
  line-height: 50rpx;
  vertical-align: top;
  font-size: 26rpx;
  color: #575b5b;
}
.dynamic-head .add {
  font-size: 60rpx;
  line-height: 50rpx;
}
.move {
  font-size: 34rpx !important;
  color: #000000 !important;
  font-weight: 600;
  border-bottom: 4rpx solid #8356cb;
}
.dynamic-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

