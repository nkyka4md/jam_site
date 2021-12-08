<template>
  <div>

    <div v-if="isFilterItems" class="flex flex-col items-center justify-center bg-white">
      <div class="self-stretch rounded-lg border border-gray-100 shadow-lg p-4 mb-8" v-for="item in filterItems" :key="item.id">
        <h3 class="font-semibold text-lg tracking-wide mb-4 break-all">{{item.name}}</h3>
        <table class="w-full">
          <tr class="border border-gray-200">
            <th
              class="bg-green-50
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  border
                  border-gray-200
                  uppercase
                  tracking-wider
                  whitespace-nowrap
              ">
              Google Maps
            </th>
            <td class="px-6 py-4 break-all text-blue-500 visited:text-purple-600">
              <a :href="item.googleMapsLink" target="_blank" rel="noopener">{{item.address}}</a>
              <fa class="text-xs ml-2" :icon="faExternalLinkAlt" />
            </td>
          </tr>
          <tr class="border border-gray-200">
            <th
              class="bg-green-50
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  border
                  border-gray-200
                  uppercase
                  tracking-wider
                  whitespace-nowrap
              ">
              Webサイト
            </th>
            <td class="px-6 py-4 break-all text-blue-500 visited:text-purple-600">
              <a :href="item.webSiteLink" target="_blank" rel="noopener">{{item.webSiteLink}}</a>
              <fa class="text-xs ml-2" :icon="faExternalLinkAlt" />
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div
      v-else
      class="
        block
        text-sm text-left text-yellow-600
        bg-yellow-500 bg-opacity-10
        border border-yellow-400
        h-12
        flex
        items-center
        p-8
        rounded-md
      "
      role="alert">
      お探しの条件で該当するジムがありません。再度、絞り込み条件を変更してください。
    </div>

  </div>
</template>

<script>
  import {
    faExternalLinkAlt
  } from '@fortawesome/free-solid-svg-icons'
  import dataList from '../assets/bouldering-gym.json'
  export default {
    data() {
      return {
        items: dataList
      };
    },
    props: {
      location: String,
      category: String
    },
    computed: {
      faExternalLinkAlt() {
        return faExternalLinkAlt
      },
      filterItems: function () {
        if (this.location && this.category) {
          return this.items.filter(
            (item) => !item.locationType.indexOf(this.location)
          ).filter(
            (item) => !item.category.indexOf(this.category)
          );
        } else if (this.location) {
          return this.items.filter(
            (item) => !item.locationType.indexOf(this.location)
          );
        } else if (this.category) {
          return this.items.filter(
            (item) => !item.category.indexOf(this.category)
          );
        } else {
          return this.items
        }
      },
      isFilterItems: function () {
        return this.filterItems.length > 0
      }
    },
  };
</script>