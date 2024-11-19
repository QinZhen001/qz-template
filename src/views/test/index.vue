<script lang="ts" setup>
import { NPopover } from 'naive-ui'
</script>

<template>
  <svg id="test1" width="600" height="400" />
  <svg id="test2" width="600" height="400" />
  <svg id="test3" width="600" height="400" />
  <NPopover :show="showPopover" :x="popoverX" :y="popoverY" trigger="manual">
    {{ popoverContent }}
  </NPopover>

  <!-- <div class="text-white text-lg">3424324</div>
  <button
    class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  <button class="bg-sky-500 hover:bg-sky-700">Save changes</button>
  <ul>
    <li class="odd:bg-white even:bg-slate-50">1</li>
    <li class="odd:bg-white even:bg-slate-50">2</li>
    <li class="odd:bg-white even:bg-slate-50">3</li>
    <li class="odd:bg-white even:bg-slate-50">4</li>
    <li class="odd:bg-white even:bg-slate-50">5</li>
  </ul>

  <a href="#" class="group h-8 bg-slate-50 block">
    <div class="flex items-center space-x-3">
      <h3 class="text-slate-900 text-sm font-semibold group-hover:text-white">woadadadads</h3>
    </div>
  </a>

  <ul class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-50">
    <li>5 cups chopped Porcini mushrooms</li>
    <li>1/2 cup of olive oil</li>
    <li>3lb of celery</li>
  </ul>

  <h3 class="text-slate-900 dark:text-white font-semibold motion-reduce:hidden">asdvswgwegv</h3>

  <div class="print:hidden text-white">
    <h1>My Secret Pizza Recipe</h1>
  </div>

  <div class="dark:text-white sm:text-center">
    My Secret
  </div> -->
</template>
