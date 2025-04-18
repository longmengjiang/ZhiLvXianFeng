<template>
  <view class="content">
    <view class="head">
      <image :src="backgroundimg" mode="aspectFill"></image>
      <view class="change" @click="chooseImg">点击更换背景</view>
      <image src="../../static/share2.png" mode="" class="share"></image>
    </view>
    <view class="con">
      <view class="info">
        <view class="info-left">
          <image :src="avatar" mode="" class="avatar"></image>
          <p class="name">{{nickname}}</p>
        </view>
        <view class="info-right">
          <view class="follow">
            <p class="number">20k</p>
            <p>关注</p>
          </view>
          <view class="line">|</view>
          <view class="friends">
            <p class="number">{{friendnumber}}</p>
            <p>好友</p>
          </view>
          <view class="line">|</view>
          <view class="fabulous">
            <p class="number">22w</p>
            <p>获赞</p>
          </view>
          <view class="erweima" @click="scan">
            <image src="../../static/Scan_code.png" mode=""></image>
          </view>
        </view>
      </view>
      <view class="person-info">
        <view class="person-info-left">
          <p class="sex">{{sex}}</p>
          <view class="line">|</view>
          <p class="ip">IP属地广东</p>
        </view>
        <view class="person-info-right" @click="toPersonal">
          <p>修改资料 ></p>
        </view>
      </view>
      <view class="join">
        @{{nickname}} {{creatTime}} 加入
      </view>
      <view class="panel">
        <view class="totaltime">
          <p>总自律时长</p>
          <p class="time"><span>{{keeptime}}</span>min</p>
        </view>
        <view class="totalday">
          <p>已坚持打卡</p>
          <p class="day"><span>{{continuity}}</span>day</p>
        </view>
      </view>
    </view>
    <view class="bot-con">
      <view class="bot-head">
        <view class="bot-head-left">
          <p>我的动态</p>
        </view>
      </view>
      <view class="bot-body">
        <image src="../../static/none.png" mode=""></image>
        <p>还没有发过动态...</p>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        avatar:'',
        backgroundimg:'',
        sex:'',
        nickname:'',
        creatTime:'',
        continuity:'',
        userid:'',
        coderesult:'',
        keeptime:'',
        friendnumber:0
      }
    },
    onLoad() {
      // 获取坚持的天数
      this.getkeeptime()
      // 获取好友个数
      this.getfriendnumber()
      // 获取本地存储的数据
      this.sex = uni.getStorageSync('sex')
      this.avatar = uni.getStorageSync('avatar')
      this.nickname = uni.getStorageSync('nickname')
      this.backgroundimg = uni.getStorageSync('background')
      this.continuity = uni.getStorageSync('continuity')
      this.userid = uni.getStorageSync('userid')
      this.creatTime = uni.getStorageSync('creatTime').slice(0,10)
    },
    methods: {
      // 选择图片
      chooseImg() {
        uni.chooseImage({
        	success: (chooseImageRes) => {
        		const tempFilePaths = chooseImageRes.tempFilePaths;
            this.backgroundimg = tempFilePaths
        		uni.uploadFile({
        			url: 'http://47.92.174.79:8003/loservice/oss/upload', 
        			filePath: tempFilePaths[0],
        			name: 'file',
        			formData: {
        				'user': 'lanan'
        			},
        			success: (res) => {
                console.log(res.data)
                // 拿到最终返回的图片线上链接
                console.log(res.data.slice(57,-3));
                var imgurl = res.data.slice(57,-3)
                this.modifybg(imgurl)
                // 更新页面的渲染
                this.imgArr = imgurl
                // 更新缓存中的图片链接
                uni.setStorageSync('background',imgurl)
        			}
        		});
        	}
        })
      },
      // 获取坚持的天数
      async getkeeptime() {
        await this.request({
          url:`8001/loservice/lotask/findTime/${uni.getStorageSync('userid')}`,
          method:'POST'
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            this.keeptime = res.data.time
          }
        }).catch(err=> {
          console.log('错误：',err)
        })
      },
      // 修改主页背景
      async modifybg(imgurl) {
        await this.request({
          url:'8002/ucenterservice/ucenter/updateMemberInfo',
          method:'POST',
          data:{
            "id":uni.getStorageSync('userid'),
            "background":imgurl
          }
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
          }
        }).catch(err=> {
          console.log('错误：',err)
        })
      },
      // 获取好友个数
      async getfriendnumber() {
        await this.request({
          url:`8002/ucenterservice/friend/countFriend/${uni.getStorageSync('userid')}`,
          method:'GET'
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            this.friendnumber = res.data.count
          }
        }).catch(err=> {
          console.log('错误：',err)
        })
      },
      // 去往人个页面
      toPersonal() {
        uni.navigateTo({
          url:'/pages/personal/personal'
        })
      }, 
      // 扫描功能
      scan() {
        // 允许从相机和相册扫码
        uni.scanCode({
        	success: res => {
        		console.log('条码类型：' + res.scanType);
        		console.log('条码内容：' + res.result);
            // 这里的识别内容为用户的id
            this.coderesult = res.result
            uni.navigateTo({
              url:`/pages/people/people?userid=${this.coderesult}`
            })
        	}
        });
      }
    }
  }
