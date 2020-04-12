<template>
  <div>
    <div v-if="items && items.length > 0" class="content p3">
      <h2 class="title-label">Conversation</h2>
      <p class="secondary p1-left m2-bottom">Questions to casually discuss this passage</p>
      <div v-for="(item, i) in items" :key="i" class="conversation">
        <p><span class="tertiary">{{i + 1}}.</span> {{ item.question }}</p>
      </div>
    </div>
    <div v-else class="content p3">
      <p class="empty-state">This is incomplete</p>
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

.conversation {
  @extend .m2-bottom;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  @extend .card;
  @extend .p3-right;
}
</style>
