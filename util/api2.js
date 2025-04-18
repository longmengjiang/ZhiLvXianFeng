// const BASE_URL = `http://192.168.188.138:8080`
const BASE_URL2 = `http://43.138.237.251:`
export const request2 = (options) => {
  return new Promise((resolve,reject) => {
    uni.request({
      url:BASE_URL2 + options.url,
      method:options.method || 'GET',
      // header:{token:uni.getStorageSync('userid')?uni.getStorageSync('user').token:'',"Access-Control-Allow-Origin":"*"},
      header:options.header,
      data:options.data || {},
      success: (res) => {
        const data = res.data
        console.log(data)
        if(data.code === '201') {
          uni.navigateTo({
            url:'/pages/login/login.vue'
          })
          return 
        }else if(res.code=='200') {
          uni.showToast({
            icon:'error',
            title:'操作错误'
          })
        }
        resolve(data)
      },
      fail: (error) => {
        uni.showToast({
          icon:'error',
          title:'系统错误'
        })
        reject(error)
      }
    })
  })
}
