<template>
  <div class="home">
    <div class="nav">
      <div v-for="(s, i) in studies" :key="i" class="nav-item" :class="{active: i === studyIndex}" @click="setStudy(s)">
        Study {{ i + 1 }}
      </div>
    </div>

    <div class="content p3">
      <h2 class="uppercase m2-bottom tertiary3">Unwisdom</h2>
      <div v-for="(unwisdom, i) in unwisdoms" :key="i" class="unwisdom">
        {{unwisdom.saying}}
      </div>
    </div>

    <div class="content p3-top">
      <h2 class="uppercase m2-bottom tertiary3">Expound</h2>
      <div v-for="(expound, i) in expounds" :key="i" class="expound">
        <div v-for="(text, level) in expound" :key="level" class="expound-entry" :class="[level]">
          <p class="opacity40 font-2">{{ level }}</p>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import study1 from '@/studies/STUDY_1'
import study2 from '@/studies/STUDY_2'
import study3 from '@/studies/STUDY_3'

export default {
  name: 'home',
  data () {
    return {
      studies: [ study1, study2, study3 ],
      study: study1
    }
  },
  components: { },
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
    setStudy (study) {
      this.study = study
    }
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
  @extend .border-tertiary;
  &.active {
    @extend .bg-secondary;
  }
}
.unwisdom {
  @extend .p2;
  @extend .m2-bottom;
  @extend .bg-tertiary-2;
}

.expound {
  @extend .m4-bottom;
  border-bottom: dashed #ffffff33 8px;
  .expound-entry {
    position: relative;
    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 100%;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      background-color: #09090999;
    }
    @extend .p2;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 3px;
    &.one { background-color: #6FFFE9; color: #333; }
    &.two { background-color: #8ED0d1; color: #303; }
    &.three { background-color: #EB5160; color: #ffefef; }
    &.four { background-color: #2D2327; }
    & > * {
      max-width: 800px;
      margin: auto;
    }
  }
}
</style>