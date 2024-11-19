import { setLocale } from '@/locales'
import { useAppStore } from '@/store'
import { enUS, zhCN } from 'naive-ui'
import { computed } from 'vue'

export function useLanguage() {
  const appStore = useAppStore()

  const language = computed(() => {
    setLocale(appStore.language)
    switch (appStore.language) {
      case 'en-US':
        return enUS
      case 'zh-CN':
        return zhCN
      default:
        return enUS
    }
  })

  return { language }
}
