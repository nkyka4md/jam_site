<template>
  <div class="flex justify-end">
    <button @click="countUp" class="bg-red-400 text-white text-xs p-1 rounded">いいね {{ count }}</button>
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
