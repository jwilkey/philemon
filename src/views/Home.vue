<template>
  <div class="home v-fill flex-column">
    <div class="nav z2">
      <div v-for="(s, i) in studies" :key="i" class="nav-item" :class="{active: i === studyIndex}" @click="setStudy(i)">
        Study {{ i + 1 }}
      </div>
    </div>

    <div class="flex-one scrolly">
      <div class="content p2">
        <text-outline :text="text" class="card"></text-outline>
      </div>

      <div class="content p2">
        <block-list :items="study.observe.people"></block-list>
      </div>

      <div class="content p3">
        <h2 class="title-label">Unwisdom</h2>
        <div v-for="(unwisdom, i) in unwisdoms" :key="i" class="unwisdom">
          {{unwisdom.saying}}
        </div>
      </div>

      <div class="content p3">
        <h2 class="title-label">Expound</h2>
        <div v-for="(expound, i) in expounds" :key="i" class="expound">
          <div v-for="(text, level) in expound" :key="level" class="expound-entry" :class="[level]">
            <p class="opacity40 font-2">{{ level }}</p>
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockList from '@/components/BlockList'
import TextOutline from '@/components/TextOutline'
import study1 from '@/studies/STUDY_1'
import study2 from '@/studies/STUDY_2'
import study3 from '@/studies/STUDY_3'

export default {
  name: 'home',
  data () {
    return {
      text: '',
      studies: [ study1, study2, study3 ],
      study: study1
    }
  },
  components: { BlockList, TextOutline },
  computed: {
    studyIndex () {
      return this.studies.indexOf(this.study)
    },
    unwisdoms () {
      return this.study.interpret.unwisdom
    },
    expounds () {
      return this.study.interpret.expound
    }
  },
  methods: {
    setStudy (index) {
      this.study = this.studies[index]
      fetch(`/texts/STUDY_${index + 1}_text.txt`)
        .then(r => r.text())
        .then(t => this.text = t)
    }
  },
  mounted () {
    this.setStudy(0)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.nav {
  @extend .flex-row;
  @extend .shadow;
}
.nav-item {
  @extend .flex-one;
  @extend .p2;
  @extend .text-center;
  @extend .uppercase;
  @extend .border-right-primary;
  &.active {
    @extend .bg-primary;
    color: white;
  }
}

.title-label {
  @extend .uppercase;
  @extend .m2-bottom;
  @extend .primary;
  @extend .border-bottom-tertiary;
  @extend .border-left-tertiary;
  @extend .p1;
}
.unwisdom {
  @extend .m2-bottom;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  @extend .card;
}

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