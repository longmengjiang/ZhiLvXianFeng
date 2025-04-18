<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="password-box">
      <view class="password-box-head">修改密码</view>
      <view class="modify">
        <view class="items">
          <p>原密码:</p>
          <view class="items-bot">
            <input :password="isPassword" class="pre-password" focus placeholder="请输入原密码" @input="showeye" v-model="prepassword"/>
            <view class="eye-box" @click="changeeye">
              <image :src="eyeurl" mode="" class="eye"></image>
            </view>
          </view>
        </view>
        <view class="items">
          <p>新密码:</p>
          <view class="items-bot">
            <input :password="isPasswordone" class="new-password" focus placeholder="请输入以字母和数字组成的新密码" @input="showeye1" v-model="newpassword" @blur="yanpassword(newpassword)"/>
            <view class="eye-box" @click="changeeye2">
              <image :src="eyeurl2" mode="" class="eye"></image>
            </view>
          </view>
        </view>
        <view class="items">
          <p>确认密码:</p>
          <view class="items-bot">
            <input :password="isPasswordtwo" class="new-password2" focus placeholder="请再次输入新密码" @input="showeye2" v-model="newpassword2" @blur="isrightpassword"/>
            <view class="eye-box" @click="changeeye3">
              <image :src="eyeurl3" mode="" class="eye"></image>
            </view>
          </view>
        </view>
        <view class="items email">
          <view class="email-input">
            邮箱:<input class="new-password2" focus placeholder="请输入邮箱" v-model="email"  @blur="isemail(email)"/>
          </view>
          <view class="getcode">
            <view class="get" @click="get" v-show="ok == 0">获取验证码</view>
            <view class="count" v-show="ok == 1">{{countTime}}</view>
          </view>
        </view>
        <view class="items">
          验证码:<input class="new-password2" focus placeholder="请输入收到的验证码" v-model="code"/>
        </view>
      </view>
    </view>
    <view class="done" @click="verification">
      完成
    </view>
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
    // 基础数据
    data() {
      return {
        prepassword:'',
        newpassword:'',
        newpassword2:'',
        isPassword:true,
        isPasswordone: true,
        isPasswordtwo:true,
        eye: true,
        eye2:true,
        eye3:true,
        show: false,
        show1: false,
        show2:false,
        eyeurl: '../../static/openeye.png',
        eyeurl2: '../../static/openeye.png',
        eyeurl3: '../../static/openeye.png',
        email:'',
        code:'',
        ok:0,
        countTime:60,
        top: -500,
        msg: '账号或者密码错误'
      }
    },
    methods: {
      // 验证密码
      yanpassword(password) {
        // 正则表达式定义密码的格式为字母加数字
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/
        if(!reg.test(password)) {
          this.msg = '请检查密码格式是否正确'
          this.top = 50
        }
      },
      // 校验邮箱
      isemail(str) {
        //正则表达式定义邮箱正确格式
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        if(!reg.test(str)) {
          this.msg = '请输入正确的邮箱'
          this.top = 50
        }
      },
      // 展示密码
      showeye() {
        this.show = true
      },
      showeye1() {
        this.show1 = true
      },
      showeye2() {
        this.show2 = true
      },
      // 切换是否显示密码
      changeeye() {
        if (this.eye == true) {
          this.eyeurl = '../../static/openeye.png'
          this.isPassword = true
        }
        if (this.eye == false) {
          this.eyeurl = '../../static/closeeye.png'
          this.isPassword = false
        }
        this.eye = !this.eye
      },
      changeeye2() {
        if (this.eye2 == true) {
          this.eyeurl2 = '../../static/openeye.png'
          this.isPasswordone = true
        }
        if (this.eye2 == false) {
          this.eyeurl2 = '../../static/closeeye.png'
          this.isPasswordone = false
        }
        this.eye2 = !this.eye2
      },
      changeeye3() {
        if (this.eye3 == true) {
          this.eyeurl3 = '../../static/openeye.png'
          this.isPasswordtwo = true
        }
        if (this.eye3 == false) {
          this.eyeurl3 = '../../static/closeeye.png'
          this.isPasswordtwo = false
        }
        this.eye3 = !this.eye3
      },
      // 验证密码
      isrightpassword() {
        if(this.newpassword != this.newpassword2) {
          this.msg = '俩次输入的密码不一致'
          this.top = 50
        }
      },
      // 提示框
      changetop() {
        this.top = -500
      },
      // 获取验证码
      get() {
        this.ok = 1
        var Timer = setInterval(() => {
          this.countTime --
          if(this.countTime <= 0) {
            clearInterval(Timer)
            this.ok = 0 
            this.countTime = 60
          }
        },1000)
        this.request({url:`8002/ucenterservice/email/getRandom/${this.email}`,method:'GET'}).then(res=> { 
          if(res.code === '200') {
            console.log(res)
          }
        }).catch(err=> {
          console.log("错误！",err)
        })
      },
      // 验证
      async verification() {
        await this.request({
        url:'8002/ucenterservice/ucenter/updatePass',
        method:'POST',
        data: {
          "code":this.code,
          "email":this.email,
          "id":uni.getStorageSync('userid'),
          "password":this.prepassword,
          "password1":this.newpassword,
          "password2":this.newpassword2
        }
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'修改成功！'
            })
            var timer = setInterval(()=> {
              uni.navigateTo({
                url:'/pages/personal/personal'
              })
              clearInterval(timer)
            },2000)
          }
          if(res.code === 201) {
            this.msg = res.message
            this.top = 50
          }
        })
      },
    }
  }
</script>

<style scoped>
.content {
  overflow: hidden;
  padding: 40rpx;
}
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
  .password-box {
    margin: 0 auto;
    width: 600rpx;
    /* height: 400rpx; */
    padding: 20rpx;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20rpx;
  }
  .password-box-head {
    color: #ae97cb;
    text-align: center;
    font-size: 34rpx;
    font-weight: 600;
  }
  .modify {
    margin-top: 40rpx;
  }
  .items {
    margin-bottom: 20rpx;
  }
  .items-bot {
    display: flex;
    justify-content: space-between;
  }
  .items-bot input {
    width: 500rpx;
  }
  .pre-password,.new-password,.new-password2 {
    border-bottom: 2rpx solid #ae97cb;
    font-size: 28rpx;
  }
  .done {
    width: 200rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
    border-radius: 40rpx;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 100rpx;
    background-color: #ae97cb;
  }
  .email {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .email-input {
    width: 400rpx;
  }
  .getcode {
    width: 150rpx;
    height: 50rpx;
    background-color: #ae97cb;
    color: #ffffff;
    text-align: center;
    font-size: 26rpx;
    line-height: 50rpx;
    border-radius: 20rpx;
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
  .eye-box {
    width: 50rpx;
    height: 50rpx;
  }
  .eye-box image {
    width: 50rpx;
    height: 50rpx;
  }
</style>
