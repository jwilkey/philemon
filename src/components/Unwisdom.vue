<template>
  <div class="content p3">
    <h2 class="title-label">Unwisdom</h2>
    <div v-for="(unwisdom, i) in items" :key="i" class="unwisdom" @click="toggleComment(i, $event)">
      <p class="saying">{{unwisdom.saying}}</p>
      <div v-if="comments[i]" class="border-top-tertiary m1-top p1-top">
        <p class="secondary">{{unwisdom.comment}}</p>
      </div>
      <p v-if="unwisdom.chapter" class="tertiary text-right p2-right">- {{unwisdom.chapter}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Unwisdom',
  props: ['items'],
  data () {
    return {
      comments: {}
    }
  },
  methods: {
    toggleComment (unwisdomIndex, event) {
      this.$set(this.comments, unwisdomIndex, !this.comments[unwisdomIndex])
    }
  }
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
