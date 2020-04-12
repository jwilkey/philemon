<template>
  <div>
    <div class="title-bar flex-row">
      <div class="title flex-one" @click="$router.push('books')">{{title}}</div>
    </div>
    <score />
  </div>
</template>

<script>
import Score from '@/components/Score'
import { mapGetters } from 'vuex'

export default {
  name: 'Titlebar',
  components: { Score },
  computed: {
    ...mapGetters(['studyMeta']),
    title () {
      return this.studyMeta ? this.studyMeta.title : 'Scripture Studies'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.title-bar {
  @extend .p1;
  @extend .uppercase;
  @extend .hi;
  @extend .bg-primary;
  @extend .font1;
  letter-spacing: 1.5px;
}
</style>
