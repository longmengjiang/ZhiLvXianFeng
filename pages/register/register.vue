<template>
  <view class="container">
    <view class="head">
      <image src="../../static/default.jpg" mode="" class="avatar"></image>
      <image src="../../static/lang.png" mode="" class="lang"></image>
    </view>
    <view class="body">
      <view class="login-box">
        <view class="name">
          <image src="../../static/edit-write.png"></image>
          <input type="number" placeholder="请输入昵称" v-model="name">
        </view>
        <view class="phone">
          <image src="../../static/phone.png" mode=""></image>
          <input type="number" placeholder="请输入手机号" v-model="phone" @click="yanphone">
        </view>
        <view class="warn" v-show="flag1">! 请输入正确的手机号</view>
        <view class="lock">
          <image src="../../static/lock.png" mode=""></image>
          <!-- <uni-easyinput type="password" placeholder="输入密码" :inputBorder="false" v-model="passone"></uni-easyinput> -->
          <input :password="isPasswordone" type="text" placeholder="请输入密码" v-model="passone" @input="showeye"/>
          <view class="eye-box" @click="changeeye">
            <image :src="eyeurl" mode="" class="eye" v-show="show"></image>
          </view>
        </view>
        <view class="lock" @click="yanpassword">
          <image src="../../static/lock.png" mode=""></image>
          <input :password="isPasswordtwo" type="text" placeholder="请再次输入密码" v-model="passtwo" @input="showeye1()"/>
          <view class="eye-box" @click="changeeye2">
            <image :src="eyeurl2" mode="" class="eye" v-show="show1"></image>
          </view>
        </view>
        <view class="warn" v-show="flag2">! 俩次输入的密码不一致</view>
        <view class="email">
          <image src="../../static/email(2).png" mode=""></image>
          <input type="number" placeholder="请输入邮箱" v-model="email">
          <view class="get-box">
            <view class="get" @click="get" v-show="ok == 0">获取验证码</view>
            <view class="count" v-show="ok == 1">{{countTime}}</view>
          </view>
        </view>
        <view class="security">
          <image src="../../static/security.png" mode=""></image>
          <input type="number" placeholder="请输入邮箱验证码" v-model="code">
        </view>
        <view class="warn" v-show="flag3">! 验证码错误</view>
        <view class="login-btn" @click="register">
          注册
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        flag1:0,
        phone:'',
        name:'',
        email:'',
        eyeurl:'../../static/eye.png',
        eyeurl2:'../../static/eye.png',
        show:false,
        show1:false,
        eye:true,
        eye:true,
        isPassword:true,
        isPasswordone:true,
        isPasswordtwo:true,
        code:'',
        flag2:0,
        flag3:0,
        ok:0,
        passone:'',
        passtwo:'',
        countTime:60
      }
    },
    methods: {
      showeye() {
        this.show = true
      },
      showeye1() {
        this.show1 = true
      },
      changeeye() {
        if(this.eye == true) {
          this.eyeurl = '../../static/eye.png'
          this.isPasswordone = true
        }
        if(this.eye == false) {
          this.eyeurl = '../../static/eye-close.png'
          this.isPasswordone = false
        }
        this.eye = !this.eye
      },
      changeeye2() {
        if(this.eye2 == true) {
          this.eyeurl2 = '../../static/eye.png'
          this.isPasswordtwo = true
        }
        if(this.eye2 == false) {
          this.eyeurl2 = '../../static/eye-close.png'
          this.isPasswordtwo = false
        }
        this.eye2 = !this.eye2
      },
      yanphone() {
        this.flag1 = 0
      },
      yanpassword() {
        this.flag2 = 0
      },
      async register() {
        if(this.phone.length!==11) {
          this.flag1 = 1
        }
        if(this.passone !== this.passtwo) {
          this.flag2 = 1
        }
        await this.request({url:'8002/ucenterservice/ucenter/register',method:'POST',data:{"code":this.code,"email":this.email,"mobile":this.phone,"nickname":this.name,"password":this.passtwo}}).then(res=> {
          if(res.code === 200) {
            uni.navigateTo({
              url:"/pages/login/login"
            })
            // 跳转页面
            uni.showToast({
              title:'注册成功'
            })
          }
        }).catch(err=> {
          console.log('表单的错误：',err)
        })
      },
      get() {
        this.ok = 1
        var Timer = setInterval(() => {
          this.countTime --
          if(this.countTime <= 0) {
            clearInterval(Timer)
            this.ok = 0 
          }
        },1000)
        this.request({url:`8002/ucenterservice/email/getRandom/${this.email}`,method:'GET'}).then(res=> { 
          if(res.code === '200') {
            console.log(res)
          }
        }).catch(err=> {
          console.log("错误！",err)
        })
      }
    }
  }
</script>

<style scoped>
.container {
  height: 100vh;
  background-color: #ffffff;
}
.head {
  position: relative;
  width: 100%;
  height: 400rpx;
  z-index: 22;
  background-image: linear-gradient(to bottom, #71e6d3, #7cb7f8);
}
.head .avatar{
  position: absolute;
  width: 130rpx;
  height: 130rpx;
  left: 50%;
  margin-top: 50rpx;
  transform: translateX(-50%);
  border-radius: 50%;
  box-shadow: 0 10rpx 10rpx 0 #3d8cc2;
}
.head .lang {
  position: absolute;
  width: 100%;
  height: 180rpx;
  bottom: 0;
}
.body {
  width: 100%;
  height: 800rpx;
  background-color: #ffffff;
}
.login-box {
  padding: 40rpx 80rpx;
}
.login-box image {
  width: 50rpx;
  height: 50rpx;
}
.phone,.lock,.code,.email,.security,.name {
  display: flex;
  font-size: 22rpx;
  margin-bottom: 40rpx;
}
.phone image,.code image,.email image,.security image,.name image,.lock image {
  margin-right: 20rpx;
}
.code .yanzhengma {
  margin-left: 20rpx;
  margin-top: -40rpx;
}
.login-btn {
  margin: 0 auto;
  width: 400rpx;
  height: 100rpx;
  text-align: center;
  color: #ffffff;
  font-size: 28rpx;
  margin-top: 100rpx;
  letter-spacing: 6rpx;
  line-height: 100rpx;
  border-radius: 50rpx;
  background-image: linear-gradient(to bottom, #71e6d3, #7cb7f8);
}
.bot {
  width: 250rpx;
  display: flex;
  margin: 30rpx auto;
  justify-content: space-between;
  font-size: 24rpx;
  font-weight: 600;
  color: #477bff;
}
.warn {
  font-size: 22rpx;
  margin-left: 40rpx;
  line-height: 40rpx;
  margin-top: -30rpx;
  color: crimson;
}
.lock .warn {
  line-height: 70rpx;
}
.get-box {
  width: 150rpx;
  height: 50rpx;
  margin-left: 100rpx;
  text-align: center;
  line-height: 50rpx;
  background-color: #71e6d3;
}
.count {
  font-size: 30rpx;
  font-weight: 600;
}
</style>
