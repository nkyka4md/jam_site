<template>
  <div>
    <ul>
      <h2 class="font-bold mb-2">クライミングスタイル</h2>
      <li v-for="categoryList in categories" :key='categoryList.id'>
        <label :for="categoryList.id" class="inline-flex items-center">
          <input
            type="radio"
            :id="categoryList.id"
            class="form-radio text-green-600 focus:ring-2 focus:ring-green-300 focus:border-green-300"
            @change="updateCategory"
            name="categoryList.id"
            v-model="category"
            :value="categoryList.val"
          >
          <span class="ml-2">{{ categoryList.name }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categories: [
          {
            id: "climbingStyle-all",
            name: "すべて",
            val: ""
          },
          {
            id: "climbingStyle-1",
            name: "ボルダリング",
            val: "bouldering"
          },
          {
            id: "climbingStyle-2",
            name: "リードクライミング",
            val: "lead"
          },
          {
            id: "climbingStyle-3",
            name: "スピードクライミング",
            val: "speed"
          }
        ],
        category: ''
      };
    },
    methods: {
      updateCategory() {
        this.$emit('update-categories', this.category);
      },
    }
  };
</script>