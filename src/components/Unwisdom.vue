<template>
  <div class="content p3">
    <h2 class="title-label">Unwisdom</h2>
    <div v-for="(unwisdom, i) in items" :key="i" class="unwisdom">
      <p>{{unwisdom.saying}}</p>
      <p v-if="unwisdom.chapter" class="tertiary text-right p2-right">- {{unwisdom.chapter}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Unwisdom',
  props: ['items']
}
</script>

<style lang="scss" scoped>
@import "../assets/app";
.unwisdom {
  @extend .m2-bottom;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  @extend .card;
  @extend .p3-right;
}
</style>
