<template>
  <view class="content">
    <view class="con">
      <view class="put" @click="put">发表</view>
      <textarea placeholder="这一刻的想法..." class="text" cols="40" rows="15" maxlength="300"></textarea>
      <view class="add">
        <image src="../../static/add-bold.png" mode=""></image>
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
    methods: {
      put() {
        uni.showToast({
          title:'发表成功！'
        })
        setInterval(()=> {
          uni.switchTab({
            url:'/pages/community/community'
          })
        },2000)
      }
    }
  }
</script>

<style scoped>
.content {
    min-height: 100vh;
    background-color: #eaf1fe;
    padding: 20rpx 40rpx;
}
.con {
  padding: 20rpx 40rpx;
  width: 590rpx;
  min-height: 500rpx;
  background-color: #fff;
  border-radius: 20rpx;
}
.con .put {
  width: 100rpx;
  height: 50rpx;
  font-size: 28rpx;
  font-weight: 600;
  color: #fff;
  text-align: center;
  line-height: 50rpx;
  background-color: #6ad3c8;
  border-radius: 10rpx;
  transform: translateX(500rpx);
}
.con .text {
  margin-top: 40rpx;
  font-size: 28rpx;
  font-weight: 600;
  height: 150rpx;
  color: #6f7272;
  width: 500rpx;
}
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150rpx;
  height: 150rpx;
  border-radius: 20rpx;
  background-color: #dad9d9;
}
.add image {
  width: 80rpx;
  height: 80rpx;
}
</style>
