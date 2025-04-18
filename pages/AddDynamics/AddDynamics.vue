<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="con">
      <view class="put" @click="put">发表</view>
      <textarea placeholder="这一刻的想法..." class="text" cols="40" rows="15" maxlength="300"></textarea>
      <uni-section title="只选择图片" type="line">
      	<view class="example-body">
      		<uni-file-picker limit="9" title="最多选择9张图片" @select="select" ></uni-file-picker>
      	</view>
      </uni-section>
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        imageList:[]
      }
    },
    methods: {
      // 点击发表按钮执行事件
      put() {
        uni.showToast({
          title:'发表成功！'
        })
        setInterval(()=> {
          uni.switchTab({
            url:'/pages/community/community'
          })
        },2000)
      },
      //methods：里面对应函数
      select(e) {
        console.log('选择文件：', e.tempFilePaths[0]);
      }
    }
  }
</script>

<style scoped>
  .content {
    padding: 20rpx 40rpx;
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
.con {
  padding: 20rpx 40rpx;
  width: 590rpx;
  min-height: 500rpx;
  background: rgba(255, 255, 255, 0.5);
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
  background-color: #aebbf3;
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
</style>
