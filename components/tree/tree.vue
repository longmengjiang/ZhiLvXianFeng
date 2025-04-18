<template>
  <view class="route">
      <treeinfoitems v-for="(item,index) in timeList" :key="item.id" :img="item.imgurl" :tree="item.tree" :create="item.create1" :finish="item.finish1" :treeid="item.id"></treeinfoitems>
  </view>
</template>

<script>
  import treeinfoitems from '../treeinfoitems/treeinfoitems.vue'
  export default {
    name: "tree",
    props: ["timeList"],
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    components: {
      treeinfoitems
    }
  }
</script>

<style scoped>
  .route {
    padding: 40rpx;
    overflow: hidden;
  }

  
</style>
