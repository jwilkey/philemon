<template>
  <div class="nav z2">
    <div v-for="(s, i) in studyCount" :key="i" class="nav-item" :class="{active: i === studyIndex}" @click="studySelected(i)">
      <div />
      <p>Study {{ i + 1 }}</p>
      <div />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Nav',
  computed: {
    ...mapGetters(['studyIndex']),
    studyCount () { return parseInt(process.env.VUE_APP_STUDY_COUNT) }
  },
  methods: {
    ...mapActions(['setStudyIndex', 'setStudy', 'setText']),
    studySelected (index) {
      this.setStudyIndex(index)
      this.setText(null)
      this.setStudy(require(`../studies/STUDY_${index + 1}`).default)
      fetch(`./texts/STUDY_${index + 1}.txt`)
        .then(r => r.text())
        .then(t => this.setText(t))
    }
  },
  mounted () {
    this.studySelected(0)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.nav {
  @extend .flex-row;
  position: absolute;
  left: 0;
  right: 0;
}
.nav-item {
  @extend .flex-one;
  @extend .shadow;
  @extend .flex-row;
  @extend .uppercase;
  @extend .p1;
  margin: 0 4px 0 4px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ffffffcc;
  div {
    @extend .flex-one;
  }
  p {
    @extend .flex-center;
    @extend .text-center;
    transition: background-color .5s;
  }
  &:not(.active) > p {
    background-color: white;
    border-radius: 3px;
    padding: 0 2px;
  }
  &.active {
    @extend .bg-primary;
    color: white;
  }
  transition: background-color .5s;
}
</style>