</script>

<style scoped>
.head {
  position: relative;
}
.head image {
  width: 100%;
  height: 400rpx;
}
.head .change {
  position: absolute;
  right: 40rpx;
  bottom: 20rpx;
  width: 200rpx;
  height: 40rpx;
  border-radius: 10rpx;
  text-align: center;
  line-height: 40rpx;
  font-size: 22rpx;
  z-index: 99;
  background-color: rgb(255,255,255,0.7);
}
.head .share {
  position: absolute;
  width: 50rpx;
  height: 50rpx;
  right: 40rpx;
  top: 20rpx;
}
.con {
  padding: 40rpx;
  z-index: 22;
}
.con .info {
  display: flex;
  margin-top: -80rpx;
  justify-content: space-between;
  width: 670rpx;
  height: 130rpx;
}
.info .info-left .avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  z-index: 99;
  border: 6rpx solid #ffffff;
}
.info-left {
  display: flex;
}
.info-left .name {
  margin-top: 70rpx;
  margin-left: 10rpx;
  font-size: 28rpx;
  font-weight: 600;
}
.info-right {
  display: flex;
  margin-top: 40rpx;
  justify-content: space-between;
  width: 350rpx;
  font-size: 24rpx;
}
.info .info-right .line {
  margin-top: 25rpx;
}
.info .info-right .erweima {
  margin-top: 20rpx;
}
.info-right .erweima image {
  width: 50rpx;
  border-radius: 10rpx;
  height: 50rpx;
}
.info-right .follow,.info-right .friends,.info-right .fabulous {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.person-info {
  display: flex;
  justify-content: space-between;
}
.person-info .person-info-left {
  display: flex;
  margin-left: 10rpx;
  justify-content: space-between;
  width: 180rpx;
  font-size: 26rpx;
}
.person-info .person-info-right {
  font-size: 24rpx;
  line-height: 40rpx;
}
.join {
  margin-left: 10rpx;
  margin-top: 40rpx;
  font-size: 26rpx;
}
.panel {
  font-size: 28rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40rpx;
  width: 670rpx;
  height: 150rpx;
  border-radius: 20rpx;
  background-color: #ffffff;
  box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
}
.panel .totaltime,.panel .totalday {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.panel .totaltime span,.panel .totalday span {
  font-size: 34rpx;
  font-weight: 700;
  color: #8397e2;
}
.panel p {
  margin-top: 10rpx;
}
.bot-con {
  width: 100%;
  border-radius: 20rpx;
  height: 700rpx;
  background-color: #ffffff;
}
.bot-head {
  display: flex;
  /* justify-content: space-around; */
}
.bot-head image {
  width: 50rpx;
  margin-right: 10rpx;
  height: 50rpx;
}
.bot-head-left,.bot-head-right {
  margin-top: 40rpx;
  display: flex;
  line-height: 50rpx;
  font-size: 28rpx;
}
.bot-head-left {
  margin-left: 40rpx;
}
.bot-body {
  margin-top: 80rpx;
}
.bot-body image {
  width: 100%;
  height: 300rpx;
}
.bot-body p {
  text-align: center;
  font-size: 26rpx;
}
</style>
