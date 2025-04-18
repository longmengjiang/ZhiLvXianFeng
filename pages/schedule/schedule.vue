<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="head">
      <view class="head-item" :class="active===index?'move':''" v-for="(item,index) in itemsList" :key="item.id"
        @click="change(index)">
        {{item.title}}
      </view>
    </view>
    <view class="container">
      <view class="con-text" v-show="current === 0">
        <view class="text-items" v-for="(item,index) in todayList" :key="item.id">
          <taskitems :imgurl="imgurl1" :task="item.task" :taskTime="item.taskTime" :counttime="item.taskTime+'min'" :Id="item.id"></taskitems>
        </view>
        <view class="add-task" @click="tochoice">
          +
        </view>
      </view>
      <view class="con-text" v-show="current === 1">
        <view class="text-items" v-for="(item,index) in lifeList" :key="item.id">
          <taskitems :imgurl="imgurl2" :task="item.task" :taskTime="item.taskTime" :counttime="item.taskTime+'min'" :Id="item.id"></taskitems>
        </view>
        <view class="add-task" @click="tochoice">
          +
        </view>
      </view>
      <view class="con-text" v-show="current === 2">
        <view class="text-items" v-for="(item,index) in sportsList" :key="item.id">
          <taskitems :imgurl="imgurl3" :task="item.task" :taskTime="item.taskTime" :counttime="item.taskTime+'min'" :Id="item.id"></taskitems>
        </view>
        <view class="add-task" @click="tochoice">
          +
        </view>
      </view>
      <view class="con-text" v-show="current === 3">
        <view class="text-items" v-for="(item,index) in foodList" :key="item.id">
          <taskitems :imgurl="imgurl4" :task="item.task" :taskTime="item.taskTime" :counttime="item.taskTime+'min'" :Id="item.id" ></taskitems>
        </view>
        <view class="add-task" @click="tochoice">
          +
        </view>
      </view>
      <view class="con-text" v-show="current === 4">
        <view class="text-items" v-for="(item,index) in examList" :key="item.id">
          <taskitems :imgurl="imgurl5" :task="item.task" :taskTime="item.taskTime" :counttime="item.taskTime+'min'" :Id="item.id"></taskitems>
        </view>
        <view class="add-task" @click="tochoice">
          +
        </view>
      </view>
      <view class="con-text" v-show="current === 5">
        <view class="text-items" v-for="(item,index) in workList" :key="item.id">
          <taskitems :imgurl="imgurl6" :task="item.task" :taskTime="item.taskTime" :counttime="item.taskTime+'min'" :Id="item.id"></taskitems>
        </view>
        <view class="add-task" @click="tochoice">
          +
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  // 导入自定义任务项组件
  import taskitems from '../../components/taskitems/taskitems.vue'
  export default {
    // 基础数据
    data() {
      return {
        active: 0,
        current: 0,
        imgurl1:'../../static/task.png',
        imgurl2:'../../static/life.png',
        imgurl3:'../../static/sports.png',
        imgurl4:'../../static/food.png',
        imgurl5:'../../static/examination.png',
        imgurl6:'../../static/work.png',
        tasklistAll:'',
        finallyTime: '',
        todayList:[],
        lifeList:[],
        sportsList:[],
        foodList:[],
        examList:[],
        workList:[],
        itemsList: [{
            id: 1,
            title: '写作业'
          },
          {
            id: 2,
            title: '生活'
          },
          {
            id: 3,
            title:'运动'
          },
          {
            id:4,
            title:'做美食'
          },
          {
            id:5,
            title:'考试'
          },
          {
            id:6,
            title:'工作'
          }
        ]
      }
    },
    onLoad() {
      // 获取剩余时间
      this.getRestTime()
      // 获取任务列表
      this.gettasklist()
    },
    methods: {
      // 切换
      change(index) {
        this.active = index,
        this.current = index
      },
      // 去往添加今日任务页面
      tochoice() {
        uni.redirectTo({
          url:'/pages/choice/choice'
        })
      },
      // 获取所有任务
      async gettasklist() {
        await this.request({
          url:`8001/loservice/lotask/findAll/${uni.getStorageSync('userid')}`,
          method:'GET'
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            var LIST = res.data.list
            for(var i = 0;i<LIST.length;i++) {
              if(LIST[i].taskType == '(写作业)') {
                var obj1 = {
                  id:LIST[i].id,
                  task:LIST[i].task,
                  taskTime:LIST[i].taskTime
                }
                this.todayList.push(obj1)
              }
              if(LIST[i].taskType == '(生活)') {
                var obj2 = {
                  id:LIST[i].id,
                  task:LIST[i].task,
                  taskTime:LIST[i].taskTime
                }
                this.lifeList.push(obj2)
              }
              if(LIST[i].taskType == '(运动)') {
                var obj3 = {
                  id:LIST[i].id,
                  task:LIST[i].task,
                  taskTime:LIST[i].taskTime
                }
                this.sportsList.push(obj3)
              }
              if(LIST[i].taskType == '(做美食)') {
                var obj4 = {
                  id:LIST[i].id,
                  task:LIST[i].task,
                  taskTime:LIST[i].taskTime
                }
                this.foodList.push(obj4)
              }
              if(LIST[i].taskType == '(考试)') {
                var obj5 = {
                  id:LIST[i].id,
                  task:LIST[i].task,
                  taskTime:LIST[i].taskTime
                }
                this.examList.push(obj5)
              }
              if(LIST[i].taskType == '(工作)') {
                var obj6 = {
                  id:LIST[i].id,
                  task:LIST[i].task,
                  taskTime:LIST[i].taskTime
                }
                this.workList.push(obj6)
              }
            }
          }
        }).catch(err=> {
          console.log('表单的错误：',err)
        })
      },
      // 获取剩余时间
      getRestTime() {
        setInterval(() => {
          var setTime = new Date("2022/12/22 19:14:05");
          var nowTime = new Date();
          var dec = (setTime - nowTime) / 1000;
          var d = parseInt(dec / 60 / 60 / 24);
          d = d < 10 ? '0' + d : d;
          var h = parseInt(dec / 60 / 60 % 24);
          h = h < 10 ? '0' + h : h;
          var m = parseInt(dec / 60 % 60);
          m = m < 10 ? '0' + m : m;
          var s = parseInt(dec % 60);
          s = s < 10 ? '0' + s : s;
          if(d=='00') {
            this.finallyTime = `${h}时${m}分${s}秒`
          }
          if(d=='00' && h=='00') {
            this.finallyTime = `${m}分${s}秒`
          }
          if(d=='00' && h=='00' && m=='00') {
            this.finallyTime = `${s}秒`
          }
          if(d!='00' && h!='00' && m!='00') {
            this.finallyTime = `${d}天${h}时${m}分${s}秒`
          }
          // this.finallyTime = `${d}天${h}时${m}分${s}秒`
        }, 1000)
      }
    },
    components: {
      taskitems
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
  .move {
    color: #454949 !important;
    font-size: 36rpx;
    font-weight: 700;
    border-bottom: 4rpx solid #ae97cb;
  }

  .content {
    padding: 0 40rpx;
  }

  .head {
    position: relative;
    display: flex;
    justify-content: space-around;
  }
  .head-item {
    color: #ffffff;
  }
  .head .add {
    position: absolute;
    font-size: 60rpx;
    line-height: 30rpx;
    color: #454949;
    right: 0;
    top: 0;
  }

  .container {
    margin-top: 40rpx;
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
