<template>
  <view class="content">
    <view class="sex-box">
      <view class="sex" v-for="(item,index) in sex" :key="item.id" :class="move===index?'move':''" @click="changeMove(index,item.sex)">{{item.sex}}</view>
    </view>
    <view class="done" @click="changesex(finalsex)">
      完成
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
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
      // 选择性别
      changeMove(index,sex) {
        this.move = index
        this.finalsex = sex
      },
      // 更改性别
      async changesex(sex) {
        await this.request({
          url:'8002/ucenterservice/ucenter/updateMemberInfo',
          method:'POST',
          data:{
            "id":uni.getStorageSync('userid'),
            "sex":sex
          }
        }).then(res=> {
          if(res.code === 200) {
            uni.setStorageSync('sex',sex)
            console.log('sex',res.data)
            uni.navigateTo({
              url:'/pages/personal/personal'
            })
          }
        }).catch(err=> {
          console.log('错误：',err)
        })
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.sex {
  color: #8397e2;
  margin: 0 auto;
  width: 500rpx;
  border-radius: 20rpx;
  font-size: 28rpx;
  line-height: 60rpx;
  background-color: ;
  height: 60rpx;
  border-bottom: 2rpx solid #7c8083;
  padding-left: 20rpx;
}
.move {
  background-color: #8397e2;
  color: #fff;
}
.done {
  width: 200rpx;
  text-align: center;
  line-height: 60rpx;
  border-radius: 20rpx;
  height: 60rpx;
  margin: 0 auto;
  color: #ffffff;
  margin-top: 100rpx;
  background-color: #8397e2;
}
</style>
