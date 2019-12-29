<template>
  <transition name="fade">
  <div v-if="text" class="content p2 mono">
    <div class="card">
      <p class="tertiary">{{study.passage}}</p>
      <div class="text-outline">
<span v-html="display" />
      <p class="text-right m2-top tertiary"><a @click="showVerses">show verse numbers</a></p>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TextOutline',
  computed: {
    ...mapGetters(['text', 'study']),
    display () {
      return this.text.replace(/\|?(\d+)\|/g, (a, b) => `<sup class="verse-num hidden">${b}</sup>`)
    }
  },
  methods: {
    showVerses () {
      this.$el.querySelectorAll('.verse-num').forEach(e => e.classList.remove('hidden'))
    }
  }
}
</script>

<style lang="scss">
@import "../assets/app";

.verse-num {
  @extend .tertiary;
  margin-right: -8px;
  &.hidden {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.text-outline {
  font-family: 'Menlo';
  font-size: 14px;
  line-height: 130%;
  white-space: pre-wrap;
}
</style>
