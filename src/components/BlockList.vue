<template>
  <div>
    <p v-if="!items || items.length === 0" class="empty-state">This is incomplete</p>
    <div v-else class="grid">
      <div v-for="(item, i) in internalItems" :key="i" class="grid-item" :style="{ 'animation-duration': `${i * 70 + 50}ms`}">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockList',
  props: ['items'],
  data () {
    return {
      internalItems: []
    }
  },
  watch: {
    items () {
      this.internalItems = []
      this.$nextTick(() => {
        // this.items.forEach((item, i) => {
        //   setTimeout(() => {
        //     this.internalItems.push(item)
        //   }, 100 * i)
        // })
        this.internalItems = this.items
      })
    }
  },
  mounted () {
    this.internalItems = this.items
  }
}
</script>

<style lang="scss">
@import "../assets/app";

.grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  .grid-item {
    @extend .p1;
    @extend .bg-secondary;
    @extend .text-center;
    @extend .hi;
    border-radius: 3px;
    border: solid 1px transparent;
    @extend .appear;
  }
}
</style>
