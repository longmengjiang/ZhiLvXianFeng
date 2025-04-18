<template>
  <view class="con">
    <view class="trees" >
      <view class="trees-head">
        <view class="date">
          <view class="border"></view>
          <p>{{week}}，{{time}}</p>
        </view>
        <image src="../../static/down1.png" mode="" @click="rot" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}"></image>
      </view>
      <view class="trees-body" :style="{'height':height+'rpx'}" @click="totreesinfo(timeList)">
        <view class="trees-task-box">
          <view class="trees-task" v-for="(item,index) in timeList" :key="item.id">
            <p class="task">{{item.tree}}</p>
            <p class="task-time">{{item.create1}}</p>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"treeitems",
    props:['week','time','timeList'],
    data() {
      return {
        height:120,
        flag:0,
        rotate:0
      };
    },
    methods: {
      rot() {
        if(this.flag) {
          this.height = 120
          this.rotate = 0
        }else {
          // 根据有多少个任务,展开多高,计算
          // 每一个任务40rpx
          this.height = 40 * this.timeList.length + 20
          this.rotate = 180
        }
        this.flag = !this.flag
      },
      totreesinfo(timeList) {
        // 因为URL传递的只能是字符串，传递JSON、ARRAY不是字符串时候需要先转成字符串，然后接收后再换回来。
        var list = JSON.stringify(timeList)
        uni.navigateTo({
          url:'/pages/treesinfo/treesinfo?timeList=' + list
        })
      }
    }
  }
</script>

<style scoped>
.trees {
    width: 670rpx;
    margin-bottom: 40rpx;
  }
  .trees-body {
    display: flex;
    height: 120rpx;
    transition: all 0.5s;
    border-bottom: 2rpx solid #e9edf9;
    overflow: hidden;
    padding-bottom: 20rpx;
    justify-content: space-between;
  }
  .trees-head {
    display: flex;
    align-items: center;
    color: #717172;
    font-weight: 600;
    justify-content: space-between;
  }
  .trees-head image {
    width: 50rpx;
    height: 50rpx;
    transition: all 0.5s; 
  }
  .trees-task {
    display: flex;
    font-size: 26rpx;
    margin-bottom: 15rpx;
    color: #717172;
    font-weight: 600;
    justify-content: space-between;
  }
  .border {
    width: 30rpx;
    height: 40rpx;
    margin-right: 18rpx;
    border-radius: 10rpx;
    background-color: #6c33c0;
  }
  .date {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .trees-task-box {
    width: 620rpx;
  }
</style>