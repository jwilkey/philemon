<template>
  <div v-if="items" class="content p3">
    <h2 class="title-label">Conversation</h2>
    <p class="secondary p1-left m2-bottom">Questions to casually discuss this passage</p>
    <div v-for="(item, i) in items" :key="i" class="convo">
      <p><span class="tertiary">{{i + 1}}.</span> {{ item.question }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conversation',
  props: ['items']
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.convo {
  @extend .m2-bottom;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  @extend .card;
  @extend .p3-right;
}
</style>
