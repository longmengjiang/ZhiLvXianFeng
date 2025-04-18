<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="head">
      <view class="task">
        <view class="task-head">
          <p class="title">倒计时</p>
          <image src="../../static/pen.png" mode=""></image>
        </view>
        <input type="text" placeholder="任务名" v-model="text">
      </view>
    </view>
    <view class="pick">
      <view class="pick-box">
        <view class="pick-bg"></view>
        <picker-view  @change="bindChange" class="picker-view">
          <picker-view-column>
            <view class="picker-item" v-for="(item,index) in years" :key="item.id">{{item.text}}年</view>
          </picker-view-column>
          <picker-view-column>
            <view class="picker-item" v-for="(item,index) in months" :key="item.id">{{item.text}}月</view>
          </picker-view-column>
          <picker-view-column>
            <view class="picker-item" v-for="(item,index) in dates" :key="item.id">{{item.text}}日</view>
          </picker-view-column>
        </picker-view>
      </view>
      <view class="daycount">
        {{totalday}}
      </view>
    </view>
    <view class="save" @click="save">
      保存
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        year: '2023',
        month: '01',
        date: '01',
        totalday:'0day',
        years: [{
            id: '001',
            text: '2023'
          },
          {
            id: '002',
            text: '2024'
          },
          {
            id: '003',
            text: '2025'
          }
        ],
        months: [{
            id: '001',
            text: '01'
          },
          {
            id: '002',
            text: '02'
          },
          {
            id: '003',
            text: '03'
          },
          {
            id: '004',
            text: '04'
          },
          {
            id: '005',
            text: '05'
          },
          {
            id: '006',
            text: '06'
          },
          {
            id: '007',
            text: '07'
          },
          {
            id: '008',
            text: '08'
          },
          {
            id: '009',
            text: '09'
          },
          {
            id: '010',
            text: '10'
          },
          {
            id: '011',
            text: '11'
          },
          {
            id: '012',
            text: '12'
          }
        ],
        dates:[],
        text:'',
        time:''
      }
    },
    onLoad() {
      // 获取年份
      this.getyear()
      // 获取当前的月有多少天
      this.getDaysInYearMonth()
      // 获取现在的时间
      this.nowtime()
      // 获取当前的月有多少天
      this.getDaysInYearMonth(this.year,this.month)
    },
    methods: {
      // 第一组
      bindChange(e) {
        const val = e.detail.value
        console.log('1231223123123',val[0])
        var year = 0
        var month = 0
        var date = 0
        console.log(val) 
        // 只是操作了年
        if(val.length==1) {
          console.log('1111111')
          month = this.month
          date = this.date
          year = this.year = this.years[val[0]].text
        } 
        // 只操作了月
        else if(val[0] == null && val.length == 2) {
          console.log('2222222')
          year = this.year
          date = this.date
          month = this.month = this.months[val[1]].text
        } 
        // 只操作了日
        else if(val[0] ==null && val[1] == null && val.length == 3) {
          year = this.year
          month = this.month
          date = this.date =this.dates[val[2]].text
        } 
        // 只操作了月和日
        else if(val[0] == null && val.length == 3) {
          year = this.year
          month = this.month = this.months[val[1]].text
          date = this.date =this.dates[val[2]].text
        }
        // 只操作了年和日
        else if(val[1] == null && val.length == 3) {
          year = this.year = this.years[val[0]].text
          month = this.month
          date = this.date =this.dates[val[2]].text
        }
        // 操作了年,月,日 
        else if(val[0] != null && val[1] !=null && val[2] !=null && val.length == 3) {
          year = this.year = this.years[val[0]].text
          month = this.month = this.months[val[1]].text
          date = this.date =this.dates[val[2]].text
        } else {
          year = this.year = this.years[val[0]].text
          month = this.month = this.months[val[1]].text
          date = this.date
        }
        // // 第一组
        // this.year = this.years[val[0]].text
        // // 第二组
        // this.month = this.months[val[1]].text
        // // 第三组
        // this.date = this.dates[val[2]].text
        this.time = this.year+ '-' + this.month + '-' + this.date + ' 00:00:00'
        // 获取该年该月的天数
        this.getDaysInYearMonth(this.year,this.month)
        var now = this.nowtime()
        var end = this.year+'-'+this.month+'-'+this.date
        var gettotalday = this.getDaysBetween(now,end)
        if(gettotalday<0) {
          this.totalday = '时间可不会倒退'
        }else{
          this.totalday = gettotalday+'day'
        }
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
      },
      // 小于10补0
      addZero(s) {
        return s<10?('0' +s ):s
      },
      //计算两个日期天数差的函数，通用
      getDaysBetween(dateString1,dateString2){
          var  startDate = Date.parse(dateString1);
          var  endDate = Date.parse(dateString2);
          var days=(endDate - startDate)/(1*24*60*60*1000);
          days=Math.ceil(days)
          return  days;
      },
      getyear() {
        var date = new Date()
        var year = date.getFullYear()
        this.year = year
        console.log(year)
        this.years[0].text = year
        this.years[1].text = year + 1
        this.years[2].text = year + 2
      },
      // 获取该年该月的天数
      getDaysInYearMonth(year, month) {
        // 每一次进行更新前,先清空日期数组
        this.dates = [],
        month = parseInt(month, 10);
        // javascript中Date()对象的getDate()是获取时间对象对应于一个月中的某一天（1~31），当设置为0的时候，getDate()返回的就是最后一天，刚好对应我们需要的值。
        var date = new Date(year, month, 0);
        console.log(date.getDate())
        for(var i =1;i<=date.getDate();i++) {
            console.log(i)
            var obj = {
              id:'0'+i,
              text:i<10? '0'+i : i
            }
            this.dates.push(obj)
          }
      },
      // 保存添加任务
      async save() {
        await this.request({
        url:'8001/loservice/loschedule/addSchedule',
        method:'POST',
        data: {
          "schedule":this.text,
          "time":this.time,
          "userId":uni.getStorageSync('userid')
        }
        }).then(res=> {
          if(res.code === 200) {
            uni.showToast({
              title:'添加成功!'
            })
            var timer = setInterval(()=> {
              uni.reLaunch({
                url:'/pages/countTime/countTime',
                success() {
                  clearInterval(timer)
                }
              })
            },2000)
            console.log(res.data)
          }
        })
      },
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

  .content {
    padding: 40rpx;
  }

  .task {
    margin-top: 40rpx;
    padding: 40rpx;
    border-radius: 20rpx;
    background-color: #ffffff;
  }

  .task .task-head {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
  }

  .task .task-head image {
    width: 30rpx;
    margin-left: 10rpx;
    height: 30rpx;
  }

  .task input {
    border-bottom: 2rpx solid #777777;
  }
  .pick {
    margin-top: 40rpx;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 20rpx;
    margin-bottom: 100rpx;
  }
  .pick-box {
    margin-top: 40rpx;
    position: relative;
    color: #454949;
    font-weight: 600;
  }

  .picker-item {
    text-align: center;
    line-height: 68rpx;
    color: #9a7ebc;
  }

  .pick-bg {
    position: absolute;
    left: 0;
    top: 67rpx;
    width: 460rpx;
    height: 68rpx;
    border-radius: 40rpx;
    background-color: #cedbf5;
  }

  .picker-view {
    width: 400rpx;
    height: 200rpx;
    padding: 0 40rpx;
  }

  .pick-head {
    display: flex;
    justify-content: space-around;
    width: 420rpx;
    margin: 0 auto;
    font-weight: 600;
  }
  .daycount {
    margin-top: 40rpx;
    font-size: 34rpx;
    color: #9a7ebc;
    font-weight: 600;
    margin-bottom: 40rpx;
  }
  .save {
    width: 250rpx;
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 0 auto;
    color: #ffffff;
    background-color: #9a7ebc;
    border-radius: 20rpx;
  }
</style>
