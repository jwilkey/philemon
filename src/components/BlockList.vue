<template>
  <div>
    <p v-if="!items || items.length === 0" class="empty-state">This is incomplete</p>
    <div v-else class="grid">
      <div v-for="(item, i) in internalItems" :key="i" class="grid-item">{{ item }}</div>
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
    color: white;
    border-radius: 3px;
    border: solid 1px transparent;
    @extend .appear;
  }
}
</style>
