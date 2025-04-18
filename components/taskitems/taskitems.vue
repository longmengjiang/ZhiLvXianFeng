<template>
  <view class="con">
    <view class="container" @touchstart="touchS" @touchmove="touchM" @touchend="touchE"
      :style="{left: leftStyle + 'rpx'}">
      <view class="text" @click="time(taskTime);tocountdown(Ftime,Id)">
        <image :src="imgurl" mode=""></image>
        <view class="task-box">
          <view class="text-body">
            <p class="event">{{task}}</p>
            <p class="settime">{{taskTime}}min</p>
          </view>
          <view class="time">{{counttime}}</view>
        </view>
      </view>
      <view class="delete-icon" @click="detele(Id)">
        <image src="../../static/delete.png" mode=""></image>
      </view>
    </view>
  </view>
</template>


<script>
  export default {
    props:['imgurl','task','taskTime','counttime','Id'],
    data() {
      return {
        leftStyle: 0,
        startX: 0,
        Ftime:'',
        hiddenFlag: true,
        delBtnWidth: 220,
      }
    },
    methods: {
      time(time) {
        console.log('....',time)
        // time是总共多少分钟
        //1.获取当前日期
         var date = new Date()
         //2. 获取当前分钟
         var min = date.getMinutes()
         var se = date.getSeconds()
         //3. 设置当前时间+15分钟：把当前分钟数+15后的值重新设置为date对象的分钟数
          date.setMinutes(min + time)
          date.setSeconds(se+2)
         //4. 测试
         console.log('---',date) //Sat Dec 31 2022 19:03:18
         var year = date.getFullYear()
         var month = date.getMonth() +1
         var day = date.getDate()
         var hour = date.getHours()
         var minute = date.getMinutes()
         var second = date.getSeconds()
         month = month < 10 ? '0' + month : month;
         day = day < 10 ? '0' + day : day;
         hour = hour < 10 ? '0' + hour : hour;
         minute = minute < 10 ? '0' + minute : minute;
         second = second < 10 ? '0' + second : second;
         // 加上分钟数,获得最后的时间
         var mytime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
         console.log('schedule',mytime)  
         //console.log(date.toLocaleString()) //2022/12/31下午7:01:55
        this.Ftime = mytime
        console.log('Ftime',this.Ftime)
      },
      tocountdown(time,id) {
        console.log('111111',time)
        uni.navigateTo({
          url:`/pages/timeDown/timeDown?time=${time}&id=${id}`
        })
      },
      detele(id) {
        console.log(id)
        uni.showModal({
        	title: '提示',
        	content: '你确定要删除吗',
        	success: (res)=> {
        		if (res.confirm) {
        			console.log('确定')
              this.del(id)
              
        		} else if (res.cancel) {
        			console.log('取消');
        		}
        	}
        });
      },
      async del(id) {
        await this.request({
          url:`8001/loservice/lotask/deleteTask/${id}`,
          method:'DELETE'
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'删除成功!'
            })
            uni.redirectTo({
              url:'/pages/schedule/schedule'
            })
          }
        }).catch(err=> {
          console.log('表单的错误：',err)
        })
      },
      // 开始移动时
      touchS({
        touches
      }) {
        // startX记录开始移动的位置
        if (touches.length === 1) {
          this.startX = touches[0].clientX;
        }
        // hiddenFlag为true则是从右向左，为false则是从左向右
        if (this.leftStyle === 0) {
          this.hiddenFlag = true;
        } else {
          this.hiddenFlag = false;
        }
      },
      touchM({
        touches
      }) {
        if (touches.length === 1) {
          //手指移动时水平方向位置
          const moveX = touches[0].clientX;
          this.moveFunc(moveX);
        }
      },
      touchE({
        touches
      }) {
        const {
          leftStyle
        } = this;
        const {
          delBtnWidth
        } = this;
        // 如果停止滑动的距离大于二分之一则直接弹出删除按钮，不然则left为0
        if (-leftStyle > delBtnWidth / 2) {
          this.leftStyle = -delBtnWidth;
        } else {
          this.leftStyle = 0;
        }
      },
      moveFunc(moveX) {
        // 原始位置向左，leftStyle为小于0；原始位置向右，leftStyle为大于0
        // disX为相对最初位置的左右距离
        // 大于0为向右，小于0为向左
        const disX = moveX - this.startX;
        const delBtnWidth = this.delBtnWidth;
        let offsetNum = 0;
        if (-disX >= delBtnWidth && this.leftStyle === -delBtnWidth) {
          return;
        }
        console.log(disX, this.hiddenFlag);
        // this.hiddenFlag为true则是从左到右，则应该将container向左移动
        // this.hiddenFlag为false则是从右向左，则应该将container向右移动
        if (this.hiddenFlag) {
          // 此时container为最右边，则应该将container向左移动
          // disX大于0为相对原始位置的向右移动，则直接将offsetNum置为0
          // 否则为向左移动，offsetNum为disX相反的值，判断是否超过设置的最大位置
          if (disX == 0 || disX > 0) {
            offsetNum = 0;
          } else {
            offsetNum = disX;
            if (disX <= -delBtnWidth) {
              //控制手指移动距离最大值为删除按钮的宽度
              offsetNum = -delBtnWidth;
            }
          }
        } else {
          // 此时container为最左边，应该向右移动
          // disX小于0为相对原始位置的向左移动，则直接将offsetNum置为-this.delBtnWidth
          // 否则为相对原始位置的向右移动，此时应该将最大位置与向右位置的差值为此刻位置，判断是否为大于0
          if (disX < 0) {
            offsetNum = -this.delBtnWidth;
          } else {
            offsetNum = -this.delBtnWidth + disX;
            if (offsetNum > 0) {
              offsetNum = 0;
            }
          }
        }
        this.leftStyle = offsetNum;
      }
    }
  }
</script>

<style scoped>
  .con {
    overflow: hidden;
  }
  .container {
    position: relative;
  }

  .delete-icon {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -197rpx;
    width: 130rpx;
    height: 65rpx;
    border-radius: 31rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background: #ae97cb;
  }
  .delete-icon image {
    width: 40rpx;
    height: 40rpx;
  }

  .text {
    position: relative;
    display: flex;
    align-items: center;
    padding: 40rpx 0 40rpx 20rpx;
    border-left: 40rpx solid #ae97cb;
    width: 610rpx;
    margin-bottom: 40rpx;
    border-radius: 20rpx;
    background-color: #ffffff;
  }

  .task-box {
    width: 500rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-body {
    margin-left: 20rpx;
    font-weight: 600;
  }

  .text-body .event {
    font-size: 28rpx;
    /* width: 300rpx; */
  }

  .text-body .settime {
    font-size: 26rpx;
    font-weight: 500;
    margin-top: 10rpx;
    color: #616464;
  }

  .text image {
    width: 50rpx;
    height: 50rpx;
  }

  .add-task {
    position: absolute;
    right: 40rpx;
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    color: #ffffff;
    text-align: center;
    line-height: 80rpx;
    font-size: 60rpx;
    background-color: #08796f;
  }

  .time {
    margin-left: 10rpx;
    font-size: 36rpx;
    color: #ae97cb;
    font-weight: 600;
  }
</style>
