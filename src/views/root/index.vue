<script lang="ts" setup>
import { useAppStore } from '@/store'
import { NButton, NCard, useMessage } from 'naive-ui'

const ms = useMessage()
const appStore = useAppStore()

function showMessage() {
  window?.$message?.success('Hello world!')
  ms.success('Hello world!')
}

function changeTheme() {
  appStore.setTheme(appStore.theme === 'light' ? 'dark' : 'light')
}

function changeLanguage() {
  appStore.setLanguage(appStore.language === 'en-US' ? 'zh-CN' : 'en-US')
}
</script>

<template>
  <NCard>
    <div class="font-bold h-8 leading-8">
      <span class="text-[#903b3b] dark:text-[#47e9a0]">ROOT</span>
    </div>
    <div class="h-6 leading-6 mb-2 text-background">
      text-background
    </div>
    <div class="h-6 leading-6 mb-2 text-error">
      text-error
    </div>
    <div class="h-6 leading-6 mb-2">
      language text: {{ $t('common.add') }}
    </div>
    <div class="space-x-1">
      <NButton @click="showMessage">
        message
      </NButton>
      <NButton @click="changeTheme">
        theme: {{ appStore.theme }}
      </NButton>
      <NButton @click="changeLanguage">
        language: {{ appStore.language }}
      </NButton>
    </div>
  </NCard>
</template>
