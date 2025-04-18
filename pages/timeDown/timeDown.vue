<template>
  <view class="content">
    <view class="title">
      <p>时间可以让你证明一切！</p>
      <p>脚踏实地地去做，成就真实的自己！</p>
    </view>
    <view class="count">
      <view class="time">
        <p v-show="isdone == 0">{{finallytime}}</p>
        <p v-show="isdone == 1">{{showmsg}}</p>
      </view>
      <view class="btn-box">
        <view class="done" @click="done">完成</view>
      </view>
      <image src="../../static/star1.png" mode="" class="star1"></image>
      <image src="../../static/star1.png" mode="" class="star2"></image>
      <image src="../../static/star1.png" mode="" class="star3"></image>
      <image src="../../static/star1.png" mode="" class="star4"></image>
      <image src="../../static/star1.png" mode="" class="star5"></image>
      <image src="../../static/star1.png" mode="" class="star6"></image>
      <image src="../../static/star1.png" mode="" class="star7"></image>
      <image src="../../static/star1.png" mode="" class="star8"></image>
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        timecount: 0,
        start: true,
        time: '',
        isdone: 0,
        pretime: '',
        showmsg:'已完成',
        finallytime: '',
        count: 0,
        id: ''
      }
    },
    onLoad(option) {
      // 获取从上一个页面传过来的数据
      this.getRestTime(option.time)
      console.log('1', option.time)
      this.time = option.time
      this.pretime = option.time
      this.id = option.id
      console.log('2', this.time)
    },
    methods: {
      // 获得实时倒计时
      getRestTime(time) {
        var timer = setInterval(() => {
          this.count++
          console.log(this.count)
          var nowTime = new Date();
          // 传过来的时间加上现在的时间,等于最终的时间就是放在下面的时间
          var setTime = new Date(time);
          var dec = (setTime - nowTime) / 1000;
          var d = parseInt(dec / 60 / 60 / 24);
          d = d < 10 ? '0' + d : d;
          var h = parseInt(dec / 60 / 60 % 24);
          h = h < 10 ? '0' + h : h;
          var m = parseInt(dec / 60 % 60);
          m = m < 10 ? '0' + m : m;
          var s = parseInt(dec % 60);
          s = s < 10 ? '0' + s : s;
          this.finallytime = `${h}:${m}:${s}`
          if (h == 0 && m == 0 && s == 0) {
            clearInterval(timer)
            this.showmsg = '时间到'
            this.done()
            uni.showToast({
              title: '时间到了!'
            })
          }
        }, 1000)
      },
      // 完成任务,把时间增加到自律时间
      async done() {
        this.isdone = 1
        // 获取花费了多长时间
        this.gettimecount()
        await this.request({
          url: '8001/loservice/lotask/updateStat',
          method: 'POST',
          data: {
            "id": this.id,
            "stat": '已完成',
            "useTime":this.timecount
          }
        }).then(res => {
          if (res.code === 200) {
            console.log("------------", res.data)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 计算共花费了多少时间
      gettimecount() {
        var cot = this.count
        // 花费多少分分钟
        var min = Math.floor(cot/60)
        console.log(min)
        this.timecount = min
        // console.log(this.formatSeconds(cot))
        // if(this.formatSeconds(cot))
        // this.timecount = this.formatSeconds(cot)
      },
      // 计算出花费了多少时间
      // formatSeconds(value) {
      //   var secondTime = parseInt(value); // 秒
      //   var minuteTime = 0; // 分
      //   var hourTime = 0; // 小时
      //   if (secondTime > 60) { //如果秒数大于60，将秒数转换成整数
      //     //获取分钟，除以60取整数，得到整数分钟
      //     minuteTime = parseInt(secondTime / 60);
      //     //获取秒数，秒数取佘，得到整数秒数
      //     secondTime = parseInt(secondTime % 60);
      //     //如果分钟大于60，将分钟转换成小时
      //     if (minuteTime > 60) {
      //       //获取小时，获取分钟除以60，得到整数小时
      //       hourTime = parseInt(minuteTime / 60);
      //       //获取小时后取佘的分，获取分钟除以60取佘的分
      //       minuteTime = parseInt(minuteTime % 60);
      //     }
      //   }
      //   var result = "" + parseInt(secondTime) + "秒";

      //   if (minuteTime > 0) {
      //     result = "" + parseInt(minuteTime) + "分" + result;
      //   }
      //   if (hourTime > 0) {
      //     result = "" + parseInt(hourTime) + "小时" + result;
      //   }
      //   return result;
      // }
    }
  }
</script>

<style scoped>
  .content {
    overflow: hidden;
    min-height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .title {
    color: #ae97cb;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100rpx);
    margin: 0 auto;
  }

  .title p {
    margin-bottom: 10rpx;
  }

  .count {
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .count .time {
    color: #ae97cb;
    z-index: 99;
    font-size: 100rpx;
  }

  .count .btn-box {
    margin-top: 100rpx;
  }

  .count .btn-box .stop,
  .begin,
  .done {
    z-index: 99;
    color: #fff;
    width: 160rpx;
    height: 80rpx;
    font-size: 34rpx;
    margin-bottom: 40rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
    border: 4rpx solid #ae97cb;
  }

  .star1,
  .star2,
  .star3,
  .star4,
  .star5,
  .star6,
  .star7,
  .star8 {
    position: absolute;
    top: -900rpx;
    left: 0;
    width: 300rpx;
    height: 300rpx;
    animation-name: star1;
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
  }

  .star2 {
    width: 300rpx;
    height: 300rpx;
    left: 50rpx;
    top: -900rpx;
    animation-name: star2;
    animation-delay: 1s;
  }

  .star3 {
    width: 270rpx;
    height: 270rpx;
    left: 200rpx;
    top: -900rpx;
    animation-name: star3;
    animation-delay: 5s;
  }

  .star4 {
    width: 300rpx;
    height: 300rpx;
    left: 500rpx;
    top: -900rpx;
    animation-name: star4;
    animation-duration: 3s;
  }

  .star5 {
    width: 270rpx;
    height: 270rpx;
    left: 550rpx;
    top: -900rpx;
    animation-name: star5;
    animation-delay: 2s;
    animation-duration: 3s;
  }

  .star6 {
    width: 300rpx;
    height: 300rpx;
    left: 600rpx;
    top: -400rpx;
    animation-name: star6;
    animation-duration: 2.5s;
  }

  .star7 {
    width: 270rpx;
    height: 270rpx;
    left: 700rpx;
    top: 0rpx;
    animation-name: star7;
    animation-duration: 3s;
  }

  .star8 {
    width: 300rpx;
    height: 300rpx;
    left: 700rpx;
    top: 300rpx;
    animation-name: star8;
    animation-delay: 2s;
    animation-duration: 2s;
  }

  @keyframes star1 {
    to {
      left: -400rpx;
      top: -200rpx;
    }
  }

  @keyframes star2 {
    to {
      left: -400rpx;
      top: -300rpx;
    }
  }

  @keyframes star3 {
    to {
      left: -400rpx;
      top: 150rpx;
    }
  }

  @keyframes star4 {
    to {
      left: -400rpx;
      top: 200rpx;
    }
  }

  @keyframes star5 {
    to {
      left: -400rpx;
      top: 300rpx;
    }
  }

  @keyframes star6 {
    to {
      left: -400rpx;
      top: 500rpx;
    }
  }

  @keyframes star7 {
    to {
      left: -200rpx;
      top: 800rpx;
    }
  }

  @keyframes star8 {
    to {
      left: -0rpx;
      top: 800rpx;
    }
  }
</style>
