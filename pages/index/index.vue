<template>
	<view class="content">
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
      <!-- {'transform':rotate+'('+rot+')'} -->
      <view class="hour" :style="{'transform':'rotate'+'('+rothh+'deg'+')'}"></view>
      <view class="min" :style="{'transform':'rotate'+'('+rotmm+'deg'+')'}"></view>
      <view class="sec" :style="{'transform':'rotate'+'('+rotss+'deg'+')'}"></view> 
    </view>
    <view class="count-down">
      <uni-countdown :start="start" :hour="hour" :minute="minute" :second="second" @timeup="timeup"/>
      <p class="begin" v-if="start" @click="changeStart">暂停计时</p>
      <p class="begin" v-else="start" @click="changeStart">开始计时</p>
    </view>
    <view class="task">
      <view class="task-head">
        <view class="item-box">
          <view class="head-item" :class="move===index?'move':''" v-for="(item,index) in headitem" :key="item.id" @click="change(index)">{{item.title}}</view>
        </view>
        <view class="more" @click="tochoice">+</view>
          
      </view>
      <view class="task-content">
        <view v-show="current === 0">
          <view class="todo">
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view>              
            </view>
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view> 
            </view>
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view> 
            </view>
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view> 
            </view>
          </view>
        </view>
        <view v-show="current === 1">
          <view class="todo">
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view>              
            </view>
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view> 
            </view>
          </view>
        </view>
        <view v-show="current === 2">
          <view class="todo">
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view>              
            </view>
            <view class="todo-item">
              <p class="todo-title">俯卧撑100个10分钟</p>
              <view class="goto" @click="toTimeDown">去完成</view>
              <view class="detele">移除</view> 
            </view>
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
        move:0,
        current:0,
				rothh:270,
        rotmm:270,
        rotss:270,
        start:false,
        hour:0,
        minute:1,
        userId:'',
        second:10,
        todoList:[],
        headitem:[
          {
            id:1,
            title:'任务'
          },
          {
            id:2,
            title:'进行中'
          },
          {
            id:3,
            title:'已完成'
          }
        ]
			}
		},
		onLoad(option) {
      this.getToDoList()
      this.userId = option.userId
      this.time()
      // 让倒计时组件动起来的测试代码
      this.t = setInterval(() => {
      	if(this.currentTime > 0) {
      		this.currentTime--
      	}
      }, 1000)
		},
    computed: {
      secondTime() {
        return this.hour*3600 + this.minute*60 + this.second 
      }
    },
    methods: {
      async  getToDoList() {
        await this.request({url:`8001/loservice/lotask/findAll/${this.userId}`}).then(res=> {
          if(res.code === 200) {
            console.log(res)
            this.todoList = res.data
          }
        }).catch(err=> {
          console.log(err)
        })
      },
      toTimeDown() {
        uni.navigateTo({
          url:`/pages/timeDown/timeDown?secondTime=${this.secondTime}`
        })
      },
      change(index) {
        this.move = index,
        this.current = index
      },
      timeup() {
				uni.showToast({
					title: '时间到'
				})
        this.start = false
			},
      time() {
        var deg = 6
        setInterval(()=> {
          var day = new Date()
          // console.log("day",day)
          // 旋转角度
          var hh = day.getHours() *30 -90 + day.getMinutes()*0.5
          // console.log(hh)
          var mm = day.getMinutes() *deg -90
          // console.log(mm)
          var ss = day.getSeconds() *deg -90
          // console.log(ss)
          this.rothh = hh
          this.rotmm = mm
          this.rotss = ss
        },1000)
      },
      changeStart() {
        if(this.start == true) {
          this.start = true
        }else {
          this.start =false
        }
        this.start = !this.start
      },
      tochoice() {
        uni.navigateTo({
          url:`/pages/choice/choice?userId=${this.userId}`
        })
      }
    }
	}
</script>

<style>
  body {
    background: #eaf1fe;
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
  background-color: #29b996;
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
  transform: translate(-50%,-30%);
}
.hour,.min,.sec {
  position: absolute;
  left: 200rpx;
  top: -10rpx;
  z-index: 2;
  border-radius: 20rpx;
  width: 85rpx;
  height: 28rpx;
  transform-origin: left;
  background-color: #29B996;
}
.min {
  width: 125rpx;
}
.sec {
  width: 170rpx;
}
.count-down {
  display: flex;
  width: 580rpx;
  height: 80rpx;
  padding: 30rpx 40rpx;
  margin: 0 auto;
  border-radius: 20rpx;
  background-color: #FFFFFF;
}
.count-down .begin {
  width: 150rpx;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  color: #FFFFFF;
  border-radius: 20rpx;
  background-color: #4fdcb9;
  margin-left: 60rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  font-weight: 600;
}
.task {
  width: 670rpx;
  margin-top: 40rpx;
  background-color: #FFFFFF;
  padding: 40rpx;
}
.task-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40rpx;
}
.task-head .item-box {
  display: flex;
  justify-content: space-between;
}
.task-head .head-item {
  margin-right: 50rpx;
  line-height: 50rpx;
  vertical-align: top;
  font-size: 26rpx;
  color: #575b5b;
}
.task-head .more {
  font-size: 60rpx;
  line-height: 50rpx;
}
.move {
  font-size: 34rpx !important;
  color: #000000 !important;
  font-weight: 600;
  border-bottom: 4rpx solid #72e6da;
}
.todo .todo-item {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 40rpx;
  border-radius: 15rpx;
  line-height: 60rpx;
  font-size: 28rpx;
  font-weight: 600;
  width: 590rpx;
  margin-bottom: 30rpx;
  height: 60rpx;
  background-color: #72e6da;
}
.todo .todo-item .todo-title {
  width: 350rpx;
  font-size: 26rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.todo .todo-item .goto {
  width: 150rpx;
  margin-right: 10rpx;
  background-color: #ceffff;
  text-align: center;
  line-height: 60rpx;
  border: 2rpx solid #FFFFFF;
  border-radius: 50rpx;
  height: 60rpx;
}
.todo .todo-item .detele {
  width: 100rpx;
  text-align: center;
  line-height: 60rpx;
  border-radius: 50rpx;
  height: 60rpx;
  background-color: #ceffff;
}
</style>
