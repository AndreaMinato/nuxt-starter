export const useMainStore = defineStore('main store', () => {
  const inStore = ref('ciao dallo store')

  return {
    inStore,
  }
})
