<template>
  <view class="content">
    <view class="conbox">
      <p class="title">好友设置</p>
      <view class="modifyname">
        <view class="modify-title">
          <p>修改备注</p>
          <image src="../../static/pen2.png" mode=""></image>
        </view>
        <input focus placeholder="请输入昵称" v-model="name"/>
        <view class="done" @click="changename">
          确定
        </view>
      </view>
      <view class="del" @click="delfriend">
        删除好友
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    // 基础数据
    data() {
      return {
        name:'',
        userid:''
      }
    },
    onLoad(option) {
      // 获取从上一页面传过来的数据
      this.userid = option.userid
    },
    methods: {
      // 删除好友
      delfriend() {
        uni.showModal({
        	title: '提示',
        	content: '相逢为知己,确定删除吗',
        	success: (res)=> {
        		if (res.confirm) {
        			console.log('确定')
              this.del(this.userid)
        		} else if (res.cancel) {
        			console.log('取消');
        		}
        	}
        });
      },
      // 修改备注
      async changename() {
        await this.request({
        url:`8002//ucenterservice/friend/updateRemarks/${uni.getStorageSync('userid')}/${this.userid}/${this.name}`,
        method:'POST',
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'修改成功!'
            })
            var timer = setInterval(()=> {
              uni.navigateTo({
                url:'/pages/frinedslist/frinedslist'
              })
              clearInterval(timer)
            },2000)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 删除
      async del(id) {
        await this.request({
        url:`8002/ucenterservice/friend/deleteFriend/${id}`,
        method:'DELETE',
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            uni.showToast({
              title:'删除成功!'
            })
            var timer = setInterval(()=> {
              uni.navigateTo({
                url:'/pages/frinedslist/frinedslist'
              })
              clearInterval(timer)
            },2000)
          }
        }).catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.title {
  width: 600rpx;
  margin: 0 auto;
  border-radius: 20rpx;
  font-size: 32rpx;
  color: #ffffff;
  padding: 20rpx;
  border-radius: 20rpx;
  background-color: #8397e2;
  text-align: center;
}
.conbox {
  color: #ffffff;
}
.del {
  width: 200rpx;
  text-align: center;
  padding: 20rpx;
  margin: 20rpx auto;
  border-radius: 20rpx;
  background-color: #8397e2;
}
.modifyname input {
  padding-bottom: 10rpx;
  border-bottom: 4rpx solid #fff;
}
.modifyname {
  width: 600rpx;
  margin: 40rpx auto;
  padding: 20rpx;
  border-radius: 20rpx;
  background-color: #8397e2;
}
.modify-title {
  display: flex;
  margin-bottom: 10rpx;
}
.modify-title image {
  width: 45rpx;
  margin-left: 10rpx;
  height: 45rpx;
}
.done {
  margin: 40rpx auto;
  width: 200rpx;
  height: 60rpx;
  color: #8397e2;
  font-weight: 600;
  line-height: 60rpx;
  background-color: #fff;
  border-radius: 40rpx;
  font-size: 28rpx;
  text-align: center;
}
</style>
