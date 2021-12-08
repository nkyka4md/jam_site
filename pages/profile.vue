<template>
  <div>
    <main class="w-full mb-32">
      <h1 class="font-bold mb-4">プロフィール</h1>
      <div class="mb-20">
        <div class="bg-center bg-cover w-16 h-16 mx-auto rounded-full shadow photo mb-4"></div>
        <div>
          <h2 class="font-bold text-3xl mb-4">Kaito Nakaya</h2>
          <p class="mb-8">東京ボルダリングブログ管理人です。私の書いた記事が参考になれば幸いです。</p>
          <h3 class="font-bold mb-4">好きなコト・モノ</h3>
          <p>ボルダリング、バレーボール、お酒、ステーキ、漫画、アニメ</p>
        </div>
      </div>

      <client-only>
        <div class="w-full">
          <h3 class="font-bold mb-4">お問い合わせ</h3>
          <p class="mb-8">何かあれば、お気軽にメッセージしてください。</p>
          <form name="contact" method="POST" class="mb-4">
            <input type="hidden" name="form-name" value="contact">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                お名前
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="苗字名前">
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                メールアドレス
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.com">
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                <span class="text-gray-700">お問い合わせ内容</span>
                <textarea class="form-textarea mt-1 block shadow appearance-none border rounded py-2 px-3 w-full" rows="4" placeholder="お問い合わせ内容を入力してください。"></textarea>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="
                  bg-green-600
                  border border-solid border-green-600
                  hover:bg-transparent hover:text-green-600
                  text-white
                  font-bold
                  outline-none
                  focus:outline-none
                  py-2
                  px-4
                  rounded
                  ease-linear
                  transition-all
                  duration-150
                "
                type="submit">
                送信
              </button>
            </div>
          </form>
        </div>
      </client-only>

    </main>
  </div>
</template>

<style>
.photo {
  min-width: 10rem;
  min-height: 10rem;
  background-image: url('~/assets/img/face-icon.svg');
}
</style>
