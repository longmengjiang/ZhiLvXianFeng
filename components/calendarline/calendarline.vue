<template>
  <view class="calendar-box">
    <view class="calendar">
      <!-- 月份 -->
      <view class="month">
        <p class="number">{{nowmonthnumber}}月</p>
        <p class="mon">{{nowmonth}}.</p>
      </view>
      <!-- 星期 -->
      <view class="days" v-for="(item,index) in time" :key="item.dd" :class="item.week===week? 'col':''">
        <p class="day">{{item.week}}</p>
        <p class="number">{{item.dd}}</p>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "calendarline",
    data() {
      return {
        nowmonth: '',
        nowmonthnumber: '',
        time: [],
        week:''
      };
    },
    mounted() {
      this.getday()
      this.getweek()
    },
    methods: {
      getday() {
        var date = new Date()
        var datestr = date.toString()
        console.log(datestr)
        // 获取现在多少月
        this.nowmonth = datestr.slice(3, 7).toUpperCase()
        // 月份的数字
        var month = date.getMonth() + 1
        month = month < 10 ? '0' + month : month
        this.nowmonthnumber = month
        this.week = datestr.slice(0,3)
        console.log(this.week)
      },
      getweek() {
        var now = new Date();
        var nowTime = now.getTime();
        var day = now.getDay() || 7;
        var oneDayLong = 24 * 60 * 60 * 1000;
        var MondayTime = nowTime - (day - 1) * oneDayLong;
        var SundayTime = nowTime + (7 - day) * oneDayLong;
        var monday = new Date(MondayTime);
        for (let i = 0; i < 7; i++) {
          var tmpDate = new Date(MondayTime);
          tmpDate = tmpDate.setDate(tmpDate.getDate() + i);
          tmpDate = new Date(tmpDate);
          console.log(tmpDate);
          var mondayDateStr = (tmpDate.getMonth() + 1) + '月';
          mondayDateStr = tmpDate.getDate();
          if(mondayDateStr<10) {
            mondayDateStr = '0'+mondayDateStr
          }else {
            mondayDateStr = mondayDateStr
          }
          let days = tmpDate.getDay();
          switch (days) {
            case 1:
              days = 'Mon';
              break;
            case 2:
              days = 'Tue';
              break;
            case 3:
              days = 'Wed';
              break;
            case 4:
              days = 'Thu';
              break;
            case 5:
              days = 'Fri';
              break;
            case 6:
              days = 'Sat';
              break;
            case 0:
              days = 'Sun';
              break;
          }
          // 周一到周日几月几日星期几
          console.log('`````',mondayDateStr);
          console.log('day',days)
          var obj = {
            dd:mondayDateStr,
            week:days
          }
          this.time.push(obj)
        }
      }
  }
  }
</script>

<style scoped>
  .calendar-box {
    width: 100%;
    margin-top: 20rpx;
    background-color: rgba(168, 178, 196, 0.9);
  }

  .calendar {
    margin-left: 40rpx;
    margin-right: 40rpx;
    font-size: 28rpx;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
  }

  .month,
  .days {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100rpx;
  }

  .month {
    border-radius: 10rpx;
  }

  .month .number {
    color: #606475;
    font-weight: 700;
    font-size: 32rpx;
  }

  .month .mon {
    color: #FFFFFF;
  }

  .days {
    width: 60rpx;
    color: #FFFFFF;
    font-size: 28rpx;
    border-radius: 10rpx;
  }

  .days .number {
    font-size: 26rpx;
  }

  .col {
    background-color: #eef0f3;
    color: #6c33c0;
    font-weight: 600;
  }
</style>
