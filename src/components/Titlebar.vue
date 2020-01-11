<template>
  <div>
    <div class="title" @click="$router.push('overview')">Philemon</div>
    <score />
  </div>
</template>

<script>
import Score from '@/components/Score'

export default {
  name: 'Titlebar',
  components: { Score }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.title {
  @extend .p1;
  @extend .uppercase;
  @extend .hi;
  @extend .bg-primary;
  @extend .font1;
  letter-spacing: 1.5px;
}
</style>
