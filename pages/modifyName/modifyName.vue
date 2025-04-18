<template>
  <view class="content">
    <view class="name">
      <input class="uni-input" focus placeholder="请输入昵称" v-model="name"/>
      <view class="done" @click="modifyname(name)">
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
      // 修改昵称
      async modifyname(name) {
        await this.request({
          url:'8002/ucenterservice/ucenter/updateMemberInfo',
          method:'POST',
          data:{
            "id":uni.getStorageSync('userid'),
            "nickname":name
          }
        }).then(res=> {
          if(res.code === 200) {
            uni.setStorageSync('nickname',name)
            console.log('name',res.data)
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
  background-color: #8397e2;
}
</style>
