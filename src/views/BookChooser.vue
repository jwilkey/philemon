<template>
  <div>
    <ul class="content p3">
      <li v-for="book in books" :key="book" class="card uppercase m2-bottom" @click="bookSelected(book)">{{book}}</li>
    </ul>
    <div class="content p3">
      <button class="button shadow-deep bg-secondary hi" @click="$router.back()">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BookChooser',
  computed: {
    books () {
      return ['philemon', '1john']
    }
  },
  methods: {
    ...mapActions(['setBook']),
    bookSelected (book) {
      this.setBook(book)
      this.$router.push('/')
    }
  }
}
</script>
