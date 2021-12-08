<template>
  <div class="flex flex-wrap place-items-center z-10 md:fixed">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav class="bg-green-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex justify-between w-full items-center">
          <nuxt-link to="/" class="text-3xl font-bold font-heading">
            <!-- <img class="h-9" src="logo.png" alt="logo"> -->
            東京ボルダリングブログ
          </nuxt-link>
          <!-- Nav Links -->
          <ul class="hidden md:flex px-4 font-semibold font-heading space-x-12">
            <li>
              <nuxt-link to="/" class="hover:text-gray-200">ホーム</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/profile" class="hover:text-gray-200">コンタクト</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

