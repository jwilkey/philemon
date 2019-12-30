<template>
  <div class="home v-fill flex-column">
    <navigation />

    <div v-if="study" class="flex-one p4-top scrolly">
      <text-outline class="textoutline p0-bottom" />
      <hanging-tabs :items="observations" v-model="observation" />

      <block-list :items="study.observe[observation.toLowerCase()]"></block-list>

      <hr class="border-primary">

      <div class="card no-left-border m0-bottom z1">
        <div class="content p1">
          <h2 class="primary uppercase">Main Point</h2>
          <p class="primary">{{study.interpret.mainPoint || '---'}}</p>
        </div>
      </div>
      <hanging-tabs :items="interpretations" v-model="interpretation" />

      <transition name="fade-in">
        <block-list v-if="I('Titles')" :items="study.interpret.titles" />
        <block-list v-if="I('Points')" :items="study.interpret.points" />
        <block-list v-if="I('Keywords')" :items="study.interpret.keywords" />
        <unwisdom v-if="I('Unwisdom')" :items="unwisdoms" />
        <expound v-if="I('Expound')" :items="expounds" />
      </transition>

      <hr class="border-primary">

      <div class="card no-left-border m0-bottom z1">
        <div class="content p1">
          <h2 class="primary uppercase">Application</h2>
          <p>What does this passage have to do with you or those who are in your care? Be specific, bear fruit.</p>
        </div>
      </div>
      <hanging-tabs :items="applications" v-model="application" />

      <transition name="fade-in">
        <conversation v-if="A('Conversation')" :items="convo" />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Nav'
import BlockList from '@/components/BlockList'
import TextOutline from '@/components/TextOutline'
import HangingTabs from '@/components/HangingTabs'
import Unwisdom from '@/components/Unwisdom'
import Expound from '@/components/Expound'
import Conversation from '@/components/Conversation'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      observation: 'People',
      interpretation: 'Unwisdom',
      application: 'Conversation'
    }
  },
  components: { Navigation, BlockList, TextOutline, HangingTabs, Unwisdom, Expound, Conversation },
  computed: {
    ...mapGetters(['study', 'text']),
    observations () {
      return ['People', 'Nouns', 'Adjectives', 'Actions']
    },
    interpretations () {
      return ['Titles', 'Points', 'Keywords', 'Unwisdom', 'Expound']
    },
    applications () {
      return ['Conversation']
    },
    unwisdoms () {
      return this.study ? this.study.interpret.unwisdom : null
    },
    expounds () {
      return this.study ? this.study.interpret.expound : null
    },
    convo () {
      return this.study ? this.study.application.convo : null
    }
  },
  methods: {
    I (activity) { return this.interpretation === activity },
    A (activity) { return this.application === activity }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.home {
  position: relative;
}
.no-left-border {
  border-left: none;
}
</style>
