<template>
  <view class="content">
    <view class="head">
      <view class="head-item" :class="active===index?'move':''" v-for="(item,index) in itemsList" :key="item.id"
        @click="change(index)">
        {{item.title}}
      </view>
      <view class="add" @click="toAdd">
        +
      </view>
    </view>
    <view class="container">
      <view class="con-text" v-show="current === 0">
        <view class="text">
          <view class="text-top">
            <image src="../../static/schedule(1).png" mode=""></image>
            <view class="timeRemain">
              <p>剩余时间:</p>
              <p class="time">{{finallyTime}}</p>
            </view>
          </view>
          <view class="text-body">
            <p class="event">高考倒计时</p>
            <p class="arrivalTime">2022.11.11 12:00:00</p>
          </view>
        </view>
        <view class="text">
          <view class="text-top">
            <image src="../../static/schedule(1).png" mode=""></image>
            <view class="timeRemain">
              <p>剩余时间:</p>
              <p class="time">{{finallyTime}}</p>
            </view>
          </view>
          <view class="text-body">
            <p class="event">新年倒计时</p>
            <p class="arrivalTime">2022.11.11 12:00:00</p>
          </view>
        </view>
        <view class="text">
          <view class="text-top">
            <image src="../../static/schedule(1).png" mode=""></image>
            <view class="timeRemain">
              <p>剩余时间:</p>
              <p class="time">{{finallyTime}}</p>
            </view>
          </view>
          <view class="text-body">
            <p class="event">约了朋友出去玩</p>
            <p class="arrivalTime">2022.11.11 12:00:00</p>
          </view>
        </view>
      </view>
      <view class="con-text" v-show="current === 1">
        <view class="text">
          <view class="text-top">
            <image src="../../static/schedule(1).png" mode=""></image>
            <view class="timeRemain">
              <p>剩余时间:</p>
              <p class="time">{{finallyTime}}</p>
            </view>
          </view>
          <view class="text-body">
            <p class="event">准备去爬山</p>
            <p class="arrivalTime">2022.11.11 12:00:00</p>
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
        active: 0,
        current: 0,
        // month: 12,
        // day: 15,
        // hour: 7,
        // minute: 5,
        // seconds: 5,
        finallyTime: "",
        itemsList: [{
            id: 1,
            title: '进行中'
          },
          {
            id: 2,
            title: '已结束'
          }
        ]
      }
    },
    onLoad() {
      this.getRestTime()
    },
    methods: {
      change(index) {
        this.active = index,
          this.current = index
      },
      toAdd() {
        uni.navigateTo({
          url: '/pages/add/add'
        })
      },
      // 获取剩余时间
      getRestTime() {
        setInterval(() => {
          var setTime = new Date("2022/12/20 12:14:05");
          var nowTime = new Date();
          var dec = (setTime - nowTime) / 1000;
          var d = parseInt(dec / 60 / 60 / 24);
          d = d < 10 ? '0' + d : d;
          var h = parseInt(dec / 60 / 60 % 24);
          h = h < 10 ? '0' + h : h;
          var m = parseInt(dec / 60 % 60);
          m = m < 10 ? '0' + m : m;
          var s = parseInt(dec % 60);
          s = s < 10 ? '0' + s : s;
          this.finallyTime = `${d}天${h}时${m}分${s}秒`
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  .move {
    color: #72e4da;
    font-weight: 700;
    border-bottom: 2rpx solid #72e4da;
  }

  .content {
    padding: 0 40rpx;
  }

  .head {
    position: relative;
    display: flex;
    justify-content: space-around;
  }

  .head .add {
    position: absolute;
    font-size: 60rpx;
    line-height: 30rpx;
    color: #454949;
    right: 0;
    top: 0;
  }

  .container {
    margin-top: 40rpx;
  }

  .text {
    padding: 40rpx;
    width: 590rpx;
    border-radius: 20rpx;
    margin-bottom: 20rpx;
    background-color: #ffffff;
    box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
  }

  .text .text-top image {
    width: 40rpx;
    height: 40rpx;
    margin-right: 20rpx;
  }

  .text .text-top {
    display: flex;
  }

  .text .text-top .timeRemain {
    display: flex;
  }

  .text .text-top .timeRemain p {
    font-size: 28rpx;
    color: #6f7272;
    font-weight: 600;
  }

  .text .text-top .timeRemain .time {
    font-size: 34rpx;
    margin-left: 20rpx;
    font-weight: 700;
    line-height: 40rpx;
    color: #72e4da;
  }

  .text-body {
    margin-top: 20rpx;
  }

  .text-body .event {
    text-indent: 2em;
    color: #454949;
    font-weight: 600;
  }

  .text-body .arrivalTime {
    font-size: 28rpx;
    margin-top: 20rpx;
  }
</style>
