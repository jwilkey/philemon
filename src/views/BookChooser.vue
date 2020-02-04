<template>
  <div>
    <ul class="content p3">
      <li v-for="s in studies" :key="s.source" class="card flex-row uppercase m2-bottom">
        <div class="flex-one" @click="studySelected(s)">{{s.title || s.source}}</div>
        <a @click="deleteStudySource(s)">X</a>
      </li>
    </ul>
    <div class="content p3 flex-row">
      <button class="button shadow-deep bg-primary hi" @click="addingStudy = true">Add Study</button>
      <div class="flex-one"></div>
      <button class="button shadow-deep bg-secondary hi" @click="$router.back()">Cancel</button>
    </div>

    <div v-if="addingStudy" class="content p3">
      <form @submit.prevent="saveStudy">
        <div class="m2-bottom">
          <input class="input" type="url" v-model="studySource" placeholder="url of study files">
        </div>
        <button class="button shadow-deep bg-primary hi">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BookChooser',
  data () {
    return {
      addingStudy: false,
      studySource: null
    }
  },
  computed: {
    ...mapGetters(['studies'])
  },
  methods: {
    ...mapActions(['setBook', 'setStudies', 'setStudyMeta', 'setStudy', 'setStudyIndex']),
    studySelected (study) {
      this.setStudyIndex(0)
      this.setStudy(null)
      Promise.all([
        fetch(`${study.source}/meta.json`)
          .then(r => r.json())
          .then(meta => {
            this.setStudyMeta(Object.assign(study, meta))
          }),
        fetch(`${study.source}/STUDY_1.json`)
          .then(r => r.json())
          .then(study => this.setStudy(study))
      ]).then(_ => {
        this.$router.push('/')
      })
    },
    saveStudy () {
      fetch(`${this.studySource}/meta.json`)
        .then(r => r.json())
        .then(meta => {
          meta.source = this.studySource
          const studies = this.studies.concat(meta)
          this.setStudies(studies)
        })
    },
    deleteStudySource (source) {
      this.studies.splice(this.studies.indexOf(s => s.source === source), 1)
    }
  }
}
</script>
