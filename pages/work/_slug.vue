<template>
  <div>
    <div
      class="w-full h-64 my-6 bg-cover bg-center shadow-lg"
      :style=" 'background-image: url(' + work.fields.image.fields.file.url + ')' "
    ></div>
    <h1 class="text-center text-4xl">{{ work.fields.title }}</h1>
    <p class="text-center text-sm">{{ work.fields.subtitle }}</p>
    <div class="flex justify-center mb-5">
      <li
        v-for="tag in work.fields.tag"
        :key="tag.sys.id"
        class="list-none text-xs m-1 bg-gray-200 p-1 rounded"
      >
        {{ tag.fields.name }}
      </li>
    </div>
    <div class="my-10">
      <p v-if="work.fields.url" class="text-xs">
        <fa-layers full-width class="mr-1">
          <fa :icon="faLink" />
        </fa-layers>
        {{ work.fields.url }}
      </p>
      <p v-if="work.fields.gitHub" class="text-xs">
        <fa-layers full-width class="mr-1">
          <fa :icon="faGithub" />
        </fa-layers>
        {{ work.fields.gitHub }}
      </p>
    </div>
    <div
      v-html="work.fields.content"
    ></div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  asyncData({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        'fields.slug': params.slug // 取得対象をslugフィールドがURL内のslugパラメータと等しいものに限定
      })
    ]).then(([works]) => {
      return {
        work: works.items[0] // 取得した配列データの初めの１つを変数workに入れる
      }
    }).catch(console.error)
  },

  computed: {
    faLink () {
      return faLink
    },
    faGithub () {
      return faGithub
    }
  }

}
</script>
