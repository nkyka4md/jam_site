<template>
  <div class="flex flex-col min-h-screen">
    <MyHeader />
    <div class="font-main flex flex-wrap flex-1 justify-center mb-32">
      <main class="w-full mt-28">
        <h2 class="text-2xl text-gray-800 font-medium font-bold">東京都内のボルダリングジム一覧</h2>
        <p class="my-3">東京都内にあるボルダリングジムを一覧にまとめています。「ジムの絞り込み」から条件を選択してフィルターできます。</p>
        <p class="text-xs text-gray-500 mb-8">※2021年12月8日の情報になります。</p>
        <GymsDataList :category="category" :location="location" />
      </main>
      <div class="w-64 h-64 ml-10">
        <div class="w-64 mt-28 ml-2 relative md:fixed">
          <div class="shadow-md rounded-md overflow-hidden border border-gray-200">
            <div class="py-3 px-5 border-b border-gray-200 bg-gray-100">ジムの絞り込み</div>
            <div class="p-5">
              <LocationsFilter @update-locations="updateLocations" />
              <CategoriesFilter @update-categories="updateCategories" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue'
  import GymsDataList from '@/components/GymsDataList.vue'
  import LocationsFilter from '@/components/GymLocationsFilter.vue'
  import CategoriesFilter from '@/components/GymCategoriesFilter.vue'
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
        location: '',
        category: ''
      }
    },
    components: {
      MyHeader,
      GymsDataList,
      LocationsFilter,
      CategoriesFilter,
      MyFooter
    },
    methods: {
      updateCategories(category) {
        this.category = category
      },
      updateLocations(location) {
        this.location = location
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