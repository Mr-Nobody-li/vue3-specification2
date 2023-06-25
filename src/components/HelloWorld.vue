<!--
 * @Author: Mr-Nobody-li
 * @Date: 2022-07
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-06
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="read-the-docs">
    <div class="test text-red-400">{{ count }}</div>
  </div>
</template>

<style scoped lang="postcss">
.read-the-docs {
  color: #888;

  .test {
    font-size: 24px;
  }
}
</style>
