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
    const studyCount = process.env.VUE_APP_STUDY_COUNT
    for (let index = 0; index < studyCount; index++) {
      const study = require(`../studies/STUDY_${index + 1}`).default
      study.interpret.unwisdom.forEach(u => this.unwisdomChapters.push(u.chapter))
      this.unwisdomChapters = Array.from(new Set(this.unwisdomChapters))
    }
  }
}
</script>
