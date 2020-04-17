<template>
  <div class="home v-fill flex-column">
    <navigation />

    <div v-if="study" class="flex-one p4-top scrolly">
      <text-outline class="textoutline p0-bottom z2" :highlight="highlight" />
      <hanging-tabs :items="observations" v-model="observation" />

      <transition name="fade-in">
        <persons v-if="O('persons')" :items="study.observe.persons" />
        <definitions v-if="O('definitions')" :items="study.observe.definitions" />
        <block-list v-if="isObservationList" :items="study.observe[observation.toLowerCase()]" />
      </transition>

      <hr class="border-primary">

      <div class="card no-left-border m0-bottom z1">
        <div class="content p1">
          <h2 class="primary uppercase">Main Point</h2>
          <p class="primary">{{study.interpret.mainPoint || '---'}}</p>
        </div>
      </div>
      <hanging-tabs :items="interpretations" v-model="interpretation" />

      <transition name="fade-in">
        <block-list v-if="I('titles')" :items="study.interpret.titles" />
        <block-list v-if="I('points')" :items="study.interpret.points" />
        <component :is="componentFor(study.interpret.keywords)" v-if="I('keywords')" :items="study.interpret.keywords" />
        <component :is="componentFor(study.interpret.emotions)" v-if="I('emotions')" :items="study.interpret.emotions" />
        <unwisdom v-if="I('unwisdom')" :items="unwisdoms" />
        <expound v-if="I('expound')" :items="expounds" />
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
        <conversation v-if="A('conversation')" :items="conversation" />
        <div v-if="A('ACTS')" class="content p2">
          <div v-for="(questions, category) in study.application.ACTS" :key="category">
            <h3 class="uppercase "><span class="bg-hi p1-h opacity90">{{category}}</span></h3>
            <div v-for="(q, i) in questions" :key="i" class="card m2-bottom">
              • {{q}}
            </div>
          </div>
        </div>
        <integrity v-if="A('integrity')" :items="integrity" />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Nav'
import BlockList from '@/components/BlockList'
import TextOutline from '@/components/TextOutline'
import HangingTabs from '@/components/HangingTabs'
import Persons from '@/components/Persons'
import Definitions from '@/components/Definitions'
import Unwisdom from '@/components/Unwisdom'
import Expound from '@/components/Expound'
import Conversation from '@/components/Conversation'
import Integrity from '@/components/Integrity'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      observation: 'persons',
      interpretation: 'unwisdom',
      application: 'conversation'
    }
  },
  components: { Navigation, BlockList, TextOutline, HangingTabs, Persons, Definitions, Unwisdom, Expound, Conversation, Integrity },
  computed: {
    ...mapGetters(['study', 'text', 'score']),
    observations () {
      return ['persons', 'people', 'nouns', 'adjectives', 'actions', 'definitions']
        .filter(a => this.shouldShow('observe', a))
    },
    interpretations () {
      return ['titles', 'points', 'keywords', 'emotions', 'unwisdom', 'expound']
        .filter(a => this.shouldShow('interpret', a))
    },
    applications () {
      return ['conversation', 'ACTS', 'integrity']
        .filter(a => this.shouldShow('application', a))
    },
    isObservationList () {
      return ['people', 'nouns', 'adjectives', 'actions'].includes(this.observation)
    },
    highlight () {
      const highlight = this.O('definitions') ? Object.keys(this.study.observe.definitions || {})
        : this.study.observe[this.observation]
      return Array.isArray(highlight) ? highlight : []
    },
    unwisdoms () { return this.getNotes('interpret.unwisdom') },
    expounds () { return this.getNotes('interpret.expound') },
    conversation () { return this.getNotes('application.conversation') },
    integrity () { return this.getNotes('application.integrity') }
  },
  watch: {
    study () {
      this.$nextTick(() => {
        this.observation = this.shouldShow('observe', this.observation) ? this.observation : 'persons'
        this.interpretation = this.shouldShow('interpret', this.interpretation) ? this.interpretation : 'keywords'
        this.application = this.shouldShow('application', this.application) ? this.application : 'conversation'
      })
    }
  },
  methods: {
    O (activity) { return this.observation === activity },
    I (activity) { return this.interpretation === activity },
    A (activity) { return this.application === activity },
    getNotes (key) {
      const parts = key.split('.')
      return this.study ? this.study[parts[0]][parts[1]] : null
    },
    shouldShow (category, activity) {
      return this.getNotes(`${category}.${activity}`) !== 'N/A' && ({ ...this.score[category][activity] }).complete
    },
    componentFor (items) {
      return Array.isArray(items) ? 'BlockList' : 'Definitions'
    }
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
