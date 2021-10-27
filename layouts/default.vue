<template>
  <div>
    <MyHeader />
    <div class="font-main flex flex-wrap justify-center mb-32">
      <main class="w-full mt-28">
        <nuxt />
      </main>
      <header class="w-64 h-64 ml-10">
        <div class="w-64 mt-28 ml-2 relative md:fixed">
          <h2 class="font-bold">記事を探す</h2>
          <input type="text" placeholder="キーワードを入力してください（例：指輪）" class="bg-gray-100 p-2 text-xs rounded w-full mt-5 focus:outline-none" v-model="keyword" @keypress.enter="$router.push('/search/' + keyword)">
        </div>
      </header>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '/components/MyHeader.vue'
import MyFooter from '/components/MyFooter.vue'
export default {
  data() {
    return {
      keyword: ''
    }
  },

  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
main {
  max-width: 550px;
}
button:focus {
  outline: none;
}
p {
  margin-bottom: 1rem;
}
</style>
