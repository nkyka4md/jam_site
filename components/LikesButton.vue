<template>
  <div>

    <div class="inline-block relative">
      <input id="liked" @change="isActive = !isActive" class="opacity-0 absolute left-0" type="checkbox" v-model="isChecked" />
      <label
        for="liked"
        class="px-4 py-1 rounded bg-white border border-red-400 text-red-400 hover:bg-red-400 hover:text-white inline-block cursor-pointer focus:ring-1 focus:ring-red-200"
        :class="classColorSet">
        いいね
      </label>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true,
        isChecked: this.Checked()
      }
    },
    methods: {
      Checked: function () {
        var liked = localStorage.getItem(" isChecked");
        if (liked === null) {
          return true;
        } else {
          return liked == 'true';
        }
      }
    },
    computed: {
      classColorSet: function () {
        return {
          'text-red-500': this.isActive,
        }
      }
    },
    watch: {
      isChecked: function () {
        localStorage.setItem("isChecked", this.isChecked);
      }
    }
  }
</script>