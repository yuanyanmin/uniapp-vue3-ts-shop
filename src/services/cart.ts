import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// 通用的热门推荐类型

export const postMemberCartAPI = (data: {
  skuId: string,
  count: number
}) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data
  })
}
