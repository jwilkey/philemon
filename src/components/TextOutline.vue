<template>
  <div class="text-outline">
{{ text }}
  </div>
</template>

<script>
export default {
  name: 'TextOutline',
  props: ['text']
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