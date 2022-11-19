<template>
  <view class="content">
    <swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#ffffff" indicator-active-color="#71e6d3" circular="true">
      <swiper-item>
        <view class="motto">
          <image src="../../static/car2.jpg"></image>
          <p class="motto-text">能约束自己的人，最有威信。</p>
          <p class="signature">-- 塞涅卡</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car1.jpg"></image>
          <p class="motto-text">征服自己的一切弱点，正是一个人伟大的起始。</p>
          <p class="signature">-- 沈从文</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car3.jpg"></image>
          <p class="motto-text">不奋发，则心日颓靡；不检束，则心日恣肆。</p>
          <p class="signature">-- 北宋·朱熹</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car4.jpg"></image>
          <p class="motto-text">登峰造极的成就源于自律。</p>
          <p class="signature">-- 松下幸之助</p>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="motto">
          <image src="../../static/car5.jpg"></image>
          <p class="motto-text">其身正，不令而行；其身不正，虽令不行。</p>
          <p class="signature">-- 孔子</p>
        </view>
      </swiper-item>
    </swiper>
    <view class="active">
      <view class="chance">
        <image src="../../static/chance.png" mode=""></image>
        <p>挑战 ></p>
      </view>
      <view class="my-active">
        <view class="active-head">
          <p>我的活动<span>1个进行中</span></p>
          <image src="../../static/grade4.png" mode=""></image>
        </view>
        <view class="active-bot">
          <image src="../../static/diamond.png" mode=""></image>
          <p>晒奖杯</p>
        </view>
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
            <view class="item">
              <view class="item-head">
                <image src="../../static/10.jpg" mode=""></image>
                <view class="item-element">
                  <p class="item-name">我在自律</p>
                  <view class="concern">关注</view>
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
            <view class="item">
              <view class="item-head">
                <image src="../../static/10.jpg" mode=""></image>
                <view class="item-element">
                  <p class="item-name">我在自律</p>
                  <view class="concern">关注</view>
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
            <view class="item">
              <view class="item-head">
                <image src="../../static/10.jpg" mode=""></image>
                <view class="item-element">
                  <p class="item-name">我在自律</p>
                  <view class="concern">关注</view>
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
          </view>
        </view>
        <view v-show="current === 1">
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
        </view>
        <view v-show="current === 2">
          <view class="item">
            <view class="item-head">
              <image src="../../static/10.jpg" mode=""></image>
              <view class="item-element">
                <p class="item-name">我在自律</p>
                <view class="concern">关注</view>
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
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
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
          },
          {
            id:3,
            title:'推荐'
          }
        ]
      }
    },
    methods: {
      change(index) {
        this.move = index,
        this.current = index
      },
      toAddDynamics() {
        uni.navigateTo({
          url:'/pages/AddDynamics/AddDynamics'
        })
      }
    }
  }
</script>

<style>
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
  color: #6f7272;
  text-align: left;
  line-height: 50rpx;
  width: 550rpx;
  height: 60rpx;
  padding: 60rpx 60rpx 0 60rpx;
}
.content .motto .signature {
  position: absolute;
  right: 60rpx;
  bottom: 60rpx;
  color: #6f7272;
}
.content .active {
  margin-top: 20rpx;
  background-color: #FFFFFF;
  border-radius: 20rpx;
  padding: 40rpx 40rpx 40rpx 100rpx;
  display: flex;
  justify-content: space-between;
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
.content .active .my-active .active-head p span {
  font-size: 22rpx;
}
.content .active .my-active .active-head image {
  width: 60rpx;
  height: 80rpx;
}
.content .active .my-active .active-bot {
  color: #fbbc4d;
  margin-top: 40rpx;
  display: flex;
} 
.content .active .my-active .active-bot image {
  width: 40rpx;
  height: 40rpx;
  margin-right: 40rpx;
}
.dynamic {
  width: 630rpx;
  border-radius: 20rpx;
  margin-top: 20rpx;
  background-color: #FFFFFF;
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
  border-bottom: 4rpx solid #72e6da;
}
.dynamic-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dynamic-items .item {
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
  height: 40rpx;
  background-color: #72e6da;
  border-radius: 10rpx;
  text-align: center;
  line-height: 40rpx;
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

