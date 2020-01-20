<template>
  <transition name="fade">
  <div v-if="text" class="text-outline p2 mono">
    <div class="v-fill content border-left-tertiary p2-left flex-column">
      <div class="flex-row">
        <p class="flex-one primary p1-bottom">{{study.passage}}</p>
        <a class="tertiary pointer font-2" @click="toggle">{{ show ? 'collapse' : 'show' }}</a>
      </div>
      <div class="text-outline-text" :class="{ collapsed: !show }">
        <p v-html="display" />
      </div>
      <transition name="fade-in">
        <p v-if="show" class="text-right font-2 m2-top tertiary m1-bottom pointer"><a @click="toggleVerses">{{ showVerses ? 'hide' : 'show' }} verses</a></p>
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
      show: true,
      showVerses: false
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
    toggleVerses () {
      this.showVerses = !this.showVerses
      if (this.showVerses) {
        this.$el.querySelectorAll('.verse-num').forEach(e => e.classList.remove('hidden'))
      } else {
        this.$el.querySelectorAll('.verse-num').forEach(e => e.classList.add('hidden'))
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/app";

.text-outline {
  .card{
    @extend .border-primary;
    border-left-color: rgba(var(--primary), 1) !important;
    max-height: 65vh;
  }
}

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
  @extend .bg-hi;
  @extend .shadow-deep;
}
.text-outline-text {
  @extend .scrolly;
  font-family: 'Menlo';
  font-size: 14px;
  line-height: 130%;
  white-space: pre-wrap;
  transition: box-shadow .5s;
  max-height: 60vh;
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
