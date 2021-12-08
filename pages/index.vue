<template>
  <div>
    <div>
      <p>主に初級から中級のクライマーの方に、ボルダリングに役立つ情報をお届けするブログです。</p>
      <p>さまざまなクライミングを楽しむために、役立つ情報をお伝えできればと思います。</p>
    </div>
    <h1 class="text-2xl text-gray-800 font-medium font-bold mt-10 mb-4">記事一覧</h1>
    <Article
      v-for="work in works"
      :key="work.sys.id"
      :work="work"
    />
  </div>
</template>

<script>

import Article from '@/components/Article.vue'

import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {

  components: {
    Article
  },

  asyncData() {
    return Promise.all([
      client.getEntries({
        'content_type': 'work', // workタイプの記事データを全取得
        order: '-sys.createdAt' // 作成日時順に並べる
      })
    ]).then(([works]) => {
      return {
        works: works.items // 取得したデータを配列worksに入れる
      }
    }).catch(console.error)
  }
}
</script>
