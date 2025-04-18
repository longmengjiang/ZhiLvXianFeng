<template>
  <view class="content">
    <view class="goods-head">
      <image :src="goodimgurl" mode="" class="goods-img"></image>
      <view class="goods-info">
        <p class="goods-name">{{goodname}}</p>
        <p class="count">{{goodcount}}</p>
      </view>
    </view>
    <view class="user-info" v-show="show == 1">
      <view class="people">
        <image src="../../static/shou-people.png" mode=""></image>
        <view class="people-info">
          <p>收件人</p>
          <p class="name">{{name}}</p>
        </view>
      </view>
      <view class="phone">
        <image src="../../static/shou-phone.png" mode=""></image>
        <view class="phone-info">
          <p>手机号</p>
          <p class="tellphone">{{phone}}</p>
        </view>
      </view>
      <view class="address">
        <image src="../../static/shou-address.png" mode=""></image>
        <view class="address-info">
          <p>收货地址</p>
          <p class="shou-address">{{address}}</p>
        </view>
      </view>
      <view class="done">
        确定
      </view>
      <view class="change" @click="tochangepageageinfo">
        更改收货信息
      </view>
    </view>
    <view class="add" v-if="show == 0" @click="toaddpageageinfo">
      添加收货信息
    </view>
  </view>
</template>

<script>
// 导入地理信息数据
import data from '../../util/data'
// 基础数据
  export default {
    data() {
      return {
        show:0,
        name:'',
        address:'',
        phone:'',
        goodimgurl:'',
        goodname:'',
        goodcount:''
      }
    },
    onLoad(option) {
      // 获取从上一个页面传过来的数据
      this.goodname = option.goodsname
      this.goodcount = option.goodscount
      this.goodimgurl = option.goodsimg
      this.getinfo()
    },
    methods: {
      // 获取收货信息
      async getinfo() {
        await this.request({
        url:`8002/ucenterservice/lo-address/findAddress/${uni.getStorageSync('userid')}`,
        method:'GET'
        }).then(res=> {
          if(res.code === 200) {
            this.address = res.data.address.address
            this.name = res.data.address.consignee
            this.phone = res.data.address.phone
            if(res.data.address != null) {
              this.show = 1
            }
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 去添加收货信息页面
      toaddpageageinfo() {
        uni.navigateTo({
          url:'/pages/addpageageinfo/addpageageinfo'
        })
      },
      // 去修改收货信息页面
      tochangepageageinfo() {
        uni.navigateTo({
          url:'/pages/changepageageinfo/changepageageinfo'
        })
      }
    }
  }
</script>

<style scoped>
  .content {
    padding: 40rpx;
  }
.goods-head {
    padding: 20rpx 40rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2rpx solid #bababa;
  }
  .goods-img {
    width: 200rpx;
    height: 200rpx;
  }
  .goods-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .count {
    margin-top: 30rpx;
    font-weight: 600;
  }
  .user-info {
    padding: 40rpx;
  }
  .user-info image {
    width: 60rpx;
    height: 60rpx;
    margin-right: 40rpx;
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
  .add,.change,.done {
    margin: 40rpx auto;
    width: 200rpx;
    height: 60rpx;
    border-radius: 20rpx;
    color: #ffffff;
    font-size: 28rpx;
    text-align: center;
    line-height: 60rpx;
    background-color: #8397e2;
  }
</style>
