<template>
  <transition name="fade">
  <div v-if="text" class="text-outline p2 mono">
    <div class="v-fill content border-left-tertiary p2-left flex-column">
      <div class="flex-row">
        <p class="flex-one primary p1-bottom">{{study.passage}}</p>
        <a class="tertiary pointer font-2" @click="toggle">{{ show ? '◉' : '○' }}</a>
      </div>
      <div class="text-outline-text" :class="{ collapsed: !show }">
        <transition name="fade-in">
          <p v-if="display" v-html="display" />
        </transition>
      </div>
      <transition name="fade-in">
        <p v-if="show" class="text-right font-2 m2-top tertiary m1-bottom pointer">
          <a class="option" @click="toggleVerses" :class="{active: showVerses}">V#</a>&nbsp;
          <a class="option" @click="toggleStructure" :class="{active: !showPlain}">⑆</a>
        </p>
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
      showVerses: true,
      showPlain: false,
      display: ''
    }
  },
  props: ['highlight'],
  computed: {
    ...mapGetters(['study']),
    text () {
      return this.study.text
    }
  },
  watch: {
    study () {
      this.createDisplay()
    },
    highlight () {
      this.createDisplay()
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    toggleVerses () {
      this.showVerses = !this.showVerses
      if (this.showVerses) {
        this.$el.querySelectorAll('.verse-num').forEach(e => e.classList.remove('hid'))
      } else {
        this.$el.querySelectorAll('.verse-num').forEach(e => e.classList.add('hid'))
      }
    },
    toggleStructure () {
      this.showPlain = !this.showPlain
      this.createDisplay()
    },
    createDisplay () {
      this.display = undefined
      let text = this.text.replace(/\|?(\d+)\|/g, (a, b) => `<sup class="verse-num">${b}</sup>`)
      text = text.replace(/(\d+)\u02da/g, (a, b) => `<span class="verse-num">${b} </span>`)
      text = this.showPlain
        ? text.replace(/\u02D9\r?\n|\r/g, '').replace(/\u0020\u0020+/g, ' ')
        : text.replace(/\u02D9/g, '')
      const highlight = [ ...this.highlight ]
      highlight.forEach(h => {
        text = text.replace(new RegExp(`\\b(${h.split(' = ')[0]})\\b`, 'gi'), `<span class="highlight">$1</span>`)
      })
      this.$nextTick(() => {
        this.display = text
      })
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
  opacity: .3;
  transition: opacity .3s;
  &.hid {
    opacity: 0;
  }
}
.highlight {
  background-color: #dadadd;
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
.strike {
  text-decoration: line-through;
}
.option {
  @extend .p1-h;
  @extend .rounded;
  @extend .hi;
  @extend .bg-primary3;
  @extend .border-primary;
  transition: opacity .3s;
  &:not(.active) {
    @extend .opacity50;
  }
}
</style>
