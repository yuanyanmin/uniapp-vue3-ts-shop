import { useMemberStore } from "@/stores";

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发  
  invoke(options: UniApp.RequestOptions) {
    // 非 hhtp 开否续拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }

    // 请求超时，默认60s
    options.timeout = 10000

    // 添加请求头表示
    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }

    // 添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token

    if (token) {
      options.header.Authorization = token
    }

  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)


interface Data<T> {
  code: string,
  msg: string,
  result: T
}

// 请求函数
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 请求成功
      success(res) {
        // 状态码 2xx
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 清理用户信息，跳转到登录页面
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login'
          })
          reject(res)
        } else {
          // 其他错误，根据后端报错信息提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误'
          })
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误'
        })
        reject(err)
      }
    })
  })
}