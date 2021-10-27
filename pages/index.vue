<template>
  <div>
    <div>
      <p>プロポーズから結婚式までを男性目線でつづった日記です。</p>
      <p>花嫁によるブログは数多く存在していますが、新郎のブログは目にする事も少ないかと思います。</p>
      <p>私自身の実体験をつづった内容となっているので、何か少しでもご参考になれば幸いです。</p>
    </div>
    <h1 class="font-bold mt-10 mb-4">記事一覧</h1>
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
