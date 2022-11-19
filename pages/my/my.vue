<template>
  <view>
    <view class="con-head">
      <view class="con">
        <view class="con-left">
          <image src="../../static/10.jpg" mode=""></image>
          <p class="name">Hello</p>
        </view>
        <view class="con-right" @click="toHomePage">
          <p>主页 ></p>
        </view>
      </view>
    </view>
    <view class="content">
      <view class="achievement-box" :style="{'height':height+'rpx'}"  @click="rot">
        <view class="achievement">
          <image src="../../static/chengjiu.png" mode=""></image>
          <p class="gexin">相对辛苦，绝对自由</p>
          <view :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="jiantou">
            <image src="../../static/right(2).png" mode=""></image>
          </view>
          <p class="chengjiu">成就</p>
        </view>
        <view class="medals">
          <image src="../../static/grade1.png" mode=""></image>
          <image src="../../static/grade2.png" mode=""></image>
          <image src="../../static/grade3.png" mode=""></image>
          <image src="../../static/grade4.png" mode=""></image>
          <image src="../../static/grade5.png" mode=""></image>
          <image src="../../static/grade6.png" mode=""></image>
          <image src="../../static/grade7.png" mode=""></image>
          <image src="../../static/grade8.png" mode=""></image>
        </view>
        <view class="top-icon" @click="tohide">
          <image src="../../static/totop.png" mode=""></image>
        </view>
      </view>
      <view class="total">
        <view class="frequency-box">
          <image src="../../static/frequency.png" mode=""></image>
          <view class="frequency">
            <p>今日自律次数</p>
            <span>3次</span>
          </view>
        </view>
        <view class="duration-box">
          <image src="../../static/right.png" mode=""></image>
          <view class="duration">
            <p>今日专注时长</p>
            <span>182min</span>
          </view>
        </view>
        <p class="target">今日目标: 自律<span>5</span>次</p>
      </view>
    </view>
    <view class="plan">
      <view class="plan-head">
        <view class="theme">
          <p class="title">自律计划</p>
          <image src="../../static/dog.png" mode=""></image>
          <uni-datetime-picker type="date" :clear-icon="false" v-model="single" />
        </view>
        <p class="punch">打卡</p>
      </view>
      <view class="scroll">
        <scroll-view scroll-x="true" class="scroll-x">
          <view class="date" :class="active===index?'move':''" v-for="(item,index) in date" :key="item.id" @click="change(index)">
            <p class="week">{{item.dateday}}</p>
            <view class="triangle" v-show="active===index"></view>
            <image src="../../static/black-right.png" mode="" v-show="active===index"></image>
          </view>
        </scroll-view>
        <view class="con-text" v-show="current === 0">
          <view class="text-item">
            <p class="title">背单词10个10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个10分钟</p>
            <view class="do">去完成</view>
          </view>
        </view>
        <view class="con-text" v-show="current === 1">
          <view class="text-item">
            <p class="title">10个10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">10个10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">10个10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">10个10分钟</p>
            <view class="do">去完成</view>
          </view>
        </view>
        <view class="con-text" v-show="current === 2">
          <view class="text-item">
            <p class="title">背单词10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词0分钟</p>
            <view class="do">去完成</view>
          </view>
        </view>
        <view class="con-text" v-show="current === 3">
          <view class="text-item">
            <p class="title">背单词10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个10分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个分钟</p>
            <view class="do">去完成</view>
          </view>
        </view>
        <view class="con-text" v-show="current === 4">
          <view class="text-item">
            <p class="title">背单词10个分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个1分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10个钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词10钟</p>
            <view class="do">去完成</view>
          </view>
        </view>
        <view class="con-text" v-show="current === 5">
          <view class="text-item">
            <p class="title">背单词1钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背10分钟</p>
            <view class="do">去完成</view>
          </view>
        </view>
        <view class="con-text" v-show="current === 6">
          <view class="text-item">
            <p class="title">背单词1钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单词分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背单分钟</p>
            <view class="do">去完成</view>
          </view>
          <view class="text-item">
            <p class="title">背10分钟</p>
            <view class="do">去完成</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        single: "2022-10-19",
        flag: 0,
        active:0,
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
    methods: {
      change(index) {
        this.active = index,
        this.current = index
      },
      rot() {
        if(this.flag) {
          this.height = 50
          this.rotate = 0
        }else {
          this.height = 400
          this.rotate = 90
        }
        this.flag = !this.flag
      },
      tohide() {
        this.height = 50
        this.rotate = 0
      },
      toHomePage() {
        uni.navigateTo({
          url:'/pages/homepage/homepage'
        })
      }
    }
  }
</script>

