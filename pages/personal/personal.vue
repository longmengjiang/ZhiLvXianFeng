<template>
  <view class="content">
    <view class="base">
      <view class="avatar" @click="chooseImg">
        <p>更换头像</p>
        <view class="img-box">
          <image :src="imgArr" mode="" class="avatar-img" ></image>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="name" @click="toModifyName">
        <p>昵称</p>
        <view class="name-box">
          <p>{{nickname}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="address" @click="tomodifyip">
        <p>IP地址</p>
        <view class="address-box">
          <p>{{ip}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="sex" @click="toSex">
        <p>性别</p>
        <view class="sex-box">
          <p>{{sex}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="id">
        <p>Timer账号</p>
        <view class="id-box">
          <p>{{id}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="erweima" @click="toErweima">
        <p>我的二维码</p>
        <view class="erweima-box">
          <image src="../../static/QR-Code.png" mode="" class="erweima-img"></image>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
    </view>
    <view class="autograph" @click="toAutograph">
      <view class="autograph-box">
        <view class="autograph-head">
          <view class="head-left">
            <p>个性签名</p>
            <image src="../../static/pen2.png" mode=""></image>
          </view>
          <view class="head-right">
            <image src="../../static/right(3).png" mode="" class="right"></image>
          </view>
        </view>
        <view class="autograph-text">
          {{autograph}}
        </view>
      </view>
    </view>
    <view class="shou">
      <view class="people">
        <p>收货人</p>
        <view class="people-box">
          <p>{{name}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="phone">
        <p>手机号</p>
        <view class="phone-box">
          <p>{{phone}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
      <view class="address"  @click="toAddress">
        <p>收货地址</p>
        <view class="address-box">
          <p>{{address}}</p>
          <image src="../../static/right(3).png" mode="" class="right"></image>
        </view>
      </view>
    </view>
    <view class="setting" @click="tosetting">
      <p>修改密码</p>
      <image src="../../static/right(3).png" mode="" class="right"></image>
    </view>
    <view class="save">
      保存
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        // 默认头像
        imgArr:['https://med-10.oss-cn-beijing.aliyuncs.com/2023/01/01/a748571b 7354 44bf 9c32 7fe45089e048IvFnf7B4LvjF1cfe7d205d13e05d250ceac8186a4efe.jpg'],
        nickname:'',
        address:'',
        sex:'男',
        autograph:'相对辛苦，绝对自由',
        avatar:'',
        phone:'',
        address:'',
        name:'',
        id:'',
        ip:''
      }
    },
    onLoad() {
      // 获取个人收货信息
      this.getpageageinfo()
      // 从本地存储获取数据
      this.imgArr = uni.getStorageSync('avatar')
      this.nickname = uni.getStorageSync('nickname')
      this.phone = uni.getStorageSync('mobile')
      this.id = uni.getStorageSync('id')
      this.sex = uni.getStorageSync('sex')
      this.ip = uni.getStorageSync('ip')
      this.autograph = uni.getStorageSync('sign')
      console.log(this.imgArr)
      console.log(this.nickname)
    },
    methods: {
      // 选择图片
      chooseImg() {
        uni.chooseImage({
        	success: (chooseImageRes) => {
        		const tempFilePaths = chooseImageRes.tempFilePaths;
            // 上传图片
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
                this.modifyavatar(imgurl)
                // 更新页面的渲染
                this.imgArr = imgurl
                // 更新缓存中的图片链接
                uni.setStorageSync('avatar',imgurl)
        			}
        		});
        	}
        })
      },
      // 获取个人收货信息
      async getpageageinfo() {
        await this.request({
        url:`8002/ucenterservice/lo-address/findAddress/${uni.getStorageSync('userid')}`,
        method:'GET'
        }).then(res=> {
          if(res.code === 200) {
            this.address = res.data.address.address
            this.name = res.data.address.consignee
            this.phone = res.data.address.phone
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 更改头像
      async modifyavatar(imgurl) {
        await this.request({
          url:'8002/ucenterservice/ucenter/updateMemberInfo',
          method:'POST',
          data:{
            "id":uni.getStorageSync('userid'),
            "avatar":imgurl
          }
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
          }
        }).catch(err=> {
          console.log('错误：',err)
        })
      },
      // 去设置页面
      tosetting() {
        uni.navigateTo({
          url:'/pages/setting/setting'
        })
      },
      // 去更改昵称
      toModifyName() {
        uni.navigateTo({
          url:'/pages/modifyName/modifyName'
        })
      },
      // 去地址页面
      toAddress() {
        uni.navigateTo({
          url:'/pages/address/address'
        })
      }, 
      // 去修改IP地址页面
      tomodifyip() {
        uni.navigateTo({
          url:'/pages/modifyip/modifyip'
        })
      },
      // 去性别页面
      toSex() {
        uni.navigateTo({
          url:'/pages/sex/sex'
        })
      },
      // 去二维码页面
      toErweima() {
        uni.navigateTo({
          url:'/pages/erweima/erweima'
        })
      },
      // 去个性签名页面
      toAutograph() {
        uni.navigateTo({
          url:'/pages/autograph/autograph'
        })
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.base {
  width: 590rpx;
}
.avatar,.name,.address,.sex,.erweima,.id,.people,.phone,.address {
  font-size: 28rpx;
  height: 150rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2rpx solid #bababa;
}
.name,.address,.sex,.erweima,.id,.people,.phone,.address {
  height: 100rpx;
}
.avatar .avatar-img {
  width: 80rpx;
  height: 80rpx;
}
.erweima-img {
  width: 50rpx;
  height: 50rpx;
}
.avatar .img-box,.name .name-box,.address .address-box,.sex .sex-box,.erweima .erweima-box,.id .id-box,.people .people-box,.phone .phone-box,.address .address-box {
  display: flex;
  align-items: center;
}
.img-box .right,.name-box .right,.address-box .right,.sex-box .right,.erweima .right,.people .right,.setting .right,.id .right,.phone .right,.address .right {
  width: 30rpx;
  margin-left: 10rpx;
  height: 30rpx;
}
.autograph-head .head-right .right {
  width: 30rpx;
  height: 30rpx;
}
.autograph,.setting,.shou,.base {
  padding: 40rpx;
  margin-top: 60rpx;
  border-radius: 10rpx;
  box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
}
.setting {
  font-size: 28rpx;
  margin-top: 0;
}
.autograph .autograph-head {
  display: flex;
  justify-content: space-between;
}
.autograph .autograph-head .head-left {
  display: flex;
}
.autograph .autograph-head image {
  width: 40rpx;
  height: 40rpx;
}
.autograph {
  font-size: 28rpx;
}
.autograph .autograph-text {
  margin-top: 10rpx;
}
.setting {
  display: flex;
  margin-top: 20rpx;
  justify-content: space-between;
}
.save {
  width: 400rpx;
  text-align: center;
  line-height: 80rpx;
  border-radius: 20rpx;
  height: 80rpx;
  margin: 0 auto;
  margin-top: 100rpx;
  color: #fff;
  background-color: #8397e2;
}
</style>
