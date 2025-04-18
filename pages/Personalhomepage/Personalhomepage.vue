<template>
  <view class="content">
    <view class="bg-img"></view>
    <image :src="background" mode="aspectFill" class="bg"></image>
    <view class="con">
      <view class="con-head">
        <view class="con-head-left">
          <image :src="avatar" mode="" class="avatar"></image>
          <p class="name">{{name}}</p>
        </view>
        <view class="con-head-right">
          <view class="item">
            <p>20k</p>
            <p>关注</p>
          </view>
          <view class="line">|</view>
          <view class="item">
            <p>50</p>
            <p>好友</p>
          </view>
          <view class="line">|</view>
          <view class="item">
            <p>22w</p>
            <p>获赞</p>
          </view>
          <view class="item set" @click="tofriendoption(thisuserid)">
            <image src="../../static/more(2).png" mode=""></image>
          </view>
        </view>
      </view>
      <view class="remarks">
        <p>备注:</p>
        <p>({{remarks}})</p>
      </view>
      <view class="btns">
        <view class="follow">
          关注
        </view>
        <view class="talk">
          去私信
        </view>
      </view>
      <view class="total-box">
        <view class="long-time">
          <p>总自律时长</p>
          <p class="count">15,467min</p>
        </view>
        <view class="long-daka">
          <p>已坚持打卡</p>
          <p class="count">80day</p>
        </view>
      </view>
    </view>
    <view class="active">
       <p class="title">ta的动态</p>
      <peopleactiveitem></peopleactiveitem>
      <peopleactiveitem></peopleactiveitem>
    </view>
  </view>
</template>

<script>
  // 导入用户活动项组件
  import peopleactiveitem from '../../components/peopleactiveitem/peopleactiveitem.vue'
  export default {
    // 基础数据
    data() {
      return {
        thisuserid:'',
        avatar:'',
        name:'',
        remarks:'',
        background:''
      }
    },
    onLoad(option) {
      // 获取从上一个页面传过来的数据
      this.thisuserid = option.userid
      this.remarks = option.remarks
      this.getuserinfo(option.userid)
    },
    methods: {
      // 获取用户的信息
      async getuserinfo(userid) {
        await this.request({
        url:`8002/ucenterservice/ucenter/getUserInfo/${userid}`,
        method:'POST',
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            this.name = res.data.info.nickname
            this.avatar = res.data.info.avatar
            this.background = res.data.info.background
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 去好友设置页面
      tofriendoption(id) {
        uni.navigateTo({
          url:`/pages/friendoption/friendoption?userid=${id}`
        })
      }
    },
    components: {
      peopleactiveitem
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
    background-color: #eaf1fe;
    height: 100%;
  }
.bg {
  width: 100%;
  height: 350rpx;
}
.con {
  padding: 0 40rpx;
}
.avatar {
  width: 90rpx;
  height: 90rpx;
  margin-top: -50rpx;
  border-radius: 50%;
  border: 6rpx solid #ffffff;
}
.con-head {
  display: flex;
  justify-content: space-between;
}
.con-head-left {
  width: 400rpx;
  font-size: 28rpx;
  align-items: center;
  display: flex;
}
.name {
  margin-top: 20rpx;
  font-size: 26rpx;
  font-weight: 600;
  margin-left: 20rpx;
}
.con-head-right {
  font-size: 26rpx;
  width: 300rpx;
  justify-content: space-around;
  display: flex;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.set {
  margin-left: 20rpx;
}
.item image {
  width: 40rpx;
  height: 40rpx;
}
.btns {
  display: flex;
  margin-top: 50rpx;
  font-weight: 600;
  justify-content: space-around;
}
.follow,.talk {
  width: 300rpx;
  height: 60rpx;
  text-align: center;
  line-height: 60rpx;
  font-size: 26rpx;
  box-shadow: 0 6rpx 0 0 #dae5fc;
  background-color: #ffffff;
  border-radius: 20rpx;
}
.total-box {
  margin-top: 40rpx;
  display: flex;
  padding: 20rpx;
  font-size: 28rpx;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20rpx;
  box-shadow: 0 6rpx 0 0 #dae5fc;
}
.long-time,.long-daka {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.count {
  margin-top: 10rpx;
}
.remarks {
  display: flex;
  font-size: 26rpx;
  margin-left: 120rpx;
}
.active {
  padding: 0 60rpx;
  margin-top: 20rpx;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
}
.title {
  margin-top: 40rpx;
  font-weight: 600;
  margin-bottom: 30rpx;
}
</style>
