<template>
  <!-- 添加日程结构 -->
  <view class="content">
    <view class="add-con">
      <image src="../../static/pen2.png" mode=""></image>
      <input type="text" placeholder="请输入你的日程" v-model="text">
    </view>
    <view class="chooseTime">
      <view class="chooseTime-head">
        <image src="../../static/schedule2.png" mode=""></image>
        <p>选择时间</p>
      </view>
      <uni-datetime-picker :clear-icon="false" v-model="single" />
    </view>
    <view class="current">
      <p>当前你的日程是:</p>
      <p class="event">{{text}}</p>
      <p>时间为:</p>
      <p class="time">{{single}}</p>
    </view>
    <view class="done" @click="toSchedule">
      确定
    </view>
  </view>
</template>

<script>
  export default {
    // 基本数据
    data() {
      return {
        single:'2022-11-22 12:24:24',
        text:''
      }
    },
    methods: {
      // 去设置今日任务
      toSchedule() {
        uni.switchTab({
          url:'/pages/schedule/schedule'
        })
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.add-con {
  display: flex;
}
.add-con image {
  width: 50rpx;
  height: 50rpx;
}
.add-con input {
  width: 400rpx;
  border-bottom: 2rpx solid #6f7272;
}
.chooseTime {
  margin-top: 40rpx;
  width: 400rpx;
  display: flex;
  flex-direction: column;
}
.chooseTime .chooseTime-head {
  display: flex;
}
.chooseTime .chooseTime-head p {
  line-height: 50rpx;
}
.chooseTime image {
  width: 50rpx;
  height: 50rpx;
}
.current {
  margin-top: 40rpx;
  padding: 40rpx;
  margin-bottom: 80rpx;
  border: 4rpx solid #72e4da;
  background-color: #ffffff;
  box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
  border-radius: 20rpx;
}
.current p {
  font-size: 28rpx;
}
.current .event {
  color: #6f7272;
  font-size: 32rpx;
  margin-bottom: 20rpx;
  overflow-wrap: break-word;
  font-weight: 600;
}
.current .time {
  font-weight: 600;
  font-size: 32rpx;
  color: #6f7272;
}
.done {
  width: 180rpx;
  margin: 0 auto;
  height: 80rpx;
  background-color: #72e4da;
  border-radius: 20rpx;
  text-align: center;
  line-height: 80rpx;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 10rpx;
}
</style>
