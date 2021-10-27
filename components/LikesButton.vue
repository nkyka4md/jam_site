<template>
  <div class="flex justify-end">
    <button @click="countUp" class="bg-red-400 text-white text-sm p-1 rounded w-20 h-8">いいね {{ count }}</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    countUp: function() {
      this.count++;
    }
  }
}
</script>