<style scoped>
.con-head {
  position: relative;
  width: 100%;
  height: 180rpx;
  background-color: #72e8d8;
}
.con-head::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-color: #72e8d8;
  border-radius: 100%;
  transform: translateY(50%);
}
.con-head .con {
  color: #ffffff;
  height: 80rpx;
  line-height: 110rpx;
  display: flex;
  justify-content: space-between;
  padding: 0 60rpx;
}
.con-head .con .con-left {
  display: flex;
}
.con-head .con .con-left image {
  width: 80rpx;
  box-shadow: 0 10rpx 10rpx #4ab6dd;
  margin-right: 40rpx;
  border-radius: 50%;
  height: 80rpx;
}
.content {
  padding: 40rpx;
}
.achievement-box {
  width: 590rpx;
  color: #ffffff;
  font-size: 28rpx;
  padding: 40rpx;
  line-height: 50rpx;
  transform: translateY(-80rpx);
  height: 50rpx;
  overflow: hidden;
  transition: all 0.5s; 
  border-radius: 10rpx;
  background-color: #494687;
}
.achievement-box .top-icon {
  width: 60rpx;
  height: 40rpx;
  margin-left: 270rpx;
}
.achievement-box .top-icon image {
  width: 60rpx;
  height: 40rpx;
}
.achievement-box .medals {
  margin-top: 100rpx;
  flex-wrap: wrap;
  margin-left: 50rpx;
  display: flex;
  width: 500rpx;
  height: 280rpx;
  justify-content: space-between;
}
.achievement-box .medals image {
  /* margin-right: 60rpx; */
  margin: 20rpx;
  width: 70rpx;
  height: 100rpx;
}
.achievement-box .achievement image {
  float: left;
  width: 50rpx;
   margin-right: 70rpx;
  height: 50rpx;
}
.achievement-box .achievement .gexin {
  float: left;
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
.total {
  display: flex;
  flex-wrap: wrap;
  margin-top: -40rpx;
  justify-content: space-between;
  padding: 40rpx;
  border-radius: 20rpx;
  width: 590rpx;
  height: 200rpx;
  background-color: #ffffff;
}
.total image {
  width: 40rpx;
  height: 40rpx;
  float: left;
}
.total .frequency-box,.total .duration-box {
  width: 250rpx;
  height: 100rpx;
  font-size: 26rpx;
}
.total .frequency-box .frequency,.total .duration-box .duration {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.total .frequency-box .frequency span,.total .duration-box .duration span {
  font-size: 34rpx;
  font-weight: 600;
  margin-top: 20rpx;
  color: #72e4da;
}
.target {
  margin-top: 40rpx;
  font-size: 28rpx;
}
.target span {
   font-weight: 600;
   margin: 0 10rpx;
   font-size: 34rpx;
   color: #72e6da;
}
.plan {
  width: 670rpx;
  padding: 40rpx;
  background-color: #ffffff;
}
.plan .plan-head {
  display: flex;
  padding: 0 20rpx;
  font-size: 26rpx;
  justify-content: space-between;
}
.plan .plan-head .theme {
  position: relative;
  width: 290rpx;
  height: 80rpx;
  font-weight: 600;
}
.plan .plan-head .theme image {
  position: absolute;
  right: 0;
  top: -30rpx;
  width: 70rpx;
  height: 100rpx;
}
.plan .plan-head .theme .title {
  font-size: 30rpx;
  margin-bottom: 5rpx;
}
.plan .plan-head .punch {
  color: #72e6da;
  font-weight: 700;
}
.plan .scroll-x {
  width: 620rpx;
  display: flex;
  height: 130rpx;
  /* 核心 */
  white-space:nowrap;
  padding: 20rpx 20rpx;
  margin-top: 50rpx;
}
.plan .scroll-x .date {
  /* 核心 */
  display: inline-block;
  position: relative;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 20rpx;
  text-align: center;
  border: 2rpx solid #72e6da;
  width: 80rpx;
  height: 80rpx;
  line-height: 80rpx;
}
.plan .scroll-x .date .triangle {
  position: absolute;
  left: 30rpx;
  bottom: -50rpx;
  width: 0px;
  height: 0px;
  border-left: 15rpx solid transparent;
  border-right: 15rpx solid transparent;
  border-bottom: 30rpx solid #72e6da;
}
.move {
  background-color: #72e6da;
}
.plan .scroll-x .date image {
  position: absolute;
  bottom: -5rpx;
  right: -20rpx;
  width: 40rpx;
  height: 40rpx;
}
.con-text {
  margin-top: -25rpx;
  background-color: #72e6da;
  padding: 30rpx 20rpx;
  border-radius: 20rpx;
} 
.con-text .text-item {
  background-color: #ffffff;
  padding: 20rpx 30rpx;
  border-radius: 10rpx;
  margin-bottom: 30rpx;
  display: flex;
  font-size: 26rpx;
  justify-content: space-between;
}
.con-text .text-item:last-child {
  margin-bottom: 0;
}
.con-text .text-item .title {
  width: 400rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.con-text .text-item .do {
  width: 110rpx;
  height: 40rpx;
  text-align: center;
  border-radius: 40rpx;
  background-color: #72e6da;
}
</style>
