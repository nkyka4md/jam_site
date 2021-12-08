<template>
  <div class="mb-8">
    <label class="block text-left">
      <h2 class="font-bold mb-2">地域</h2>
      <select
        class="form-select block w-full mt-1 focus:ring-2 focus:ring-green-300"
        v-model="locationType"
        @change="updateLocation"
      >
        <option v-for="location in locations" :value="location.value" :key="location.name">
          {{ location.name }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        locations: [
          {
            name: "すべて",
            value: ""
          },
          {
            name: "渋谷区",
            value: "shibuya"
          },
          {
            name: "新宿区",
            value: "shinjuku"
          },
          {
            name: "世田谷区",
            value: "setagaya"
          },
          {
            name: "豊島区",
            value: "toshima"
          },
          {
            name: "中央区",
            value: "chuo"
          },
          {
            name: "台東区",
            value: "daito"
          },
          {
            name: "文京区",
            value: "bunkyo"
          },
          {
            name: "港区",
            value: "minato"
          },
          {
            name: "大田区",
            value: "ota"
          },
          {
            name: "板橋区",
            value: "itabashi"
          },
          {
            name: "北区",
            value: "kita"
          },
          {
            name: "練馬区",
            value: "nerima"
          },
          {
            name: "江東区",
            value: "kouto"
          },
          {
            name: "足立区",
            value: "adachi"
          },
          {
            name: "墨田区",
            value: "sumida"
          },
          {
            name: "荒川区",
            value: "arakawa"
          },
          {
            name: "中野区",
            value: "nakano"
          },
          {
            name: "杉並区",
            value: "suginami"
          },
          {
            name: "三鷹市",
            value: "mitaka"
          },
          {
            name: "武蔵野市",
            value: "musashino"
          },
          {
            name: "立川市",
            value: "tachikawa"
          },
          {
            name: "府中市",
            value: "futyu"
          },
          {
            name: "国分寺市",
            value: "kokubunji"
          },
          {
            name: "国立市",
            value: "kunitachi"
          },
          {
            name: "多摩市",
            value: "tama"
          },
          {
            name: "武蔵村山市",
            value: "musashimurayama"
          },
          {
            name: "昭島市",
            value: "akishima"
          },
          {
            name: "調布市",
            value: "chofu"
          },
          {
            name: "東村山市",
            value: "higashimurayama"
          },
          {
            name: "八王子市",
            value: "hachioji"
          },
          {
            name: "町田市",
            value: "machida"
          },
          {
            name: "西東京市",
            value: "nishitokyo"
          },
          {
            name: "葛飾区",
            value: "katsushika"
          }
        ],
        locationType: ''
      };
    },
    methods: {
      updateLocation() {
        this.$emit('update-locations', this.locationType);
      }
    }
  };
</script>