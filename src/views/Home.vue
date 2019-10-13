<template>
  <div class="home">
    <div v-for="(unwisdom, i) in unwisdoms" :key="i" class="p2">
      {{unwisdom.saying}}
    </div>
  </div>
</template>

<script>
import study1 from '@/studies/STUDY_1'

export default {
  name: 'home',
  components: { },
  computed: {
    study1: () => study1,
    unwisdoms () {
      return study1.interpret.unwisdom
    }
  }
}
</script>
