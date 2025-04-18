<template>
  <view class="container">
    <!-- 头部结构 -->
    <view class="head">
      <image src="../../static/default.jpg" mode="" class="avatar"></image>
      <image src="../../static/lang.png" mode="" class="lang"></image>
    </view>
    <!-- 信息收集表单 -->
    <view class="body">
      <view class="login-box">
        <!-- 输入昵称 -->
        <view class="name">
          <image src="../../static/edit-write.png"></image>
          <input type="number" placeholder="请输入10个字符以内的昵称" v-model.trim="name" @blur="yanname(name)">
        </view>
        <!-- 输入手机号 -->
        <view class="phone">
          <image src="../../static/phone.png" mode=""></image>
          <input type="number" placeholder="请输入手机号" v-model.number="phone" @blur="isTelCode(phone)">
        </view>
        <!-- 输入密码 -->
        <view class="lock">
          <image src="../../static/lock.png" mode=""></image>
          <input :password="isPasswordone" type="text" placeholder="请输入以字母和数字组成的密码" v-model="passone" @input="showeye" @blur="yanpassword(passone)"/>
          <view class="eye-box" @click="changeeye">
            <image :src="eyeurl" mode="" class="eye" v-show="show"></image>
          </view>
        </view>
        <view class="lock">
          <image src="../../static/lock.png" mode=""></image>
          <input :password="isPasswordtwo" type="text" placeholder="请再次输入密码" v-model="passtwo" @input="showeye1" @blur="isrightpassword"/>
          <view class="eye-box" @click="changeeye2">
            <image :src="eyeurl2" mode="" class="eye" v-show="show1"></image>
          </view>
        </view>
        <!-- 输入邮箱 -->
        <view class="email">
          <image src="../../static/email(2).png" mode=""></image>
          <input type="number" placeholder="请输入邮箱" v-model="email" @blur="isemail(email)">
          <view class="get-box">
            <view class="get" @click="get" v-show="ok == 0">获取验证码</view>
            <view class="count" v-show="ok == 1">{{countTime}}</view>
          </view>
        </view>
        <!-- 输入验证码 -->
        <view class="security">
          <image src="../../static/security.png" mode=""></image>
          <input type="number" placeholder="请输入邮箱验证码" v-model="code">
        </view>
        <view class="login-btn" @click="register">
          注册
        </view>
      </view>
    </view>
    <!-- 提示信息框 -->
    <view class="msg" :style="{'top':top+'rpx'}">
      <view class="text">
        {{msg}}
      </view>
      <view class="yes" @click="changetop">
        确定
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    // 基本数据
    data() {
      return {
        flag1: 0,
        phone: '',
        name: '',
        email: '',
        eyeurl: '../../static/eye.png',
        eyeurl2: '../../static/eye.png',
        show: false,
        show1: false,
        eye: true,
        eye2:true,
        isPassword: true,
        isPasswordone: true,
        isPasswordtwo: true,
        // 验证码
        code: '',
        ok: 0,
        passone: '',
        passtwo: '',
        countTime: 60,
        top: -500,
        msg: '账号或者密码错误'
      }
    },
    methods: {
      // 显示密码
      showeye() {
        this.show = true
      },
      showeye1() {
        this.show1 = true
      },
      // 切换密码是否可见
      changeeye() {
        if (this.eye == true) {
          this.eyeurl = '../../static/eye.png'
          this.isPasswordone = true
        }
        if (this.eye == false) {
          this.eyeurl = '../../static/eye-close.png'
          this.isPasswordone = false
        }
        this.eye = !this.eye
      },
      // 显示提示框
      changetop() {
        this.top = -500
      },
      isrightpassword() {
        if(this.passone != this.passtwo) {
          this.msg = '俩次输入的密码不一致'
          this.top = 50
        }
      },
      // 验证手机号码
      isTelCode(str) {
        //正则表达式定义手机号正确格式
        let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if (!reg.test(str)) {
          this.msg = '请输入正确的手机号'
          this.top = 50
        }
      },
      // 验证邮箱
      isemail(str) {
        //正则表达式定义邮箱正确格式
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        if(!reg.test(str)) {
          this.msg = '请输入正确的邮箱'
          this.top = 50
        }
      },
      // 验证密码
      yanpassword(password) {
        // 正则表达式定义密码的格式为字母加数字
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/
        if(!reg.test(password)) {
          this.msg = '请检查密码格式是否正确'
          this.top = 50
        }
      },
      // 验证昵称
      yanname(name) {
        if (name.length > 10) {
          this.msg = '昵称过长,请输入10个以内的字符'
          this.top = 50
        }
      },
      changeeye2() {
        if (this.eye2 == true) {
          this.eyeurl2 = '../../static/eye.png'
          this.isPasswordtwo = true
        }
        if (this.eye2 == false) {
          this.eyeurl2 = '../../static/eye-close.png'
          this.isPasswordtwo = false
        }
        this.eye2 = !this.eye2
      },
      // 注册按钮执行事件
      async register() {
        await this.request({
          url: '8002/ucenterservice/ucenter/register',
          method: 'POST',
          data: {
            "code": this.code,
            "email": this.email,
            "mobile": this.phone,
            "nickname": this.name,
            "password": this.passtwo
          }
        }).then(res => {
          if (res.code === 200) {
            uni.navigateTo({
              url: "/pages/login/login"
            })
            // 跳转页面
            uni.showToast({
              title: '注册成功'
            })
          }
          if(res.code === 201) {
            this.msg = res.message
            this.top = 50
          }
        }).catch(err => {
          console.log('表单的错误：', err)
        })
      },
      // 获取验证码按钮执行事件
      get() {
        this.ok = 1
        var Timer = setInterval(() => {
          this.countTime--
          if (this.countTime <= 0) {
            clearInterval(Timer)
            this.ok = 0
            this.countTime = 60
          }
        }, 1000)
        this.request({
          url: `8002/ucenterservice/email/getRandom/${this.email}`,
          method: 'GET'
        }).then(res => {
          if (res.code === 200) {
            console.log(res)
          }
        }).catch(err => {
          console.log("错误！", err)
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    overflow: hidden;
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

  .head .avatar {
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

  .phone,
  .lock,
  .code,
  .email,
  .security,
  .name {
    display: flex;
    font-size: 22rpx;
    margin-bottom: 40rpx;
  }

  .phone image,
  .code image,
  .email image,
  .security image,
  .name image,
  .lock image {
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
  input {
    width: 320rpx;
  }
  .get-box {
    width: 150rpx;
    height: 50rpx;
    margin-left: 100rpx;
    text-align: center;
    line-height: 50rpx;
    color: #ffffff;
    background-color: #ae97cb;
  }

  .count {
    font-size: 30rpx;
    font-weight: 600;
  }

  .msg {
    position: fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s;
    width: 550rpx;
    border-radius: 20rpx;
    padding: 20rpx;
    z-index: 99;
    left: 50%;
    transform: translateX(-295rpx);
    background-color: #ffffff;
  }

  .yes {
    padding: 10rpx;
    width: 100rpx;
    text-align: center;
    font-size: 28rpx;
    border-radius: 20rpx;
    margin-top: 20rpx;
    color: #ffffff;
    background-color: #ae97cb;
  }
</style>
