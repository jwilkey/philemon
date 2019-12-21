<template>
  <div class="grid">
     <div v-for="(item, i) in items" :key="i" class="grid-item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'BlockList',
  props: ['items']
}
</script>

<style lang="scss">
@import "../assets/app";

.grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  .grid-item {
    @extend .p1;
    @extend .bg-secondary;
    @extend .text-center;
    color: white;
    border-radius: 2px;
    border: solid 1px transparent;
  }
}
</style>
