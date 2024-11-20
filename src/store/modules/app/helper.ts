import type { Language, Theme } from '@/types'
import { ss } from '@/utils/storage'
import { useOsTheme } from 'naive-ui'

const LOCAL_NAME = 'appSetting'

const languageMap: { [key: string]: Language } = {
  'en': 'en-US',
  'en-US': 'en-US',
  'zh': 'zh-CN',
  'zh-CN': 'zh-CN',
}

export interface AppState {
  theme: Theme
  language: Language
}

export function defaultSetting(): AppState {
  const language = languageMap[navigator.language] ?? 'zh-CN'
  const osTheme = useOsTheme()
  const theme = osTheme.value ?? 'light'

  return {
    theme,
    language,
  }
}

export function getLocalSetting(): AppState {
  const localSetting: AppState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalSetting(setting: AppState): void {
  ss.set(LOCAL_NAME, setting)
}
