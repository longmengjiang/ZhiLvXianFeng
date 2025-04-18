<template>
  <view class="content">
    <!-- 背景图片 -->
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="message" @click="tomessage">
      <view class="message-box">
        <image src="../../static/message.png" mode=""></image>
        <view class="message-number">
          12
        </view>
      </view>
    </view>
    <!-- 头部 -->
    <view class="con-head">
      <view class="con">
        <view class="con-left">
          <!-- 头部头像 -->
          <image :src="avatar" mode=""></image>
          <p class="name">{{nickname}}</p>
        </view>
        <view class="con-right" @click="toHomePage">
          <p>主页</p>
          <image src="../../static/right1.png" mode=""></image>
        </view>
      </view>
    </view>
    <view class="achieve">
      <view class="achievement-box" :style="{'height':height+'rpx'}"  @click="rot">
        <view class="achievement">
          <image src="../../static/chengjiu.png" mode=""></image>
          <p class="gexin">{{sign}}</p>
          <view :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="jiantou">
            <image src="../../static/right(2).png" mode=""></image>
          </view>
          <p class="chengjiu">排行</p>
        </view>
        <view class="rank">
          <p class="rank-title">今日积分排行榜</p>
          <view class="rank-item">
            <image src="../../static/10.jpg" mode="" class="rank-img"></image>
            <p class="rank-name">我</p>
            <p class="rank-value">+80</p>
          </view>
          <view class="rank-item">
            <image src="../../static/10.jpg" mode="" class="rank-img"></image>
            <p class="rank-name">我</p>
            <p class="rank-value">+80</p>
          </view>
          <view class="rank-item">
            <image src="../../static/10.jpg" mode="" class="rank-img"></image>
            <p class="rank-name">我</p>
            <p class="rank-value">+80</p>
          </view>
        </view>
        <view class="top-icon" @click="tohide" :style="{'display':display}">
          <image src="../../static/totop.png" mode=""></image>
        </view>
      </view>
    </view>
    <view class="integral">
      <view class="share">
        <image src="../../static/plane.png" mode=""></image>
        <view class="words">
          <p class="big-words">分享可得50积分</p>
          <p class="samll-words">分享一下你的自律成果吧</p>
        </view>
        <view class="toshare">
          去分享
        </view>
      </view>
      <view class="my-integral">
        <image src="../../static/integral.png" mode=""></image>
        <view class="count-box">
          <p>我的积分：</p>
          <view class="counts">
            70888
          </view>
        </view>
        <view class="touse" @click="touse">
          去兑换
        </view>
      </view>
    </view>
    <view class="todaytask">
      <p class="title">今日任务</p>
      <view class="todaytask-items">
        <view class="task-items">
          <view class="task-items-left">
            <view class="color"></view>
            <p class="task-name">签到</p>
          </view>
          <scrollbtn :value="20" :daka="daka"></scrollbtn>
        </view>
        <view class="task-items">
          <view class="task-items-left">
            <view class="color"></view>
            <p class="task-name">目标完成80%</p>
          </view>
          <scrollbtn :value="30"></scrollbtn>
        </view>
        <view class="task-items">
          <view class="task-items-left">
            <view class="color"></view>
            <p class="task-name">目标完成</p>
          </view>
          <scrollbtn :value="50"></scrollbtn>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  // 导入自定义滑动组件按钮
  import scrollbtn from '../../components/scrollbtn/scrollbtn.vue'
  export default {
    // 基础数据
    data() {
      return {
        avatar:'',
        nickname:'',
        sign:'',
        flag: 0,
        daka:0,
        active:0,
        display:'none',
        current:0,
        height:50,
        rotate:0,
        date:[
          {
            id:1,
            dateday: '周一'
          },
          {
            id:2,
            dateday: '周二'
          },
          {
            id:3,
            dateday: '周三'
          },
          {
            id:4,
            dateday:'周四'
          },
          {
            id:5,
            dateday: '周五'
          },
          {
            id:6,
            dateday: '周六'
          },
          {
            id:7,
            dateday: '周日'
          }
        ]
      }
    },
    onLoad() {
      // 获取是否打卡
      this.isdaka()
      console.log(this.daka)
      // 从本地存储获取数据
      this.avatar = uni.getStorageSync('avatar')
      this.nickname = uni.getStorageSync('nickname')
      this.sign = uni.getStorageSync('sign')
    },
    methods: {
      // 切换
      change(index) {
        this.active = index,
        this.current = index
      },
      // 获取是否打卡
      async isdaka() {
        await this.request({
        url:`8001/loservice/clock/findAll/${uni.getStorageSync('userid')}`,
        method:'GET',
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data.list)
            this.continuity = res.data.list.length
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
      // 小于10拼接上0字符在前面
      addZero(s) {
        return s<10?('0' +s ):s
      },
      // 去往信息页面
      tomessage() {
        uni.navigateTo({
          url:'/pages/message/message'
        })
      },
      // 旋转
      rot() {
        if(this.flag) {
          this.height = 50
          this.rotate = 0
          this.display = 'none'
        }else {
          this.height = 450
          this.rotate = 90
          this.display = 'block'
        }
        this.flag = !this.flag
      },
      // 隐藏
      tohide() {
        this.height = 50
        this.rotate = 0
      },
      // 去往兑换页面
      touse() {
        uni.navigateTo({
          url:'/pages/exchange/exchange'
        })
      },
      // 去个人主页页面
      toHomePage() {
        uni.navigateTo({
          url:'/pages/homepage/homepage'
        })
      }
    },
    components: {
      scrollbtn
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
  .message {
    position: absolute;
    /* display: flex;
    justify-content: flex-end; */
    right: 60rpx;
    top: 20rpx;
  }
  .message image {
    width: 50rpx;
    height: 50rpx;
  }
  .message-box {
    position: relative;
  }
  .message-number {
    position: absolute;
    font-size: 24rpx;
    color: #ffffff;
    border-radius: 50%;
    padding: 4rpx;
    background-color: #ff0000;
    top: -20rpx;
    right: -20rpx;
  }
  .content {
    position: relative;
    padding: 40rpx;
  }
.con-head .con {
  height: 80rpx;
  line-height: 110rpx;
  display: flex;
  justify-content: space-between;
  padding: 0 60rpx;
}
.con-head .con .con-left {
  display: flex;
}
.con-right {
  display: flex;
  margin-top: 30rpx;
  justify-content: center;
  align-items: center;
}
.con-right image {
  width: 40rpx;
  height: 40rpx;
}
.con-head .con .con-left image {
  width: 80rpx;
  box-shadow: 0 10rpx 10rpx #4ab6dd;
  margin-right: 40rpx;
  border-radius: 50%;
  height: 80rpx;
}
.achievement-box {
  width: 590rpx;
  position: relative;
  margin-top: 40rpx;
  margin-bottom: 40rpx;
  color: #ffffff;
  font-size: 28rpx;
  padding: 40rpx;
  line-height: 50rpx;
  height: 50rpx;
  overflow: hidden;
  transition: all 0.5s; 
  border-radius: 10rpx;
  background-color: #494687;
}
.achievement-box .top-icon {
  position: absolute;
  bottom: 0;
  width: 60rpx;
  height: 40rpx;
  margin-left: 270rpx;
}
.achievement-box .top-icon image {
  width: 60rpx;
  height: 40rpx;
}
.achievement-box .achievement image {
  float: left;
  width: 50rpx;
   margin-right: 70rpx;
  height: 50rpx;
}
.achievement-box .achievement .gexin {
  float: left;
  width: 300rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.achievement-box .achievement .chengjiu {
  float: right;
}
.achievement-box .achievement .jiantou {
  transition: all 0.5s; 
  float: right;
  width: 40rpx;
  margin-left: 10rpx;
  margin-top: 5rpx;
  height: 40rpx;
}
.achievement-box .achievement .jiantou image {
  width: 30rpx;
  margin-top: 5rpx;
  margin-left: 5rpx;
  height: 30rpx;
}
.rank {
  position: absolute;
  top: 120rpx;
  display: flex;
  justify-content: space-between;
}
.rank-item {
  position: relative;
  width: 120rpx;
  height: 160rpx;
  margin-right: 40rpx;
  border-radius: 10rpx;
  left: 50rpx;
  bottom: -180rpx;
  background-color: #c0acde;
}
.rank-item .rank-img {
  position: absolute;
  left: 25rpx;
  top: -40rpx;
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
}
.rank-name {
  position: absolute;
  top: 25rpx;
  left: 45rpx;
}
.rank-value {
  position: absolute;
  bottom: 20rpx;
  left: 30rpx;
}
.rank image {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
}
.rank-title {
  font-size: 32rpx;
  font-weight: 600;
  width: 40rpx;
}
.integral {
  padding: 40rpx;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20rpx;
}
.integral .share image {
  width: 70rpx;
  height: 100rpx;
}
.share {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.words {
  display: flex;
  font-weight: 600;
  font-size: 28rpx;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.words .samll-words {
  font-size: 20rpx;
  margin-top: 10rpx;
  color: #404040;
  font-weight: 500;
}
.toshare,.touse {
  width: 110rpx;
  height: 50rpx;
  text-align: center;
  line-height: 50rpx;
  font-weight: 600;
  font-size: 24rpx;
  color: #494687;
  border-radius: 40rpx;
  background-color: #cedbf5;
}
.my-integral {
  margin-top: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.my-integral image {
  width: 70rpx;
  height: 70rpx;
}
.count-box {
  font-size: 28rpx;
  display: flex;
  align-items: center;
  font-weight: 600;
}
.counts {
  color: #eacd62;
  font-size: 36rpx;
}
.todaytask {
  height: 500rpx;
  margin-top: 40rpx;
  border-radius: 20rpx;
  padding: 40rpx 70rpx;
  background: rgba(255, 255, 255, 0.5);
}
.todaytask .title {
  color: #6b689e;
  margin-bottom: 20rpx;
  font-weight: 600;
}
.task-items {
  display: flex;
  align-items: center;
  margin-bottom: 40rpx;
  justify-content: space-between;
}
.task-items-left {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
  font-weight: 600;
}
.task-items-left .color {
  width: 30rpx;
  height: 30rpx;
  margin-right: 10rpx;
  border-radius: 50%;
  background-color: #f0c5d1;
}
</style>
