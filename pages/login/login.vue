<template>
  <view class="container">
    <view class="head">
      <image src="../../static/default.jpg" mode="" class="avatar"></image>
      <image src="../../static/lang.png" mode="" class="lang"></image>
    </view>
    <view class="body">
      <view class="login-box">
        <view class="name">
          <image src="../../static/edit-write.png" mode=""></image>
          <input type="text" placeholder="输入昵称" v-model="name">
        </view>
        <view class="phone">
          <image src="../../static/phone.png" mode=""></image>
          <input type="number" placeholder="输入手机号" v-model="phone" @click="yanphone">
          <!-- <view class="warn" v-show="flag1">! 请输入正确的手机号</view> -->
        </view>
        <view class="warn" v-show="flag1">! 请输入正确的手机号</view>
        <view class="lock" @click="yanpassword">
          <image src="../../static/lock.png" mode=""></image>
          <input :password="isPassword" type="text" placeholder="请输入密码" v-model="password" @input="showeye"/>
          <view class="eye-box" @click="changeeye">
            <image :src="eyeurl" mode="" class="eye" v-show="show"></image>
          </view>
        </view>
        <view class="warn" v-show="flag2">! 密码错误</view>
        <view class="code">
          <image src="../../static/security.png" mode=""></image>
          <input type="text" placeholder="输入验证码" v-model="yanzheng" @click="shuru">
          <view class="yanzhengma">
          		<view class="canvas-img-code" @click="refresh()">
                <canvas :style="{width:width+'px',height:height+'px'}" canvas-id="imgcanvas" @error="canvasIdErrorCallback"></canvas>
          		</view>
              <p class="tip">注意区分大小写</p>
          </view>
        </view>
        <view class="warn" v-show="flag3">
          ！验证码错误
        </view>
        <view class="login-btn" @click="login()">
          登录
        </view>
        <view class="bot">
          <p>忘记密码</p>
          <p>|</p>
          <p @click="toRegister">注册账号</p>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
var _this;

export default {
	data() {
		return {
      phone:'',
      name:'',
      eyeurl:'../../static/eye.png',
      show:false,
      eye:true,
      isPassword:true,
      password:'',
      userId:'',
      flag1:0,
      flag2:0,
      flag3:0,
      token:'',
      yanzheng:"",
			verCode: "", //验证码
			width: 120,
			height: 45
		}
	},
	components: {
		
	},
	onShow() {
		_this = this;
		setTimeout(function() {
			_this.init();
		}, 1000)
	},
	methods: {
    yanphone() {
      this.flag1 = 0
    },
    yanpassword() {
      this.flag2 = 0
    },
    shuru() {
      this.flag3 = 0
    },
    toRegister() {
      uni.navigateTo({
        url:'/pages/register/register'
      })
    },
    showeye() {
      this.show = true
    },
    changeeye() {
      if(this.eye == true) {
        this.eyeurl = '../../static/eye.png'
        this.isPassword = true
      }
      if(this.eye == false) {
        this.eyeurl = '../../static/eye-close.png'
        this.isPassword = false
      }
      this.eye = !this.eye
    },
    async login() {
      if(this.phone.length!==11) {
        this.flag1 = 1
      }
      if(this.yanzheng!==this.verCode) {
        this.flag3 = 1;
        return
      }
      await this.request({url:'8002/ucenterservice/ucenter/login',method:'POST',data:{"mobile":this.phone,"password":this.password,"nickname":this.name}}).then(res=> {
        if(res.code === 200) {
          this.token = res.data.token
          // this.getUserId()
          uni.switchTab({
            // url:`/pages/index/index?userId=${this.name}`
            url:'/pages/index/index'
          })
          uni.showToast({
            title:'登录成功'
          })
        }
      }).catch(err=> {
          console.log('表单的错误：',err)
        })
    }, 
    // async getUserId() {
    //   await this.request({url:'8002/ucenterservice/ucenter/getMemberInfo',method:'GET',data:{"token":this.token}}).then(res=> {
    //     if(res.code === 200) {
    //       console.log(res.data)
    //       this.userId = res.userId
    //     }
    //   })
    // },
		// 初始化验证码
		init: function() {
			console.log('start');
			var context = uni.createCanvasContext('imgcanvas', this),
				w = this.width,
				h = this.height;
			context.setFillStyle("white");
			context.setLineWidth(5);
			context.fillRect(0, 0, w, h);
			var pool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "I", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U", "V", "W", "S", "Y", "Z","a","b","c","d","e","f","g","h","i","j","k","l","i","m","n","o","p","q","r","s","t","u","v","w","s","y","z","1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
				],
				str = '';
			for (var i = 0; i < 4; i++) {
				var c = pool[this.rn(0, pool.length - 1)];
				var deg = this.rn(-30, 30);
				context.setFontSize(18);
				context.setTextBaseline("top");
				context.setFillStyle(this.rc(80, 150));
				context.save();
				context.translate(30 * i + 15, parseInt(h / 1.5));
				context.rotate(deg * Math.PI / 180);
				context.fillText(c, -15 + 5, -15);
				context.restore();
				str += c;
			}
      this.verCode = str
			uni.setStorage({
				key: 'imgcode',
				data: str,
			});
			for (var i = 0; i < 40; i++) {
				context.beginPath();
				context.arc(this.rn(0, w), this.rn(0, h), 1, 0, 2 * Math.PI);
				context.closePath();
				context.setFillStyle(this.rc(150, 200));
				context.fill();
			}
			context.draw();
			console.log('end');
		},
    // 颜色随机
		rc: function(min, max) {
			var r = this.rn(min, max);
			var g = this.rn(min, max);
			var b = this.rn(min, max);
			return "rgb(" + r + "," + g + "," + b + ")";
		},
		rn: function(max, min) {
			return parseInt(Math.random() * (max - min)) + min;
		},
		refresh: function() {
			this.init();
		},
		canvasIdErrorCallback: function(e) {
			console.error(e.detail.errMsg)
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
  background-color: #ffffff;
}
.login-box {
  padding: 40rpx 80rpx;
}
.login-box image {
  width: 50rpx;
  height: 50rpx;
}
.phone,.lock,.code,.name {
  display: flex;
  font-size: 22rpx;
  margin-bottom: 40rpx;
}
.lock input {
  width: 350rpx;
}
.phone image,.code image,.name image,.lock image {
  margin-right: 20rpx;
}
.code .yanzhengma {
  margin-left: 20rpx;
  margin-top: 0rpx;
}
.login-btn {
  margin: 0 auto;
  width: 400rpx;
  height: 100rpx;
  text-align: center;
  color: #ffffff;
  font-size: 34rpx;
  margin-top: 120rpx;
  letter-spacing: 6rpx;
  line-height: 100rpx;
  border-radius: 50rpx;
  background-image: linear-gradient(to bottom, #71e6d3, #7cb7f8);
}
.bot {
  width: 250rpx;
  display: flex;
  margin: 50rpx auto;
  justify-content: space-between;
  font-size: 24rpx;
  font-weight: 600;
  color: #477bff;
}
.warn {
  font-size: 22rpx;
  margin-left: 40rpx;
  margin-top: -30rpx;
  line-height: 40rpx;
  color: crimson;
}
.tip {
  color: #55aaff;
  font-weight: 600;
}
.lock .eye {
  width: 50rpx;
  height: 50rpx;
}
.eye-box {
  width: 50rpx;
  height: 50rpx;
}
</style>
