<template>
  <view class="container" @touchstart="touchS" @touchmove="touchM" @touchend="touchE"
    :style="{left: leftStyle + 'rpx'}">
    <view class="done">
      <image src="../../static/right4.png" mode=""></image>
    </view>
    <view class="text">
      <view class="items-body">
        <view class="con">
          <image :src="img" mode=""></image>
          <view class="text">{{tree}}</view>
        </view>
        <view class="text-time">{{create}}-{{finish}}</view>
      </view>
      <view class="delete-icon" @click="detele(treeid)">
        <image src="../../static/delete.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"treeinfoitems",
    props:['img','tree','create','finish','treeid'],
    data() {
      return {
        leftStyle: 0,
        startX: 0,
        hiddenFlag: true,
        delBtnWidth: 220,
      };
    },
    methods: {
       async detele(id) {
        console.log(id)
        await this.request({
          url:`8001/loservice/tree/deleteTree/${id}`,
          method:'DELETE'
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'删除成功!'
            })
            var timer = setInterval(()=> {
              uni.reLaunch({
                url:'/pages/timetree/timetree'
              })
              clearInterval(timer)
            },2000)
          }
        }).catch(err=> {
          console.log('表单的错误：',err)
        })
      },
      // 开始移动时
      touchS({
        touches
      }) {
        // startX记录开始移动的位置
        if (touches.length === 1) {
          this.startX = touches[0].clientX;
        }
        // hiddenFlag为true则是从右向左，为false则是从左向右
        if (this.leftStyle === 0) {
          this.hiddenFlag = true;
        } else {
          this.hiddenFlag = false;
        }
      },
      touchM({
        touches
      }) {
        if (touches.length === 1) {
          //手指移动时水平方向位置
          const moveX = touches[0].clientX;
          this.moveFunc(moveX);
        }
      },
      touchE({
        touches
      }) {
        const {
          leftStyle
        } = this;
        const {
          delBtnWidth
        } = this;
        // 如果停止滑动的距离大于二分之一则直接弹出删除按钮，不然则left为0
        if (-leftStyle > delBtnWidth / 2) {
          this.leftStyle = -delBtnWidth;
        } else {
          this.leftStyle = 0;
        }
      },
      moveFunc(moveX) {
        // 原始位置向左，leftStyle为小于0；原始位置向右，leftStyle为大于0
        // disX为相对最初位置的左右距离
        // 大于0为向右，小于0为向左
        const disX = moveX - this.startX;
        const delBtnWidth = this.delBtnWidth;
        let offsetNum = 0;
        if (-disX >= delBtnWidth && this.leftStyle === -delBtnWidth) {
          return;
        }
        console.log(disX, this.hiddenFlag);
        // this.hiddenFlag为true则是从左到右，则应该将container向左移动
        // this.hiddenFlag为false则是从右向左，则应该将container向右移动
        if (this.hiddenFlag) {
          // 此时container为最右边，则应该将container向左移动
          // disX大于0为相对原始位置的向右移动，则直接将offsetNum置为0
          // 否则为向左移动，offsetNum为disX相反的值，判断是否超过设置的最大位置
          if (disX == 0 || disX > 0) {
            offsetNum = 0;
          } else {
            offsetNum = disX;
            if (disX <= -delBtnWidth) {
              //控制手指移动距离最大值为删除按钮的宽度
              offsetNum = -delBtnWidth;
            }
          }
        } else {
          // 此时container为最左边，应该向右移动
          // disX小于0为相对原始位置的向左移动，则直接将offsetNum置为-this.delBtnWidth
          // 否则为相对原始位置的向右移动，此时应该将最大位置与向右位置的差值为此刻位置，判断是否为大于0
          if (disX < 0) {
            offsetNum = -this.delBtnWidth;
          } else {
            offsetNum = -this.delBtnWidth + disX;
            if (offsetNum > 0) {
              offsetNum = 0;
            }
          }
        }
        this.leftStyle = offsetNum;
      }
    }
  }
</script>

<style scoped>
.container {
    position: relative;
    padding: 40rpx;
    margin-left: 10rpx;
    border-left: 6rpx solid #9ba2b4;
  }

  .items {
    position: relative;
    padding: 40rpx;
    border-left: 6rpx solid #9ba2b4;
  }

  .items-body {
    padding: 20rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
  }

  .task {
    margin-left: 40rpx;
    font-size: 32rpx;
    font-weight: 600;
    color: #64646a;
  }

  .done {
    position: absolute;
    left: -22rpx;
    top: -10rpx;
    width: 20rpx;
    height: 20rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #8356ca;
    border: 8rpx solid #8356ca;
  }

  .done image {
    width: 30rpx;
    height: 30rpx;
  }

  .con {
    display: flex;
  }

  .con image {
    width: 50rpx;
    height: 50rpx;
  }

  .text {
    margin-left: 20rpx;
    width: 590rpx;
    border-radius: 20rpx;
    background-color: #FFFFFF;
    font-weight: 600;
    color: #64646a;
  }

  .text-time {
    display: flex;
    margin-top: 20rpx;
    font-weight: 600;
    color: #64646a;
    font-size: 26rpx;
    justify-content: flex-end;
  }
  .delete-icon {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -197rpx;
    width: 130rpx;
    height: 65rpx;
    border-radius: 31rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background: #ae97cb;
  }
  .delete-icon image {
    width: 40rpx;
    height: 40rpx;
  }
</style>