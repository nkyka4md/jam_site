<template>
  <div>
  <div id="likeButton">
    <like-component></like-component>
    <like-component></like-component>
    <like-component></like-component>
  </div>
  </div>
</template>

<script>
  (function() {
    'use strict';

    var likeComponent = Vue.extend({
      data: function() {
        return {
          count: 0
        }
      },
      template: '<button @click="countUp" class="like-button">いいね {{ count }}</button>',
      methods: {
        countUp: function() {
          this.count++;
        }
      }
    });

    var app = new Vue({
      el: '#likeButton',
      components: {
        'like-component': likeComponent
      }
    });

  })();
</script>

<style>
.like-button{
  position: relative;
}
.like-button::before{
  position: absolute;
  left: -48px;
  background: url("./img/heart_animation.png");
  background-position: left;
  background-size: 2900%;
  background-repeat: no-repeat;
  width: 105px;
  height: 105px;
}
</style>


