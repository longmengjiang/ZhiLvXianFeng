<template>
  <view class="content">
    <view class="user-info">
      <view class="people">
        <image src="../../static/shou-people.png" mode=""></image>
        <view class="people-info">
          <p>收件人</p>
          <input type="text" v-model="name" placeholder="输入收货人">
        </view>
      </view>
      <view class="phone">
        <image src="../../static/shou-phone.png" mode=""></image>
        <view class="phone-info">
          <p>手机号</p>
          <input type="text" v-model="phone" placeholder="输入收货人手机号">
        </view>
      </view>
      <view class="address">
        <image src="../../static/shou-address.png" mode=""></image>
        <view class="address-info">
          <p>收货地址</p>
          <input type="text" v-model="address" placeholder="输入收货地址(详细)">
        </view>
      </view>
    </view>
    <view class="done" @click="done">
      完成
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        name:'',
        phone:'',
        address:'',
      }
    },
    methods: {
      // 点击完成按钮执行事件
      async done() {
        await this.request({
        url:'8002/ucenterservice/lo-address/addAddress',
        method:'POST',
        data: {
          "address":this.address,
          "consignee":this.name,
          "phone":this.phone,
          "userId":uni.getStorageSync('userid')
        }
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'添加成功!'
            })
            var timer = setInterval(()=> {
              uni.navigateTo({
                url:'/pages/exchangeinfo/exchangeinfo'
              })
              clearInterval(timer)
            },2000)
          }
        }).catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped>
.user-info {
    width: 600rpx;
    margin: 40rpx auto;
  }
  .user-info image {
    width: 60rpx;
    height: 60rpx;
    margin-right: 20rpx;
  }
  .people,.phone,.address {
    display: flex;
    align-items: center;
    font-size: 28rpx;
    margin-bottom: 40rpx;
  }
  .name,.tellphone,.shou-address {
    font-size: 34rpx;
    color: #969696;
  }
  .user-info input {
    width: 500rpx;
    height: 60rpx;
    border-bottom: 2rpx solid #8397e2;
  }
  .done {
    width: 200rpx;
    margin: 40rpx auto;
    height: 60rpx;
    border-radius: 20rpx;
    background-color: #8397e2;
    text-align: center;
    font-size: 28rpx;
    color: #ffffff;
    line-height: 60rpx;
  }
</style>
