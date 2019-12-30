<template>
  <div class="definitions content p2">
    <div v-if="hasItems" class="card">
      <div v-for="(definition, word) in items" :key="word" class="definition">
        <h3>{{word}}</h3>
        <p>{{definition}}</p>
      </div>
    </div>
    <p v-if="!hasItems" class="empty-state">This is not complete</p>
  </div>
</template>

<script>
export default {
  name: 'Definitions',
  props: ['items'],
  computed: {
    hasItems () { return this.items && !!Object.keys(this.items) }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.definitions {
  .definition {
    @extend .border-bottom-tertiary;
    padding: 8px 0;
    &:last-child {
      border-bottom: none;
    }
  }
  h3 {
    font-family: 'times';
    line-height: 140%;
  }
}
</style>
