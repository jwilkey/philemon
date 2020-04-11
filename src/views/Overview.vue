<template>
  <div>
    <div>
      Unwisdom chapters:
      <ul>
        <li v-for="chapter in unwisdomChapters" :key="chapter">{{chapter}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data () {
    return {
      unwisdomChapters: []
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>
