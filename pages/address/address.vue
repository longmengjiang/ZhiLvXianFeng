<template>
  <view class="content">
    <view class="choise">
      <pickerAddress @change="change">{{txt}}</pickerAddress>
    </view>
    <view class="address-detail">
      <view class="detail-head">
        <p>详细地址:</p>
        <image src="../../static/pen2.png" mode=""></image>
      </view>
      <textarea name="" cols="20" rows="5" placeholder="输入详细地址" v-model="addressinfo"></textarea>
    </view>
    <view class="done" @click="changeaddress(finallyaddress)">
      完成
    </view>
  </view>
</template>

<script>
  // 导入自定义地址选择组件
  import pickerAddress from '../../components/pickerAddress/pickerAddress.vue'
  export default {
    components: {
      // 自定义地址选择组件
      pickerAddress
    },
    // 基础数据
    data() {
      return {
        txt: '选择地址',
        title: 'Hello',
        addressinfo: ''
      }
    },
    computed: {
      // 地址格式
      finallyaddress() {
        return this.txt + this.addressinfo
      }
    },
    methods: {
      
      change(data) {
        this.txt = data.data.join('')
        console.log(data.data.join(''))
      },
      // 更新地址
      async changeaddress(address) {
        await this.request({
        url:'8002/ucenterservice/lo-address/updateInfo',
        method:'POST',
        data: {
          "address": address,
          "userId": uni.getStorageSync('userid')
        }
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'更改成功!'
            })
            var timer = setInterval(()=> {
              uni.navigateTo({
                url:'/pages/personal/personal'
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
  .content {
    padding: 40rpx;
  }

  .line {
    width: 670rpx;
    height: 2rpx;
    margin-top: 5rpx;
    background-color: #7c8083;
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

  .choise {
    width: 500rpx;
    padding: 20rpx;
    display: flex;
    border-radius: 20rpx;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #ffffff;
    margin-bottom: 40rpx;
    background-color: #8397e2;
  }

  .detail-head {
    display: flex;
  }

  .detail-head image {
    width: 40rpx;
    height: 40rpx;
    margin-left: 20rpx;
  }

  .address-detail {
    width: 500rpx;
    padding: 20rpx;
    color: #ffffff;
    background-color: #8397e2;
    border-radius: 20rpx;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .address-detail textarea {
    width: 510rpx;
    height: 200rpx;
  }
</style>
