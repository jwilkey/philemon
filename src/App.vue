<template>
  <div id="app" class="v-fill flex-column" :style="styles">
    <titlebar />

    <router-view class="flex-one scrolly"/>
  </div>
</template>

<script>
import Titlebar from '@/components/Titlebar'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { Titlebar },
  computed: {
    ...mapGetters(['studyMeta']),
    styles () {
      return Object.assign(
        {},
        ...Object.keys(this.studyMeta.colors || {}).map(k => ({ [`--${k}`]: this.studyMeta.colors[k] }))
      )
    }
  }
}
</script>

<style lang="scss">
@import "./assets/app";
</style>
