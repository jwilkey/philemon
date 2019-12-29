<template>
  <div class="home v-fill flex-column">
    <navigation />

    <div v-if="study" class="flex-one p4-top scrolly">
      <text-outline />

      <div class="content p2">
        <block-list :items="study.observe.people"></block-list>
      </div>

      <div v-if="study.interpret.mainPoint" class="content p2">
        <h2 class="title-label">Main Point</h2>
        <div class="card">
          <p class="primary">{{study.interpret.mainPoint}}</p>
        </div>
      </div>

      <unwisdom :items="unwisdoms" />
      <expound :items="expounds" />
      <conversation :items="convo" />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Nav'
import BlockList from '@/components/BlockList'
import TextOutline from '@/components/TextOutline'
import Unwisdom from '@/components/Unwisdom'
import Expound from '@/components/Expound'
import Conversation from '@/components/Conversation'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: { Navigation, BlockList, TextOutline, Unwisdom, Expound, Conversation },
  computed: {
    ...mapGetters(['study', 'text']),
    unwisdoms () {
      return this.study ? this.study.interpret.unwisdom : null
    },
    expounds () {
      return this.study ? this.study.interpret.expound : null
    },
    convo () {
      return this.study ? this.study.application.convo : null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
