<template lang="pug">
  section.p-8.flex.text-center.items-center.flex-col
    h1.heading.pb-4 Nuxt with TailwindCSS
    h2.heading.heading--secondary.pb-10 A setup using Nuxt2 with TailwindCSS and Tailwind Forms plugin.
    //- Text variable is inside the plugins/index.js file
    p {{ text }}
</template>

<script>
export default {
  data() {
    return {
      axiosOptions: {
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes?q=SpyxFamily&maxResults=5'
      }
    }
  },
  mounted() {
    this.$axios(this.axiosOptions)
      .then(response => {
        console.log(response.data)
      })
  }
}
</script>
