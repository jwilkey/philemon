<template>
  <div class="content p2">
    <div v-for="(list, person) in items" :key="person">
      <div class="flex-row">
        <h3 class="primary title-fade-label">{{person}}</h3>
        <div class="title-fade" />
      </div>
      <block-list :items="list" class="p1-top p0-left" />
    </div>
  </div>
</template>

<script>
import BlockList from '@/components/BlockList'

export default {
  name: 'Persons',
  props: ['items'],
  components: { BlockList }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.title-fade-label {
  padding-left: 4px;
  border-left: solid 1px fade-out($primary, .77);
}
.title-fade {
  @extend .flex-one;
  background: linear-gradient(50deg, transparent, fade-out($primary, .8));
}
</style>
