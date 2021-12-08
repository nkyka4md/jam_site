<template>
  <div class="flex flex-col min-h-screen">
    <MyHeader />
    <div class="font-main flex flex-wrap flex-1 justify-center mb-32">
      <main class="w-full mt-28">
        <nuxt />
      </main>
      <div class="w-64 h-64 ml-10">
        <div class="w-64 mt-28 ml-2 relative md:fixed">
          <div class="mb-8">
            <h2 class="font-bold mb-2">記事を探す</h2>
            <input
              type="text"
              placeholder="キーワードを入力してください"
              class="form-input mt-1 block w-full focus:ring-2 focus:ring-green-300"
              v-model="keyword"
              @keypress.enter="$router.push('/search/' + keyword)">
          </div>
          <nuxt-link
            to="/gyms"
            class="
              block
              text-center
              text-white
              bg-green-600
              border border-solid border-green-600
              hover:bg-transparent hover:text-green-600
              active:bg-purple-600
              font-bold
              uppercase
              px-8
              py-3
              rounded
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
              w-full
            ">
            ジムを探す
          </nuxt-link>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue'
  import MyFooter from '@/components/MyFooter.vue'
  export default {
    head() {
      return {
        link: [{
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css'
        }]
      }
    },
    data() {
      return {
        keyword: ''
      }
    },
    components: {
      MyHeader,
      MyFooter
    },
    methods: {
      updateCategories(category) {
        this.category = category
      }
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