<template>
  <view class="content">
    <view class="erweima-box">
      <view class="head">
        <image :src="avatar" mode="" class="avatar"></image>
        <view class="info">
          <p class="name">{{name}}</p>
          <p class="address">广东湛江</p>
        </view>
      </view>
      <image :src="erweima" mode="" class="erweima"></image>
    </view>
  </view> 
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        name :'',
        erweima:'',
        avatar:''
      }
    },
    onLoad() {
      // 获取本地存储信息
      this.avatar = uni.getStorageSync('avatar')
      this.name = uni.getStorageSync('nickname')
    },
    mounted() {
      // 获取二维码信息
      this.geterweima()
    },
    methods: {
      // 获取二维码信息
      async geterweima() {
        await this.request({
        url:`8003/qr/code/getQRByHutool/${uni.getStorageSync('userid')}`,
        method:'GET',
        }).then(res=> {
          if(res.code === 200) {
            // 更新页面的渲染
            this.erweima = res.data.url
            this.modifyerweima(res.data.url)
            console.log("------------",res)
            // 更新缓存中的图片链接
            uni.setStorageSync('qrcode',res.data.url)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 更改二维码
      async modifyerweima(imgurl) {
        await this.request({
          url:'8002/ucenterservice/ucenter/updateMemberInfo',
          method:'POST',
          data:{
            "id":uni.getStorageSync('userid'),
            "qrcode":imgurl
          }
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
          }
        }).catch(err=> {
          console.log('错误：',err)
        })
      }
    }
  }
</script>

<style scoped>
.erweima-box {
  padding: 40rpx;
  margin: 0 auto;
  margin-top: 200rpx;
  width: 500rpx;
  background-color: #fff;
  height: 580rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.head {
  display: flex;
}
.head .avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.info {
  margin-left: 20rpx;
}
.info .address {
  font-size: 26rpx;
}
.erweima-box .erweima {
  width: 400rpx;
  height: 400rpx;
  margin: 50rpx;
}
</style>
