<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="progress-box">
      <view class="pick-head">
        <view class="pick-begin">
          开始
        </view>
        <view class="total">
          {{total}}
        </view>
        <view class="pick-end">
          结束
        </view>
      </view>
     <view class="progress">
        <view class="pick-box">
          <view class="pick-bg"></view>
          <picker-view  @change="bindChange" class="picker-view">
            <picker-view-column>
              <view class="picker-item" v-for="(item,index) in hours" :key="item.id">{{item.text}}时
              </view>
            </picker-view-column>
            <picker-view-column>
              <view class="picker-item" v-for="(item,index) in minutes" :key="item.id">{{item.text}}分</view>
            </picker-view-column>
          </picker-view>
        </view>
        <view class="pick-box">
          <view class="pick-bg"></view>
          <picker-view  @change="bindChange2" class="picker-view">
            <picker-view-column>
              <view class="picker-item" v-for="(item,index) in hours" :key="item.id">{{item.text}}时
              </view>
            </picker-view-column>
            <picker-view-column>
              <view class="picker-item" v-for="(item,index) in minutes" :key="item.id">{{item.text}}分</view>
            </picker-view-column>
          </picker-view>
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
        <p class="title">任务</p>
        <image src="../../static/pen.png" mode=""></image>
        <p class="kindname">{{kindname}}</p>
      </view>
      <input type="text" placeholder="任务名" v-model="text">
    </view>
    <view class="save" @click="addChoice">保存</view>
  </view>
</template>

