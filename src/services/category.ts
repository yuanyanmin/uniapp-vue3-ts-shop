import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// 通用的热门推荐类型

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
