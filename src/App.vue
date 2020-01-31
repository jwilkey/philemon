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
      const colors = { ...this.studyMeta }.colors || {}
      const styles = Object.assign(
        {},
        ...Object.keys(colors).map(k => ({ [`--${k}`]: this.studyMeta.colors[k] }))
      )
      return styles
    }
  }
}
</script>

<style lang="scss">
@import "./assets/app";
</style>
