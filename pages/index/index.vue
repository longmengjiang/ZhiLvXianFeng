<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <!-- 时钟结构 -->
    <view class="clock">
      <view class="dot-box">
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
      <view class="dot-box">
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
      <view class="dot-box">
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
      <view class="dot-box">
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
      <view class="dot-box">
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
      <view class="dot-box">
        <view class="dot"></view>
        <view class="dot"></view>
      </view>
      <view class="center-point"></view>
      <view class="one-insert"></view>
      <view class="two-insert"></view>
      <view class="hour" :style="{'transform':'rotate'+'('+rothh+'deg'+')'}"></view>
      <view class="min" :style="{'transform':'rotate'+'('+rotmm+'deg'+')'}"></view>
      <view class="sec" :style="{'transform':'rotate'+'('+rotss+'deg'+')'}"></view>
    </view>
    <view class="progress-box">
      <view class="progress-text" @click="tocard">
        今日目标完成<p>33</p>%
      </view>
      <image src="../../static/more.png" mode="" class="right-icon" @click="toschedule"></image>
    </view>
    <view class="main">
      <!-- 自定义行状日历组件 -->
      <calendarline></calendarline>
      <view class="punch">
        <p class="punch-text">已连续打卡<view class="contain-day">{{continuity}}</view>天</p>
        <view class="punch-btn" v-if="daka==0" @click="todaka">打卡</view>
        <view class="punch-btn" v-if="daka==1">已打卡</view> 
      </view>
      <view class="show-data">
        <view class="level">
          <p>5h</p>
          <p>0</p>
          <view class="line"></view>
        </view>
        <view class="sunday">
          <view class="value"></view>
          <p>日</p>
        </view>
        <view class="monday">
          <view class="value"></view>
          <p>一</p>
        </view>
        <view class="tuesday">
          <view class="value"></view>
          <p>二</p>
        </view>
        <view class="wednesday">
          <view class="value"></view>
          <p>三</p>
        </view>
        <view class="thursday">
          <view class="value"></view>
          <p>四</p>
        </view>
        <view class="friday">
          <view class="value"></view>
          <p>五</p>
        </view>
        <view class="saturday">
          <view class="value"></view>
          <p>六</p>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  // 导入自定义行状组件
  import calendarline from '../../components/calendarline/calendarline.vue'
  export default {
    // 基本数据
    data() {
      return {
        move: 0,
        current: 0,
        rothh: 270,
        rotmm: 270,
        rotss: 270,
        daka:0,
        start: false,
        userId: '',
        continuity:0,
        todoList: [],
        token:''
      }
    },
    onLoad() {
      // 从本地存储获取相关数据
      this.token = uni.getStorageSync('token')
      // 获取用户id和其他信息
      this.getuserid()
      // 获取今日是否已经打卡
      this.isdaka()
      this.userId = uni.getStorageSync('userid')
      // 获取时间
      this.time()
      // 获取持续打卡的时间
      this.getcontinuity()
      // 让倒计时组件动起来的测试代码
      this.t = setInterval(() => {
        if (this.currentTime > 0) {
          this.currentTime--
        }
      }, 1000)
    },
    onUnload() {  
      // 移除监听事件  
       uni.$off('gettoken');  
    },
    computed: {
      // 计算出秒钟
      secondTime() {
        return this.hour * 3600 + this.minute * 60 + this.second
      },
      // 获取现在的时间
      nowtime() {
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() +1
        var day = date.getDate()
        var hour = date.getHours()
        var minute = date.getMinutes()
        var second = date.getSeconds()
        var time = year + '-' + this.addZero(month) + '-' + this.addZero(day) + ' ' + this.addZero(hour) + ':' + this.addZero(minute) + ':' + this.addZero(second)
        return time
      }
    },
    methods: {
      // 获取用户id和其他信息
      async getuserid() {
        await this.request({
        url:'8002/ucenterservice/ucenter/getMemberInfo',
        method:'GET',
        header:{token:uni.getStorageSync('token')},
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            this.userId = res.data.userInfo.id
            // 缓存用户的相关信息
            uni.setStorageSync('userid',res.data.userInfo.id)
            uni.setStorageSync('avatar',res.data.userInfo.avatar)
            uni.setStorageSync('email',res.data.userInfo.email)
            uni.setStorageSync('mobile',res.data.userInfo.mobile)
            uni.setStorageSync('nickname',res.data.userInfo.nickname)
            uni.setStorageSync('address',res.data.userInfo.address)
            uni.setStorageSync('sign',res.data.userInfo.sign)
            uni.setStorageSync('id',res.data.userInfo.id)
            uni.setStorageSync('sex',res.data.userInfo.sex)
            
            uni.setStorageSync('background',res.data.userInfo.background)
            // uni.setStorageSync('password',res.data.userInfo.password)
            uni.setStorageSync('creatTime',res.data.userInfo.creatTime)
          }
        })
      },
      // 小于10拼接上0字符在前面
      addZero(s) {
        return s<10?('0' +s ):s
      },
      // 去倒计时页面
      toTimeDown() {
        uni.navigateTo({
          url: `/pages/timeDown/timeDown?secondTime=${this.secondTime}`
        })
      },
      // 去往今日任务页面
      toschedule() {
        uni.navigateTo({
          url:'/pages/schedule/schedule'
        })
      },
      async isdaka() {
        await this.request({
        url:`8001/loservice/clock/findAll/${uni.getStorageSync('userid')}`,
        method:'GET',
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data.list)
            var date = new Date()
            var year = date.getFullYear()
            var month = date.getMonth() +1
            var day = date.getDate()
            var time = year + '-' + this.addZero(month) + '-' + this.addZero(day)
            for(var i=0;i<res.data.list.length;i++) {
              if(time == res.data.list[i].clockTime.slice(0,10)) {
                this.daka = 1
              }
            }
           }
        })
      },
      // 打卡功能
      async todaka() {
        this.daka = 1
        await this.request({
        url:'8001/loservice/clock/addClock',
        method:'POST',
        data: {
          "clockTime":this.nowtime,
          "userId":uni.getStorageSync('userid')
        }
        }).then(res=> {
          if(res.code === 200) {
            this.getcontinuity()
            console.log("------------",res.data)
          }
        }).catch(err => {
          console.log(err)
        })
        this.isdaka()
      },
      // 获取持续打卡时间
      async getcontinuity() {
        await this.request({
        url:`8001/loservice/clock/countClock/${uni.getStorageSync('userid')}`,
        method:'GET',
        }).then(res=> {
          if(res.code === 200) {
            this.continuity = res.data.count
            uni.setStorageSync('continuity',res.data.count)
            console.log(res.data.count)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      change(index) {
        this.move = index,
          this.current = index
      },
      // 获取时间
      time() {
        var deg = 6
        setInterval(() => {
          var day = new Date()
          // console.log(day)
          // 旋转角度
          var hh = day.getHours() * 30 - 90 + day.getMinutes() * 0.5
          var mm = day.getMinutes() * deg - 90
          var ss = day.getSeconds() * deg - 90
          this.rothh = hh
          this.rotmm = mm
          this.rotss = ss
        }, 1000)
      },
      // 去选择页面
      tochoice() {
        uni.navigateTo({
          url: `/pages/choice/choice?userId=${this.userId}`
        })
      },
      // 去时间卡片页面
      tocard() {
        uni.navigateTo({
          url:'/pages/card/card'
        })
      }
    },
    components: {
      // 自定义行状日历组件
      calendarline
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
  .clock {
    position: relative;
    margin-top: 200rpx;
    left: 50%;
    transform: translateX(-200rpx);
    width: 400rpx;
    height: 300rpx;
  }

  .clock .dot-box {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 400rpx;
    height: 15rpx;
  }

  .clock .dot-box .dot {
    width: 15rpx;
    height: 15rpx;
    border-radius: 50%;
    background-color: #6c33c0;
  }

  .clock .dot-box:nth-child(1) {
    transform: rotate(30deg);
  }

  .clock .dot-box:nth-child(2) {
    transform: rotate(60deg);
  }

  .clock .dot-box:nth-child(3) {
    transform: rotate(90deg);
  }

  .clock .dot-box:nth-child(4) {
    transform: rotate(120deg);
  }

  .clock .dot-box:nth-child(5) {
    transform: rotate(150deg);
  }

  .one-insert {
    position: absolute;
    left: 50%;
    top: -90rpx;
    transform: translateX(-90rpx);
    width: 180rpx;
    height: 180rpx;
    box-shadow: inset 10rpx 20rpx 20rpx #dddddd;
    border-radius: 50%;
    background-color: #fefefe;
    z-index: 2;
  }

  .two-insert {
    position: absolute;
    left: 50%;
    top: -125rpx;
    transform: translateX(-125rpx);
    width: 250rpx;
    height: 250rpx;
    border-radius: 50%;
    background-color: #FFFFFF;
    z-index: 1;
  }

  .center-point {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    width: 28rpx;
    height: 28rpx;
    border-radius: 50%;
    background-color: #194db7;
    z-index: 3;
    transform: translate(-50%, -30%);
  }

  .hour,
  .min,
  .sec {
    position: absolute;
    left: 200rpx;
    top: -10rpx;
    z-index: 2;
    border-radius: 20rpx;
    width: 85rpx;
    height: 28rpx;
    transform-origin: left;
    background-color: #ae97cb;
  }

  .min {
    width: 125rpx;
  }

  .sec {
    width: 170rpx;
  }

  .progress-box {
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30rpx 40rpx;
    width: 600rpx;
    box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
    border-radius: 20rpx;
  }
  .progress-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34rpx;
    color: #454949;
    font-weight: 600;
    margin-left: 130rpx;
  }
  .progress-text p {
    color: #6c33c0;
    /* margin-bottom: 5rpx; */
    font-weight: 700;
    font-size: 40rpx;
  }
  .right-icon {
    width: 50rpx;
    height: 50rpx;
    margin-top: 10rpx;
  }
  .move {
    font-size: 34rpx !important;
    color: #000000 !important;
    font-weight: 600;
    border-bottom: 4rpx solid #72e6da;
  }
  .main {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .punch {
    padding: 20rpx 80rpx;
    display: flex;
    justify-content: space-between;
  }
  .punch .punch-text {
    display: flex;
    font-size: 28rpx;
    color: #908f92;
    font-weight: 600;
  }
  .punch-text .contain-day {
    color: #6c33c0;
    font-size: 32rpx;
    margin-top: -5rpx;
  }
  .punch .punch-btn {
    border: 2rpx solid #6c33c0;
    padding: 0rpx 20rpx;
    color: #6c33c0;
    font-size: 28rpx;
    font-weight: 600;
    transition: all 0.5s; 
    border-radius: 15rpx;
  }
  .show-data {
    display: flex;
    justify-content: space-around;
    padding: 20rpx 40rpx;
  }
  .level {
    position: relative;
    height: 220rpx;
    display: flex;
    color: #717172;
    font-weight: 600;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .level .line {
    position: absolute;
    width: 585rpx;
    left: 40rpx;
    top: 50rpx;
    background-color: #fff;
    border-top: 2px dashed #d9caac;
  }
 .sunday,.monday,.tuesday,.wednesday,.thursday,.friday,.saturday {
    position: relative;
    left: -20rpx;
    height: 250rpx;
  }
  .sunday p,.monday p,.tuesday p,.wednesday p,.thursday p,.friday p,.saturday p {
    position: absolute;
    font-size: 28rpx;
    color: #606475;
    font-weight: 600;
    bottom: 0;
  }
  .sunday .value,.monday .value,.tuesday .value,.wednesday .value,.thursday .value,.friday .value,.saturday .value{
    position: absolute;
    bottom: 40rpx;
    width: 55rpx;
    height: 100rpx;
    left: -10rpx;
    border: 2rpx solid #6c33c0;
    background-color: rgba(174, 151, 203, 1);
    border-radius: 10rpx;
  }
  .monday .value {
    height: 120rpx;
  }
  .tuesday .value {
    height: 150rpx;
  }
  /* 最高是200rpx */
  .wednesday .value,.thursday .value,.friday .value,.saturday .value {
    height: 200rpx;
    border: 2rpx solid #beb2d8;
    background-color: rgba(213, 210, 251, 0.5);
  }
</style>
