<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.path" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.path" />
  </router-view>
  <tab-bar v-if="$route.meta.tab" />
</template>
<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'
</script>

<style></style>
