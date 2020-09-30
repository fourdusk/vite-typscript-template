<template>
  <div>
    <h1>{{ msg }}</h1>
    <a-button type="primary">点我</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'About',
  setup() {
    return {
      msg: 'hello world'
    }
  }
})
</script>

<style></style>
