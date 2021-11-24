import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      text: '(primary and secondary color are custom and are set in tailwind.config)',
      consoleText: 'EVERYTHING in here is accessible on every page'
    }
  },
  mounted() {
    console.log(this.consoleText)
  }
})