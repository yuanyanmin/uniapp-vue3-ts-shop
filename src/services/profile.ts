import type { ProfileDetail } from "@/types/member"
import { http } from "@/utils/http"

// 获取个人信息
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'GET'
  })
}

