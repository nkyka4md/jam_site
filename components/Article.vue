<template>
  <div>
    <div class="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-8">
      <nuxt-link :to=" '/work/' + work.fields.slug ">
        <img class="rounded-t-lg" :src=" work.fields.image.fields.file.url " :alt=" work.fields.title + 'のサムネイル画像' ">
      </nuxt-link>
      <div class="p-4">
        <nuxt-link class="text-sm text-green-600" :to=" '/category/' + work.fields.category.sys.id ">
          {{ work.fields.category.fields.name }}
        </nuxt-link>
        <nuxt-link :to=" '/work/' + work.fields.slug ">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mt-2 mb-6 dark:text-white">{{ work.fields.title }}</h5>
          <p>{{work.fields.description}}</p>
        </nuxt-link>
        <nuxt-link
          :to="'/work/' + work.fields.slug"
          class="
            block
            text-center
            text-green-600
            bg-transparent
            border border-solid border-green-600
            hover:bg-green-600 hover:text-white
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
          記事を読む
        </nuxt-link>
        <ul class="flex mt-4">
          <li
            v-for="tag in work.fields.tag"
            :key="tag.sys.id"
            class="list-none text-xs bg-green-100 p-1 mr-2 rounded cursor-pointer"
            @click="$router.push('/tag/'+tag.sys.id)">
            {{ tag.fields.name }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    props: ['work']
  }
</script>