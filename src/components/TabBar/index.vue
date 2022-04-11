<template>
  <van-config-provider :theme-vars="themeVars">
    <van-tabbar
      route
      placeholder
      :border="false"
      active-color="#31C17B"
      inactive-color="#6A7B8E"
      safe-area-inset-bottom
    >
      <van-tabbar-item v-for="tab in tabList" :key="tab.id" :to="tab.to">
        <span>{{ tab.text }}</span>
        <template #icon="{ active }">
          <img :src="active ? tab.activeIcon : tab.icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </van-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface tabItem {
  id: string
  to: string
  text: string
  icon: string
  activeIcon: string
}
const tabs: tabItem[] = [
  {
    id: 'Home',
    to: '/',
    text: '抢购',
    activeIcon: 'https://resource.onlysound.top/image/icon_purchase_note_selected.png',
    icon: 'https://resource.onlysound.top/image/icon_purchase_note_normal.png'
  },
  {
    id: 'MARKET',
    to: '/market',
    text: '市场',
    activeIcon: 'https://resource.onlysound.top/image/icon_nft_list_selected.png',
    icon: 'https://resource.onlysound.top/image/icon_nft_list_normal.png'
  },
  {
    id: 'ME',
    to: '/me',
    text: '我的',
    activeIcon: 'https://resource.onlysound.top/image/icon_my_collection_selected.png',
    icon: 'https://resource.onlysound.top/image/icon_my_collection_normal.png'
  }
]
const tabList = ref<tabItem[]>(tabs)
const themeVars = {
  tabbarHeight: '60px',
  tabbarBackgroundColor: '#1f1c1f',
  tabbarItemFontSize: '11px',
  tabbarItemActiveBackgroundColor: 'transparent'
}
</script>
