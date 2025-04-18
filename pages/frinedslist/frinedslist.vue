<template>
  <view class="content">
    <image src="../../static/bg.png" mode="" class="bg-img"></image>
    <view class="friend-box">
      <view class="friends" v-for="(item,index) in List" :key="item.id" @click="tofriendhome(item.id,item.name)">
        <image :src="item.avatar" mode=""></image>
        <p class="name">{{item.name}}</p>
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
        List:[]
      }
    },
    onLoad() {
      // 获取好友列表
      this.getfriendsList()
    },
    methods: {
      // 去往好友主页
      tofriendhome(id,remarks) {
        uni.navigateTo({
          url:`/pages/Personalhomepage/Personalhomepage?userid=${id}&remarks=${remarks}`
        })
      },
      // 获取好友列表
      async getfriendsList() {
        await this.request({
        url:`8002/ucenterservice/friend/selectAllFriend/${uni.getStorageSync('userid')}`,
        method:'GET',
        }).then(res=> {
          if(res.code === 200) {
            this.friendsList = ''
            console.log(res.data)
            for(var i = 0;i<res.data.list.length;i++) {
              var name = res.data.list[i].remarks
              // 获取朋友的相关信息
              this.getuserinfo(res.data.list[i].friendId,name)
              console.log("---",this.List)
            }
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 获取用户的信息
      async getuserinfo(userid,name) {
        await this.request({
        url:`8002/ucenterservice/ucenter/getUserInfo/${userid}`,
        method:'POST',
        }).then(res=> {
          if(res.code === 200) {
            console.log(res.data)
            var obj = {
              id:res.data.info.id,
              name:name,
              avatar:res.data.info.avatar
            }
            console.log(obj)
            this.List.push(obj)
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
  .friends {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20rpx;
    border-radius: 20rpx;
    width: 630rpx;
  }
  .friends image {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }
  .friends .name {
    margin-left: 40rpx;
    color: #868080;
    font-size: 32rpx;
    font-weight: 600;
  }
</style>
