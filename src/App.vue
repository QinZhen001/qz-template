<script setup lang="ts">
import CommonHeader from '@/components/CommonHeader/index.vue'
import NaiveProvider from '@/components/NaiveProvider/index.vue'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from '@/hooks/useTheme'
import { NConfigProvider } from 'naive-ui'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
</script>

<template>
  <NConfigProvider class="h-full" :theme="theme" :theme-overrides="themeOverrides" :locale="language">
    <NaiveProvider>
      <CommonHeader />
      <div class="h-[calc(100vh-3rem)] ">
        <RouterView />
      </div>
    </NaiveProvider>
  </NConfigProvider>
</template>
