<template>
  <div class="nav z2">
    <div v-if="compact">
      <div v-for="(s, i) in studyCount" :key="i" class="nav-item" :class="{active: i === studyIndex}" @click="studySelected(i)">
        <div />
        <p>Study {{ i + 1 }}</p>
        <div />
      </div>
    </div>
    <div v-else class="p1 p0-top flex-one flex-row">
      <select v-model="selected" class="flex-one">
        <option v-for="(s, i) in studyCount" :key="i" :value="i">Study {{ i + 1 }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Nav',
  data () {
    return {
      selected: `${this.studyIndex}`
    }
  },
  computed: {
    ...mapGetters(['study', 'studyMeta', 'studyIndex']),
    studyCount () {
      return this.studyMeta.studyCount
    },
    compact () {
      return this.studyCount < 6
    }
  },
  watch: {
    selected () {
      this.studySelected(parseInt(this.selected))
    }
  },
  methods: {
    ...mapActions(['setStudyIndex', 'setStudy', 'setStudyMeta', 'setText']),
    studySelected (index) {
      this.setStudyIndex(index)
      this.setText(null)
      fetch(`${this.studyMeta.source}/STUDY_${index + 1}.json`)
        .then(r => r.json())
        .then(study => this.setStudy(study))
    }
  },
  mounted () {
    this.studySelected(this.studyIndex || 0)
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
  @extend .pointer;
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
    @extend .bg-hi;
    border-radius: 3px;
    padding: 0 2px;
  }
  &.active {
    @extend .bg-primary;
    @extend .hi;
  }
  transition: background-color .5s;
}
select {
  @extend .border-secondary;
  @extend .bg-hi;
  display: inline-block;
  width: 90%;
  box-sizing: border-box;
}
</style>
