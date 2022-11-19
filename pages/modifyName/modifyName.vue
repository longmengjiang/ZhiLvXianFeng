<template>
  <view class="content">
    <view class="name">
      <input class="uni-input" focus placeholder="请输入昵称" v-model="name"/>
      <view class="done" @click="changename">
        完成
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        name:''
      }
    },
    methods: {
      changename() {
        uni.navigateTo({
          url:`/pages/personal/personal?name=${this.name}`
        })
      }
    }
  }
</script>

<style>
.content {
  padding: 40rpx;
}
.name {
  width: 670rpx;
  height: 200rpx;
}
.name input {
  border-bottom: 2rpx solid #7c8083;
}
.name .done {
  width: 200rpx;
  text-align: center;
  line-height: 60rpx;
  border-radius: 20rpx;
  height: 60rpx;
  margin: 0 auto;
  margin-top: 100rpx;
  background-color: #72e4da;
}
</style>
