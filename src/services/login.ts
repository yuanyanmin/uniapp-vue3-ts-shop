import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

type LoginParam = {
  code: string,
  encryptedData: string,
  iv: string
}

// 小程序登录内测版
export const postLoginWxMinAPI = (data: LoginParam) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data
  })
}

// 小程序登录内测版
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber
    }
  })
}