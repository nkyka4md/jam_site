<template>
  <div class="font-main flex flex-wrap justify-center mb-32">
    <main class="w-full mt-10">
      <nuxt />
    </main>
    <header class="w-64 h-64 ml-10">
      <div class="w-64 mt-24 ml-2 relative md:fixed">
        <div class="flex">
          <div class="bg-center bg-cover w-16 h-16 mr-2 rounded-full shadow photo"></div>
          <div>
            <h1 class="font-bold">Kaito Nakaya</h1>
            <p class="text-xs text-justify">アニメ紹介ブログです。よろしくお願いします。</p>
          </div>
        </div>
        <div class="flex justify-around mt-5 text-xs">
          <nuxt-link to="/">
          <button>
            <fa-layers full-width class="fa-2x block mx-auto mb-1">
              <fa :icon="faFacebookF" />
            </fa-layers>
            Facebook
          </button>
        </nuxt-link>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <button>
            <fa-layers full-width class="fa-2x block mx-auto mb-1">
              <fa :icon="faTwitter" />
            </fa-layers>
            Twitter
          </button>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <button>
            <fa-layers full-width class="fa-2x block mx-auto mb-1">
              <fa :icon="faInstagram" />
            </fa-layers>
            Instagram
          </button>
        </a>
        </div>
        <h2 class="font-bold mt-8">作品を探す</h2>
        <input type="text" placeholder="作品名を入力してください" class="bg-gray-100 p-2 text-xs rounded w-full mt-5 focus:outline-none" v-model="keyword" @keypress.enter="$router.push('/search/' + keyword)">
      </div>
    </header>
  </div>
</template>

<script>
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
export default {
  data() {
    return {
      keyword: ''
    }
  },

  computed: {
    faTwitter () {
      return faTwitter
    },
    faInstagram () {
      return faInstagram
    },
    faFacebookF () {
      return faFacebookF
    }
  }
}
</script>

<style>
main {
  max-width: 550px;
}
.photo {
  min-width: 4rem;
  min-height: 4rem;
  background-image: url('~/img/face-icon.svg');
}
button:focus {
  outline: none;
}
</style>
