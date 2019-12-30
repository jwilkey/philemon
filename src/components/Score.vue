<template>
  <div class="score">
    <div class="score-bar score-observe">
      <div
        v-for="(activity, i) in observeTotal"
        :key="i"
        class="score-activity"
        :class="{complete: i < observeComplete}"
      />
    </div>
    <div v-if="observeComplete > 2" class="score-bar score-interpret">
      <div
        v-for="(activity, i) in interpretTotal"
        :key="i"
        class="score-activity"
        :class="{complete: i < interpretComplete}"
      />
    </div>
    <div v-if="interpretComplete > 1" class="score-bar score-application">
      <div
        v-for="(activity, i) in applicationTotal"
        :key="i"
        class="score-activity"
        :class="{complete: i < applicationComplete}"
      />
    </div>
  </div>
</template>

<script>
import studyScore from '../js/study-score'
import { mapGetters } from 'vuex'

export default {
  name: 'Score',
  computed: {
    ...mapGetters(['study']),
    score () {
      return studyScore(this.study)
    },
    observeMeta () {
      return this.score.observe.meta()
    },
    interpretMeta () {
      return this.score.interpret.meta()
    },
    applicationMeta () {
      return this.score.application.meta()
    },
    observeTotal () {
      return parseInt(this.observeMeta.total)
    },
    interpretTotal () {
      return parseInt(this.interpretMeta.total)
    },
    applicationComplete () {
      return parseInt(this.applicationMeta.complete)
    },
    observeComplete () {
      return parseInt(this.observeMeta.complete)
    },
    interpretComplete () {
      return parseInt(this.interpretMeta.complete)
    },
    applicationTotal () {
      return parseInt(this.applicationMeta.total)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.score {
  @extend .flex-row;
  @extend .bg-primary;
  .score-bar {
    @extend .flex-one;
    @extend .flex-row;
    .score-activity {
      @extend .flex-one;
      margin: 1px;
      border-radius: 2px;
      min-width: 4px;
      height: 7px;
    }
    &.score-observe {
      .score-activity {
        @extend .border-primary3;
        &.complete { @extend .bg-primary3; }
      }
    }
    &.score-interpret {
      .score-activity {
        @extend .border-secondary;
        &.complete { @extend .bg-secondary; }
      }
    }
    &.score-application {
      .score-activity {
        @extend .border-tertiary;
        &.complete { @extend .bg-tertiary; }
      }
    }
  }
}
</style>
