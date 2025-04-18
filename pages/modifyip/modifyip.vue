<template>
  <view class="content">
    <view class="id-box">
      <p>当前IP地址为:</p>
      <p class="ip">{{IP}}</p>
    </view>
    <view class="btn" @click="getip">
      获取当前IP地址
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        IP:''
      }
    },
    methods: {
      // 获取所处IP地址
      async getip() {
        await this.request({
          url:'8002/ucenterservice/ucenter/getIP',
          method:'GET'
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data.ip)
            this.IP = res.data.ip
            uni.setStorageSync('ip',this.IP)
          }
          uni.showToast({
            title:'修改成功!'
          })
          var timer = setInterval(()=> {
            uni.navigateTo({
              url:'/pages/personal/personal'
            })
            clearInterval(timer)
          },2000)
        }).catch(err=> {
          console.log('错误：',err)
        })
      },
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.id-box {
  width: 500rpx;
  margin: 0 auto;
  height: 200rpx;
  display: flex;
  border-radius: 20rpx;
  flex-direction: column;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  background-color: #8397e2;
}
.ip {
  margin-top: 20rpx;
  font-size: 40rpx;
}
.btn {
  color: #ffffff;
  width: 300rpx;
  text-align: center;
  line-height: 80rpx;
  border-radius: 20rpx;
  height: 80rpx;
  margin: 0 auto;
  margin-top: 100rpx;
  background-color: #8397e2;
}
</style>
