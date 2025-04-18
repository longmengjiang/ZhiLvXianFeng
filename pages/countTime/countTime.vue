<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="container">
      <view class="text-items" v-for="(item,index) in counttimeall" :key="item.id">
        <counttimeItems :imgurl="imgurl1" :task="item.schedule" :taskTime="item.time.slice(0,10)" counttime="59天" :Id="item.id" ></counttimeItems>
      </view>
      <view class="add-task" @click="toaddcounttime">
        +
      </view>
    </view>
  </view>
</template>

<script>
  // 导入自定义倒计时项组件
  import counttimeItems from '../../components/counttimeItems/counttimeItems.vue'
  export default {
    // 基础数据
    data() {
      return {
        counttimeall:'',
        imgurl1:'../../static/date.png'
      }
    },
    onLoad() {
      // 获取倒计时总时间
      this.getCountTimeAll()
    },
    onPullDownRefresh() {
      // 重新发起请求 并关闭下拉窗口
      this.getCountTimeAll(() => uni.stopPullDownRefresh())
    },
    methods: {
      // 获取倒计时总时间
      async getCountTimeAll() {
        await this.request({
          url:`8001/loservice/loschedule/findAll/${uni.getStorageSync('userid')}`,
          method:'GET'
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            this.counttimeall = res.data.list
          }
        }).catch(err=> {
          console.log('表单的错误：',err)
        })
      },
      // 去添加倒计时页面
      toaddcounttime() {
        uni.navigateTo({
          url:'/pages/addcounttime/addcounttime'
        })
      }
    },
    components: {
      counttimeItems
    }
  }
</script>

<style scoped>
  .content {
    padding: 40rpx;
  }
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
