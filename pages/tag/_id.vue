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
import Article from '@/components/Article'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  components: {
    Article
  },
  asyncData ({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        'fields.tag.sys.id': params.id,
        order: '-sys.createdAt'
      }),
    ]).then(([works]) => {
      return {
        works: works.items
      }
    }).catch(console.error)
  }
}
</script>
