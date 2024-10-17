<script lang="ts" setup>
const { x, y } = useMouse()
</script>

<template>
  <div>
    Imma here {{ x }} {{ y }}

    <NuxtPage />
  </div>
</template>
