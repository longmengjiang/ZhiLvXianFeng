<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="con">
      <view class="goods">
        <view class="goods-items" v-for="(item,index) in goodslist" :key="item.id">
          <view class="goods-head">
            <image :src="item.img" mode="" class="goods-img"></image>
            <view class="goods-info">
              <p class="goods-name">{{item.name}}</p>
              <p class="count">{{item.count}}</p>
            </view>
          </view>
          <view class="bot">
            <view class="bot-left">
              <image src="../../static/integral.png" mode=""></image>
              <p class="pay">{{item.pay}}</p>
            </view>
            <view class="use" @click="toexchangeinfo(item.name,item.count,item.img)">
              兑换
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        goodslist:[
          {
            id:'001',
            name:'爱奇艺VIP黄金会员卡',
            img:'../../static/goods2.png',
            count:'30天*1',
            pay:'*1380'
          },
          {
            id:'002',
            name:'话费兑换券',
            img:'../../static/goods1.png',
            count:'100元*1',
            pay:'*4880'
          },
          {
            id:'003',
            name:'富士拍立得',
            img:'../../static/goods3.png',
            count:'*1',
            pay:'*10000'
          },
        ]
      }
    },
    methods: {
      // 去兑换商品详情页
      toexchangeinfo(name,count,img) {
        uni.navigateTo({
          url:`../../pages/exchangeinfo/exchangeinfo?goodsname=${name}&goodscount=${count}&goodsimg=${img}`
        })
      }
    }
  }
</script>

<style scoped>
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
    position: fixed;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
  }
  .goods-img {
    width: 120rpx;
    height: 120rpx;
  }
  .bot image {
    width: 50rpx;
    height: 50rpx;
  }
  .goods-items {
    padding: 40rpx;
  }
  .goods-head {
    padding: 0 40rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .goods-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .bot {
    margin-top: 30rpx;
    display: flex;
    align-items: center;
    padding: 10rpx 0;
    justify-content: space-between;
    border-top: 2rpx solid #bababa;
  }
  .bot .bot-left {
    display: flex;
    align-items: center;
  }
  .pay {
    margin-left: 20rpx;
    font-weight: 600;
    color: #363435;
  }
  .count {
    margin-top: 30rpx;
    font-weight: 600;
  }
  .use {
    width: 120rpx;
    height: 50rpx;
    background-color: #edebed;
    border-radius: 50rpx;
    text-align: center;
    font-weight: 600;
    line-height: 50rpx;
    font-size: 28rpx;
    color: #f5ad1d;
  }
</style>
