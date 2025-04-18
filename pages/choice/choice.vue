<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="progress-box">
      <view class="progress">
        <view class="progress-head">
          <p>定时</p>
          <p class="time">{{value}}分钟</p>
          <view class="page">
            <view style="width: 300px; margin: 60px 20px;">
              <cu-progress v-model="value" min="0" max="100" height="32" :use-slot="true" @input="endSlider"
                active-color="#ae97cb" inactive-color="#cedbf5">
                <view style="background: #e9e6f9;border-radius: 100%;width: 15px;height: 15px;">
                </view>
          			 </cu-progress>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="kinds-box">
      <p class="title">任务类型</p>
      <view class="kinds-items">
        <view class="items" v-for="(item,index) in itemsList" :key="item.id" @click="kind(item.text)">
          <image :src="item.imgurl" mode=""></image>
          <p>{{item.text}}</p>
        </view>
      </view>
    </view>
    <view class="task">
      <view class="task-head">
        <p class="title">自律任务</p>
        <image src="../../static/pen.png" mode=""></image>
        <p class="kindname">{{kindname}}</p>
      </view>
      <input type="text" placeholder="任务名" v-model="text">
    </view>
    <view class="btn-box">
      <view class="save" @click="addChoice">保存</view>
      <view class="begin">开始</view>
    </view>
  </view>
</template>

<script>
  // 导入自定义进度条组件
  import cuProgress from '../../components/cuProgress/cuProgress.vue'
  export default {
    // 基础数据
    data() {
      return {
        value: 0,
        text: '',
        userId: '',
        kindname: '',
        itemsList: [{
            id: '001',
            imgurl: '../../static/task.png',
            text: '写作业'
          },
          {
            id: '002',
            imgurl: '../../static/life.png',
            text: '生活'
          },
          {
            id: '003',
            imgurl: '../../static/sports.png',
            text: '运动'
          },
          {
            id: '004',
            imgurl: '../../static/food.png',
            text: '做美食'
          },
          {
            id: '005',
            imgurl: '../../static/examination.png',
            text: '考试'
          },
          {
            id: '006',
            imgurl: '../../static/work.png',
            text: '工作'
          }
        ]
      }
    },
    onLoad(option) {
      // 获取上个页面传过来的数据
      this.userId = option.userId
      // console.log(this.userId)
    },
    methods: {
      endSlider(e) {
        console.log('iiii', e)
      },
      number(value) {
        // console.log(value)
        this.value = value.target.__args__[0]
      },
      // 类型
      kind(text) {
        this.kindname = '(' + text + ')'
      },
      // 添加进入任务
      async addChoice() {
        await this.request({
          url: '8001/loservice/lotask/addTask',
          method: 'POST',
          data: {
            "userId": uni.getStorageSync('userid'),
            "task": this.text,
            "taskTime": this.value,
            "taskType": this.kindname
          }
        }).then(res => {
          if (res.code === 200) {
            uni.navigateTo({
              url:'/pages/schedule/schedule'
            })
            uni.showToast({
              title: '添加成功！'
            })
          }
        }).catch(err => {
          uni.showToast({
            title:'添加失败！'
          })
        })
      }
    },
    components: {
      cuProgress
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

  .progress-box {
    border-radius: 20rpx;
    width: 590rpx;
    padding: 40rpx;
    box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
    background-color: #ffffff;
  }

  .progress-box .progress {
  display: flex;
  flex-direction: column;
}
.progress-box .progress .progress-head {
  margin-bottom: 30rpx;
  color: #454949;
  font-weight: 600;
}
.progress-box .progress .progress-head .time {
  color: #ae97cb;
  font-size: 34rpx;
  font-weight: 700;
}
  .kinds-box {
    display: flex;
    border-radius: 20rpx;
    flex-direction: column;
    margin-top: 40rpx;
    padding: 40rpx;
    background-color: #ffffff;
    box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
  }

  .kinds-items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40rpx;
    justify-content: space-between;
  }

  .kinds-items .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24rpx;
  }

  .kinds-items .items image {
    width: 60rpx;
    height: 60rpx;
    margin-bottom: 10rpx;
  }

  .task {
    margin-top: 40rpx;
    padding: 40rpx;
    border-radius: 20rpx;
    background-color: #ffffff;
    box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
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

  .btn-box {
    width: 400rpx;
    margin: 0 auto;
    margin-top: 80rpx;
    display: flex;
    justify-content: space-between;
    height: 80rpx;
  }

  .btn-box .save,
  .btn-box .begin {
    box-shadow: 0 5rpx 10rpx 0 #cbd1dc;
    width: 135rpx;
    height: 80rpx;
    color: #ffffff;
    text-align: center;
    line-height: 80rpx;
    border-radius: 20rpx;
    background-color: #ae97cb;
  }

  .kindname {
    color: #ae97cb;
    font-weight: 700;
    font-size: 34rpx;
  }

  .page {
    margin-top: -100rpx;
    height: 150rpx;
    display: flex;
    flex-direction: row;
  }

  .zoom {
    width: 50vw;
    height: 18px;
    margin-left: 95rpx;
    background-color: #007AFF;
    border-radius: 64rpx;
  }

  .ball {
    width: 15px;
    height: 15px;
    margin-top: 2px;
    border-radius: 100%;
    background-color: #00FFFF;
  }
</style>
