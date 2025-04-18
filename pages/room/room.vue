<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="main">
      <view class="bot1"></view>
      <view class="bot2"></view>
      <view class="title">和好友相互鼓励，相互监督，一起感受自律快乐</view>
      <view class="peoples">
        <view class="people1">
          <image src="../../static/10.jpg" mode=""></image>
        </view>
        <view class="people2">
          <image src="../../static/addpeople.png" mode=""></image>
        </view>
        <view class="people3">
          <image src="../../static/addpeople.png" mode=""></image>
        </view>
        <view class="people4">
          <image src="../../static/addpeople.png" mode=""></image>
        </view>
        <view class="people5">
          <image src="../../static/addpeople.png" mode=""></image>
        </view>
      </view>
      <scroll-view scroll-y="true" class="scroll-y">
        <view class="items">
          <view class="name">
            大白：
          </view>
          <view class="say">
            我快做完卷子了哦我快做完卷子了哦我快做完卷子了哦我快做完卷子了哦我快做完卷子了哦
          </view>
        </view>
        <view class="items">
          <view class="name">
            大白：
          </view>
          <view class="say">
            我快做完卷子了哦
          </view>
        </view>
        <view class="items">
          <view class="name">
            大白：
          </view>
          <view class="say">
            我快做完卷子了哦
          </view>
        </view>
        <view class="items">
          <view class="name">
            大白：
          </view>
          <view class="say">
            我快做完卷子了哦
          </view>
        </view>
        <view class="mysay">
          <view class="say">
            我也快做完卷子了哦
          </view>
          <view class="name">
            ：我
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="input">
      <textarea name="" id="" cols="30" rows="10" placeholder="发表友善交流"></textarea>
      <view class="set">
        发送
      </view>
    </view>
    <!-- <tree></tree> -->
    <view class="task-items">
      <view class="items-body">
        <view class="task-item-head">
          <image src="../../static/bg.png" mode=""></image>
          <p class="user-name">lanan</p>
        </view>
        <view class="con">
          <image src="../../static/date.png" mode=""></image>
          <view class="text">今天一定要早睡！！！</view>
        </view>
        <view class="text-time">00:00-00:10</view>
      </view>
    </view>
    <view class="task-items">
      <view class="items-body">
        <view class="task-item-head">
          <image src="../../static/bg.png" mode=""></image>
          <p class="user-name">lanan</p>
        </view>
        <view class="con">
          <image src="../../static/date.png" mode=""></image>
          <view class="text">今天一定要早睡！！！</view>
        </view>
        <view class="text-time">00:00-00:10</view>
      </view>
    </view>
    <view class="add-task">
      +
    </view>
  </view>
</template>

<script>
  // 导入自定义时间树组件
  import tree from '../../components/tree/tree.vue'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    components: {
      tree
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
    padding: 40rpx;
  }
  .main {
    position: relative;
    height: 500rpx;
    border-radius: 20rpx;
    z-index: 3;
    margin-bottom: 100rpx;
    padding: 20rpx;
    background: rgba(255, 255, 255, 0.9);
  }
  .bot1 {
    position: absolute;
    width: 600rpx;
    left: 35rpx;
    height: 30rpx;
    bottom: -30rpx;
    z-index: 2;
    border-radius: 0 0 20rpx 20rpx;
    background: rgba(255, 255, 255, 0.6);
  }
  .bot2 {
    position: absolute;
    width: 480rpx;
    height: 50rpx;
    bottom: -55rpx;
    left: 90rpx;
    border-radius: 0 0 20rpx 20rpx;
    background: rgba(255, 255, 255, 0.5);
  }
  .title {
    font-size: 28rpx;
    text-align: center;
    padding: 0 0 20rpx 0;
    border-bottom: 2rpx solid #cedbf5;
  }
  .main image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }
  .peoples {
    display: flex;
    margin-top: 20rpx;
    justify-content: space-around;
  }
  .scroll-y {
    margin-top: 20rpx;
    font-size: 28rpx;
    height: 300rpx;
  }
  .mysay {
    display: flex;
    color: #8456cb;
    margin-bottom: 20rpx;
    justify-content: flex-end;
  }
  .items {
    color: #8397e2;
    display: flex;
    margin-bottom: 20rpx;
  }
  .items .say {
    width: 400rpx;
  }
  .input {
    width: 550rpx;
    margin: 20rpx auto;
    display: flex;
    align-items: center;
  }
  .input textarea {
    width: 500rpx;
    height: 50rpx;
    font-size: 28rpx;
    padding-left: 10rpx;
    line-height: 50rpx;
    border-radius: 20rpx 0 0 20rpx;
    background-color: #a0aac1;
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
  /* .task-items {
    position: relative;
    padding: 40rpx;
    border-left: 6rpx solid #9ba2b4;
  } */
  .task-items {
    margin-top: 20rpx;
  }
  .items-body {
    padding: 20rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
  }
  .task {
    margin-left: 40rpx;
    font-size: 32rpx;
    font-weight: 600;
    color: #64646a;
  }
  /* .done {
    position: absolute;
    left: -22rpx;
    top: -10rpx;
    width: 20rpx;
    height: 20rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #8356ca;
    border: 8rpx solid #8356ca;
  }
  .done image {
    width: 30rpx;
    height: 30rpx;
  } */
  .con {
    display: flex;
  }
  .con image {
    width: 40rpx;
    height: 40rpx;
  }
  .text {
    margin-left: 20rpx;
    width: 500rpx;
    font-weight: 600;
    color: #64646a;
  }
  .text-time {
    display: flex;
    margin-top: 20rpx;
    font-weight: 600;
    color: #64646a;
    justify-content: flex-end;
  }
  .task-item-head {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
  }
  .task-item-head .user-name {
    font-size: 28rpx;
    color: #af99cc;
    font-weight: 600;
    margin-left: 10rpx;
  }
  .task-item-head image {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
  }
  .add-task {
      position: absolute;
      right: 40rpx;
      width: 80rpx;
      height: 80rpx;
      margin-top: 20rpx;
      border-radius: 50%;
      color: #ffffff;
      text-align: center;
      line-height: 80rpx;
      font-size: 60rpx;
      background-color: #08796f;
    }
</style>
