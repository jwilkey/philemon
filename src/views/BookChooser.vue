<template>
  <div>
    <div v-if="!hasStudies" class="content p3 empty-state">You have not added any study sources</div>
    <ul v-if="hasStudies" class="content p3">
      <li v-for="s in studies" :key="s.source" class="card flex-row m2-bottom align-center">
        <div class="flex-one" @click="studySelected(s)">
          <p class="uppercase">{{s.title || s.source}} <span v-if="s.author" class="secondary font-2">{{s.author}}</span></p>
          <p class="secondary3 font-3">{{s.source}}</p>
        </div>
        <a @click="deleteStudy(s)">🗑</a>
      </li>
    </ul>
    <div class="content p3 flex-row">
      <button class="button shadow-deep bg-primary hi" @click="addingStudy = true">Add Study</button>
      <div class="flex-one"></div>
      <button v-if="hasStudies" class="button shadow-deep bg-secondary hi" @click="$router.back()">Cancel</button>
    </div>

    <div v-if="addingStudy" class="content p3">
      <form @submit.prevent="saveStudy">
        <div class="m2-bottom">
          <input class="input" type="url" v-model="studySource" placeholder="url of study files">
        </div>
        <button class="button shadow-deep bg-primary hi">Save</button>
      </form>
    </div>

    <div class="content p3">
      <hr />
      <h3>Suggested studies</h3>
      <ul class="content p3">
        <li v-for="s in suggestedStudies" :key="s.source" class="card flex-row uppercase m2-bottom">
          <div class="flex-one" @click="suggestedStudySelected(s)">{{s.title || s.source}}</div>
        </li>
      </ul>
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
      studySource: null,
      suggestedStudies: [
        { title: 'Philemon: Wilkey', source: 'https://jwilkey.github.io/bible-study/studies/philemon' },
        { title: '1 John: Wilkey', source: 'https://jwilkey.github.io/bible-study/studies/1john' },
        { title: '1 Thessalonians: Wilkey', source: 'https://jwilkey.github.io/bible-study/studies/1thessalonians' }
      ]
    }
  },
  computed: {
    ...mapGetters(['studies']),
    hasStudies () { return !!this.studies.length }
  },
  methods: {
    ...mapActions(['setBook', 'setStudies', 'setStudyMeta', 'setStudy', 'setStudyIndex', 'deleteStudy']),
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
    async suggestedStudySelected (study) {
      this.studySource = study.source
      const savedStudy = await this.saveStudy()
      this.studySelected(savedStudy)
    },
    async saveStudy () {
      const existingStudy = this.studies.find(s => s.source === this.studySource)
      if (existingStudy) {
        return existingStudy
      }
      return fetch(`${this.studySource}/meta.json`)
        .then(r => r.json())
        .then(meta => {
          meta.source = this.studySource
          const studies = this.studies.concat(meta)
          this.setStudies(studies)
          return meta
        })
    }
  }
}
</script>
