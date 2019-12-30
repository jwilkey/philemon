<template>
  <div>
    <div v-for="(item, i) in internalItems" :key="i" class="appear" :class="classes || []" :style="{ 'animation-duration': `${i * 70 + 50}ms`}">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'AnimaList',
  props: ['items', 'classes'],
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