<script>
  // 导入自定义行状日历组件
  import cuProgress from '../../components/cuProgress/cuProgress.vue'
  export default {
    // 基础数据
    data() {
      return {
        // value: 0,
        text: '',
        userId: '',
        kindname: '',
        year:'',
        total:'0h0min',
        beginhour:'00',
        beginminute:'00',
        endhour:'00',
        endminute:'00',
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
        ],
        hours: [{
            id: '001',
            text: '00'
          },
          {
            id: '002',
            text: '01'
          },
          {
            id:'003',
            text:'02'
          },
          {
            id:'004',
            text:'03'
          },
          {
            id:'005',
            text:'04'
          },
          {
            id:'006',
            text:'05'
          },
          {
            id:'007',
            text:'06'
          },
          {
            id:'008',
            text:'07'
          },
          {
            id:'009',
            text:'08'
          },
          {
            id:'010',
            text:'09'
          },
          {
            id:'011',
            text:'10'
          },
          {
            id:'012',
            text:'11'
          },
          {
            id:'013',
            text:'12'
          },
          {
            id:'014',
            text:'13'
          },
          {
            id:'015',
            text:'14'
          },
          {
            id:'016',
            text:'15'
          },
          {
            id:'017',
            text:'16'
          },
          {
            id:'018',
            text:'17'
          },
          {
            id:'019',
            text:'18'
          },
          {
            id:'020',
            text:'19'
          },
          {
            id:'021',
            text:'20'
          },
          {
            id:'022',
            text:'21'
          },
          {
            id:'023',
            text:'22'
          },
          {
            id:'024',
            text:'23'
          }
        ],
        minutes: [{
            id: '001',
            text: '00'
          },
          {
            id: '002',
            text: '01'
          },
          {
            id:'003',
            text:'02'
          },
          {
            id:'004',
            text:'03'
          },
          {
            id:'005',
            text:'04'
          },
          {
            id:'006',
            text:'05'
          },
          {
            id:'007',
            text:'06'
          },
          {
            id:'008',
            text:'07'
          },
          {
            id:'009',
            text:'08'
          },
          {
            id:'010',
            text:'9'
          },
          {
            id:'011',
            text:'10'
          },
          {
            id:'012',
            text:'11'
          },
          {
            id:'013',
            text:'12'
          },
          {
            id:'014',
            text:'13'
          },
          {
            id:'015',
            text:'14'
          },
          {
            id:'016',
            text:'15'
          },
          {
            id:'017',
            text:'16'
          },
          {
            id:'018',
            text:'17'
          },
          {
            id:'019',
            text:'18'
          },
          {
            id:'020',
            text:'19'
          },
          {
            id:'021',
            text:'20'
          },
          {
            id:'022',
            text:'21'
          },
          {
            id:'023',
            text:'22'
          },
          {
            id:'024',
            text:'23'
          },
          {
            id:'025',
            text:'24'
          },
          {
            id:'026',
            text:'25'
          },
          {
            id:'027',
            text:'26'
          },
          {
            id:'028',
            text:'27'
          },
          {
            id:'029',
            text:'28'
          },
          {
            id:'030',
            text:'29'
          },
          {
            id:'031',
            text:'30'
          },
          {
            id:'032',
            text:'31'
          },
          {
            id:'033',
            text:'32'
          },
          {
            id:'034',
            text:'33'
          },
          {
            id:'035',
            text:'34'
          },
          {
            id:'036',
            text:'35'
          },
          {
            id:'037',
            text:'36'
          },
          {
            id:'038',
            text:'37'
          },
          {
            id:'039',
            text:'38'
          },
          {
            id:'040',
            text:'39'
          },
          {
            id:'041',
            text:'40'
          },
          {
            id:'042',
            text:'41'
          },
          {
            id:'043',
            text:'42'
          },
          {
            id:'044',
            text:'43'
          },
          {
            id:'045',
            text:'44'
          },
          {
            id:'046',
            text:'45'
          },
          {
            id:'047',
            text:'46'
          },
          {
            id:'048',
            text:'47'
          },
          {
            id:'049',
            text:'48'
          },
          {
            id:'050',
            text:'49'
          },
          {
            id:'051',
            text:'50'
          },
          {
            id:'052',
            text:'51'
          },
          {
            id:'053',
            text:'52'
          },
          {
            id:'054',
            text:'53'
          },
          {
            id:'055',
            text:'54'
          },
          {
            id:'056',
            text:'55'
          },
          {
            id:'057',
            text:'56'
          },
          {
            id:'058',
            text:'57'
          },
          {
            id:'059',
            text:'58'
          },
          {
            id:'060',
            text:'59'
          },
        ]
      }
    },
    computed: {
      // 开始时间
      begin() {
        return this.beginhour + this.beginminute 
      }, 
      // 结束时间
      end() {
        return this.endhour + this.endminute
      }
    },
    onLoad(option) {
      // 获取从上一个页面传过来的数据
      this.userId = option.userId
      // console.log(this.userId)
    },
    methods: {
      endSlider(e) {
        console.log('iiii', e)
      },
      // 类型
      kind(text) {
        this.kindname = '(' + text + ')'
      },
      // 总分钟
      totaltime() {
        var h = (this.endhour - this.beginhour) * 60
        var m = this.endminute - this.beginminute
        console.log(m)
        // 总共多少分钟
        var totalminute = h + m
        // 总分钟换算成小时和分钟
        var hh = Math.floor(totalminute/60)
        console.log('hh',hh)
        var mm = totalminute - hh* 60
        console.log(mm)
        if(this.beginhour > this.endhour || hh<0 || mm<0) {
          this.total = '注意选择'
        }else {
          this.total = hh + 'h'+ mm +'min'
        }
      },
      // 选择时间
      bindChange(e) {
        const val = e.detail.value
        // 第一组
        this.beginhour = this.hours[val[0]].text
        console.log('beginh',this.beginhour)
        // 第二组
        this.beginminute = this.minutes[val[1]].text
        console.log('beginm',this.beginminute)
        this.totaltime()
      },
      bindChange2(e) {
        const val = e.detail.value
        // 第一组
        this.endhour = this.hours[val[0]].text
        console.log('endh',this.endhour)
        // 第二组
        this.endminute = this.minutes[val[1]].text
        console.log('endm',this.endminute)
        this.totaltime()
      },
      // 添加
      async addChoice() {
        await this.request({
          url: '8001/loservice/tree/addTress',
          method: 'POST',
          data: {
            "userId": uni.getStorageSync('userid'),
            "tree": this.text,
            "create1": this.begin,
            "finish1":this.end,
            "type": this.kindname
          }
        }).then(res => {
          if (res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'添加成功!'
            })
            var timer = setInterval(()=> {
              uni.reLaunch({
                url:'/pages/timetree/timetree'
              })
              clearInterval(timer)
            },2000)
          }
        }).catch(err => {
          uni.showToast({
            title: '添加失败！'
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
    padding: 40rpx 40rpx 20rpx 40rpx;
    box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
    background-color: #ffffff;
  }

  .progress-box .progress {
    display: flex;
    justify-content: space-between;
  }

  .progress-box .progress .pick-box {
    position: relative;
    margin-bottom: 30rpx;
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
    width: 280rpx;
    height:68rpx;
    border-radius: 40rpx;
    background-color: #cedbf5;
  }
  .picker-view {
    width: 200rpx;
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
  .total {
    color: #ae97cb;
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

  .save {
    box-shadow: 0 5rpx 10rpx 0 #cbd1dc;
    width: 200rpx;
    height: 70rpx;
    margin: 60rpx auto;
    color: #ffffff;
    text-align: center;
    line-height: 70rpx;
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
