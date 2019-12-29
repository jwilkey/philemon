<template>
  <div class="content p3-right p3-left flex-wrap flex-row">
    <div v-for="item in items" :key="item" class="hanging-tab" :class="{ active: item === selected }" @click="select(item)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HangingTabs',
  props: ['items'],
  data () {
    return {
      selected: null
    }
  },
  methods: {
    select (item) {
      this.selected = item
      this.$emit('input', this.selected)
    }
  },
  mounted () {
    this.select(this.items[0])
  }
}
</script>
