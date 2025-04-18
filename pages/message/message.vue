<template>
  <view class="content">
    <!-- 背景图片 -->
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="head">
      <view class="head-item" :class="active===index?'move':''" v-for="(item,index) in itemsList" :key="item.id" @click="change(index)">
        {{item.title}}
      </view>
    </view>
    <view class="con-text" v-show="current === 0">
      <view class="message-box">
        <view class="message-item">
          <image src="../../static/10.jpg" mode=""></image>
          <view class="item-right">
            <view class="item-name">
              <p class="mame">lanan</p>
              <p class="item-time">2023年01月01日 20:20:20</p>
            </view>
            <view class="text">
              芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！
            </view>
          </view>
        </view>
        <view class="message-item">
          <image src="../../static/10.jpg" mode=""></image>
          <view class="item-right">
            <view class="item-name">
              <p class="mame">lanan</p>
              <p class="item-time">2023年01月01日 20:20:20</p>
            </view>
            <view class="text">
              芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！芜湖！
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="con-text" v-show="current === 1">
      1
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        active: 0,
        current: 0,
        itemsList: [{
            id: 1,
            title: '消息'
          },
          {
            id: 2,
            title: '去私信'
          }
        ]
      }
    },
    methods: {
      // 切换
      change(index) {
        this.active = index,
        this.current = index
      }
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
.head {
    display: flex;
    justify-content: space-around;
  }
  .head-item {
    color: #ffffff;
  }
  .head .add {
    position: absolute;
    font-size: 60rpx;
    line-height: 30rpx;
    color: #454949;
    right: 0;
    top: 0;
  }
  .move {
    color: #454949 !important;
    font-size: 36rpx;
    font-weight: 700;
    border-bottom: 4rpx solid #ae97cb;
  }
  .message-item {
    display: flex;
    align-items: center;
    padding: 20rpx;
    margin-bottom: 20rpx;
    border-radius: 20rpx;
    background: rgba(255, 255, 255, 0.7);
  }
  .message-item image {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }
  .message-box {
    margin-top: 40rpx;
  }
  .item-right {
    width: 550rpx;
    margin-left: 10rpx;
  }
  .item-time {
    font-size: 24rpx;
    color: #a0a8a8;
  }
  .item-name {
    display: flex;
    justify-content: space-between;
  }
  .text {
    width: 500rpx;
    margin-top: 10rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mame {
    color: #ae97cb;
    font-weight: 600;
  }
</style>
