import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    token: '',
    userInfo: ''
  }),
  getters: {},
  actions: {}
})
