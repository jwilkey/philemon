<template>
  <div class="content p2">
    <p v-if="!items || items.length === 0" class="empty-state">This is not complete</p>
    <anima-list :items="items" class="grid" :classes="['grid-item']" />
  </div>
</template>

<script>
import AnimaList from '@/generic/AnimaList'

export default {
  name: 'BlockList',
  props: ['items'],
  data () {
    return {
      internalItems: []
    }
  },
  components: { AnimaList },
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
    @extend .border-tertiary;
    @extend .text-center;
    @extend .bg-hi;
    border-radius: 4px;
    border-width: 2px;
    @extend .appear;
  }
}
</style>
