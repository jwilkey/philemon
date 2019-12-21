<template>
  <div class="text-outline">
<span v-html="display" />
  </div>
</template>

<script>
export default {
  name: 'TextOutline',
  props: ['text'],
  computed: {
    display () {
      return this.text.replace(/\|?(\d+)\|/g, (a, b) => `<sup class="tertiary">${b}</sup>`)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-outline {
  font-family: 'Menlo';
  font-size: 14px;
  line-height: 130%;
  white-space: pre-wrap;
}
</style>
