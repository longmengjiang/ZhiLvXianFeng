<template>
  <view class="content">
    <view class="count">
      <view class="time">{{finallyTime}}</view>
      <view class="btn-box">
        <view class="stop">暂停</view>
        <view class="begin">开始</view>
        <view class="done">完成</view>
      </view>
      <image src="../../static/star.png" mode="" class="star1"></image>
      <image src="../../static/star.png" mode="" class="star2"></image>
      <image src="../../static/star.png" mode="" class="star3"></image>
      <image src="../../static/star.png" mode="" class="star4"></image>
      <image src="../../static/star.png" mode="" class="star5"></image>
      <image src="../../static/star.png" mode="" class="star6"></image>
      <image src="../../static/star.png" mode="" class="star7"></image>
      <image src="../../static/star.png" mode="" class="star8"></image>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        timecount: 0,
        start: true,
        finallyTime: '',
        miu: 60
      }
    },
    onLoad(option) {
      this.getRestTime()
    },
    methods: {
      stop() {
        this.flag = false
      },
      getRestTime() {
        setInterval(() => {
          var nowTime = new Date();
          // 传过来的时间加上现在的时间,等于最终的时间就是放在下面的时间
          var setTime = new Date("2022/12/20 12:14:05");
          var dec = (setTime - nowTime) / 1000;
          var d = parseInt(dec / 60 / 60 / 24);
          d = d < 10 ? '0' + d : d;
          var h = parseInt(dec / 60 / 60 % 24);
          h = h < 10 ? '0' + h : h;
          var m = parseInt(dec / 60 % 60);
          m = m < 10 ? '0' + m : m;
          var s = parseInt(dec % 60);
          s = s < 10 ? '0' + s : s;
          this.finallyTime = `${h}:${m}:${s}`
        }, 1000)
      }
    },
    components: {

    },
  }
</script>

<style scoped>
  .content {
    min-height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .count {
    display: flex;
    position: relative;
    justify-content: center;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .count .time {
    color: #72e5d9;
    z-index: 99;
    font-size: 100rpx;
  }

  .count .btn-box {
    margin-top: 150rpx;
  }

  .count .btn-box .stop,
  .begin,
  .done {
    z-index: 99;
    color: #fff;
    width: 160rpx;
    height: 80rpx;
    font-size: 34rpx;
    margin-bottom: 40rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
    border: 4rpx solid #72e5d9;
  }

  .star1,
  .star2,
  .star3,
  .star4,
  .star5,
  .star6,
  .star7,
  .star8 {
    position: absolute;
    top: -800rpx;
    left: 0;
    width: 300rpx;
    height: 300rpx;
    animation-name: star1;
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
  }

  .star2 {
    width: 250rpx;
    height: 250rpx;
    left: 50rpx;
    top: -800rpx;
    animation-name: star2;
    animation-delay: 1s;
  }

  .star3 {
    width: 250rpx;
    height: 250rpx;
    left: 200rpx;
    top: -800rpx;
    animation-name: star3;
    animation-delay: 5s;
  }

  .star4 {
    width: 300rpx;
    height: 300rpx;
    left: 250rpx;
    top: -800rpx;
    animation-name: star4;
    animation-duration: 3s;
  }

  .star5 {
    width: 250rpx;
    height: 250rpx;
    left: 350rpx;
    top: -800rpx;
    animation-name: star5;
    animation-delay: 2s;
    animation-duration: 3s;
  }

  .star6 {
    width: 300rpx;
    height: 300rpx;
    left: 500rpx;
    top: -400rpx;
    animation-name: star6;
    animation-duration: 2.5s;
  }

  .star7 {
    width: 250rpx;
    height: 250rpx;
    left: 500rpx;
    top: 0rpx;
    animation-name: star7;
    animation-duration: 3s;
  }

  .star8 {
    width: 300rpx;
    height: 300rpx;
    left: 500rpx;
    top: 300rpx;
    animation-name: star8;
    animation-delay: 2s;
    animation-duration: 2s;
  }

  @keyframes star1 {
    to {
      left: -400rpx;
      top: -200rpx;
    }
  }

  @keyframes star2 {
    to {
      left: -400rpx;
      top: -300rpx;
    }
  }

  @keyframes star3 {
    to {
      left: -400rpx;
      top: 150rpx;
    }
  }

  @keyframes star4 {
    to {
      left: -400rpx;
      top: 200rpx;
    }
  }

  @keyframes star5 {
    to {
      left: -400rpx;
      top: 300rpx;
    }
  }

  @keyframes star6 {
    to {
      left: -400rpx;
      top: 500rpx;
    }
  }

  @keyframes star7 {
    to {
      left: -400rpx;
      top: 800rpx;
    }
  }

  @keyframes star8 {
    to {
      left: -0rpx;
      top: 800rpx;
    }
  }
</style>
