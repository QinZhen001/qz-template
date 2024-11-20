import type { Theme } from '@/types'
import type { GlobalThemeOverrides } from 'naive-ui'
import { useAppStore } from '@/store'
import { darkTheme, lightTheme, useOsTheme } from 'naive-ui'
import { computed, watch } from 'vue'

export function useTheme() {
  const appStore = useAppStore()

  const theme = computed(() => {
    return appStore.theme === 'dark' ? darkTheme : lightTheme
  })

  const lightThemeOverrides: GlobalThemeOverrides = {
    common: {
    },
    // ...
  }

  const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
    },
    // ...
  }

  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    if (appStore.theme === 'dark') {
      return darkThemeOverrides
    }
    else {
      return lightThemeOverrides
    }
  })

  watch(
    () => appStore.theme,
    (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      }
      else {
        document.documentElement.classList.remove('dark')
      }
    },
    { immediate: true },
  )

  return { theme, themeOverrides }
}
