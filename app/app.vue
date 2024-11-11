<script lang="ts" setup>
const store = useMainStore()
const { x, y } = useMouse()
</script>

<template>
  <div>
    <p>{{ x }} {{ y }}</p>
    <p>
      {{ store.inStore }}
    </p>
    <NuxtPage />
  </div>
</template>
