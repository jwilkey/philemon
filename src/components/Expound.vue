<template>
  <div class="content p3">
    <h2 class="title-label">Expound</h2>
    <div v-for="(expound, i) in items" :key="i" class="expound">
      <div v-for="(text, level) in expound" :key="level" class="expound-entry" :class="[level]">
        <p class="opacity40 font-2">{{ level }}</p>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Expound',
  props: ['items']
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.expound {
  @extend .m4-bottom;
  border-bottom: dashed #ffffff33 8px;
  .expound-entry {
    position: relative;
    @extend .shadow-deep;
    border-left: solid 4px #00000077;
    @extend .p2;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 3px;
    &.consideration { @extend .bg-hi; }
    &.one { background-color: #6FFFE9; color: #333; }
    &.two { background-color: #bEe0c1; color: #303; }
    &.three { background-color: #EB5160; color: #ffefef; }
    &.four { background-color: #5D2347; color: #ededed; }
    & > * {
      max-width: 800px;
      margin: auto;
    }
  }
}
</style>
