<template>
  <div>
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
  asyncData ({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work', // 取得対象をworkタイプに限定
        query: params.keyword, // keywordパラメータをいずれかのフィールドに含む記事データのみを抽出
        order: '-sys.createdAt'
      }),
    ]).then(([works]) => {
      return {
        works: works.items // 取得されたデータを配列worksに入れる
      }
    }).catch(console.error)
  }
}
</script>
