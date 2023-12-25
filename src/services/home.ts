import type { PageParams, PageResult } from "@/types/global"
import type { BannerItem, CategoryItem, GuessItem, HotItem } from "@/types/home"
import { http } from "@/utils/http"

// 首页-广告区域
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}

// 首页-前台分类
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli'
  })
}

// 首页-热门推荐
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli'
  })
}

// 首页-猜你喜欢
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}

