<template>
  <transition name="fade">
  <div v-if="text" class="content p2 mono flex-column" :class="{ 'v-fill': show }">
    <div class="card flex-column v-fill">
      <div class="flex-row">
        <p class="flex-one primary p1-bottom">{{study.passage}}</p>
        <a class="tertiary pointer" @click="toggle">{{ show ? 'collapse' : 'show' }}</a>
      </div>
      <div class="text-outline" :class="{ collapsed: !show }">
        <span v-html="display" />
      </div>
      <transition name="fade-in">
        <p v-if="show" class="text-right m2-top tertiary m1-bottom pointer"><a @click="showVerses">show verses</a></p>
      </transition>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TextOutline',
  data () {
    return {
      show: true
    }
  },
  computed: {
    ...mapGetters(['text', 'study']),
    display () {
      return this.text.replace(/\|?(\d+)\|/g, (a, b) => `<sup class="verse-num hidden">${b}</sup>`)
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
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
@import "../assets/app";

.text-outline {
  @extend .scrolly;
  font-family: 'Menlo';
  font-size: 14px;
  line-height: 130%;
  white-space: pre-wrap;
  transition: box-shadow .5s;
  &:not(.collapsed) {
    @extend .flex-one;
  }
  &.collapsed {
    @extend .shadow-inset;
    height: 28px;
    overflow-y: hidden;
  }
}
</style>
