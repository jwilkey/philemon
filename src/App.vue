<template>
  <div id="app" class="v-fill flex-column">
    <titlebar />

    <router-view class="flex-one scrolly"/>
  </div>
</template>

<script>
import Titlebar from '@/components/Titlebar'

export default {
  name: 'App',
  components: { Titlebar }
}
</script>

<style lang="scss">
@import "./assets/app";
</style>
