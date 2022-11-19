<template>
  <view class="content">
    <view class="sex-box">
      <view class="sex" v-for="(item,index) in sex" :key="item.id" :class="move===index?'move':''" @click="changeMove(index,item.sex)">{{item.sex}}</view>
    </view>
    <view class="done" @click="changesex">
      完成
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        move:0,
        finalsex:'男',
        sex:[
          {
            id:1,
            sex:'男'
          },
          {
            id:2,
            sex:'女'
          }
        ]
      }
    },
    methods: {
      changeMove(index,sex) {
        this.move = index
        this.finalsex = sex
      },
      changesex() {
        uni.navigateTo({
          url:`/pages/personal/personal?sex=${this.finalsex}`
        })
      }
    }
  }
</script>

<style scoped>
.sex {
  width: 730rpx;
  font-size: 28rpx;
  line-height: 60rpx;
  height: 60rpx;
  border-bottom: 2rpx solid #7c8083;
  padding-left: 20rpx;
}
.move {
  background-color: #72e4da;
}
.done {
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
