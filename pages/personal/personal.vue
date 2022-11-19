<template>
  <view class="content">
    <view class="base">
      <view class="avatar" @click="chooseImg">
        <p>更换头像</p>
        <view class="img-box">
          <image v-for="item in imgArr" :src="item" class="avatar-img"></image>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="name" @click="toModifyName">
        <p>昵称</p>
        <view class="name-box">
          <p>{{name}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="address" @click="toAddress">
        <p>所在地区</p>
        <view class="address-box">
          <p>{{address}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="sex" @click="toSex">
        <p>性别</p>
        <view class="sex-box">
          <p>{{sex}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="erweima" @click="toErweima">
        <p>我的二维码</p>
        <view class="erweima-box">
          <image src="../../static/QR-Code.png" mode="" class="erweima-img"></image>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
    </view>
    <view class="autograph" @click="toAutograph">
      <view class="autograph-box">
        <view class="autograph-head">
          <view class="head-left">
            <p>个性签名</p>
            <image src="../../static/pen2.png" mode=""></image>
          </view>
          <view class="head-right">
            <image src="../../static/right(3).png" mode="" class="right"></image>
          </view>
        </view>
        <view class="autograph-text">
          {{autograph}}
        </view>
      </view>
    </view>
    <view class="jurisdiction">
      <p>个人主页权限</p>
      <image src="../../static/right(3).png" mode="" class="right"></image>
    </view>
    <view class="setting">
      <p>账号和绑定设置</p>
      <image src="../../static/right(3).png" mode="" class="right"></image>
    </view>
    <view class="save">
      保存
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        imgArr:['../../static/10.jpg'],
        name:'',
        address:'',
        sex:'男',
        autograph:'相对辛苦，绝对自由'
      }
    },
    onLoad(option) {
      this.name = option.name
      this.address = option.address
      this.sex = option.sex
    },
    methods: {
      chooseImg() {
        uni.chooseImage({
          count:1,
          success: res => {
            this.imgArr = res.tempFilePaths
          }
        })
      },
      toModifyName() {
        uni.navigateTo({
          url:'/pages/modifyName/modifyName'
        })
      },
      toAddress() {
        uni.navigateTo({
          url:'/pages/address/address'
        })
      }, 
      toSex() {
        uni.navigateTo({
          url:'/pages/sex/sex'
        })
      },
      toErweima() {
        uni.navigateTo({
          url:'/pages/erweima/erweima'
        })
      },
      toAutograph() {
        uni.navigateTo({
          url:'/pages/autograph/autograph'
        })
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.base {
  width: 670rpx;
  border-radius: 10rpx;
  border: 2rpx solid #cbd1dc;
  border-top: 0;
  box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
}
.avatar,.name,.address,.sex,.erweima{
  font-size: 28rpx;
  height: 150rpx;
  display: flex;
  border-radius: 10rpx;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2rpx solid #7c8083;
}
.name,.address,.sex,.erweima {
  height: 100rpx;
}
.avatar .avatar-img {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.erweima-img {
  width: 50rpx;
  height: 50rpx;
}
.avatar p,.name p,.address p,.sex p,.erweima p {
  margin-left: 40rpx;
}
.avatar .img-box,.name .name-box,.address .address-box,.sex .sex-box,.erweima .erweima-box {
  margin-right: 40rpx;
  display: flex;
  align-items: center;
}
.img-box .right,.name-box .right,.address-box .right,.sex-box .right,.erweima .right,.jurisdiction .right,.setting .right{
  width: 30rpx;
  margin-left: 10rpx;
  height: 30rpx;
}
.autograph-head .head-right .right {
  width: 30rpx;
  height: 30rpx;
}
.autograph,.jurisdiction,.setting {
  padding: 40rpx;
  margin-top: 60rpx;
  border-radius: 10rpx;
  box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
}
.setting {
  margin-top: 0;
}
.autograph .autograph-head {
  display: flex;
  justify-content: space-between;
}
.autograph .autograph-head .head-left {
  display: flex;
}
.autograph .autograph-head image {
  width: 40rpx;
  height: 40rpx;
}
.autograph .autograph-text {
  margin-top: 10rpx;
}
.jurisdiction,.setting {
  display: flex;
  justify-content: space-between;
}
.save {
  width: 400rpx;
  text-align: center;
  line-height: 80rpx;
  border-radius: 20rpx;
  height: 80rpx;
  margin: 0 auto;
  margin-top: 100rpx;
  background-color: #72e4da;
}
</style>
