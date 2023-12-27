import type { XtxGuessInstance } from "@/types/component"
import { ref } from "vue"

// 猜你喜欢组合式函数
export const useGuessList = () => {
  // 获取实例组件
   const guessRef = ref<XtxGuessInstance>()

  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回
  return { guessRef, onScrolltolower }
}
