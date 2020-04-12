<template>
  <div>
    <div v-if="items && items.length > 0" class="content p3">
      <h2 class="title-label">Integrity</h2>
      <div class="prompt bg-hi p2 rounded m2-bottom">
        <p class="secondary">Questions that are meant to be answered in 3 parts:</p>
        <ul class="m0 p1-left">
          <li>(1) to what degree is this true of your <strong>will</strong> and action </li>
          <li>(2) to what degree is this permeating your thought and <strong>intellect</strong></li>
          <li>(3) to what degree do you hold this as <strong>fantasy</strong> or fiction, in disbelief</li>
        </ul>
        <p>By answering in this way, the goal is to reveal inconsistencies in our selves, for instance: what do we hold to be true from an intellectual stance, but do not actually obey in our action and will?</p>
      </div>
      <div v-for="(item, i) in items" :key="i" class="questions">
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
  name: 'Integrity',
  props: ['items']
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.questions {
  @extend .m2-bottom;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  @extend .card;
  @extend .p3-right;
}
.prompt {
  strong {
    @extend .primary;
    font-weight: 1000;
    text-decoration: underline;
  }
}
</style>
