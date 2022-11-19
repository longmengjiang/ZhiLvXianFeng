<template>
    <view class="content">
        <pickerAddress @change="change">{{txt}}</pickerAddress>
        <view class="line"></view>
        <view class="done" @click="changeaddress">
          完成
        </view>
    </view>
</template>

<script>
  import pickerAddress from '../../components/pickerAddress/pickerAddress.vue'
      export default {
          components:{
              pickerAddress
          },
          data() {
              return {
                  txt: '选择地址',
                  title: 'Hello'
              }
          },
          onLoad() {
  
          },
          methods: {
              change(data) {
                  this.txt = data.data.join('')
                  console.log(data.data.join(''))
              },
              changeaddress() {
                uni.navigateTo({
                  url:`/pages/personal/personal?address=${this.txt}`
                })
              }
          }
      }

</script>

<style scoped>
.content {
  padding: 40rpx;
}
.line {
  width: 670rpx;
  height: 2rpx;
  margin-top: 5rpx;
  background-color: #7c8083;
}
.done {
  width: 200rpx;
  text-align: center;
  line-height: 60rpx;
  border-radius: 20rpx;
  height: 60rpx;
  margin: 0 auto;
  margin-top: 100rpx;
  background-color: #72e4da;
}
</style>
