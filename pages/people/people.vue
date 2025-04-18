<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="people-info">
      <image src="../../static/bg.png" mode="" class="avatar-img"></image>
      <view class="info-box">
        <view class="name">
          <p>昵称:</p>
          <p class="info">{{name}}</p>
        </view>
        <view class="ID">
          <p>Timer账号:</p>
          <p class="info">{{id}}</p>
        </view>
        <view class="sex">
          <p>性别:</p>
          <p class="info">{{sex}}</p>
        </view>
        <view class="IP">
          <p>IP地址:</p>
          <p class="info">{{ip}}</p>
        </view>
        <view class="sign">
          <p>个性签名:</p>
          <p class="info">{{sign}}</p>
        </view>
      </view>
    </view>
    <view class="btn">
      <view class="follow" @click="changefollow">
        <p v-show="isfollow == 0">关注</p>
        <p v-show="isfollow == 1">已关注</p>
      </view>
      <view class="add" @click="addfriend">
        <p v-show="isadd == 0">添加好友</p>
        <p v-show="isadd == 1">已添加</p>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        remark:'',
        isfollow:0,
        isadd:0,
        thisuserid:'',
        name:'',
        id:'',
        sex:'',
        ip:'',
        avatar:''
      }
    },
    onLoad(option) {
      // 从上一页面传过来的数据
      this.thisuserid = option.userid
      this.getuserinfo(option.userid)
    },
    methods: {
      // 切换是否关注的状态
      changefollow() {
        this.isfollow = !this.isfollow
      },
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
            this.ip = res.data.info.address
            this.id = res.data.info.id
            this.sex = res.data.info.sex
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 添加朋友
      async addfriend() {
        await this.request({
        url:`8002/ucenterservice/friend/addFriend/${uni.getStorageSync('userid')}/${this.thisuserid}/${this.name}`,
        method:'POST',
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            this.isadd = 1
            uni.showToast({
              title:'添加成功!'
            })
          }
        }).catch(err => {
          console.log(err)
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
  .people {
    height: 500rpx
  }
  .people-info {
    margin: 0 auto;
    color: #ffffff;
    margin-top: 40rpx;
    width: 630rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20rpx;
    background-color: #8397e2;
  }
  .avatar-img {
    width: 80rpx;
    height: 80rpx;
    border: 4rpx solid #ffffff;
    margin-top: 20rpx;
    border-radius: 50%;
  }
  .name,.ID,.IP,.sex,.sign {
    display: flex;
    margin: 20rpx 0;
  }
  .info {
    margin-left: 10rpx;
    width: 370rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .right {
    width: 40rpx;
    height: 40rpx;
  }
  .btn {
    margin: 40rpx auto;
    display: flex;
    width: 500rpx;
    justify-content: space-around;
  }
  .follow,.add {
    /* margin: 20rpx auto; */
    background-color: #ffffff;
    border-radius: 20rpx;
    color: #8397e2;
    text-align: center;
    font-size: 28rpx;
    font-weight: 600;
    padding: 20rpx;
    width: 200rpx;
  }
</style>
