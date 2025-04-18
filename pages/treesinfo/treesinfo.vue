<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <calendarline></calendarline>
    <view class="proverb">今天也是元气满满的一天</view>
    <tree :timeList="List"></tree>
    <view class="add-task" @click="tokinds">
      +
    </view>
  </view>
</template>

<script>
  // 导入自定义行状日历组件
  import calendarline from '../../components/calendarline/calendarline.vue'
  // 导入自定义时间树组
  import tree from '../../components/tree/tree.vue'
  export default {
    data() {
      return {
        List:''
      }
    },
    onLoad(option) {
      // 获取从上一个页面传过来的数据
      console.log(option)
      this.List = JSON.parse(option.timeList)
      console.log(this.List)
    },
    methods: {
      // 去往添加时间树页面
      tokinds() {
        uni.navigateTo({
          url:'/pages/kinds/kinds'
        })
      }
    },
    // 使用的自定义组件
    components: {
      calendarline,tree
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
  .proverb {
    padding: 40rpx;
    color: #367172;
    font-size: 32rpx;
    font-weight: 600;
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
