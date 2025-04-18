<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="con">
      <view class="head">
        <view class="head-item" :class="move===index?'move':''" v-for="(item,index) in headitem" :key="item.id" @click="change(index)">{{item.title}}</view>
      </view>
      <view v-show="current===0">
        <view class="none">
          <image src="../../static/none1.png" mode="" class="none"></image>
          <p>暂时没有相关活动</p>
        </view>
      </view>
      <view v-show="current===1">
        <view class="none">
          <image src="../../static/none1.png" mode="" class="none"></image>
          <p>暂时没有相关活动</p>
        </view>
      </view>
      <view v-show="current===2">
        <view class="none">
          <image src="../../static/none1.png" mode="" class="none"></image>
          <p>暂时没有相关活动</p>
        </view>
      </view>
      <view v-show="current===3">
        <view class="none">
          <image src="../../static/none1.png" mode="" class="none"></image>
          <p>暂时没有相关活动</p>
        </view>
      </view>
      <view class="hot">
        <p class="title">热门挑战</p>
        <view class="hot-con">
          <view class="hot-items">
            <image src="../../static/hot1.png" mode=""></image>
            <p class="hot-title">你今天运动了吗</p>
            <p class="time">报名时间：11.21-11.31</p>
            <p class="peoples">268,770人已参与</p>
          </view>
          <view class="hot-items">
            <image src="../../static/hot2.png" mode=""></image>
            <p class="hot-title">七月自律榜</p>
            <p class="time">报名时间：11.21-11.31</p>
            <p class="peoples">268,770人已参与</p>
          </view>
          <view class="hot-items">
            <image src="../../static/hot3.png" mode=""></image>
            <p class="hot-title">你今天运动了吗</p>
            <p class="time">报名时间：11.21-11.31</p>
            <p class="peoples">268,770人已参与</p>
          </view>
          <view class="hot-items">
            <image src="../../static/hot4.png" mode=""></image>
            <p class="hot-title">你今天运动了吗</p>
            <p class="time">报名时间：11.21-11.31</p>
            <p class="peoples">268,770人已参与</p>
          </view>
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
        move:0,
        current:0,
        headitem: [{
            id: 1,
            title: '已订阅'
          },
          {
            id: 2,
            title: '待开赛'
          },
          {
            id: 3,
            title: '进行时'
          },
          {
            id:4,
            title:'已结束'
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
  .con {
    position: fixed;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 100%;
  }
  .move {
    color: #4f2f7f !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
  }
  .head {
    margin-top: 20rpx;
    display: flex;
    padding: 0 100rpx;
    justify-content: space-between;
    align-items: center;
    background: rgba(170, 179, 196, 0.7);
    height: 100rpx;
  }
  .head-item {
    color: #ffffff;
    font-size: 28rpx;
    text-align: center;
    font-weight: 700;
    margin: 0 20rpx;
    line-height: 100rpx;
    width: 100rpx;
    height: 100rpx;
    border-radius: 10rpx;
  }
  .none {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 26rpx;
    color: #7e8087;
    height: 400rpx;
  }
  .none image{
    width: 200rpx;
    height: 100rpx;
  }
  .hot {
    padding: 40rpx;
    background-color: #ffffff;
  }
  .hot .title {
    font-weight: 700;
    margin-bottom: 30rpx;
  }
  .hot-items {
    width: 300rpx;
    margin-bottom: 40rpx;
    border-radius: 20rpx;
    background-color: #f3f0f8;
  }
  .hot-items image {
    width: 300rpx;
    height: 150rpx;
    border-radius: 20rpx;
  }
  .hot-title {
    margin-left: 10rpx;
    font-size: 28rpx;
  }
  .hot .time {
    margin-left: 10rpx;
    color: #a2a0a5;
    font-size: 24rpx;
  }
  .hot .peoples {
    margin-left: 10rpx;
    color: #a2a0a5;
    font-size: 24rpx;
  }
  .hot-con {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
