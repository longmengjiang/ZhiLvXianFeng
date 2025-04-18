<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <calendar></calendar>
    <treeitems :week="week" :time="time" :timeList="timeList"></treeitems>
    <view class="add-task" @click="tokinds">
      +
    </view>
  </view>
</template>

<script>
  // 导入自定义日历组件
  import calendar from '../../components/calendar/calendar.vue'
  // 导入自定义时间树项组件
  import treeitems from '../../components/treeitems/treeitems.vue'
  export default {
    // 基础数据
    data() {
      return {
        // 现在的年月日
        time: '',
        // 现在的星期
        week: '',
        timeList: [],
      }
    },
    onLoad() {
      // 获取现在的时间
      this.getnow()
      // 获取星期几
      this.getday()
      // 获取今日的时间树
      this.gettodaytask()
    },
    computed: {

    },
    onPullDownRefresh() {
      // 重新发起请求 并关闭下拉窗口
      this.gettodaytask(() => uni.stopPullDownRefresh())
    },
    methods: {
      // 去往添加时间树页面
      tokinds() {
        uni.navigateTo({
          url: '/pages/kinds/kinds'
        })
      },
      // 获取现在的年月日
      getnow() {
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        this.time = year + '-' + month + '-' + day
      },
      // 获取现在星期几
      getday() {
        var date = new Date()
        var day = date.getDay()
        console.log(day)
        switch (day) {
          case 1:
            this.week = '星期一'
            break;
          case 2:
            this.week = '星期二'
            break;
          case 3:
            this.week = '星期三'
            break;
          case 4:
            this.week = '星期四'
            break;
          case 5:
            this.week = '星期五'
            break;
          case 6:
            this.week = '星期六'
            break;
          case 0:
            this.week = '星期日'
            break;
        }
      },
      // 获取今日任务
      async gettodaytask() {
        await this.request({
          url: `8001/loservice/tree/selectBytime/${uni.getStorageSync('userid')}/${this.time}`,
          method: 'POST',
        }).then(res => {
          if (res.code === 200) {
            var list = res.data.list
            console.log(list[0].create1)
            for(var i = 0;i<list.length;i++) {
              if (list[i].type == '(写作业)') {
                list[i].imgurl = '../../static/task.png'
              }
              if (list[i].type == '(做美食)') {
                list[i].imgurl = '../../static/food.png'
              }
              if (list[i].type == '(生活)') {
                list[i].imgurl = '../../static/life.png'
              }
              if (list[i].type == '(运动)') {
                list[i].imgurl = '../../static/sports.png'
              }
              if (list[i].type == '(考试)') {
                list[i].imgurl = '../../static/examination.png'
              }
              if (list[i].type == '(工作)') {
                list[i].imgurl = '../../static/work.png'
              }
            }
            // 将数组从小到大排序
            for (var i = 0; i < list.length - 1; i++) {
              for (var j = 0; j < list.length - 1 - i; j++) {
                if (list[j].create1 * 10 > list[j + 1].create1 * 10) {
                  var temp = list[j];
                  list[j] = list[j + 1];
                  list[j + 1] = temp;
                }
              }
            }
            this.timeList = list
            for(var i = 0;i<this.timeList.length;i++) {
              if(this.timeList[i].create1.slice(0,2)<12) {
                this.timeList[i].create1 = this.timeList[i].create1.slice(0,2) + ':' + this.timeList[i].create1.slice(2,4) + 'am'
              }else {
                this.timeList[i].create1 = this.timeList[i].create1.slice(0,2) + ':' + this.timeList[i].create1.slice(2,4) + 'pm'
              }
              if(this.timeList[i].finish1.slice(0,2)<12) {
                this.timeList[i].finish1 = this.timeList[i].finish1.slice(0,2) + ':' + this.timeList[i].finish1.slice(2,4) + 'am'
              }else {
                this.timeList[i].finish1 = this.timeList[i].finish1.slice(0,2) + ':' + this.timeList[i].finish1.slice(2,4) + 'pm'
              }
            }
          }
          // 最终整理过的数组
          console.log("---", this.timeList)
        }).catch(err => {
          console.log(err)
        })
      },
    },
    // 使用的自定义组件
    components: {
      calendar,
      treeitems
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
    padding: 0 40rpx;
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
</style>
